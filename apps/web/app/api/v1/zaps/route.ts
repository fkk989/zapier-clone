import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { zapSchema } from "@/utils/types";
import { prisma } from "@repo/db";
import { authOptions } from "@repo/next-auth-config";

export const POST = async (req: NextRequest) => {
  try {
    // checking if user is logedin
    const session = await getServerSession(authOptions);
    if (!session?.user)
      return NextResponse.json(
        {
          success: false,
          message: "Not Authorized",
        },
        { status: 403 }
      );
    //
    console.log(session.user);
    console.log("type of userId: ", typeof session.user.userId);
    const reqBody = await req.json();

    const parsedBody = zapSchema.safeParse(reqBody);

    // checking if all the types are correct
    if (!parsedBody.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsedBody.error.formErrors.fieldErrors,
        },
        { status: 411 }
      );
    }
    const { availableTriggerId, actions, triggerMetadata } = parsedBody.data;

    //   creating zap
    await prisma.zap.create({
      data: {
        user: { connect: { id: session.user.userId } },
        trigger: {
          create: {
            triggerType: { connect: { id: availableTriggerId } },
          },
        },
        actions: {
          createMany: {
            data: actions.map((d, index) => ({
              actionTypeId: d.availableActionId,
              executionOrder: index,
            })),
          },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "zap created",
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        success: false,
        message: e.message,
      },
      { status: 400 }
    );
  }
};

export const GET = async (req: NextRequest) => {
  try {
    // checking if user is logedin
    const session = await getServerSession(authOptions);
    if (!session?.user)
      return NextResponse.json(
        {
          success: false,
          message: "Not Authorized",
        },
        { status: 403 }
      );

    console.log(session?.user);
    console.log("type of userId: ", typeof session?.user.userId);

    const allZaps = await prisma.zap.findMany({
      where: { userId: session.user.userId },
      include: {
        trigger: {
          include: {
            triggerType: true,
          },
        },
        actions: {
          include: {
            actionType: true,
          },
        },
      },
    });
    return NextResponse.json({
      success: true,
      zaps: allZaps,
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        success: false,
        message: e.message,
      },
      { status: 400 }
    );
  }
};

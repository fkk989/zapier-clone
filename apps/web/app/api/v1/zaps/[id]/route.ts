import { authOptions } from "@repo/next-auth-config";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@repo/db";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  try {
    const zapId = req.nextUrl.searchParams.get("id") as string;
    console.log("zapId: ", zapId);
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

    console.log(session?.user);
    console.log("type of userId: ", typeof session?.user.userId);

    const zap = await prisma.zap.findUnique({
      where: { id: zapId },
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
    //
    return NextResponse.json({
      success: true,
      zap,
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

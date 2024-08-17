import { Request, Response } from "express";
import { prisma } from "@repo/db";

export const hooksPostHandler = async (req: Request, res: Response) => {
  try {
    const { userId, zapId } = req.params;
    const body = req.body;

    // storing trigger in db and outbox table in a transactional manner
    await prisma.$transaction(async (tx) => {
      const createdRun = await tx.zapRun.create({
        data: {
          metadata: body,
          zap: { connect: { id: zapId } },
        },
      });

      await tx.zapRunOutobx.create({
        data: {
          zapRun: { connect: { id: createdRun.id } },
        },
      });
    });

    res.json({
      success: true,
      status: "OK",
      message: "added zap",
    });
  } catch (error: any) {
    res.json({
      success: false,
      status: "error",
      message: error.message,
    });
  }
};

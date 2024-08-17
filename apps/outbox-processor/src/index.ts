import { prisma } from "@repo/db";
import { Kafka } from "kafkajs";

const TOPIC_NAME = "zaps-events";
const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wait over");
    }, time);
  });
}

async function main() {
  const producer = kafka.producer();
  await producer.connect();

  while (1) {
    const pendingEvent = await prisma.zapRunOutobx.findMany({
      take: 10,
    });
    producer.send({
      topic: TOPIC_NAME,
      messages: pendingEvent.map((r) => ({ value: r.zapRunId })),
    });

    // deleting fetched events only if there is any pending event
    if (!pendingEvent) await wait(1000);
    await prisma.zapRunOutobx.deleteMany({
      where: {
        id: {
          in: pendingEvent.map((r) => r.id),
        },
      },
    });
  }
}
main();

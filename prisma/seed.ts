declare var process: any;
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const todolist = await prisma.todolist.create({
    data: {
      title: "Todo List 1",
      completed: false,
    },
  });
}


main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

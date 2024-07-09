import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

async function createNote(title: string, userId: number = 3) {
  return prisma.note.create({
    data: {
      title,
      user: {
        connectOrCreate: {
          where: {
            id: userId,
          },
          create: {
            username: "user",
            password: "some",
          },
        },
      },
    },
  });
}

async function main() {
  const u = await createNote("some notes of id 3");
  //   const newUser = await prisma.user.create({
  //     data: {
  //       username: "Kode the Kamp",
  //       password: "somegibberish",
  //     },
  //     select: {
  //       id: true,
  //     },
  //   });

  //   const note = await prisma.note.create({
  //     data: {
  //       title: "some kodecmap note",
  //       user: { connect: { id: 1 } },
  //     },
  //   });

  try {
    // const user = await prisma.user.findFirstOrThrow({
    //   where: {
    //     id: 3,
    //   },
    // });
    // const updatedUser = await prisma.user.update({
    //   where: {
    //     id: 1,
    //   },
    //   data: {
    //     username: "Kodecamp",
    //     password: "normalgb",
    //   },
    // });

    // const users = await prisma.user.findMany({
    //   include: {
    //     notes: true,
    //   },
    // });

    const deletedUser = await prisma.user.delete({
      where: {
        id: 3,
      },
    });

    // console.log(deletedUser);
  } catch (error) {
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Prisma disconnected.");
  })
  .catch(async (error) => {
    console.error(error);

    await prisma.$disconnect();
    process.exit(1);
  });

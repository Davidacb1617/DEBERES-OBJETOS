const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const users = require('./usuarions.json');

async function seed() {
  for (const user of users) {
    await prisma.user.create({
      data: {
        name: user.name,
        age: user.age,
      },
    });
  }
}

seed()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

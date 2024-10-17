import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedPermissions = async () => {
  console.log('Seeding permissions...');
  await prisma.permission.createMany({
    data: [
      { name: 'create-post' },
      { name: 'edit-post' },
      { name: 'delete-post' },
      { name: 'view-post' },
    ],
    skipDuplicates: true,
  });

  console.log('Permissions seeded.');
};

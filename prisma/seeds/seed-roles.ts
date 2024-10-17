import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedRoles = async () => {
  console.log('Seeding roles...');

  await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      name: 'admin',
      permissions: {
        create: [
          { permission: { connect: { name: 'create-post' } } },
          { permission: { connect: { name: 'edit-post' } } },
          { permission: { connect: { name: 'delete-post' } } },
        ],
      },
    },
  });

  await prisma.role.upsert({
    where: { name: 'editor' },
    update: {},
    create: {
      name: 'editor',
      permissions: {
        create: [
          { permission: { connect: { name: 'create-post' } } },
          { permission: { connect: { name: 'edit-post' } } },
        ],
      },
    },
  });

  console.log('Roles seeded.');
};

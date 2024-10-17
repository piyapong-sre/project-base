import { PrismaClient } from '@prisma/client';
import { PasswordHelper } from 'src/common/helpers/password.helper';

const prisma = new PrismaClient();

export const seedUsers = async () => {
  const hashedPassword = await PasswordHelper.hashPassword('Password123!');
  console.log('Seeding users...');

  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      id: '103a2be7-a3eb-45c5-95a9-f5490957fed1',
      email: 'admin@example.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      roles: {
        create: {
          role: { connect: { name: 'admin' } },
        },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'editor@example.com' },
    update: {},
    create: {
      id: 'a48d5733-957f-4215-a60c-54912f08fe29',
      email: 'editor@example.com',
      password: hashedPassword,
      firstName: 'Editor',
      lastName: 'User',
      roles: {
        create: {
          role: { connect: { name: 'editor' } },
        },
      },
    },
  });

  console.log('Users seeded.');
};

import { PrismaClient } from '@prisma/client';
import { PERMISSIONS } from 'src/common/constants/permission.constant';

const prisma = new PrismaClient();

export const seedPermissions = async () => {
  console.log('Seeding permissions...');

  const permissionsData = Object.values(PERMISSIONS).map((permission) => ({
    name: permission,
  }));

  await prisma.permission.createMany({
    data: permissionsData,
    skipDuplicates: true,
  });

  console.log('Permissions seeded.');
};

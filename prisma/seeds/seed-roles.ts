import { PrismaClient } from '@prisma/client';
import { PERMISSIONS } from 'src/common/constants/permission.constant';

const prisma = new PrismaClient();

export const seedRoles = async () => {
  console.log('Seeding roles...');

  const roles = [
    {
      name: 'admin',
      permissions: [
        PERMISSIONS.CREATE_USER,
        PERMISSIONS.EDIT_USER,
        PERMISSIONS.DELETE_USER,
        PERMISSIONS.VIEW_USER,
        PERMISSIONS.CREATE_POST,
        PERMISSIONS.EDIT_POST,
        PERMISSIONS.DELETE_POST,
        PERMISSIONS.VIEW_POST,
        PERMISSIONS.CREATE_ROLE,
        PERMISSIONS.EDIT_ROLE,
        PERMISSIONS.DELETE_ROLE,
        PERMISSIONS.VIEW_ROLE,
      ],
    },
    {
      name: 'editor',
      permissions: [
        PERMISSIONS.CREATE_POST,
        PERMISSIONS.EDIT_POST,
        PERMISSIONS.VIEW_POST,
      ],
    },
    {
      name: 'viewer',
      permissions: [PERMISSIONS.VIEW_USER, PERMISSIONS.VIEW_POST],
    },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: {
        name: role.name,
        permissions: {
          create: role.permissions.map((permission) => ({
            permission: { connect: { name: permission } },
          })),
        },
      },
    });
  }

  console.log('Roles seeded.');
};

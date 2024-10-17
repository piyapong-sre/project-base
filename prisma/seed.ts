import { seedPermissions } from './seeds/seed-permissions';
import { seedRoles } from './seeds/seed-roles';
import { seedUsers } from './seeds/seed-users';

async function main() {
  await seedPermissions();
  await seedRoles();
  await seedUsers();

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Disconnecting Prisma...');
    await (await import('@prisma/client')).PrismaClient.prototype.$disconnect();
  });

import { seedPermissions } from './seeds/seed-permissions';

async function main() {
  await seedPermissions();

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

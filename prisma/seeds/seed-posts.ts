import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const seedPosts = async () => {
  console.log('Seeding posts...');

  await prisma.post.create({
    data: {
      title: 'Post 1',
      content: 'This is the first post.',
      published: true,
      authorId: 'a48d5733-957f-4215-a60c-54912f08fe29',
    },
  });

  await prisma.post.create({
    data: {
      title: 'Post 2',
      content: 'This is the second post.',
      published: false,
      authorId: 'a48d5733-957f-4215-a60c-54912f08fe29',
    },
  });

  console.log('Posts seeded.');
};

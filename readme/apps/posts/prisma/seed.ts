import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.tag.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'ЦитатыВеликих',
      posts: {
        create: [
          {
            citation: 'Чем умнее человек, тем легче он признает себя дураком',
            userId: '13',
            author: 'Альберт Эйнштейн',
            images: [],
            type: 'citation',
          },
        ]
      },
    }
  });
  await prisma.tag.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Картинки',
      posts: {
        create: [
          {
            image: './images/imageTest.jpg',
            userId: '131',
            images: [],
            type: 'image',
            comments: {
              create: [
                {
                  content: 'Вау! Like it!',
                  userId: '14',
                }
              ]
            }
          },
          {
            image: './images/imageTest2.jpg',
            userId: '11',
            images: [],
            type: 'image',
          }
        ]
      }
    }
  });
  console.info('Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })

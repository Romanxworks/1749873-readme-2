/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "state" SET DEFAULT 'draft',
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "title" SET DEFAULT '',
ALTER COLUMN "images" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "isRepost" SET DEFAULT false,
ALTER COLUMN "primaryId" SET DEFAULT 0,
ALTER COLUMN "primaryAuthor" SET DEFAULT '',
ALTER COLUMN "likesCount" SET DEFAULT 0,
ALTER COLUMN "repostsCount" SET DEFAULT 0,
ALTER COLUMN "commentCount" SET DEFAULT 0,
ALTER COLUMN "type" SET DEFAULT 'citation',
ALTER COLUMN "citation" DROP NOT NULL,
ALTER COLUMN "citation" SET DEFAULT '',
ALTER COLUMN "author" DROP NOT NULL,
ALTER COLUMN "author" SET DEFAULT '',
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "image" SET DEFAULT '',
ALTER COLUMN "reference" DROP NOT NULL,
ALTER COLUMN "reference" SET DEFAULT '',
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "description" SET DEFAULT '',
ALTER COLUMN "preview" DROP NOT NULL,
ALTER COLUMN "preview" SET DEFAULT '',
ALTER COLUMN "linkVideo" DROP NOT NULL,
ALTER COLUMN "linkVideo" SET DEFAULT '',
ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "content" SET DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Tag_title_key" ON "Tag"("title");

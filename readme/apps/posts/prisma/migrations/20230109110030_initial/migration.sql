/*
  Warnings:

  - The `state` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `type` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('video', 'text', 'citation', 'image', 'reference');

-- CreateEnum
CREATE TYPE "PostState" AS ENUM ('Published', 'Draft');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "state",
ADD COLUMN     "state" "PostState" NOT NULL DEFAULT 'Draft',
DROP COLUMN "type",
ADD COLUMN     "type" "PostType" NOT NULL DEFAULT 'citation';

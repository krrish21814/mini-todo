/*
  Warnings:

  - Added the required column `authorId` to the `Todobro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todobro" ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Todobro" ADD CONSTRAINT "Todobro_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

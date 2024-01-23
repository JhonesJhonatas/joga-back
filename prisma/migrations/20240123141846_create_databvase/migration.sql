/*
  Warnings:

  - You are about to drop the column `desciption` on the `UserType` table. All the data in the column will be lost.
  - Added the required column `description` to the `UserType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserType" DROP COLUMN "desciption",
ADD COLUMN     "description" TEXT NOT NULL;

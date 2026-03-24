/*
  Warnings:

  - You are about to drop the column `nuklearTechnology` on the `GameTurn` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GameTurn" DROP COLUMN "nuklearTechnology",
ADD COLUMN     "nuclearTechnology" BOOLEAN NOT NULL DEFAULT false;

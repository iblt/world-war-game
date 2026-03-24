/*
  Warnings:

  - You are about to drop the column `order` on the `GameCity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CityTemplate" ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "GameCity" DROP COLUMN "order";

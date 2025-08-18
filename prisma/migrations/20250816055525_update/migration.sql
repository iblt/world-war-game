/*
  Warnings:

  - You are about to drop the column `countryId` on the `Team` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,countryId]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teamId,sanctionedTeamId]` on the table `Sanctions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gameCountryId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_countryId_fkey";

-- DropIndex
DROP INDEX "City_name_key";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "countryId",
ADD COLUMN     "gameCountryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "currentGameId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "City_name_countryId_key" ON "City"("name", "countryId");

-- CreateIndex
CREATE UNIQUE INDEX "Sanctions_teamId_sanctionedTeamId_key" ON "Sanctions"("teamId", "sanctionedTeamId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_currentGameId_fkey" FOREIGN KEY ("currentGameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_gameCountryId_fkey" FOREIGN KEY ("gameCountryId") REFERENCES "GameCountry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

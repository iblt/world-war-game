/*
  Warnings:

  - You are about to drop the column `fromTeamId` on the `Sanction` table. All the data in the column will be lost.
  - You are about to drop the column `toTeamId` on the `Sanction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fromCountryId,toCountryId,gameId]` on the table `Sanction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fromCountryId` to the `Sanction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toCountryId` to the `Sanction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sanction" DROP CONSTRAINT "Sanction_fromTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Sanction" DROP CONSTRAINT "Sanction_toTeamId_fkey";

-- DropIndex
DROP INDEX "Sanction_fromTeamId_toTeamId_gameId_key";

-- AlterTable
ALTER TABLE "Sanction" DROP COLUMN "fromTeamId",
DROP COLUMN "toTeamId",
ADD COLUMN     "fromCountryId" TEXT NOT NULL,
ADD COLUMN     "toCountryId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Sanction_fromCountryId_toCountryId_gameId_key" ON "Sanction"("fromCountryId", "toCountryId", "gameId");

-- AddForeignKey
ALTER TABLE "Sanction" ADD CONSTRAINT "Sanction_fromCountryId_fkey" FOREIGN KEY ("fromCountryId") REFERENCES "GameCountry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sanction" ADD CONSTRAINT "Sanction_toCountryId_fkey" FOREIGN KEY ("toCountryId") REFERENCES "GameCountry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - The primary key for the `Game` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `creatorId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `ecologicalLevel` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Game` table. All the data in the column will be lost.
  - The primary key for the `GameCity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cityId` on the `GameCity` table. All the data in the column will be lost.
  - You are about to drop the column `developmentLevel` on the `GameCity` table. All the data in the column will be lost.
  - You are about to drop the column `protectionLevel` on the `GameCity` table. All the data in the column will be lost.
  - You are about to drop the column `revenue` on the `GameCity` table. All the data in the column will be lost.
  - You are about to drop the column `standartOfLiving` on the `GameCity` table. All the data in the column will be lost.
  - The primary key for the `GameCountry` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `countryId` on the `GameCountry` table. All the data in the column will be lost.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gameCountryId` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `hasNuclearWeapons` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sanctions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[joinCode]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gameId,templateId]` on the table `GameCity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gameId,templateId]` on the table `GameCountry` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hostId` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `joinCode` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `GameCity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `development` to the `GameCity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `life` to the `GameCity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `templateId` to the `GameCity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `templateId` to the `GameCountry` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GameStatus" AS ENUM ('LOBBY', 'IN_PROGRESS', 'FINISHED');

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "GameCity" DROP CONSTRAINT "GameCity_cityId_fkey";

-- DropForeignKey
ALTER TABLE "GameCity" DROP CONSTRAINT "GameCity_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GameCountry" DROP CONSTRAINT "GameCountry_countryId_fkey";

-- DropForeignKey
ALTER TABLE "GameCountry" DROP CONSTRAINT "GameCountry_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Sanctions" DROP CONSTRAINT "Sanctions_sanctionedTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Sanctions" DROP CONSTRAINT "Sanctions_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_gameCountryId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_gameId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_currentGameId_fkey";

-- DropIndex
DROP INDEX "GameCity_gameId_cityId_key";

-- DropIndex
DROP INDEX "GameCountry_gameId_countryId_key";

-- AlterTable
ALTER TABLE "Game" DROP CONSTRAINT "Game_pkey",
DROP COLUMN "creatorId",
DROP COLUMN "ecologicalLevel",
DROP COLUMN "isActive",
DROP COLUMN "name",
DROP COLUMN "password",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "ecology" DOUBLE PRECISION NOT NULL DEFAULT 90,
ADD COLUMN     "hostId" TEXT NOT NULL,
ADD COLUMN     "joinCode" TEXT NOT NULL,
ADD COLUMN     "maxRounds" INTEGER NOT NULL DEFAULT 5,
ADD COLUMN     "round" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "status" "GameStatus" NOT NULL DEFAULT 'LOBBY',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Game_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Game_id_seq";

-- AlterTable
ALTER TABLE "GameCity" DROP CONSTRAINT "GameCity_pkey",
DROP COLUMN "cityId",
DROP COLUMN "developmentLevel",
DROP COLUMN "protectionLevel",
DROP COLUMN "revenue",
DROP COLUMN "standartOfLiving",
ADD COLUMN     "countryId" TEXT NOT NULL,
ADD COLUMN     "development" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "isDestroyed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "life" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protection" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "templateId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "gameId" SET DATA TYPE TEXT,
ADD CONSTRAINT "GameCity_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "GameCity_id_seq";

-- AlterTable
ALTER TABLE "GameCountry" DROP CONSTRAINT "GameCountry_pkey",
DROP COLUMN "countryId",
ADD COLUMN     "teamId" TEXT,
ADD COLUMN     "templateId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "gameId" SET DATA TYPE TEXT,
ADD CONSTRAINT "GameCountry_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "GameCountry_id_seq";

-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
DROP COLUMN "gameCountryId",
DROP COLUMN "hasNuclearWeapons",
ADD COLUMN     "hasBombProgram" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "money" SET DEFAULT 0,
ALTER COLUMN "money" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "gameId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Team_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Team_id_seq";

-- DropTable
DROP TABLE "City";

-- DropTable
DROP TABLE "Country";

-- DropTable
DROP TABLE "Sanctions";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "CountryTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CountryTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CityTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "baseLife" INTEGER NOT NULL,
    "baseDevelopment" INTEGER NOT NULL,

    CONSTRAINT "CityTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GamePlayer" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "countryId" TEXT,
    "isPresident" BOOLEAN NOT NULL DEFAULT false,
    "teamId" TEXT,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GamePlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sanction" (
    "id" TEXT NOT NULL,
    "fromTeamId" TEXT NOT NULL,
    "toTeamId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "Sanction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CountryTemplate_name_key" ON "CountryTemplate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CityTemplate_name_countryId_key" ON "CityTemplate"("name", "countryId");

-- CreateIndex
CREATE UNIQUE INDEX "GamePlayer_gameId_playerId_key" ON "GamePlayer"("gameId", "playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Sanction_fromTeamId_toTeamId_gameId_key" ON "Sanction"("fromTeamId", "toTeamId", "gameId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_joinCode_key" ON "Game"("joinCode");

-- CreateIndex
CREATE UNIQUE INDEX "GameCity_gameId_templateId_key" ON "GameCity"("gameId", "templateId");

-- CreateIndex
CREATE UNIQUE INDEX "GameCountry_gameId_templateId_key" ON "GameCountry"("gameId", "templateId");

-- AddForeignKey
ALTER TABLE "CityTemplate" ADD CONSTRAINT "CityTemplate_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "CountryTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamePlayer" ADD CONSTRAINT "GamePlayer_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamePlayer" ADD CONSTRAINT "GamePlayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamePlayer" ADD CONSTRAINT "GamePlayer_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "GameCountry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamePlayer" ADD CONSTRAINT "GamePlayer_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameCountry" ADD CONSTRAINT "GameCountry_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameCountry" ADD CONSTRAINT "GameCountry_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "CountryTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameCountry" ADD CONSTRAINT "GameCountry_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameCity" ADD CONSTRAINT "GameCity_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameCity" ADD CONSTRAINT "GameCity_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "CityTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameCity" ADD CONSTRAINT "GameCity_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "GameCountry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sanction" ADD CONSTRAINT "Sanction_fromTeamId_fkey" FOREIGN KEY ("fromTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sanction" ADD CONSTRAINT "Sanction_toTeamId_fkey" FOREIGN KEY ("toTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sanction" ADD CONSTRAINT "Sanction_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

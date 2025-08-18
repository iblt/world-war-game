/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "createdAt",
ADD COLUMN     "ecologicalLevel" INTEGER NOT NULL DEFAULT 75,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "hasNuclearWeapons" BOOLEAN NOT NULL DEFAULT false,
    "bombsCount" INTEGER NOT NULL DEFAULT 0,
    "money" INTEGER NOT NULL DEFAULT 500,
    "countryId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameCity" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "protectionLevel" INTEGER NOT NULL DEFAULT 1,
    "standartOfLiving" INTEGER NOT NULL DEFAULT 100,
    "revenue" INTEGER NOT NULL DEFAULT 100,
    "developmentLevel" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "GameCity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameCountry" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "GameCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sanctions" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "sanctionedTeamId" INTEGER NOT NULL,

    CONSTRAINT "Sanctions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");

-- CreateIndex
CREATE UNIQUE INDEX "GameCity_gameId_cityId_key" ON "GameCity"("gameId", "cityId");

-- CreateIndex
CREATE UNIQUE INDEX "GameCountry_gameId_countryId_key" ON "GameCountry"("gameId", "countryId");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameCity" ADD CONSTRAINT "GameCity_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameCity" ADD CONSTRAINT "GameCity_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameCountry" ADD CONSTRAINT "GameCountry_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameCountry" ADD CONSTRAINT "GameCountry_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sanctions" ADD CONSTRAINT "Sanctions_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sanctions" ADD CONSTRAINT "Sanctions_sanctionedTeamId_fkey" FOREIGN KEY ("sanctionedTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

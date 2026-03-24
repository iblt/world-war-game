-- AlterTable
ALTER TABLE "GameTurn" ADD COLUMN     "sanctionedCountries" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "updatedCities" SET DEFAULT '',
ALTER COLUMN "attackedCities" SET DEFAULT '';

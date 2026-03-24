-- AlterTable
ALTER TABLE "GameCountry" ADD COLUMN     "hasNuclearProgram" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "nukes" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "GameTurn" ADD COLUMN     "nuklearTechnology" BOOLEAN NOT NULL DEFAULT false;

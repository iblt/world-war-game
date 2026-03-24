-- CreateTable
CREATE TABLE "GameTurn" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "round" INTEGER NOT NULL,
    "updatedCities" TEXT NOT NULL,
    "buildNukes" INTEGER NOT NULL DEFAULT 0,
    "ecoProgram" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GameTurn_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameTurn_gameId_countryId_round_key" ON "GameTurn"("gameId", "countryId", "round");

-- AddForeignKey
ALTER TABLE "GameTurn" ADD CONSTRAINT "GameTurn_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameTurn" ADD CONSTRAINT "GameTurn_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "GameCountry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

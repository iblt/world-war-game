/*
  Warnings:

  - You are about to drop the column `status` on the `Game` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "GamePhase" AS ENUM ('LOBBY', 'WAITING_COUNTRY', 'COUNTRY_MANAGEMENT', 'WAITING_UN', 'UN_STATS');

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "status",
ADD COLUMN     "phase" "GamePhase" NOT NULL DEFAULT 'LOBBY';

-- DropEnum
DROP TYPE "GameStatus";

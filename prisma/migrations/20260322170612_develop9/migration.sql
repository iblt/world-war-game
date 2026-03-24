/*
  Warnings:

  - Added the required column `attackedCities` to the `GameTurn` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameTurn" ADD COLUMN     "attackedCities" TEXT NOT NULL;

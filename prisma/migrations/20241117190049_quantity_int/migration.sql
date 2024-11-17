/*
  Warnings:

  - You are about to alter the column `waste_quantity` on the `waste` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "waste" ALTER COLUMN "waste_quantity" SET DATA TYPE INTEGER;

/*
  Warnings:

  - Added the required column `updatetAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "updatetAt" TIMESTAMP(3) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `pasword` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "pasword",
ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);

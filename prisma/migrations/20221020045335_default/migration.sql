/*
  Warnings:

  - You are about to drop the column `created_at` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `access_token` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `verificationtokens` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `verificationtokens` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,provider_account_id]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "providerAccountId";

-- DropIndex
DROP INDEX "userId";

-- DropIndex
DROP INDEX "sessions_access_token_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "access_token",
DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "updated_at",
ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "verificationtokens" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

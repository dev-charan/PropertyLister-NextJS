/*
  Warnings:

  - You are about to drop the column `preferredTenant` on the `property` table. All the data in the column will be lost.
  - You are about to drop the `_savedproperties` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `preferredTenants` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_savedproperties` DROP FOREIGN KEY `_SavedProperties_A_fkey`;

-- DropForeignKey
ALTER TABLE `_savedproperties` DROP FOREIGN KEY `_SavedProperties_B_fkey`;

-- AlterTable
ALTER TABLE `property` DROP COLUMN `preferredTenant`,
    ADD COLUMN `preferredTenants` ENUM('FAMILY', 'BACHELORS') NOT NULL,
    MODIFY `bhk` ENUM('ONE_RK', 'ONE_BHK', 'TWO_BHK', 'THREE_BHK', 'FOUR_BHK') NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_savedproperties`;

-- CreateTable
CREATE TABLE `Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `message` TEXT NOT NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `propertyId` INTEGER NOT NULL,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserSavedProperty` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserSavedProperty_AB_unique`(`A`, `B`),
    INDEX `_UserSavedProperty_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `Property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserSavedProperty` ADD CONSTRAINT `_UserSavedProperty_A_fkey` FOREIGN KEY (`A`) REFERENCES `Property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserSavedProperty` ADD CONSTRAINT `_UserSavedProperty_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

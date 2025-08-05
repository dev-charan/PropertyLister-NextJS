import { Prisma, PrismaClient } from "@prisma/client";

export const db = new PrismaClient()
// for fun
export type PropertyWithImages = Prisma.PropertyGetPayload<{
include:{
    images:true
}
}>

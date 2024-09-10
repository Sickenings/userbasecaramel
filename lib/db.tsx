import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";

// Singleton pattern for Prisma Client
const prismaClientSingleton = (() => {
  let instance: PrismaClient | null = null;

  return () => {
    if (!instance) {
      instance = new PrismaClient();
    }
    return instance;
  };
})();

const globalForPrisma = globalThis as { prisma?: PrismaClient };

// Use the singleton instance or create a new one
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Export the Prisma Client instance
export default prisma;

// Assign the Prisma Client instance to the global variable in development mode
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// Utility function to combine class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
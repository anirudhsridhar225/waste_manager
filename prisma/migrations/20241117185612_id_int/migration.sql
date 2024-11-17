-- CreateTable
CREATE TABLE "waste" (
    "id" SERIAL NOT NULL,
    "waste_name" TEXT NOT NULL,
    "waste_type" TEXT NOT NULL,
    "waste_location" TEXT NOT NULL,
    "waste_quantity" BIGINT NOT NULL,

    CONSTRAINT "waste_pkey" PRIMARY KEY ("id")
);

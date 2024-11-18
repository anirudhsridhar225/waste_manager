import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import type { waste } from "@prisma/client";

export async function POST(request: NextRequest) {
    const reqdata = await request.json() as waste;
    const savedWaste = await prisma.waste.create({
        data: reqdata,
    });

    return NextResponse.json(savedWaste);
}

export async function GET(request: NextRequest) {
    const wasteData = await prisma.waste.findMany();
    return NextResponse.json(wasteData);
}
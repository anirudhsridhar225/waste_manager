import { prisma } from "@/lib/prisma";
import type { waste } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const reqdata = await request.json() as waste;
    const savedWaste = await prisma.waste.create({
        data: reqdata,
    });

    return NextResponse.json(savedWaste);
}

export async function GET(request: NextRequest) {
    const wasteData = await prisma.waste.findMany();
    console.log(request);
    return NextResponse.json(wasteData);
}
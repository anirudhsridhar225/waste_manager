import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Method not allowed'
        });
    }

    const wasteData = JSON.parse(req.body);
    const savedWaste = await prisma.waste.create({
        data: wasteData,
    })

    res.json(savedWaste);
}
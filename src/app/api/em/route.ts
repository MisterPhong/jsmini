import { findAll } from "@/services/services";
import { NextResponse } from "next/server";


export async function GET() {
    const data = await findAll()
    return NextResponse.json({data: data})
}
import { findAllEmployee } from "@/app/services/services";
import { NextResponse } from "next/server";


export async function GET(){
    const data = await findAllEmployee()
    return NextResponse.json({data: data})
}
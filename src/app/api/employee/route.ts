<<<<<<< HEAD
import { findAllEmployee } from "@/app/services/services";
import { NextResponse } from "next/server";


export async function GET(){
    const data = await findAllEmployee()
    return NextResponse.json({data: data})
=======
import { findAllEmployee } from "@/services/services";
import { NextResponse } from "next/server";


export async function GET() {
    const data = await findAllEmployee()
    return NextResponse.json({data: data })
>>>>>>> 75e05848ae9fbb3f523278fd074936187d35888b
}
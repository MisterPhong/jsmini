<<<<<<< HEAD
import { createEmployee, findAll } from "@/app/services/services";
import { NextRequest, NextResponse } from "next/server";
import { Prisma, employee } from '@prisma/client';


export async function GET(){
    const data = await findAll()
    return NextResponse.json({data: data})
}
export async function POST(req: NextRequest){
    const bodyJson : any = await req.json() as Prisma.employeeCreateInput;
    const data = await createEmployee(bodyJson);
    return NextResponse.json(
        {message: "Success",
        data: data,}
=======
import { createEmployee, findAll } from "@/services/services";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    const data = await findAll()
    return NextResponse.json({data: data})
}

export async function POST(req: NextRequest) {
    const bodyJson: any = await req.json() as Prisma.employeeCreateInput;
    const data = await createEmployee(bodyJson);
    return NextResponse.json(
        {
            message: "เพิ่มข้อมูลสำเร็จ",
            data: data,
        }
>>>>>>> 75e05848ae9fbb3f523278fd074936187d35888b
    )
}
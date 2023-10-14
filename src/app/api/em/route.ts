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
    )
}
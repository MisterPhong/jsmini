import { removeEmployee } from "@/services/services";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest, params : { params: {id: number} }) {
    await removeEmployee(+params.params.id)
    return NextResponse.json( {
        message: "ลบข้อมูลสำเร็จ"
    })
}
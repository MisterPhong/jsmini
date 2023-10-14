import { removeEmloyee } from '@/app/services/services';
import { NextRequest, NextResponse } from 'next/server';


export async function DELETE(req: NextRequest, params :{params: {id: number}}){
    await removeEmloyee(+params.params.id)
    return NextResponse.json({
        message: "ลบแล้วนะจะๆ"
    })
}
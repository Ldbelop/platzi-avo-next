import { NextResponse } from "next/server";
import DB from '../../../database/db'

export const GET = async (
    request: Request,
    { params }: { params: { id: string}}
    ) => {
    const id = params.id;
    const db = new DB()
    const avocado = await db.getById(id)

    return NextResponse.json(avocado)
}
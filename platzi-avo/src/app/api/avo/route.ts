import { NextResponse } from 'next/server'
import DB from '../../database/db'

export const GET = async () => {
    const db = new DB()
    const allEntries = await db.getAll()

    return NextResponse.json(allEntries)
}

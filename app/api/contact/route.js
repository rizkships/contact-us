import { NextResponse } from "next/server";

export async function POST(req){
    const {fullname, email, message} = await req.json();

    return NextResponse.json({msg: ['hi front contact route.js']})
}
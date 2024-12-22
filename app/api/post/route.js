import { NextResponse } from "next/server";

export async function POST(req,res){
    const {name,password,age}=await req.json();

    if(!name && !password && !age){
        return NextResponse.json({error:"error in adding user",ok:false})
    }
    return NextResponse.json({success:"add new user",ok:true})

    
   
}
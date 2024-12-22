import { NextResponse } from "next/server";

export function middleware(request){
  console.log("middle ware run");
  console.log(request.nextUrl.pathname);
  if(request.nextUrl.pathname != ""){
    return NextResponse.redirect(new URL("/users",request.url));
  }
  else{
    return NextResponse.json({success:"middle ware run"});
  }
  
}

export const config={
    matcher:["/school/:path*"],
}
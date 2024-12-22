import { NextResponse } from "next/server";
import {users} from "@/app/utils/db";

export async function GET(request, { params }) {
  const { id } = await params; // Destructure `id` from the awaited `params` object
   
  console.log(id); // Log the dynamic ID for debugging

  return NextResponse.json(users);
}

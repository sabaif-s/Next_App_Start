import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params; // Destructure `id` from the awaited `params` object

  console.log(id); // Log the dynamic ID for debugging

  return NextResponse.json({ hello: `from user with ID: ${id}` });
}

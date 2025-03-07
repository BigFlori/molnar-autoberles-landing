import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Itt küldenéd el az emailt a megfelelő email szolgáltatóval
    // Példa: console.log(body);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Hiba történt" }, { status: 500 });
  }
}
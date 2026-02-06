import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const dir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    const filePath = path.join(
      dir,
      `diagnostico-${Date.now()}.json`
    );

    fs.writeFileSync(filePath, JSON.stringify(body, null, 2));

    return NextResponse.json({
      status: "ok",
      message: "Diagnóstico recibido",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error procesando diagnóstico" },
      { status: 500 }
    );
  }
}

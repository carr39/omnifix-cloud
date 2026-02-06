import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { generarContrato } from "@/lib/legal/contrato";

export async function POST(req: Request) {
  const body = await req.json();

  const contrato = generarContrato(body.cliente, body.total);

  fs.writeFileSync(
    path.join(process.cwd(), "data", `contrato-${Date.now()}.txt`),
    contrato
  );

  return NextResponse.json({
    status: "aceptado",
    contrato,
  });
}

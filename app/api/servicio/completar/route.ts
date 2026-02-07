import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "completado",
    mensaje: "Servicio finalizado. Proceder a pago.",
  });
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { analizarDiagnostico } from "@/lib/ia/analisis";

export async function POST(req: Request) {
  const body = await req.json();

  const precios = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "data/precios.json"),
      "utf8"
    )
  );

  const analisis = analizarDiagnostico(body);

  let total = 0;
  analisis.soluciones.forEach((s: string) => {
    if (s.includes("Limpieza")) total += precios.limpieza;
    if (s.includes("Optimización")) total += precios.optimizacion;
    if (s.includes("Actualización")) total += precios.actualizacion_windows;
  });

  return NextResponse.json({
    problemas: analisis.problemas,
    soluciones: analisis.soluciones,
    total,
  });
}

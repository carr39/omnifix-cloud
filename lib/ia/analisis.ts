export function analizarDiagnostico(data: any) {
  const problemas: string[] = [];
  const soluciones: string[] = [];

  if (data.RAM_GB < 8) {
    problemas.push("Memoria RAM insuficiente");
    soluciones.push("Optimización de procesos y servicios");
  }

  if (data.DiskFree_GB < 20) {
    problemas.push("Poco espacio en disco");
    soluciones.push("Limpieza de archivos temporales");
  }

  if (data.OS.includes("Windows 7")) {
    problemas.push("Sistema operativo obsoleto");
    soluciones.push("Actualización de sistema");
  }

  return {
    problemas,
    soluciones,
    nivel: problemas.length === 0 ? "OK" : "ATENCIÓN",
  };
}

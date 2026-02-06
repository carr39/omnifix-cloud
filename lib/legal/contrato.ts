export function generarContrato(cliente: any, total: number) {
  return `
CONTRATO DE PRESTACIÓN DE SERVICIOS REMOTOS

Cliente: ${cliente.nombre}
Equipo: ${cliente.equipo}
Fecha: ${new Date().toLocaleDateString()}

El cliente autoriza la ejecución de servicios de diagnóstico
y reparación remota por un monto total de $${total} MXN.

El servicio es remoto y no garantiza recuperación de datos.

Aceptado electrónicamente.
`;
}

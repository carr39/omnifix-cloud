export default function DiagnosticoWindows() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Diagnóstico para Windows</h1>

      <p>
        Descarga el agente de diagnóstico. El sistema analizará tu equipo y
        enviará la información de forma segura a la nube.
      </p>

      <a
        href="/agent/windows-diagnostico.ps1"
        download
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "1rem",
          background: "#0070f3",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Descargar diagnóstico
      </a>

      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        * Ejecuta el archivo como administrador.
      </p>
    </main>
  );
}

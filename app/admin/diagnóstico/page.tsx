import fs from "fs";
import path from "path";

export default function DiagnosticosAdmin() {
  const dir = path.join(process.cwd(), "data");
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Diagnósticos recibidos</h1>

      {files.length === 0 && <p>No hay diagnósticos aún.</p>}

      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </main>
  );
}

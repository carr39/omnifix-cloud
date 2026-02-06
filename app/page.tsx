export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Plataforma de Diagnóstico IA</h1>

      <p>
        Bienvenido. Desde aquí puedes registrar tus equipos, ejecutar diagnósticos
        y revisar el estado de cada reparación.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Acciones rápidas</h2>
        <ul>
          <li>➕ Registrar nuevo equipo</li>
          <li>🧠 Ejecutar diagnóstico IA</li>
          <li>📊 Ver resultados</li>
          <li>💳 Gestionar pagos</li>
        </ul>
      </section>
    </main>
  );
}

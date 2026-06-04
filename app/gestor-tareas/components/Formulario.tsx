type FormularioProps = {
  titulo: string;
  descripcion: string;
  setTitulo: (titulo: string) => void;
  setDescripcion: (descripcion: string) => void;
  anadirTarea: () => void;
};

export default function FormularioTarea({ titulo, descripcion, setTitulo, setDescripcion, anadirTarea }: FormularioProps) {
  return (
    <section className="mb-8 rounded-lg bg-white p-6 shadow">
      <div className="space-y-4">
        <input
          type="text"
          value={titulo}
          onChange={(titulo) => setTitulo(titulo.target.value)}
          placeholder="Título"
          className="w-full rounded-lg border p-3 text-gray-600"
        />

        <textarea
          value={descripcion}
          onChange={(descripcion) => setDescripcion(descripcion.target.value)}
          placeholder="Descripción"
          rows={4}
          className="w-full rounded-lg border p-3 text-gray-600"
        />

        <button onClick={anadirTarea} className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
          Añadir tarea
        </button>
      </div>
    </section>
  );
}

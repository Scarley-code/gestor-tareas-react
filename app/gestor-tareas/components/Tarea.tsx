type Tarea = {
  id: number;
  titulo: string;
  descripcion: string;
};

type TareaProps = {
  tarea: Tarea;
  eliminarTarea: (id: number) => void;
};

export default function TarjetaTarea({ tarea, eliminarTarea }: TareaProps) {
  const eliminar = () => {
    eliminarTarea(tarea.id);
  };

  return (
    <article className="rounded-lg bg-white p-5 shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-600">
            {tarea.titulo}
          </h3>

          <p className="mt-2 text-gray-600">{tarea.descripcion}</p>
        </div>

        <button
          onClick={eliminar}
          className="rounded-lg bg-red-600 px-3 py-2 text-white transition hover:bg-red-700"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

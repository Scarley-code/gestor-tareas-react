import Tarea from "./Tarea";

type Tarea = {
  id: number;
  titulo: string;
  descripcion: string;
};

type ListaTareasProps = {
  tareas: Tarea[];
  eliminarTarea: (id: number) => void;
};

export default function ListaTareas({ tareas, eliminarTarea }: ListaTareasProps) {
  if (tareas.length === 0) {
    return (
      <p className="rounded-lg bg-white p-4 shadow text-gray-600">
        No hay tareas.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} />
      ))}
    </div>
  );
}

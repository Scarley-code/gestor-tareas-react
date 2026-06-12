import { obtenerTareas } from "@/lib/tareas-prisma"
import { TareaForm } from "./TareaForm"
import { eliminarTarea } from "./actions"


export default async function Page() {
  const tareas = await obtenerTareas()

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-2 text-3xl font-bold text-black ml-10">Gestor de tareas con Prisma</h1>

      <TareaForm />

      <section className="mx-auto max-w-3xl mb-8 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-2 text-3xl font-bold text-black">Tareas guardadas</h2>

        {tareas.length === 0 ? (
          <p>Todavía no hay tareas.</p>
        ) : (
                <ul>
                    {tareas.map((tarea) => (
                    <form action={eliminarTarea} key={tarea.id} className="mx-auto max-w-3xl mb-8 rounded-lg bg-white p-6 shadow">
                        <label>
                            <li key={tarea.id}>
                                <input name="id" type="hidden" value={tarea.id}></input>
                                <strong>{tarea.titulo}</strong>
                                <p>{tarea.descripcion}</p>
                                <button type="submit" className="rounded-lg bg-red-600 px-5 py-3 text-white hover:bg-red-700">Eliminar tarea</button>
                            </li>
                        </label>
                    </form>
                    ))}
                </ul>
        )}
      </section>
    </main>
  )
}
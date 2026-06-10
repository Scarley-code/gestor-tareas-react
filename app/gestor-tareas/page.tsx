import { revalidatePath } from "next/cache"
import { eliminar, insertarTarea, obtenerTareas } from "@/lib/db"

export default async function Page() {
  const tareas = await obtenerTareas()

  async function crearTarea(formData: FormData) {
    "use server"

    const titulo = formData.get("titulo")
    const descripcion = formData.get("descripcion")

    if (typeof titulo !== "string" || typeof descripcion !== "string") {
      return
    }

    if (titulo.trim() === "" || descripcion.trim() === "") {
      return
    }

    await insertarTarea(titulo.trim(), descripcion.trim())

    revalidatePath("/gestor-tareas")
  }

  async function eliminarTarea(formData: FormData) {
    "use server"

    const id = formData.get("id")
    if (id===null){
      return
    }

    await eliminar(id);

    revalidatePath("/gestor-tareas")
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-2 text-3xl font-bold text-black ml-10">Gestor de tareas</h1>

      <form action={crearTarea} className="mx-auto max-w-3xl mb-8 rounded-lg bg-white p-6 shadow">
        <label>
          Título
          <input name="titulo" className="w-full rounded-lg border p-3 text-gray-600" />
        </label>

        <label>
          Descripción
          <textarea name="descripcion" className="w-full rounded-lg border p-3 text-gray-600" />
        </label>

        <button type="submit" className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">Guardar tarea</button>
      </form>

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
                  <button type="submit" className="rounded-lg bg-red-600 px-5 py-3 text-white hover:bg-red-700">Eliminar Tarea</button>
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
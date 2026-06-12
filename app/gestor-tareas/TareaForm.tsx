import { crearTarea } from "./actions"

export function TareaForm() {
  return (
    <form action={crearTarea} className="mx-auto max-w-3xl mb-8 rounded-lg bg-white p-6 shadow">
      <label>
        Título
        <input name="titulo" className="w-full rounded-lg border p-3 text-gray-600" />
      </label>

      <label>
        Descripción
        <textarea name="descripcion" className="w-full rounded-lg border p-3 text-gray-600"/>
      </label>

      <button type="submit" className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">Guardar tarea</button>
    </form>
  )
}
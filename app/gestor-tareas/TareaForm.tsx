import { crearTarea } from "./actions"

export function TareaForm() {
  return (
    <form action={crearTarea}>
      <label>
        Título
        <input name="titulo" />
      </label>

      <label>
        Descripción
        <textarea name="descripcion" />
      </label>

      <button type="submit">Guardar tarea</button>
    </form>
  )
}
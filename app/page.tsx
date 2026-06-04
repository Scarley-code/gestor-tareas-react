"use client";

import { useState } from "react";
import FormularioTarea from "./gestor-tareas/components/Formulario";
import ListaTareas from "./gestor-tareas/components/ListaTareas";

type Tarea = {
  id: number;
  titulo: string;
  descripcion: string;
};

export default function GestorTareas() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const anadirTarea = () => {
    if (titulo.trim() === "" || descripcion.trim() === "") {
      return;
    }

    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
    };

    setTareas([...tareas, nuevaTarea]);

    setTitulo("");
    setDescripcion("");
  };

  const eliminarTarea = (id: number) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-black">Gestor de tareas</h1>

        <FormularioTarea titulo={titulo} descripcion={descripcion} setTitulo={setTitulo} setDescripcion={setDescripcion} anadirTarea={anadirTarea}/>

        <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />
      </div>
    </main>
  );
}

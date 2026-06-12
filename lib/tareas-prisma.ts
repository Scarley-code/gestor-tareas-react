import prisma from "@/lib/prisma"

export async function obtenerTareas() {
  return prisma.tarea.findMany({
    orderBy: {
      id: "desc",
    },
  })
}

export async function insertarTarea(titulo: string, descripcion: string) {
  await prisma.tarea.create({
    data: {
      titulo,
      descripcion,
    },
  })
}

 export async function eliminar(id: Number) {
    await prisma.tarea.delete({
        where: {
            id: id,
        }
    })
}
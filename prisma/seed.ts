import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const typesModules = [
  {
    id: 1,
    name: 'Seleccionar',
  },
  {
    id: 2,
    name: 'Curso',
  },
  {
    id: 3,
    name: 'Taller',
  },
  {
    id: 4,
    name: 'Webinar',
  },
]

const saveTypesModules = async () => {
  typesModules.forEach(async (type) => {
    await prisma.typeModule.upsert({
      where: { id: type.id },
      update: type,
      create: type,
    })
  })
}

async function main() {
  await saveTypesModules()
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

# Pasos para levantar el proyecto

1. Clonar el repositorio
2. Instalar las dependencias con `pnpm install`
3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:
```.env
DATABASE_URL="postgresql://kaztro:kaztro123@172.24.0.1:5432/ctf?schema=public"
JWT_SECRET="A_SECRET_KEY"
```
4. Correr las migraciones con `npx run migrate`
5. Correr el proyecto con `pnpm run start:dev`
6. Acceder a `http://localhost:3000`

7. Correr los seeders con
```bash
pnpm run seed
```

# Pasar a producción

1. Correr las migraciones con `pnpm run build`
2. Correr el proyecto con `pnpm run start`
3. Acceder a `http://localhost:3000`
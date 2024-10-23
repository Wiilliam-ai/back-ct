# Pasos para levantar el proyecto

1. Clonar el repositorio
2. Instalar las dependencias con `npm install`
3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:
```.env
DATABASE_URL="postgresql://kaztro:kaztro123@172.24.0.1:5432/gpt?schema=public"
JWT_SECRET="A_SECRET_KEY"
```
4. Correr las migraciones con `npx run migrate`
5. Correr el proyecto con `npm run start:dev`
6. Acceder a `http://localhost:3000`

# Pasar a producción

1. Correr las migraciones con `npm run build`
2. Correr el proyecto con `npm run start`



### Notas

Ver Listado de Curso | listModules
Crear curso  | createModule
Editar Cursos  | editModule
Eliminar Cursos | deleteModule

Ver Listado de Usuarios | listUsers
Editar UsuarioS | editUser
crear usuarios | createUser
Eliminar Usuarios | deleteUser

Ver Listado de pagos | listPayments

Ver Listado de permisos | listPermissions
Editar permisos | editPermission

Visualizar de reportes | viewReports

VER historial de conversaciones | viewConversations

TablePermissions


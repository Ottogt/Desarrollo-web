# API Express – Semana 3

Backend en **Node.js** + **Express** con datos en **memoria** (`tasks[]`, `goals[]`). Los datos **no persisten** al detener el proceso.

## Versiones usadas

Ejecuta en tu máquina y anota lo que salga (para la entrega):

```bash
node -v   # Node LTS recomendado (p. ej. v22.x o v20.x)
npm -v
```

Este proyecto declara en `package.json` `"engines": { "node": ">=20" }`.

## Configuración

1. Copia el ejemplo de variables:

   ```bash
   cp .env.example .env
   ```

2. Edita `.env` y define tu propia **`API_KEY`** (cualquier texto secreto que usarás en el header).

   ```env
   API_KEY=tu-api-key-secreta
   PORT=3000
   ```

3. Instala dependencias y arranca:

   ```bash
   npm install
   npm run dev
   ```

Por defecto la API escucha en **`http://localhost:3000`**.

## Autenticación (middleware global)

Todas las rutas exigen el header:

```http
Authorization: <mismo valor que API_KEY en .env>
```

Si falta o no coincide: respuesta **`401 Unauthorized`** con JSON `{ "error": "...", "message": "..." }`.

Sin **`API_KEY`** definida en `.env`, el servidor responde **`500`** indicando error de configuración.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/getTasks` | Lista todas las tareas |
| GET | `/getGoals` | Lista todas las metas |
| POST | `/addTask` | Crea una tarea (body JSON) |
| POST | `/addGoal` | Crea una meta (body JSON) |
| DELETE | `/removeTask` | Elimina una tarea por `id` |
| DELETE | `/removeGoal` | Elimina una meta por `id` |

### POST – cuerpo JSON

Campos requeridos (alineados al modelo del front): **`name`**, **`description`**, **`dueDate`**. El servidor genera **`id`** con `crypto.randomUUID()` si no envías uno.

Respuesta **`201`** con el objeto creado.

### DELETE – cuerpo JSON

Se usa **body JSON** con **`{ "id": "<id-del-item>" }`** (no query string).

Si el `id` no existe: **`404`** con mensaje en JSON.

## Ejemplos con curl

Sustituye `TU_CLAVE` por el valor de `API_KEY` en tu `.env`.

```bash
# Listar tareas
curl -s -H "Authorization: TU_CLAVE" http://localhost:3000/getTasks

# Listar metas
curl -s -H "Authorization: TU_CLAVE" http://localhost:3000/getGoals

# Agregar tarea
curl -s -X POST http://localhost:3000/addTask \
  -H "Authorization: TU_CLAVE" \
  -H "Content-Type: application/json" \
  -d '{"name":"Comprar","description":"Leche","dueDate":"2026-05-20"}'

# Eliminar tarea (body JSON con id)
curl -s -X DELETE http://localhost:3000/removeTask \
  -H "Authorization: TU_CLAVE" \
  -H "Content-Type: application/json" \
  -d '{"id":"task-seed-1"}'
```

En **Postman**: mismo método y URL; pestaña **Headers** → `Authorization` = tu clave; para POST/DELETE → **Body** → raw → JSON.

## Scripts npm

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor con recarga (`node --watch`) |
| `npm start` | Servidor sin watch |

# To Do List – Desarrollo Web

Aplicación para control de **tareas y metas** personales con **React**, **Vite**, **React Bootstrap**, **SASS** y estado global con **Zustand** (rama `semana-2`). La rama `semana-1` contiene solo la maquetación inicial. La rama **`semana-3`** añade una **API REST en Node.js + Express** en la carpeta `backend/` (ver [backend/README.md](backend/README.md)).

## Requisitos

- [Node.js](https://nodejs.org/) **LTS** (recomendado)
- npm (incluido con Node.js)

## Instalación

```bash
git clone https://github.com/Ottogt/Desarrollo-web.git
cd Desarrollo-web
git checkout semana-2
npm install
```

Para revisar únicamente la actividad de maquetación (semana 1): `git checkout semana-1`.

## Ejecutar en desarrollo

```bash
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Compilar para producción

```bash
npm run build
npm run preview
```

## Semana 2 – Estado global (Zustand)

- **Stores:** `src/store/taskStore.ts`, `goalStore.ts`, `menuStore.ts` (con Redux DevTools / Zustand middleware `devtools`).
- **Tipos:** `src/types/entities.ts` (`Task` / `Goal`: `id`, `name`, `description`, `dueDate`).
- Agregar y eliminar tareas/metas desde la UI; los datos **no persisten** al recargar la página (sin backend ni `localStorage`).
- Opcional: instalar la extensión **Redux DevTools** en Chrome para inspeccionar los stores en desarrollo.

## Semana 3 – API Express (Node.js)

- **Rama:** `semana-3`
- **Backend:** carpeta `backend/` — Express, **CORS**, **dotenv**, arrays en memoria (`tasks`, `goals`).
- **Middleware:** header **`Authorization`** debe coincidir con **`API_KEY`** en `.env`; si no, **401**.
- **Endpoints:** `GET /getTasks`, `GET /getGoals`, `POST /addTask`, `POST /addGoal`, `DELETE /removeTask`, `DELETE /removeGoal`.
- Instrucciones detalladas (puerto, curl, Postman): **[backend/README.md](backend/README.md)**.

```bash
git checkout semana-3
cd backend && cp .env.example .env && npm install && npm run dev
```

## Estructura relevante

- `src/App.tsx` – Layout, carga inicial de datos, listado según menú (Tareas / Metas)
- `src/components/` – `Menu`, `Form`, `Item`, `AddMobileButton`
- `src/store/` – stores Zustand
- `src/styles/` – variables SASS y botón lavanda

## Repositorio

[Ottogt/Desarrollo-web](https://github.com/Ottogt/Desarrollo-web) — ramas **`semana-2`** (React + Zustand) y **`semana-3`** (API Express).



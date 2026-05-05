import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import crypto from 'crypto'
import { authMiddleware } from './middleware/auth.js'
import { tasks, goals } from './data/store.js'

const app = express()
const PORT = Number(process.env.PORT) || 3000

app.use(cors())
app.use(express.json())

app.use(authMiddleware)

app.get('/getTasks', (_req, res) => {
  res.json(tasks)
})

app.get('/getGoals', (_req, res) => {
  res.json(goals)
})

app.post('/addTask', (req, res) => {
  const { name, description, dueDate } = req.body ?? {}
  if (!name || !description || !dueDate) {
    return res.status(400).json({
      error: 'Campos requeridos: name, description, dueDate',
    })
  }
  const task = {
    id: crypto.randomUUID(),
    name: String(name).trim(),
    description: String(description).trim(),
    dueDate: String(dueDate).trim(),
  }
  tasks.push(task)
  res.status(201).json(task)
})

app.post('/addGoal', (req, res) => {
  const { name, description, dueDate } = req.body ?? {}
  if (!name || !description || !dueDate) {
    return res.status(400).json({
      error: 'Campos requeridos: name, description, dueDate',
    })
  }
  const goal = {
    id: crypto.randomUUID(),
    name: String(name).trim(),
    description: String(description).trim(),
    dueDate: String(dueDate).trim(),
  }
  goals.push(goal)
  res.status(201).json(goal)
})

app.delete('/removeTask', (req, res) => {
  const id = req.body?.id
  if (!id) {
    return res.status(400).json({ error: 'Body JSON requiere { id }' })
  }
  const idx = tasks.findIndex((t) => t.id === id)
  if (idx === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada', id })
  }
  tasks.splice(idx, 1)
  res.json({ ok: true, removedId: id })
})

app.delete('/removeGoal', (req, res) => {
  const id = req.body?.id
  if (!id) {
    return res.status(400).json({ error: 'Body JSON requiere { id }' })
  }
  const idx = goals.findIndex((g) => g.id === id)
  if (idx === -1) {
    return res.status(404).json({ error: 'Meta no encontrada', id })
  }
  goals.splice(idx, 1)
  res.json({ ok: true, removedId: id })
})

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`)
})

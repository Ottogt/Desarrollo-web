import express from 'express'
import crypto from 'crypto'
import { tasks } from '../data/store.js'

const router = express.Router()

router.get('/getTasks', (_req, res) => {
  res.json(tasks)
})

router.post('/addTask', (req, res) => {
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

router.delete('/removeTask', (req, res) => {
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

export default router

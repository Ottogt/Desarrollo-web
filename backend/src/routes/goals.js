import express from 'express'
import crypto from 'crypto'
import { goals } from '../data/store.js'

const router = express.Router()

router.get('/getGoals', (_req, res) => {
  res.json(goals)
})

router.post('/addGoal', (req, res) => {
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

router.delete('/removeGoal', (req, res) => {
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

export default router

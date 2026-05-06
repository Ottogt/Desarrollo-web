import express from 'express'
import tasksRouter from './tasks.js'
import goalsRouter from './goals.js'

const router = express.Router()

router.use(tasksRouter)
router.use(goalsRouter)

export default router

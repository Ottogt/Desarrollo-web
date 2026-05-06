import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { authMiddleware } from './middleware/auth.js'
import routes from './routes/index.js'

const app = express()
const PORT = Number(process.env.PORT) || 3000

app.use(cors())
app.use(express.json())

app.use(authMiddleware)

app.use(routes)

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`)
})

import express from 'express'

const app = express()
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.post('/echo', (req, res) => {
  res.json(req.body)
})

export default app

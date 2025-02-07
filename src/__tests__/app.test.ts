import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../app.js'

describe('API Tests', () => {
  it('GET /health returns ok', async () => {
    const response = await request(app).get('/health').expect(200)

    expect(response.body).toEqual({ status: 'ok' })
  })

  it('POST /echo returns request body', async () => {
    const payload = { message: 'hello' }
    const response = await request(app).post('/echo').send(payload).expect(200)

    expect(response.body).toEqual(payload)
  })
})

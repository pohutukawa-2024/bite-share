// back-end in-built-memory routes test

// import * as db from '../db/users'
import { describe, it, expect, beforeEach, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import server from '../server'
import { getMockToken } from './mockToken'

import db from '../db/connection'

beforeAll(async () => {
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

describe('Users Server Routes: /api/v1/users', () => {
  it("GET: should return own user's profile", async () => {
    const response = await request(server)
      .get('/api/v1/users')
      .set('authorization', `Bearer ${getMockToken()}`)

    expect(response.status).toBe(200)
    expect(response.body.user.username).toBe('hungryhenry')
  })

  it("PATCH: should update a user's profile", async () => {
    const updateForm = { username: 'averagehenry' }
    const response = await request(server)
      .patch('/api/v1/users')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(updateForm)
    expect(response.status).toBe(204)

    const result = await request(server)
      .get('/api/v1/users')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(result.body.user.username).toBe('averagehenry')
  })

  it('POST: should add a new user if not already in DB', async () => {
    const fakeUser = {
      username: 'cookies4me',
      fullName: 'Cookie Monster',
      email: 'cookies.are.my.thing@cookies.com',
      points: 0,
      location: 'sesame street',
      icon: '',
    }

    const response = await request(server)
      .post('/api/v1/users')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeUser)
    expect(response.status).toBe(201)

    const result = await request(server)
      .get(`/api/v1/users/cookies4me`)
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(result.body.user.fullName).toBe('Cookie Monster')
  })
})

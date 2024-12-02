// back-end in-built memory DB function test

import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import { getUser, updateUserByUsername } from './users'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('DB users', () => {
  it("should return a user's profile", async () => {
    const user = await getUser('auth0|67476f8defa904b4cd515493')
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('fullName')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('points')
    expect(user).toHaveProperty('location')
    expect(user).toHaveProperty('icon')
  })

  it("should update a user's profile", async () => {
    const profile = {
      id: 'auth0|67476f8defa904b4cd515493',
      username: 'averagehenry',
    }
    await updateUserByUsername(profile)
    const user = await getUser('auth0|67476f8defa904b4cd515493')
    expect(user.username).toBe('averagehenry')
  })
})

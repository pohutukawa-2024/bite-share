// back-end in-built memory DB function test

import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import {
  getUser,
  getUserByUsername,
  updateUserByUsername,
  upsertProfile,
} from './users'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('users DB functions', () => {
  it("should return own user's profile", async () => {
    const user = await getUser('auth0|67476f8defa904b4cd515493')
    expect(user.username).toBe('superhenry')
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('fullName')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('points')
    expect(user).toHaveProperty('location')
    expect(user).toHaveProperty('icon')
  })

  it("get another user's profile based on their username", async () => {
    const username = 'slatch'
    const user = await getUserByUsername(username)
    expect(user.id).toBe('auth0|6747d7830ba06e401cd48bdb')
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

  it('should insert a new user if not already present', async () => {
    const newUser = {
      id: 'auth0|99',
      username: 'cookies4me',
      fullName: 'Cookie Monster',
      email: 'cookies.are.my.thing@cookies.com',
      points: 0,
      location: 'sesame street',
      icon: '',
    }
    await upsertProfile(newUser)
    const user = await getUser('auth0|99')
    expect(user.username).toBe('cookies4me')
  })
})

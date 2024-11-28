export async function seed(knex) {
  await knex('users').del()

  await knex('users').insert([
    {
      id: 'auth|123',
      username: 'user1',
      full_name: 'User One',
      email: 'user1@example.com',
      points: 0,
      location: 'NorthShore',
    },
    {
      id: 'auth|456',
      username: 'user2',
      full_name: 'User Two',
      email: 'user2@example.com',
      points: 0,
      location: 'SouthAuckland',
    },
    {
      id: 'auth|789',
      username: 'user3',
      full_name: 'User Three',
      email: 'user3@example.com',
      points: 0,
      location: 'EastAuckland',
    },
    {
      id: 'auth|101',
      username: 'user4',
      full_name: 'User Four',
      email: 'user4@example.com',
      points: 0,
      location: 'WestAuckland',
    },
    {
      id: 'auth|202',
      username: 'user5',
      full_name: 'User Five',
      email: 'user5@example.com',
      points: 0,
      location: 'SouthAuckland',
    },
  ])
}

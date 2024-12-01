export async function seed(knex) {
  await knex('messages').del()
  await knex('baskets').del()
  await knex('matches').del()
  await knex('users').del()

  await knex('users').insert([
    {
      id: 'auth|123',
      username: 'user1',
      full_name: 'User One',
      email: 'user1@example.com',
      points: 0,
      location: 'North Shore',
      icon: '',
    },
    {
      id: 'auth|456',
      username: 'user2',
      full_name: 'User Two',
      email: 'user2@example.com',
      points: 0,
      location: 'South Auckland',
      icon: '',
    },
    {
      id: 'auth|789',
      username: 'user3',
      full_name: 'User Three',
      email: 'user3@example.com',
      points: 0,
      location: 'East Auckland',
      icon: '',
    },
    {
      id: 'auth|101',
      username: 'user4',
      full_name: 'User Four',
      email: 'user4@example.com',
      points: 0,
      location: 'West Auckland',
      icon: '',
    },
    {
      id: 'auth|202',
      username: 'user5',
      full_name: 'User Five',
      email: 'user5@example.com',
      points: 0,
      location: 'South Auckland',
      icon: '',
    },
    {
      id: 'auth0|67476f8defa904b4cd515493',
      username: 'superhenry',
      full_name: 'Henry Tran',
      email: 'henry@example.com',
      points: 0,
      location: 'East Auckland',
      icon: '',
    },
    {
      id: 'auth0|6747d7830ba06e401cd48bdb',
      username: 'slatch',
      full_name: 'Harpreet Singh',
      email: 'harpreet@example.com',
      points: 0,
      location: 'South Auckland',
      icon: '',
    },
    {
      id: 'auth0|6747d2aed8d9b71e8babb226',
      username: 'G-Dog',
      full_name: 'Gurwinder Singh',
      email: 'gurwinder@example.com',
      points: 0,
      location: 'South Auckland',
      icon: '',
    },
  ])

  await knex('baskets').insert([
    {
      id: 1,
      user_id: 'auth|123',
      description: 'Fresh vegetables and fruits for a healthy diet.',
      categories: 'Vegetables,Fruit',
      dietary_content: 'Vegan,GlutenFree',
      location: 'North Shore',
      status: 'active',
      image: '',
      created_at: 1698557400000,
      updated_at: 1698557700000,
    },
    {
      id: 2,
      user_id: 'auth|456',
      description: 'Mixed fruits basket for a nutritious snack.',
      categories: 'Fruit,Snacks',
      dietary_content: 'Vegetarian,GlutenFree',
      location: 'South Auckland',
      status: 'active',
      image: '',
      created_at: 1698559200000,
      updated_at: 1698559500000,
    },
    {
      id: 3,
      user_id: 'auth|789',
      description: 'Fresh seafood and eggs for a protein-packed meal.',
      categories: 'Seafood,Eggs',
      dietary_content: 'Halal',
      location: 'East Auckland',
      status: 'active',
      image: '',
      created_at: 1698561600000,
      updated_at: 1698561900000,
    },
    {
      id: 4,
      user_id: 'auth0|6747d2aed8d9b71e8babb226',
      description: 'Variety of meats for a protein-rich diet.',
      categories: 'Meat',
      dietary_content: 'GlutenFree,Halal',
      location: 'West Auckland',
      status: 'active',
      image: '',
      created_at: 1698564000000,
      updated_at: 1698564300000,
    },
    {
      id: 5,
      user_id: 'auth0|6747d2aed8d9b71e8babb226',
      description: 'Eggs and dairy items for a balanced diet.',
      categories: 'Eggs,Dairy',
      dietary_content: 'Vegetarian,GlutenFree',
      location: 'North Shore',
      status: 'inactive',
      image: '',
      created_at: 1698566400000,
      updated_at: 1698566700000,
    },
    {
      id: 6,
      user_id: 'auth0|6747d7830ba06e401cd48bdb',
      description: 'Assorted snacks including chips and confectionery.',
      categories: 'Snacks',
      dietary_content: 'Vegetarian',
      location: 'South Auckland',
      status: 'inactive',
      image: '',
      created_at: 1698568800000,
      updated_at: 1698569100000,
    },
    {
      id: 7,
      user_id: 'auth0|6747d7830ba06e401cd48bdb',
      description: 'Canned foods for emergency supplies.',
      categories: 'Canned',
      dietary_content: 'GlutenFree,Halal',
      location: 'East Auckland',
      status: 'active',
      image: '',
      created_at: 1698571200000,
      updated_at: 1698571500000,
    },
    {
      id: 8,
      user_id: 'auth0|67476f8defa904b4cd515493',
      description: 'Super junk food, no nutrition.',
      categories: 'Snacks',
      dietary_content: 'Vegetarian',
      location: 'East  Auckland',
      status: 'active',
      image: '',
      created_at: 1698573600002,
      updated_at: 1698573900002,
    },
    {
      id: 9,
      user_id: 'auth0|67476f8defa904b4cd515493',
      description:
        'I hijacked a milk delivery truck, and need to sell all this milk before it goes off',
      categories: 'Dairy',
      dietary_content: 'Vegetarian',
      location: 'East Auckland',
      status: 'active',
      image: '',
      created_at: 1698576000001,
      updated_at: 1698576300001,
    },
    {
      id: 10,
      user_id: 'auth0|67476f8defa904b4cd515493',
      description: 'Leftover drinks from a flat party',
      categories: 'Beverages',
      dietary_content: 'Vegetarian,Vegan',
      location: 'East Auckland',
      status: 'inactive',
      image: '',
      created_at: 1698578400000,
      updated_at: 1698578700000,
    },
  ])

  await knex('matches').insert([
    {
      id: 1,
      basket_id: 10,
      giver_id: 'auth0|67476f8defa904b4cd515493',
      receiver_id: 'auth0|6747d7830ba06e401cd48bdb',
      status: 'active',
      created_at: 1698557700000,
      updated_at: 1698558000000,
    },
    {
      id: 2,
      basket_id: 7,
      giver_id: 'auth0|67476f8defa904b4cd515493',
      receiver_id: 'auth0|6747d2aed8d9b71e8babb226',
      status: 'active',
      created_at: 1698559500000,
      updated_at: 1698559800000,
    },
    {
      id: 3,
      basket_id: 4,
      giver_id: 'auth0|6747d7830ba06e401cd48bdb',
      receiver_id: 'auth0|6747d2aed8d9b71e8babb226',
      status: 'active',
      created_at: 1698561600000,
      updated_at: 1698562200000,
    },
    {
      id: 11,
      basket_id: 5,
      giver_id: 'auth0|67476f8defa904b4cd515493',
      receiver_id: 'auth|202',
      status: 'active',
      created_at: 1698578400000,
      updated_at: 1698578700000,
    },
    {
      id: 12,
      basket_id: 6,
      giver_id: 'auth|456',
      receiver_id: 'auth0|67476f8defa904b4cd515493',
      status: 'active',
      created_at: 1698578400000,
      updated_at: 1698578700000,
    },
  ])

  await knex('messages').insert([
    {
      id: 21,
      matches_id: 1,
      sender_id: 'auth0|6747d7830ba06e401cd48bdb',
      message: 'Yo, is the basket ready or what?',
      sent_at: 1698579900000,
    },
    {
      id: 22,
      matches_id: 1,
      sender_id: 'auth0|67476f8defa904b4cd515493',
      message: 'Yep, meet you behind the GI PaknSave tonight at 10pm.',
      sent_at: 1698580500000,
    },
    {
      id: 23,
      matches_id: 2,
      sender_id: 'auth0|6747d2aed8d9b71e8babb226',
      message: 'Are these carrots gluten-free?',
      sent_at: 1698579900000,
    },
    {
      id: 24,
      matches_id: 2,
      sender_id: 'auth0|67476f8defa904b4cd515493',
      message: 'What?',
      sent_at: 1698580500000,
    },
    {
      id: 25,
      matches_id: 2,
      sender_id: 'auth0|6747d2aed8d9b71e8babb226',
      message: 'Can you bring it to my house? Okay thanks',
      sent_at: 1698581100000,
    },
  ])
}

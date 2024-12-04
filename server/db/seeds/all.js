export async function seed(knex) {
  await knex('messages').del()
  await knex('baskets').del()
  await knex('matches').del()
  await knex('users').del()

  await knex('users').insert([
    {
      id: 'auth0|101',
      username: 'Ron Swanson',
      full_name: 'Ron Swanson',
      email: 'ron@example.com',
      points: 0,
      location: 'West Auckland',
      icon: '',
    },
    {
      id: 'auth0|102',
      username: 'BigShrek',
      full_name: 'Shrek',
      email: 'shrek@example.com',
      points: 0,
      location: 'North Shore',
      icon: '',
    },
    {
      id: 'auth0|103',
      username: 'daphAttack',
      full_name: 'Daph Simons',
      email: 'daph@example.com',
      points: 0,
      location: 'East Auckland',
      icon: '',
    },
    {
      id: 'auth0|104',
      username: 'Ja-Rad',
      full_name: 'Jared Pinfold',
      email: 'jared@example.com',
      points: 0,
      location: 'West Auckland',
      icon: '',
    },
    {
      id: 'auth0|105',
      username: 'CookieMonster',
      full_name: 'Cookie Monster',
      email: 'cookies4me@example.com',
      points: 0,
      location: 'West Auckland',
      icon: '',
    },
    {
      id: 'auth0|67476f8defa904b4cd515493',
      username: 'hungryhenry',
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
      username: 'Gur-Winner',
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
      user_id: 'auth0|101',
      description:
        "Meat. Because anything else isn't food. The whisky? For emergencies only.",
      categories: 'Meat,Beverages',
      dietary_content: '',
      location: 'West Auckland',
      status: 'active',
      image: '',
      created_at: 1708557400005,
      updated_at: 1708557400005,
    },
    {
      id: 2,
      user_id: 'auth0|102',
      description: 'Onions, beets and swamp eggs.  All best eaten raw.',
      categories: 'Fruit,Vegetables,Eggs',
      dietary_content: 'Vegetarian',
      location: 'North Shore',
      status: 'active',
      image: '',
      created_at: 1708557400003,
      updated_at: 1708557400003,
    },
    {
      id: 3,
      user_id: 'auth0|103',
      description:
        'The perfect basket if you need to whip up an emergency dairy-free baked cheesecake',
      categories: 'Carbs,Canned,Baking,Fruit',
      dietary_content: 'DairyFree',
      location: 'East Auckland',
      status: 'active',
      image: '',
      created_at: 1708557400002,
      updated_at: 1708557400002,
    },
    {
      id: 4,
      user_id: 'auth0|104',
      description:
        'I hijacked a milk delivery truck, and need to sell all this milk before it goes off',
      categories: 'Dairy',
      dietary_content: 'GlutenFree',
      location: 'West Auckland',
      status: 'active',
      image: '',
      created_at: 1708557400004,
      updated_at: 1708557400004,
    },
    {
      id: 5,
      user_id: 'auth0|6747d7830ba06e401cd48bdb',
      description: 'Only the finest Halal-certified meats and cooking spices.',
      categories: 'Meat,Canned,Baking',
      dietary_content: 'Halal',
      location: 'South Auckland',
      status: 'active',
      image: '',
      created_at: 1708557400000,
      updated_at: 1708557400000,
    },
    {
      id: 6,
      user_id: 'auth0|6747d2aed8d9b71e8babb226',
      description:
        'Avocados, quinoa, and vegan jerky.  What else would you need?',
      categories: 'Fruit,Canned,Vegetables,Snacks',
      dietary_content: 'Vegan',
      location: 'South Auckland',
      status: 'active',
      image: '',
      created_at: 1708557400004,
      updated_at: 1708557400004,
    },
    {
      id: 7,
      user_id: 'auth0|67476f8defa904b4cd515493',
      description: 'Some left over cookies from last weekend.',
      categories: 'Snacks',
      dietary_content: '',
      location: 'East Auckland',
      status: 'pending',
      image: '',
      created_at: 1698557400000,
      updated_at: 1698557700000,
    },
  ])

  await knex('matches').insert([
    {
      id: 1,
      basket_id: 7,
      giver_id: 'auth0|67476f8defa904b4cd515493',
      receiver_id: 'auth0|105',
      status: 'active',
      created_at: 1698557700000,
      updated_at: 1698558000000,
    },
  ])

  await knex('messages').insert([
    {
      id: 1,
      matches_id: 1,
      sender_id: 'auth0|105',
      message:
        'Me see your basket of delicious cookies.  Me would be forever grateful if you would give me that basket. Om nom nom!',
      sent_at: 1698579900000,
      is_read: false,
    },
    {
      id: 2,
      matches_id: 1,
      sender_id: 'auth0|105',
      message: 'Hello?? Me still waiting',
      sent_at: 1698589900000,
      is_read: false,
    },
    {
      id: 3,
      matches_id: 1,
      sender_id: 'auth0|105',
      message: 'Please..',
      sent_at: 1698599900000,
      is_read: false,
    },
  ])
}

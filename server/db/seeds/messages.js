export async function seed(knex) {
  await knex('messages').del()

  await knex('messages').insert([
    {
      id: 1,
      matches_id: 1,
      sender_id: 'auth|456',
      message: 'Hi, I saw you have some extra food available. Can I take it?',
      sent_at: 1698556800000,
    },
    {
      id: 2,
      matches_id: 1,
      sender_id: 'auth|123',
      message:
        'Sure, I have some leftover pizza. When would you like to pick it up?',
      sent_at: 1698557100000,
    },
    {
      id: 3,
      matches_id: 2,
      sender_id: 'auth|101',
      message:
        'I saw your post about free food. Are the sandwiches still available?',
      sent_at: 1698560400000,
    },
    {
      id: 4,
      matches_id: 2,
      sender_id: 'auth|789',
      message:
        'Yes, I have a few sandwiches left. When can you come by to pick them up?',
      sent_at: 1698561000000,
    },
    {
      id: 5,
      matches_id: 3,
      sender_id: 'auth|123',
      message:
        'Hi, I noticed you’re giving away some food. Is the soup still available?',
      sent_at: 1698562800000,
    },
    {
      id: 6,
      matches_id: 3,
      sender_id: 'auth|202',
      message:
        'Yes, I have some leftover soup. Do you want to come pick it up?',
      sent_at: 1698563100000,
    },
    {
      id: 7,
      matches_id: 4,
      sender_id: 'auth|456',
      message:
        'Hello, I’m looking for some free food. Do you still have the rice available?',
      sent_at: 1698565200000,
    },
    {
      id: 8,
      matches_id: 4,
      sender_id: 'auth|789',
      message: 'Yes, I have some rice left. Would you like to pick it up soon?',
      sent_at: 1698565500000,
    },
    {
      id: 9,
      matches_id: 5,
      sender_id: 'auth|101',
      message:
        'Hi! I saw your offer for free fruit. Are the apples still available?',
      sent_at: 1698567600000,
    },
    {
      id: 10,
      matches_id: 5,
      sender_id: 'auth|202',
      message:
        'Yes, I have a few apples left. When can you come by to grab them?',
      sent_at: 1698567900000,
    },
    {
      id: 11,
      matches_id: 6,
      sender_id: 'auth|123',
      message:
        'Hello, I saw you’re giving away some bread. Is it still available?',
      sent_at: 1698570000000,
    },
    {
      id: 12,
      matches_id: 6,
      sender_id: 'auth|789',
      message:
        'Yes, I have some fresh bread. When would you like to come pick it up?',
      sent_at: 1698570300000,
    },
    {
      id: 13,
      matches_id: 7,
      sender_id: 'auth|456',
      message:
        'Hi, I saw your post about leftover pasta. Is it still available?',
      sent_at: 1698572400000,
    },
    {
      id: 14,
      matches_id: 7,
      sender_id: 'auth|101',
      message:
        'Yes, I have some pasta left. When would you like to come get it?',
      sent_at: 1698572700000,
    },
    {
      id: 15,
      matches_id: 8,
      sender_id: 'auth|789',
      message: 'Hello, are the free bagels still available?',
      sent_at: 1698574800000,
    },
    {
      id: 16,
      matches_id: 8,
      sender_id: 'auth|202',
      message:
        'Yes, I have some bagels left. When would you like to collect them?',
      sent_at: 1698575100000,
    },
    {
      id: 17,
      matches_id: 9,
      sender_id: 'auth|123',
      message: 'Hi, I saw you have extra cakes. Are they still up for grabs?',
      sent_at: 1698577200000,
    },
    {
      id: 18,
      matches_id: 9,
      sender_id: 'auth|101',
      message:
        'Yes, I have some leftover cakes. You’re welcome to come pick them up!',
      sent_at: 1698577500000,
    },
    {
      id: 19,
      matches_id: 10,
      sender_id: 'auth|456',
      message:
        'I saw your post about free snacks. Are the chips still available?',
      sent_at: 1698579600000,
    },
    {
      id: 20,
      matches_id: 10,
      sender_id: 'auth|202',
      message: 'Yes, I have some chips left. When would you like to come by?',
      sent_at: 1698579900000,
    },
  ])
}

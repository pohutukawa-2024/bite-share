export async function up(knex) {
  await knex.schema.createTable('matches', (table) => {
    table.increment('id').primary()
    table.integer('giver_id')
    table.integer('receiver_id')
    table.string('status')
    table.timestamp('sent_at')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('matches')
}

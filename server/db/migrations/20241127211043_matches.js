export async function up(knex) {
  await knex.schema.createTable('matches', (table) => {
    table.increments('id').primary()
    table.integer('giver_id')
    table.integer('receiver_id')
    table.string('status')
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('matches')
}

export async function up(knex) {
  await knex.schema.createTable('matches', (table) => {
    table.increments('id').primary()
    table.integer('basket_id').references('baskets.id').onDelete('CASCADE')
    table.string('giver_id').references('users.id')
    table.string('receiver_id').references('users.id')
    table.string('status')
    table.timestamp('created_at')
    table.timestamp('updated_at')

    // Add indices
    table.index(['status'])
    table.index(['giver_id'])
    table.index(['receiver_id'])
  })
}

export async function down(knex) {
  await knex.schema.dropTable('matches')
}

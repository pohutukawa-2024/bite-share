export async function up(knex) {
  await knex.schema.createTable('baskets', (table) => {
    table.increment('id').primary()
    table.integer('user_id')
    table.string('description')
    table.string('categories')
    table.string('dietary_content')
    table.string('location')
    table.string('status')
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('baskets')
}

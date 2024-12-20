export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.string('id').primary()
    table.string('username').unique()
    table.string('full_name')
    table.string('email')
    table.integer('points')
    table.string('location')
    table.string('icon')

    // Add indices
    table.index(['id'])
    table.index(['username'])
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}

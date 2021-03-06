exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
      table.increments();
      table.integer('user_id').notNullable();
      table.integer('post_id').notNullable();
      table.string('content').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};

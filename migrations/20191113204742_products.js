
exports.up = (knex, Promise) => {
    return knex.schema.createTable('Products', function (table) {
        table.increments('id').primary()
        table.string('name')
        table.integer('price')
        table.text('description')
        table.text('ingredients')
        table.string('weight')
        table.string('date_available')
        table.boolean('in_stock')
      })
  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('Products')
  
};

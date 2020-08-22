
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        //translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY
        // table.integer("id").notNull().unique().primary()
        table.increments("id")
        table.text("VIN").notNullable().unique()
        table.text("make").notNullable()
        table.text("model").notNullable()
        table.text("milage").notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};

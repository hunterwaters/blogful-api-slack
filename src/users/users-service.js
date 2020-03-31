const UsersService = {
    getAllUsers(knex) {
        return knex.select('*').from('blogful_users')
    },

    insertUser(knex, newUser) {
        return knex
        .insert(newUser)
        .into('blogful-users')
        .returning('*')
        .then(rows => {
            return rows[0]
        })
    },
    
    getById (knex, id) {
        return knex
        .from('blogful-users')
        .select('*')
        .where('id', id)
        .first()
    },

    deleteUser(knex, id) {
        return knex('blogful-users')
        .where({ id })
        .update(newUserFields)
    },

    updateUser(knex, id, newUserFields) {
        return knex('blogful-users')
        .where({ id })
        .update(newUserFields)
    },
}

module.exports = UsersService
const knex = require('../knex')

module.exports = {
    getAll(uid) {
        return knex('entries')
        .select('id', 'date', 'temp', 'flow')
        .where('user_id', uid)
        .then(entries => transform(entries))
    },
    create(uid, body) {
        return knex('entries')
        .where('user_id', uid)
        .insert(body)
        .returning('id')
    }
}

function transform(entries) {
    let transformed = {}
    entries.forEach(entry => {
        let month = entry.date.getMonth() + 1
        transformed[month] = transformed[month] || []
        transformed[month].push({
            id: entry.id, 
            flow: entry.flow,
            day: entry.date.getDate() 
        })
    })
    return transformed
}
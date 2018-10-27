module.exports = {
	development: {
		client: 'pg',
		connection: process.env.DATABASE_URL
 	},
	test: {
		client: 'pg',
		connection: process.env.DATABASE_URL
	},
	production: {
		client: 'pg',
		conneciton: process.env.DATABASE_URL
	}

}

// npm install sequelize pg-hstore pg

const { Sequelize } = require('sequelize')
const driver = new Sequelize('heroes', 'williamkoller', 'minhasenhasecreta', {
	host: 'localhost',
	dialect: 'postgres',
	quoteIdentifiers: false,
})

async function main() {
	const Herois = driver.define(
		'herois',
		{
			id: {
				type: Sequelize.INTEGER,
				required: true,
				primaryKey: true,
				autoIncrement: true,
			},
			nome: {
				type: Sequelize.STRING,
				required: true,
			},
			poder: {
				type: Sequelize.STRING,
				required: true,
			},
		},
		{
			tableName: 'herois',
			freezeTableName: false,
			timestamps: false,
		}
	)
	await Herois.sync()
	// await Herois.create({
	// 	nome: 'Lanterna Verde',
	// 	poder: 'Anel',
	// })
	const result = await Herois.findAll({ raw: true, attributes: ['nome'] })
	console.log('result', result)
}

main()

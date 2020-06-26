const ICrud = require('./interfaces/interfaceCrud')

const { Sequelize } = require('sequelize')

class Postgres extends ICrud {
	constructor() {
		super()
		this._driver = null
		this._herois = null
		this._connect()
	}
	async isConnected() {
		try {
			await this._driver.authenticate()
			return true
		} catch (error) {
			console.log('Fail!', error)
			return false
		}
	}
	async defineModel() {
		this._herois = driver.define(
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
	}
	create(item) {
		console.log('Item foi salvo em Postgres')
	}
	_connect() {
		this._driver = new Sequelize(
			'heroes',
			'williamkoller',
			'minhasenhasecreta',
			{
				host: 'localhost',
				dialect: 'postgres',
				quoteIdentifiers: false,
			}
		)
	}
}

module.exports = Postgres

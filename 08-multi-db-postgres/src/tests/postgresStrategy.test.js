const assert = require('assert')
const Postgres = require('../db/strategies/postgres')
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = { nome: 'Gaviao Negro', poder: 'Flexas' }

describe('Postgres Strategy ', function () {
	this.timeout(Infinity)
	this.beforeAll(async function () {
		await context.connect()
	})
	it('Postgres SQL Connection', async function () {
		const result = await context.isConnected()
		assert.equal(result, true)
	})
	it.only('Cadastrar', async function () {
		const result = await context.create(MOCK_HEROI_CADASTRAR)
		delete result.id
		assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
	})
})

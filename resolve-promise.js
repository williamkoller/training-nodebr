/**
 0 Obter um usuario
 1 Obter um numero de telefone de um usuario a partir de seu Id
 2 Obteer o endereco do usuario pelo Id
 */
// importamos um módulo interno do node.js

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
	// quando der algum problema -> reject(ERRO)
	// quando success -> RESOLV
	return new Promise(function resolvePromise(resolve, reject) {
		setTimeout(() => {
			//return reject(new Error('DEU RUIM DE VERDADE'))
			return resolve({
				id: 1,
				nome: 'William',
				dataNasc: new Date()
			})
		}, 1000)
	})
}

function obterTelefone(idUsuario) {
	return new Promise( function resolvePromise(resolve, reject) {
		setTimeout(() => {
			return resolve({
				telefone: '1199002',
				ddd: 11
			})
		}, 2000)
	})
}

function obterEndereco(idUsuario, callback) {
	setTimeout(() => {
		return callback(null, {
			rua: 'dos bolos',
			numero: 0
		})
	}, 2000);
}

// 1º passo adicionar a palavra async -> automaticamente ela tertonará uma Promise

main()
async function main() {
	try {
		console.time('medida-promise')
		const usuario = await obterUsuario()
		
		const resultado = await Promise.all([
			obterTelefone(usuario.id),
			obterEnderecoAsync(usuario.id)
		])
		const endereco = resultado[1]
		const telefone = resultado[0]
		console.log(`
			Nome: ${usuario.nome},
			Telefone: (${telefone.ddd}) ${telefone.telefone},
			Endereco: ${endereco.rua}, ${endereco.numero}
			
		`)
		console.timeEnd('medida-promise')

	} catch (error) {
		console.error('DEU RUIM', error)
	}
}

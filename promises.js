/**
 0 Obter um usuario
 1 Obter um numero de telefone de um usuario a partir de seu Id
 2 Obteer o endereco do usuario pelo Id
 */
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
  return new Promise(function resolvePromise(resolve, reject) {
		setTimeout(() => {
			return resolve({
				telefone: '9999999',
				ddd: 41
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


const usuarioPromise = obterUsuario()
// para manipular o success usamos a função .then
// para manipular erros usamos o .catch
// usuario -> telefone -> telefone
usuarioPromise
	.then(function (usuario) {
		return obterTelefone(usuario.id)
			.then(function resolverTelefone(result) {
				return {
					usuario: {
						nome: usuario.nome,
						id: usuario.id
					}, 
					telefone: result
				}
			})
	})
	.then(function (resultado) {
		const endereco = obterEnderecoAsync(resultado.usuario.id)
		return endereco.then(function resolverEndereco(result) {
			return {
				usuario: resultado.usuario,
				telefone: resultado.telefone,
				endereco: result
			}
		})
	})
	.then(function (resultado) {
		console.log(`
			Nome: ${resultado.usuario.nome}
			Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero} 
			Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
		`)
	})
	.catch(function (error) {
		console.error('Deu RUIM', error)
	})

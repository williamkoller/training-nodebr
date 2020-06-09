/**
 0 Obter um usuario
 1 Obter um numero de telefone de um usuario a partir de seu Id
 2 Obteer o endereco do usuario pelo Id
 */

function obterUsuario(callback) {
  setTimeout(() => {
			return callback(null, {
				id: 1,
				nome: 'William',
				dataNasc: new Date()
			})
		}, 1000)
}

function obterTelefone(idUsuario, callback) {
		setTimeout(() => {
			return callback(null, {
				telefone: '1199002',
				ddd: 11
			})
		}, 2000)
}

function obterEndereco(idUsuario, callback) {
	setTimeout(() => {
		return callback(null, {
			rua: 'dos bolos',
			numero: 0
		})
	}, 2000);
}


obterUsuario(function resolverUsuario(erro, usuario) {
  if (erro) {
    console.error('DEU RUIM em USUARIO', erro)
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
    if (erro1) {
      console.error('DEU RUIM em TELEFONE', erro)
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco){
      if (erro2) {
        console.error('DEU RUIM em ENDERECO', erro)
        return;
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua}, ${endereco.numero}
        Telefone: (${telefone.ddd}) ${telefone.telefone}
      `)
    })
  })
})

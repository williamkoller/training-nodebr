const service = require('./service-module')

async function main () {
  try {
    const results = await service.obterPessoas('a')
    const names = results.results.map(function (pessoa) {
      return pessoa.name
    })
    console.log('names', names)
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()
const service = require('./service-module')

async function main() {
  try {
    const result = await service.obterPessoas('a')
    const names = []
    console.time('for')
    for (let t = 0; t <= result.results.length - 1; t++ ) {
      const pessoa = result.results[t]
      names.push(pessoa.name)
    }
    console.timeEnd('for')
    
    console.time('for-in')
    for (let t in result.results) {
      const pessoa = result.results[t]
      names.push(pessoa.name)
    }
    console.timeEnd('for-in')
    
    console.time('for-of')
    for (pessoa of result.results) {
      names.push(pessoa.name)
    }
    console.timeEnd('for-of')
    
    console.log(`names`, names)
  } catch (error) {
    console.error(`erro interno`, error)
  }
}

main()
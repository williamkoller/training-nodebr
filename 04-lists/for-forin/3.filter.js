const { obterPessoas } = require('./service-module')

Array.prototype.meuFilter = function (callback) {
  const list = []
  for (index in this) {
    const item = this[index]
    const result = callback(item, index, this)
    // 0, "", null, undefined === false
    if (!result) continue;
      list.push(item)
  }
  return list;
}


async function main () {
  try {
    const { results } = await obterPessoas('a')
    // const familyLars = results.filter(function (item) {
    //   // por padrão precisa retornar um boolean
    //   // para informar se deve matrer ou remover da lista
    //   // false > remove da lista
    //   // true > mantem
    //   // não encontrou = -1
    //   // encontrou = posicaoNoArray
    //   const result = item.name.toLowerCase().indexOf('lars') === -1
    //   return result
    // })
    const familyLars = results.meuFilter((item, index, list) => {
      console.log(`index: ${index}`, list.length)
      return item.name.toLowerCase().indexOf('lars') !== -1
    })
      
    const names = familyLars.map((pessoa) => pessoa.name)
    console.log(names)
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()
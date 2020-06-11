const {
    obterPessoas
} = require('./service-module')

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a')
        const pesos = results.map(item => parseInt(item.height))
        console.log(`pesos: ${pesos}`)
        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo
        })

        console.log(`total: ${total}`)
    } catch (error) {
        console.log('DEU RUIM', error)
    }
}

main()

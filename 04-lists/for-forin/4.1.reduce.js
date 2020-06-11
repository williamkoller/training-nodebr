const {
    obterPessoas
} = require("./service-module")

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let index = 0; index <= this.length; index++) {
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
};

async function main() {
    try {
        const {
            results
        } = await obterPessoas("a")
        const pesos = results.map((item) => parseInt(item.height))
        console.log(`pesos: ${pesos}`)

        const minhaLista = [
            ["William", "Koller"],
            ["WK Cloud", "NodeJs"]
        ];
        const total = minhaLista
            .meuReduce((anterior, proximo) => {
                return anterior.concat(proximo)
            }, [])
            .join(", ")
        console.log(`total: ${total}`)
    } catch (error) {
        console.log("DEU RUIM", error)
    }
}

main()

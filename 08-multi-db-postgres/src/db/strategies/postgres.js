const ICrud = require('./interfaces/interfaceCrud')

class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('Item foi salvo em Postgres')
    }

}

module.exports = Postgres

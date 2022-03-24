const db = require('./db');

const Pagamento = db.sequelize.define('pagamentos', { //CRIA A TABELA
    nome: {
        type: db.Sequelize.STRING
    },

    valor: {
        type: db.Sequelize.DOUBLE
    }
});

//Pagamento.sync({force: true}); //cria tabela- sempre que executa arquivo cria uma nova table e apaga a anterior

module.exports = Pagamento;

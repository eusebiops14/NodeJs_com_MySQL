//Utilizando o sequelize para conectar com o banco de dados- aula 11
// link aula: https://www.youtube.com/watch?v=7udHlHLHUDw&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=11
//link documentacao: https://sequelize.org/v6/manual/query-interface.html
const Sequelize = require('sequelize');

//conecta com BD usando sequelize
const sequelize = new Sequelize('celke','root','Eu04121404@#', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log("Conexão realizada com sucesso !!");
}).catch(function(err){
    console.log('Erro ao tentar conectar com B: ' + err);
});

//Criando a tabela pagamentos no MySQL usando sequelize
const Pagamento = sequelize.define('pagamentos', {
    nome : { //coluna nome da tabela pagamentos
        type: Sequelize.STRING,
    },

    valor : { //coluna valor da tabela pagamentos
        type: Sequelize.DOUBLE,
    }
})

//Pagamento.sync({force:true}); //cria a tabela- comentei para nao ficar recriando toda vez

Pagamento.create({
    nome: "Energia",
    valor: 220
})
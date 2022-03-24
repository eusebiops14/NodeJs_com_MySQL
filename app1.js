/* FONTE: mini curso de Node.js CELKE- YOUTUBE
Aulas 1 a 10- usar o arquivo app1.js
AULA 11 - usar app2.js
*/



/*var http = require('http');

http.createServer(function(req,res) {
    res.end("Gerenciador");
}).listen(8080); //desse jeito sempre temos que reiniciar o servidor para ver alterações na pagina*/

const express = require("express");

const app = express();

//Criando onexao com BD MySQL

const mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Eu04121404@#',
    database: 'celke',

})

connection.connect(function(err) { //realiza a conexao de fato com bd
    if (err) {
        console.error('error connecting' + err.stack);
        return;
    }
    console.log('connect as id ' + connection.threadId + ' SUCESS !');
})

//realiza insert no BD
connection.query("INSERT INTO users (name,email) VALUES ('Kelly' , 'kelly@celke.com.br' )", function(err,result){
    if(!err){
        console.log('Usuario cadastrado com sucesso');
    }else{
        console.log('Erro ao Cadastrar Usuário');
    }
})

//realiza consulta no banco de dados na tabela user
connection.query('SELECT * FROM users', function(err,rows,fields){ //retorna 
    if(!err){
        console.log('Resultado: ', rows);
    }else{
       console.log('ERRO AO CONSULTAR !') 
    }
})

//realiza atualização de dados na tabela user do BD
connection.query("UPDATE users SET name = 'Eusebio' WHERE id = 1 ", function(err,result){
    if(!err){
        console.log('Usuario editado com sucesso');
    }else{
        console.log('Erro ao editar Usuário');
    }
})

//excluir dados da tabela
connection.query("DELETE FROM users WHERE id = 3", function(err,result){
    if(!err){
        console.log('Usuario excluido com sucesso');
    }else{
        console.log('Erro ao excluir Usuário');
    }
})



app.get("/", function(req,res){
    res.sendFile(__dirname + "/src/index.html"); //carrega o arquivo html oindex.html na pagina do servidor app.js
})


app.get("/sobre-empresa", function(req,res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.get("/blog", function(req,res){
    res.send("Pagina Blog");
});

app.get("/contato", function(req,res){
    res.send("Pagina de Contato");
});

app.listen(8080); //inicia o servidor
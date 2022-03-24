//Usar na aula 12- Handlebars com node.js
//link: https://www.youtube.com/watch?v=kK98Qr03qNo&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=12

const express = require("express");
const app = express();
const {engine} = require("express-handlebars"); //no video ele passa handlebars ao inves de engine aqui, mas da erro (https://stackoverflow.com/questions/69962757/typeerror-handlebars-is-not-a-function)
const bodyParser = require("body-parser");
const Pagamento = require("./models/Pagamento");


//configurações handlebars
app.engine('handlebars', engine({defaultLayout:'main'}));
app.set('view engine','handlebars'); //diferente do tutorial mais funciona
app.set("views", "./views");


//configurações bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rotas com express
app.get('/pagamento',function(req,res){
    Pagamento.findAll().then(function(pagamentos){
        res.render('pagamento', {
            pagamentos: pagamentos.map(pagamento => pagamento.toJSON())}); //DIFERENTE DO TUTORIAL (VER: https://pt.stackoverflow.com/questions/466598/handlebars-access-has-been-denied-to-resolve-the-property-titulo-because-it-i)

    })
})


app.get('/cad-pagamento', function(req,res){
    res.render('cad-pagamento');
})


app.post('/add-pagamento',function(req,res){ //rota por onde enviamos os dados do formulario para o bd
    //res.send("Nome: " + req.body.nome + "<br> Valor: "+ req.body.valor + "<br>");
    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        //res.send("Pagamento cadastrado com sucesso!")
        res.redirect('/pagamento');
    }).catch(function(erro){
        res.send("Erro: Pagamento não foi cadastrado com sucesso" + erro)
    })
})


app.listen(8080) //inicia o servidor
console.log("Servidor Iniciado com Sucesso.")
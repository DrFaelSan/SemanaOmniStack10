//aqui importo express para ter acesso as funcionalidades dessa biblioteca.
const express = require('express');

//aqui é a instancia da biblioteca do MongoDB
const mongoose = require('mongoose');

const routes = require('./routes')
const cors = require('cors');
//concection string no mongoDb.
mongoose.connect('mongodb+srv://DrFaelSan:DrFaelSan@cluster0-xaobf.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(cors());
//declaro que todas as rotas da aplicação, vai  entender que o corpo das requisições recebe dados em JSON.
app.use(express.json());
app.use(routes);

//aqui declaro qual porta localhost vai ser acessada no caso :3333
app.listen(3333)

// Métodos HTTP: GET, POST ,  PUT, DELETE

/*
Tipos de Parâmetros:

Query Params: request.queey(Filtros, ordenação, paginação , ...)
Router Params: request.params (Identificar um recurso na alteração ou remoção)
Body:  request.body (Dados para criação ou alteração de um registro)
*/


//MongoDB (Não-relacional) *Não precisamos instalar na maquina*


/*
    Após todas configurações inserimos o comando "node index.js" no terminal para rodar o servidor node.
    e para finalizar o servidor é Ctrl + C.

    instalamos também o nodemon como dependência de desenvolvimento para  observar alterações na aplicação e aplicar atualizar automaticamente os dados.
    sempre que formos aplicar atualizações no app ou manipular como desenvolvedor executar o comando "npm run dev".
*/
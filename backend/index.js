//aqui importo express para ter acesso as funcionalidades dessa biblioteca.
const express = require('express');

const app = express();


//aqui crio a primeira rota para minha aplicação.
app.get('/', (request, response) => {
    return response.json({
        message: 'Hello OmniStack'
    })
});



//aqui declaro qual porta localhost vai ser acessada no caso :3333
app.listen(3333)

/*
    Após todas configurações inserimos o comando "node index.js" no terminal para rodar o servidor node.
    e para finalizar o servidor é Ctrl + C.

    instalamos também o nodemon como dependência de desenvolvimento para  observar alterações na aplicação e aplicar atualizar automaticamente os dados.
    sempre que formos aplicar atualizações no app ou manipular como desenvolvedor executar o comando "npm run dev".
*/
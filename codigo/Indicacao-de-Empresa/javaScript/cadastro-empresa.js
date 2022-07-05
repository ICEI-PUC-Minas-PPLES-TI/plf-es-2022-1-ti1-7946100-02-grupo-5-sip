// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Graham",
            "tipo": "Comercial",
            "cidade": "Belo Horizonte",
            "categoria": "amigos",
            "email": "Sincere@april.biz",
            "cnpj": "1-770-736-8031",
            "endereco": "Rua Olaria 77"
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "tipo": "Comercial",
            "cidade": "Betim",
            "categoria": "familia",
            "email": "Shanna@melissa.tv",
            "cnpj": "010-692-6593",
            "endereco": "Rua Juiz de Fora 452"
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "tipo": "Comercial",
            "cidade": "Rio de Janeiro",
            "categoria": "trabalho",
            "email": "Nathan@yesenia.net",
            "cnpj": "1-463-123-4447",
            "endereco": ""
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "tipo": "Comercial",
            "cidade": "Betim",
            "categoria": "trabalho",
            "email": "Julianne.OConner@kory.org",
            "cnpj": "493-170-9623 x156",
            "endereco": "kale.biz"
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "tipo": "Comercial",
            "cidade": "São Paulo",
            "categoria": "familia",
            "email": "Lucio_Hettinger@annie.ca",
            "cnpj": "(254)954-1289",
            "endereco": "demarco.info"
        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",
            "tipo": "Comercial",
            "cidade": "Rio de Janeiro",
            "categoria": "trabalho",
            "email": "Karley_Dach@jasper.info",
            "cnpj": "1-477-935-8478",
            "endereco": "ola.org"
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "tipo": "Comercial",
            "cidade": "Belo Horizonte",
            "categoria": "amigos",
            "email": "Telly.Hoeger@billy.biz",
            "cnpj": "210.067.6132",
            "endereco": "elvis.io"
        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",
            "tipo": "Comercial",
            "cidade": "Belo Horizonte",
            "categoria": "familia",
            "email": "Sherwood@rosamond.me",
            "cnpj": "586.493.6943",
            "endereco": "jacynthe.com"
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "tipo": "Comercial",
            "cidade": "Betim",
            "categoria": "amigos",
            "email": "Chaim_McDermott@dana.io",
            "cnpj": "(775)976-6794",
            "endereco": "conrad.com"
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "tipo": "Comercial",
            "cidade": "São Paulo",
            "categoria": "amigos",
            "email": "Rey.Padberg@karina.biz",
            "cnpj": "024-648-3804",
            "endereco": "ambrose.net"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "tipo":contato.tipo,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "cnpj": contato.cnpj,
        "endereco": contato.endereco,
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].tipo = contato.tipo,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].cnpj = contato.cnpj,
    db.data[index].endereco = contato.endereco

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}
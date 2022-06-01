// declara um conjunto inicial de chamados
var db_chamados_inicial = {
    "data": [
        {
            "id": 1,
            "motivo": "Caixa d'agua vazando",
            "nome": "Leanne Graham",
            "telefone": "1-770-736-8031",
            "email": "Sincere@april.biz",
            "predio": "predio 5",
            "apartamento": "1005",
            "categoria": "Hidráulica",
            "data": "21/01/22",
            "descricao": "A caixa d'agua esta vazando. Minha cobertura está inundada e começando infiltrações em alguns pontos do apartamento.",
            "status": "andamento"
        },
        {
            "id": 2,
            "motivo": "Botão do elevador não funciona.",
            "nome": "Ervin Howell",
            "telefone": "(11) 98632-3232",
            "email": "Ervin@hotmail.com",
            "predio": "predio 2",
            "apartamento": "809",
            "categoria": "Eletrônica",
            "data": "15/05/22",
            "descricao": "O botão do elevador do prédio 5 não está funcionando. Isso está gerando transtorno pois ou tenho que descer um andar acima ou abaixo do meu para conseguir chegar em casa.",
            "status": "andamento"
        },
        {
            "id": 3,
            "motivo": "Muitas baratas no meu apartamento",
            "nome": "Julianne",
            "telefone": "(32) 99999-8659",
            "email": "Julianne.OConner@kory.org",
            "predio": "predio 4",
            "apartamento": "201",
            "categoria": "Hidráulica",
            "data": "21/01/22",
            "descricao": "Está tendo muitas baratas no meu apartamento. Peço, por gentileza, que chamem um detetizador.",
            "status": "concluido"
        },
        {
            "id": 4,
            "motivo": "Lona rasgada",
            "nome": "Lucio dos Santos",
            "telefone": "1-770-736-8031",
            "email": "Lucio_Hettinger@annie.ca",
            "predio": "predio 3",
            "apartamento": "103",
            "categoria": "Substituição",
            "data": "21/01/22",
            "descricao": "Devido a forte chuva de granito ontem, furou e rasgou toda a lona da cobertura do estacionamento. Favor realizar substituição o mais rápido possível, pois não quero meu carro tomando chuva ou sol.",
            "status": "concluido"
        },
        {
            "id": 5,
            "motivo": "Portão da garagem com problema",
            "nome": "Henrique Lima",
            "telefone": "1-770-736-8031",
            "email": "henrique,lima@gmail.com",
            "predio": "predio 2",
            "apartamento": "205",
            "categoria": "Elétrica",
            "data": "01/05/22",
            "descricao": "O portão da garagem está com problema. Em certos momentos só abre até a metade. O porteiro tem que ficar abrindo manualmente. Favor verificar",
            "status": "pendente"
        },
        {
            "id": 6,
            "motivo": "Lâmpadas da garagem estão queimadas",
            "nome": "Bernardo Augusto Lopes",
            "telefone": "1-770-736-8031",
            "email": "bernardolopes@hotmail.com",
            "predio": "predio 4",
            "apartamento": "602",
            "categoria": "Substituição",
            "data": "19/04/22",
            "descricao": "As lâmpadas da garagem estão queimadas. Está ficando uma escuridão em certos pontos do condomínio apartir das 18hrs.",
            "status": "pendente"
        },
        {
            "id": 7,
            "motivo": "Piscina extremamente suja",
            "nome": "Leandra Simões Vieira",
            "telefone": "1-770-736-8031",
            "email": "Ssimoes_leandra@yahoo.com.br",
            "predio": "predio 2",
            "apartamento": "304",
            "categoria": "Hidráulica",
            "data": "29/04/22",
            "descricao": "Fui tomar sol no último sábado na área da piscina e ela estava extrememnte suja! È impossível usar a piscina com essa imundice. Solicito limpeza urgente!",
            "status": "pendente"
        },
        {
            "id": 8,
            "motivo": "Infiltração no meu apartamento",
            "nome": "Pedro Sampaio Moraes",
            "telefone": "1-770-736-8031",
            "email": "moraesampaio@gmail.com",
            "predio": "predio 1",
            "apartamento": "203",
            "categoria": "Hidráulica",
            "data": "11/03/22",
            "descricao": "Várias paredes do meu apartamento estão com infiltração. Solicito que haja uma verificação nos apartamentos ao redor para resolver o mais rápido possível pis está dando umidade e estragando meus móveis.",
            "status": "pendente"
        },
        {
            "id": 9,
            "motivo": "Sauna não está funcionando",
            "nome": "Ana Clara Colares",
            "telefone": "1-770-736-8031",
            "email": "colaresana@april.biz",
            "predio": "predio 4",
            "apartamento": "101",
            "categoria": "Eletrônica",
            "data": "12/04/22",
            "descricao": "O motor da sauna não está funcionando. Parece que está com defeito.",
            "status": "concluido"
        },
        {
            "id": 10,
            "motivo": "Problema no meu chuveiro",
            "nome": "Joao Victor Melo",
            "telefone": "1-770-736-8031",
            "email": "melovictor@april.biz",
            "predio": "predio 1",
            "apartamento": "103",
            "categoria": "Elétrica",
            "data": "22/03/22",
            "descricao": "Toda vez que tomo banho no modo quente o meu disjuntor desarma. Preciso que um eletricista verifique.",
            "status": "andamento"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_chamado'));
if (!db) {
    db = db_chamados_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertChamado(chamado) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoChamado = {
        "id": novoId,
        "motivo": chamado.motivo,
        "nome": chamado.nome,
        "telefone": chamado.telefone,
        "email" : chamado.email,
        "predio" : chamado.predio,
        "apartamento": chamado.apartamento,
        "categoria": chamado.categoria,
        "data": chamado.data,
        "descricao": chamado.descricao,
        "status":chamado.status

    };

    // Insere o novo objeto no array
    db.data.push(novoChamado);
    displayMessage("Chamado inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_chamado', JSON.stringify(db));
}

function updateChamado(id, chamado) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].motivo = chamado.motivo,
    db.data[index].nome = chamado.nome,
    db.data[index].telefone = chamado.telefone,
    db.data[index].email = chamado.email,
    db.data[index].predio = chamado.predio,
    db.data[index].apartamento = chamado.apartamento,
    db.data[index].categoria = chamado.categoria,
    db.data[index].data = chamado.data,
    db.data[index].descricao = chamado.descricao

    displayMessage("Chamado alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_chamado', JSON.stringify(db));
}

function deleteChamado(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Chamado removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_chamado', JSON.stringify(db));
}


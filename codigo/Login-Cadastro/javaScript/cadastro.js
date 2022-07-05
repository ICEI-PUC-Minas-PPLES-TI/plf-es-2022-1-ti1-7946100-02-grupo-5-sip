let nome = document.querySelector('#campoNome');
let labelNome = document.querySelector('#labelNome');
let validarPreenchimentoNome = false;

let sobrenome = document.querySelector('#campoSobrenome');
let labelSobrenome = document.querySelector('#labelSobrenome');
let validarPreenchimentoSobrenome = false;

let email = document.querySelector('#campoEmail');
let labelEmail = document.querySelector('#labelEmail');
let validarPreenchimentoEmail = false;

let telefone = document.querySelector('#campoTelefone');
let labelTelefone = document.querySelector('#labelTelefone');
let validarPreenchimentoTelefone = false;

let dataNascimento = document.querySelector('#campoDataNascimento');
let labelDataNascimento = document.querySelector('#labelDataNascimento');

let nomeUsuario = document.querySelector('#campoNomeUsuario');
let labelNomeUsuario = document.querySelector('#labelNomeUsuario');
let validarPreenchimentoNomeUsuario = false;

let senha = document.querySelector('#campoSenha');
let labelSenha = document.querySelector('#labelSenha');
let validarPreenchimentoSenha = false;

let tipoCadastro = document.querySelector('#campoCadastroUsuario');

nome.addEventListener('keyup', ()=> {
    if(nome.value.length < 2){
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Campo nome deve ter mais de 1 caractere';
        nome.setAttribute('style', 'border-color: red');
        validarPreenchimentoNome = false;
    }else{
        labelNome.setAttribute('style', 'color: black');
        labelNome.innerHTML = 'Nome';
        nome.setAttribute('style', 'border-color: black');
        validarPreenchimentoNome = true;
    }
})

sobrenome.addEventListener('keyup', ()=> {
    if(campoNome.value.length < 2){
        labelSobrenome.setAttribute('style', 'color: red');
        labelSobrenome.innerHTML = 'Sobrenome *Campo sobrenome deve ter mais de 1 caractere';
        sobrenome.setAttribute('style', 'border-color: red');
        validarPreenchimentoSobrenome = false;
        
    }else{
        labelSobrenome.setAttribute('style', 'color: black');
        labelSobrenome.innerHTML = 'Sobrenome';
        sobrenome.setAttribute('style', 'border-color: black');
        validarPreenchimentoSobrenome = true;
    }
})

email.addEventListener('keyup', ()=> {
    if(email.value.length < 7 || validarEmail(email.value) !== true){
        labelEmail.setAttribute('style', 'color: red');
        labelEmail.innerHTML = 'Email *Campo email inválido';
        email.setAttribute('style', 'border-color: red');
        validarPreenchimentoEmail = false;
    }else{
        labelEmail.setAttribute('style', 'color: black');
        labelEmail.innerHTML = 'Email';
        email.setAttribute('style', 'border-color: black');
        validarPreenchimentoEmail = true;
    }
})

telefone.addEventListener('keyup', ()=> {
    if(telefone.value.length < 7){
        labelTelefone.setAttribute('style', 'color: red');
        labelTelefone.innerHTML = 'Telefone *Campo telefone deve ter mais de 6 caracteres';
        telefone.setAttribute('style', 'border-color: red');
        validarPreenchimentoTelefone = false;
    }else{
        labelTelefone.setAttribute('style', 'color: black');
        labelTelefone.innerHTML = 'Telefone';
        telefone.setAttribute('style', 'border-color: black');
        validarPreenchimentoTelefone = true;
    }
})

nomeUsuario.addEventListener('keyup', ()=> {
    if(nomeUsuario.value.length < 4){
        labelNomeUsuario.setAttribute('style', 'color: red');
        labelNomeUsuario.innerHTML = 'Nome de Usuário *O Nome de Usuário deve ter mais de 3 caracteres';
        nomeUsuario.setAttribute('style', 'border-color: red');
        validarPreenchimentoNomeUsuario = false;
    }else{
        labelNomeUsuario.setAttribute('style', 'color: black');
        labelNomeUsuario.innerHTML = 'Nome de Usuário';
        nomeUsuario.setAttribute('style', 'border-color: black');
        validarPreenchimentoNomeUsuario = true;
    }
})

senha.addEventListener('keyup', ()=> {
    if(senha.value.length < 7){
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *A senha deve ter mais de 6 caracteres';
        nomeUsuario.setAttribute('style', 'border-color: red');
        validarPreenchimentoSenha = false;
    }else{
        labelSenha.setAttribute('style', 'color: black');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: black');
        validarPreenchimentoSenha = true;
    }
})



function cadastrarUsuario(){
    if(validarPreenchimentoNome && validarPreenchimentoSobrenome && 
        validarPreenchimentoEmail && validarPreenchimentoTelefone &&
        validarPreenchimentoNomeUsuario && validarPreenchimentoSenha){           
            let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');

            listaUsuarios.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                email: email.value,
                telefone: telefone.value,
                dataNascimento: dataNascimento.value,
                nomeUsuario: nomeUsuario.value,
                senha: senha.value,
                tipoCadastro: tipoCadastro.value
            })

            localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

            window.location.href = '../../../codigo/Login-Cadastro/login.html';

    }else{
        alert("Todos os campos devem estar preenchidos para efetuar o cadastro");
    }
}

function validarEmail(email){
    let regexEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return regexEmail.test(email);
}

document.getElementById('btnEnviar').addEventListener('click', cadastrarUsuario);
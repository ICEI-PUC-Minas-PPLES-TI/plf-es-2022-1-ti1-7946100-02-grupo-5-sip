function efetuarLogin(){
    let emailText = document.querySelector('#text-campo-email-login');

    let senhaText = document.querySelector('#text-campo-senha-login');
    
    let msgErro = document.querySelector("#msgError");

    let listaUsuarios = [];

    let validarUsuario = {
        dataNascimento: '',
        email: '',
        nome: '',
        nomeUsuario: '',
        senha: '',
        sobrenome: '',
        telefone: '',
        tipoCadastro: ''
    }

    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));

    listaUsuarios.forEach((item) => {
        if(emailText.value == item.email && senhaText.value == item.senha){
            validarUsuario = {
                dataNascimento: item.dataNascimento,
                email: item.email,
                nome: item.nome,
                nomeUsuario: item.nomeUsuario,
                senha: item.senha,
                sobrenome: item.sobrenome,
                telefone: item.telefone,
                tipoCadastro: item.tipoCadastro
            }
        }
    })

    if(emailText.value == validarUsuario.email && senhaText.value == validarUsuario.senha){
        window.location.href = '../../../codigo/Pagina-Inicial/navbar-main/pagina-inicial.html';
    }
    else{
        emailText.setAttribute('style', 'color: red');

        senhaText.setAttribute('style', 'color: red');

        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = 'Usuário ou senha inválidos!';

        emailText.focus();
    }
}
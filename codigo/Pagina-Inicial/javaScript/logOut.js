console.log(localStorage.getItem('token'));
if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar ao sistema');
    window.location.href = '../../../codigo/index.html';
}

function efetuarLogOut(){
    localStorage.removeItem('token');
    window.location.href = '../../../codigo/index.html';
}

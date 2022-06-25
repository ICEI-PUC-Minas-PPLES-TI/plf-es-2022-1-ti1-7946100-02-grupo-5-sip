const data = new Date(); 

const reenderizarCalendario = () =>{
    data.setDate(1);

    const diasMês = document.querySelector('.dias');
   
    const ultimoDia = new Date(data.getFullYear(),data.getMonth()+1,0).getDate(); //ultimo dia do mes se é 30 ou 31
    
    const primeiroDia = new Date(data.getFullYear(),data.getMonth(),0).getDate();
    
    const primeiroDiaIndice = data.getDay();
    
    const ultimoDiaIndex = new Date(data.getFullYear(),data.getMonth()+1,0).getDay();

    console.log(ultimoDiaIndex);

    const proximosDias = 7 - ultimoDiaIndex-1;

    const meses=[
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    document.querySelector(".data h1").innerHTML=meses[data.getMonth()]; //esta conectando o titulo em html com a posição do vetor aqui no java, respectivamente ao mês atual
    document.querySelector(".data p").innerHTML= new Date().toDateString(); //linka a data atual //depois colocar em portugues!!!


    let dias = "";


    //esse for é para os dias do mes anterior
    for(let x=primeiroDiaIndice; x>0; x--){
        dias = dias + `<div class = "dia-mes-anterior">${primeiroDia - x +1}</div>`;
    }


    //esse for é para o ultimo dia do mes seja 30 ou 31
    //if para destacar a data atual
    for(let i=1; i <=ultimoDia; i++){
        if(i === new Date().getDate() && data.getMonth() === new Date().getMonth()){
            dias = dias + `<div class= "hoje">${i} </div>`;
        }
        else{
            dias = dias + `<div>${i} </div>`;
        }
    }

    //esse for é para os dias do proximo mes
    for(let j=1; j <=proximosDias; j++){
        dias = dias + `<div class = "dia-proximo-mes">${j} </div>`;
        diasMês.innerHTML=dias;
    }

}

//setinahs
document.querySelector('.anterior').addEventListener('click', ()=> {
    data.setMonth(data.getMonth()-1);
    reenderizarCalendario();
})

document.querySelector('.proximo').addEventListener('click', () => {
    data.setMonth(data.getMonth()+1);
    reenderizarCalendario();
})

reenderizarCalendario();

// botao criar
function estadoBotao() {
    document.getElementById("meuMenu").classList.toggle("mostrar");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.menu' || 'caixaBotao')) { //a caixaBotao nao funcionou
      var menus = document.getElementsByClassName("conteudo-menu");
      var i;
      for (i = 0; i < menus.length; i++) {
        var abreMenu = menus[i];
        if (abreMenu.classList.contains('mostrar')) {
            abreMenu.classList.remove('mostrar');
        }
      }
    }
}

var opcaoClicada;

function novoEvento(){
    opcaoClicada="Evento";
}

function novaReuniao(){
    opcaoClicada="Reunião";
}

function novaData(click){
    if(opcaoClicada=="Reunião"){
        console.log(click.target);
        click.target.className= "reuniãoCriada";
    }
    else{
        if(opcaoClicada=="Evento"){
            console.log(click.target);
            click.target.className= "eventoCriado";
        }
    }
    opcaoClicada="";
}
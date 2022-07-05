
window.onload=()=>{
justificativa.oninput=()=>{
justificativa.value=justificativa.value.toUpperCase();
}

comentario.oninput=()=>{
comentario.value=comentario.value.toUpperCase(); }

sugestoes.oninput=()=>{
sugestoes.value=sugestoes.value.toUpperCase();
}

justificativa.onfocus=()=>console.log('');
comentario.onfocus=()=>console.log('');
sugestoes.onfocus=()=>console.log('');

justificativa.onfocus=()=>{
instrucoes.innerHTML="Por favor, faça a justificativa."
instrucoes.style.color='#999'
}

comentario.onfocus=()=>{
instrucoes1.innerHTML="Por favor, faça o comentário."
instrucoes1.style.color='#999'}

sugestoes.onfocus=()=>{
instrucoes2.innerHTML="Por favor, faça a sugestão."
instrucoes2.style.color='#999'}
    
justificativa.onblur=()=>{
if(justificativa.value.length==0){
instrucoes.innerHTML="*Campo Obrigatório"
instrucoes.style.color="#F00"
}
else instrucoes.innerHTML='';    
}

comentario.onblur=()=>{
if(justificativa.value.length==0){
instrucoes1.innerHTML="*Campo Obrigatório"
instrucoes1.style.color="#F00"
}
else instrucoes.innerHTML='';    
}

sugestoes.onblur=()=>{
if(justificativa.value.length==0){
instrucoes2.innerHTML="*Campo Obrigatório"
instrucoes2.style.color="#F00"
 }
else instrucoes.innerHTML='';    
}


let ValidaForm=()=>{
if(justificativa.value.length == 0 || comentario.value.length ==0 || sugestoes.value.length == 0)

{
 confirma.disabled=true;
}
else confirma.disabled=false;
}
justificativa.onchange=ValidaForm;
comentario.onchange=ValidaForm;
sugestoes.onchange=ValidaForm;

}

var avaliacao="";
function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    avaliacao = "0";
   
   if (estrela == 5){ 
    if (s5 == url + "./css/img/star0.png") {
    document.getElementById("s1").src = "./css/img/estrela1.png";
    document.getElementById("s2").src = "./css/img/estrela1.png";
    document.getElementById("s3").src = "./css/img/estrela1.png";
    document.getElementById("s4").src = "./css/img/estrela1.png";
    document.getElementById("s5").src = "./css/img/estrela1.png";
    avaliacao = "Ótimo";
    } else {
    document.getElementById("s1").src = " ./css/img/estrela1.png";
    document.getElementById("s2").src = " ./css/img/estrela1.png";
    document.getElementById("s3").src = " ./css/img/estrela1.png";
    document.getElementById("s4").src = " ./css/img/estrela1.png";
    document.getElementById("s5").src = " ./css/img/estrela1.png";
    avaliacao = "Ótimo";
   }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "./css/img/star0.png") {
    document.getElementById("s1").src = "./css/img/estrela1.png";
    document.getElementById("s2").src = "./css/img/estrela1.png";
    document.getElementById("s3").src = "./css/img/estrela1.png";
    document.getElementById("s4").src = "./css/img/estrela1.png";
    document.getElementById("s5").src = "./css/img/estrela0.png";
    avaliacao = "Muito bom";
    } else {
    document.getElementById("s1").src = "./css/img/estrela1.png";
    document.getElementById("s2").src = "./css/img/estrela1.png";
    document.getElementById("s3").src = "./css/img/estrela1.png";
    document.getElementById("s4").src = "./css/img/estrela1.png";
    document.getElementById("s5").src = "./css/img/estrela0.png";
    avaliacao = "Muito bom";
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "./css/img/star0.png") {
    document.getElementById("s1").src = "./css/img/estrela1.png";
    document.getElementById("s2").src = "./css/img/estrela1.png";
    document.getElementById("s3").src = "./css/img/estrela1.png";
    document.getElementById("s4").src = "./css/img/estrela0.png";
    document.getElementById("s5").src = "./css/img/estrela0.png";
    avaliacao = "bom";
    } else {
    document.getElementById("s1").src = " ./css/img/estrela1.png";
    document.getElementById("s2").src = " ./css/img/estrela1.png";
    document.getElementById("s3").src = " ./css/img/estrela1.png";
    document.getElementById("s4").src = " ./css/img/estrela0.png";
    document.getElementById("s5").src = " ./css/img/estrela0.png";
    avaliacao = "bom";
   }}
    
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "./css/img/star0.png") {
    document.getElementById("s1").src = "./css/img/estrela1.png";
    document.getElementById("s2").src = "./css/img/estrela1.png";
    document.getElementById("s3").src = " ./css/img/estrela0.png";
    document.getElementById("s4").src = " ./css/img/estrela0.png";
    document.getElementById("s5").src = " ./css/img/estrela0.png";
    avaliacao = "ruim";
    } else {
    document.getElementById("s1").src = " ./css/img/estrela1.png";
    document.getElementById("s2").src = " ./css/img/estrela1.png";
    document.getElementById("s3").src = " ./css/img/estrela0.png";
    document.getElementById("s4").src = " ./css/img/estrela0.png";
    document.getElementById("s5").src = " ./css/img/estrela0.png";
    avaliacao = "ruim";
   }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "./css/img/star0.png") {
    document.getElementById("s1").src = " ./css/img/estrela1.png";
    document.getElementById("s2").src = " ./css/img/estrela0.png";
    document.getElementById("s3").src = " ./css/img/estrela0.png";
    document.getElementById("s4").src = " ./css/img/estrela0.png";
    document.getElementById("s5").src = "./css/img/estrela0.png";
    avaliacao = "péssimo";
    } else {
    document.getElementById("s1").src = " ./css/img/estrela1.png";
    document.getElementById("s2").src = " ./css/img/estrela0.png";
    document.getElementById("s3").src = " ./css/img/estrela0.png";
    document.getElementById("s4").src = " ./css/img/estrela0.png";
    document.getElementById("s5").src = " ./css/img/estrela0.png";
    avaliacao = "péssimo";
   }}
    
    document.getElementById('rating').innerHTML = avaliacao;
   
   }

   function apaga()
   { 
    
    var sim =document.getElementById("sim");
    if(sim.checked==true){
    localStorage.setItem('resolveu',"sim");      
    }
    else{
    localStorage.setItem('resolveu',"nao");    
    }
    localStorage.setItem('avaliacao',avaliacao);
   console.log(avaliacao);

    localStorage.setItem('justificativa',justificativa.value);
    localStorage.setItem('comentario',comentario.value);
    localStorage.setItem('sugestoes',sugestoes.value);

   document.getElementById('justificativa').value='';
   document.getElementById('comentario').value='';
   document.getElementById('sugestoes').value='';

   alert("Dados enviados com sucesso");
      
   }

   
function getFeedbackLS()
{
    let avaliacoes = localStorage.getItem('db_feedback');
    if(avaliacoes==null)
    {
        avaliacoes = [];
    } 
    return JSON.parse(avaliacoes);
}

        function ListaFeedbacks() {
        let avaliacoes=getFeedbackLS()
        let tela=document.getElementById('table-chamados')
        let html=""    
            for (i = 0; i < avaliacoes.avaliacao.length; i++) {
                
                
                    html+=`<tr><td scope="row">${avaliacoes.avaliacao[i].status}</td>
                                          <td>${avaliacoes.avaliacao[i].avaliacao}</td>
                                          <td>${avaliacoes.avaliacao[i].justificativa}</td>
                                          <td>${avaliacoes.avaliacao[i].comentario}</td>
                                          <td>${avaliacoes.avaliacao[i].sugestoes}</td>
                                                                                   
                                      </tr>`;

                    
                
            }
            tela.innerHTML=html
        }

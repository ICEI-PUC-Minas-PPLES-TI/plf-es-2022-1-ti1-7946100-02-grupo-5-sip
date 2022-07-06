# Informações do Projeto
`TÍTULO DO PROJETO`  

**SIP - Predial Security**

`CURSO` 

**Engenharia de Software**

## Participantes

Os membros do grupo são: 
- Anthony Luan da Silva Santos
- Bárbara Mattioly Andrade
- Laura Enísia Rodrigues Melo
- Marco Antônio Miranda Ferreira
- Naára Leite Garção
- Pedro Henrique Pimenta Ribeiro
- Raul Phelipe Salles de Souza

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

Viver e morar em um prédio(residencial) apresenta diversas vantagens. Entretanto, a questão da segurança é um tópico importante neste contexto.

Diversos prédios não apresentam uma estrutura de organização da segurança. Em muitos casos, os moradores e funcionários desconhecem o manuseio de equipamentos de segurança, além de não possuírem conhecimento de primeiros socorros e não saberem como agir em situações de emergência(assalto, roubo, desastre). 


## Objetivos

O objetivo deste trabalho é desenvolver uma aplicação web que permita otimizar e gerenciar a segurança dos moradores de um prédio.


## Justificativa

Atualmente, percebe-se que as empresas de segurança predial apenas vendem equipamentos de segurança  e prestam orientações aos condomínios. 

Até o momento, não existe uma solução de aplicativo web ou software para gerenciar e melhorar  a segurança de um prédio. 

Cabe ressaltar que, com o aumento da violência (problema social), existe uma grande demanda para minimizar os seus efeitos no cotidiano das pessoas.


## Público-Alvo

O público  alvo deste trabalho são os frequentadores de um prédio residencial: 
- Moradores;
- Funcionários;
- Síndicos;

# Especificações do Projeto

As personas e potenciais usuárias da solução SIP são os frequentadores de um prédio residencial, dentre eles a síndica, os moradores e o porteiro.
As ferramentar utilizadas para montar as personas e o mapa de empatia foram: O miro, onde foram estruturados todos os dados do processo de design thinking após as entrevistas e o Canva, por onde foi feito o template das personas.

## Personas e Mapas de Empatia

**Personas**

> **Exemplo de Persona**
> Lilian - Síndica
> ![Persona 1 - Síndica](imaages/../images/Persona1.jpeg)

> João Wagner - Morador
> ![Persona 2 - Morador](imaages/../images/Persona2.jpeg)

> Antonio Carlos - Porteiro
> ![Persona 3 - Porteiro](imaages/../images/Persona3.jpeg)

**Mapas de Empatia**
> Lilian - Síndica
> ![Persona 1 - Síndica](imaages/../images/MapaEmpatia2.JPG)

> João Wagner - Morador
> ![Persona 2 - Morador](imaages/../images/MapaEmpatia.JPG)

> Antonio Carlos - Porteiro
> ![Persona 3 - Porteiro](imaages/../images/MapaEmpatia3.JPG)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| **Lilian**  | Possuir funções de administradora do sistema         | possa enviar o código do prédio para os moradores se conectarem ao sistema do edifício e tenha permissão para editar os dados em tela, como adicionar os equipamentos de segurança por andar               |
| **Lilian**       | Cadastrar os equipamentos de segurança existentes em cada andar e as respectivas datas de revisão de cada um dos equipamentos, tal qual seu lote         | Tornar visível aos moradores os equipamentos de segurança que existem em cada andar, para saberem onde buscar em caso de alguma situação de emergência no prédio, assim como dar transparência a data de revisão de cada um desses equipamentos |
| **Lilian**  | Adicionar a data de revisão de cada um dos equipamentos de segurança presentes no prédio           | Manter um controle e fornecer transparência a todos os moradores, para que se sintam seguro com a revisão dos equipamentos em dia               |
| **João Wagner**       | Saber todos os equipamentos de segurança presentes no prédio                 | Que eu saiba o que procurar em caso de emergências |
| **João Wagner**  | Saber como agir e para quem ligar, em casos de emergência no prédio          | Ser capaz de manter a calma e agir com segurança para me salvar e salvar os outros em caso de emergências            |
| **João Wagner**       | Dar sugestões de melhoria para o sistema e indicar empresas e startups para realizar parcerias com o sistema                | Obter a melhor solução possível para que utilize juntamente aos moradores do meu prédio |
| **Antônio Carlos**  | Saber todos os equipamentos de segurança presentes no prédio em que trabalho           | Para que possa saber qual procurar em caso de emergências e auxiliar os moradores               |
| **Antônio Carlos**       | Saber como agir e para quem ligar, em casos de emergência no prédio                | Ser capaz de agir com segurança para me salvar e ajudar a todos os moradores do prédio em caso de emergências |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O site deverá apresentar na tela inicial, os meios de comunicação para receber propostas para contratação de nosso serviço | ALTA | 
|RF-02| O site deverá apresentar na tela inicial um texto descrevendo sobre o que é o projeto   | MÉDIA |
|RF-03| O site deverá apresentar na tela inicial um botão com o ícone do whatsapp que apresentará o link para entrar no grupo de whatsapp do prédio   | ALTA |
|RF-04| O site deverá apresentar para cada andar um campo na tela de mapa de Equipamentos de Segurança do Prédio informando os equipamentos de segurança do prédio   | ALTA |
|RF-05| O site deve permitir ao usuário visualizar a data de revisão dos equipamentos de segurança do prédio e o lote a que pertencem   | MÉDIA |
|RF-06| O site deverá permitir ao administrador adicionar e remover equipamentos de segurança por andar  | ALTA |
|RF-07| O site deverá apresentar uma tela com sugestões de melhoria dadas pelo usuário para melhorar o sistema, assim como, sugestões de empresas para realizar parceria | BAIXA |
|RF-08|O site deverá apresentar uma tela com alguns tipos de emergência e um vídeo e texto descritivo exemplificando como agir | ALTA |
|RF-09|O site deverá apresentar na tela os telefones de emergência | MÉDIA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O site deverá apresentar os grupos de Administrador e Usuário na hora do login, para que apenas as pessoas responsáveis tenham acesso a visualizar determinadas telas e clicar em determinados botões | ALTA | 
|RNF-02| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);  |  ALTA |
|RNF-03| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);  |  ALTA |
|RNF-04| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  |  ALTA |
|RNF-05| O site deverá apresentar um componente para que o usuário avalie o que achou do sistema  |  BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                                               |
|--|---------------------------------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 13/06/2022. |
|02| Não pode ser desenvolvido um módulo de backend, apenas tecnologias básicas da Web no FrontEnd           |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho                                            |


# Projeto de Interface

Para a montagem de todas as telas do sistema, nossa principal preocupação foi na usabilidade, buscando tornar a interface o mais limpa e intuitiva possível para o usuário.
O protótipo das telas foi feito através do figma.
Link de acesso ao protótipo interativo: https://www.figma.com/file/96nd2RS4AxKHqzXrUbuMJP/Prot%C3%B3tipo-SIP?node-id=0%3A1

## User Flow

> ![UserFlow](images/userflow.jpg)


## Wireframes

1. **Tela 1 - Inicial**
>  Tela Inicial que apresenta os principais meios de atuação possíveis através do nosso App. São apresentados os botões para as páginas de:
>    - Botão de Login;
>    - Botão de Cadastro;
>    - Título;
>    - Descrição do Sistema;
>    - Perfis cadastrados;
>    - Reclame aqui (Fale conosco);
>    - E-mail de contato.

> ![Tela Inicial](imaages/../images/img1.png)
 
 2. **Tela 2 - Login**
>  Tela de Login apresenta os espaços para inserir o nome de usuário, senha, logo e os botões de Entrar e o de Cadastrar.

> ![Tela de login](imaages/../images/img2.JPG)

3. **Tela 3 - Cadastro**
>  Tela de Cadastro apresenta os espaços de:
>    - Nome completo;
>    - E-mail;
>    - Data de nascimento;
>    - Nome de usuário;
>    - Senha;
>    - Opção de concordância com os termos de uso do SIP;
>    - Botão de cadastro como síndico;
>    - Botão de cadastro como usuário.

> ![Tela de Cadastro](imaages/../images/img3.png)

3.1. **Tela 3.1 - Síndico**
>  Tela em que se é selecionado o edifício e o código de acesso do síndico do prédio para efetuar o cadastro.

> ![Tela para código de acesso do síndico](imaages/../images/img4.png)

3.2 **Tela 3.2 - Confirmação de Cadastro**
>  Tela onde se é informado a condição do cadastro e é instruída a confirmação da mesma na caixa de entrada do e-mail do usuário e o botão de iniciar

> ![Tela de Confirmação de Cadastro](imaages/../images/img5.png)

4. **Tela 4 - Principal**
>  Tela onde se encontram o Logo, botões de:
>    - Mapa do prédio;
>    - Como agir em emergências;
>    - Gestão de melhorias;
>    - Direcionamento para o grupo do Whatsapp do prédio;
>    - Avaliações do sistema;
>    - Informações sobre o projeto.

> ![Tela Principal](imaages/../images/img6.png)

5. **Tela 5 - Mapa Predial**
>  Tela em que se encontram a descrição, localização e instrução das datas de revisão e vistoria dos equipamentos presentes em cada andar, além dos botões de:
>    - Mapa do prédio;
>    - Como agir em emergências;
>    - Gestão de melhorias.

> ![Tela do mapa predial](imaages/../images/img7.png)

5.1. **Tela 5.1 - Data de Revisão e Lote do Equipamento**
>  Tela em que se é apresentado o nome do equipamento, data última revisão, data da próxima revisão e do lote.

> ![Tela de date de revisão e lote do equipamento](imaages/../images/img8.png)

5.2 **Tela 5.2 - Adição de Equipamentos Por Andar**
>  Tela em que se é informado o andar do edifício e quais são os equipamentos de segurança a serem adicionados naquele andar

> ![Tela de adição de equipamentos](imaages/../images/img9.png)

5.3 **Tela 5.3 - Edição de Equipamentos Por Andar**
>  Tela em que são efetuadas as mudanças dos dados de determinados equipamentos de segurança, assim como extintores e câmeras de segurança.

> ![Tela de Edição de equipamentos](imaages/../images/img10.png)

6. **Tela 6 - Como Agir em Emergências**
>  Tela em que são apresentados botões para os diferentes tipos de emergências possíveis, juntamente com os números de telefone mais úteis para ocasiões especiais.

> ![Tela de como agir em emergências](imaages/../images/img11.png)

6.1. **Tela 6.1 - Item Como Agir em Emergências**
>  Tela onde se é apresentado um problema, em que se é fornecido maneiras de ação para atuar em cada problema específico, com conteúdos entregues em forma de vídeo e texto visando instruir o usuário com conhecimento útil para tal ocasião.

> ![Item de descrição de como agir em emergências](imaages/../images/img11.png)

7. **Tela 7 - Gestão de Melhorias**
>  Tela onde estão presentes espaços para a sugestão de ideias para melhoria, botão do reclame aqui e o botão para a indicação e sugestão de empresas e startups que estejam dispostas a atuarem junto ao nosso programa e a tecer parcerias e patrocínios juntamente aos edifícios usuários do nosso sistema.

> ![Tela de gestão de melhorias](imaages/../images/img12.png)

8. **Tela 8 - Sobre a Empresa**
>  Tela onde será impresso todas as informações sobre a nossa empresa, os contribuidores nossas parcerias e patrocínios.

> ![Tela sobre a empresa](imaages/../images/img13.png)

# Metodologia

**Metodologias ágeis**
Durante a realização do projeto, definimos duas reuniões diárias: Daily Scrum e uma reunião de divisão de tarefas. 

A Daily foi realizada pela manhã e durava no máximo 15 minutos. Nela era conversado o que cada integrante concluiu da sua parte no projeto e o que iria fazer até a próxima reunião (que seria a reunião vespertina).

A reunião vespertina era realizada para o grupo definir as tarefas da próxima etapa do projeto e conversar sobre sugestões e críticas do que já foi feito no projeto, do que poderia ser implementado e melhorado. 

**Processo: Design Thinking**
No processo de Design Thinking o grupo utilizou a plataforma Miro. Ela auxiliou para melhor selecionar e organizar todas as ideias da equipe. Foram realizadas várias reuniões para discutir e definir os principais requisitos do projeto, tanto os funcionais, quanto os não funcionais.

Inicialmente, fizemos reuniões presenciais para discutirmos as ideias do grupo: quais eram nossas dúvidas, certezas, suposições acerca do nosso problema, e também, quais eram as pessoas envolvidas nele seja fundamental, importante ou influenciadora. A Partir desses dados, foi inserido e registrado tudo no Miro, dentro da Matriz de Alinhamento - CSD e dentro do Mapa de Stakeholders.

Posteriormente, realizamos pesquisas e entrevistas com as pessoas do mapa de Stakeholders para entendermos as dores das pessoas e assim, oferecer soluções com o nosso projeto. Essa etapa de entrevista foi realizada de 2 formas: 
Entrevista realizada de modo presencial: Alguns integrantes do grupo entrevistaram síndicos, moradores e porteiros de prédios. 
Criado um formulário online:  Alguns integrantes do grupo criaram o formulário e divulgaram para grupos de whatsapp afim de obter opiniões acerca da segurança predial.
Os resultados das pesquisas realizadas pelo grupo, juntamente com as personas e os mapas de empatia, foram extremamente importantes pois ofereceram maior direcionamento para criarmos o nosso projeto.

Por fim, foram realizadas 2 reuniões diariamente para a equipe debater, sugerir ou acrescentar algum item acerca das ideias de cada integrante. Foram selecionadas as ideias principais e organizadas de acordo com o custo e o impacto. Em seguida, as principais ideias foram detalhadas no mapa conceitual, especificando como a ideia funciona, por que ela melhora a experiência do cliente, quem irá usar e quando, e como a ideia pode ser implementada. 

Com a finalização da etapa de entendimento e da etapa de exploração do nosso projeto, concluímos o Design Thinking e prosseguimos para a implementação do FrameWork Scrum do nosso projeto.

**Processo: FrameWork Scrum**
No processo de FrameWork Scrum o grupo utilizou a plataforma Figma. Ela auxiliou para criar e desenvolver as wireframes, fazer o protótipo interativo com os botões e também, possibilitou que todos da equipe trabalhassem mutuamente criando e editando as telas do projeto.

Durante esse processo, foram realizadas 2 reuniões diariamente, uma daily matutina para a equipe se conscientizar sobre as tarefas de cada um e qual impacto estava causando no trabalho de outro integrante. Já na reunião vespertina, era conversado sobre as atividades realizadas, qual seria a próxima parte do projeto a ser implementada e separada a tarefa que cada um iria executar.


## Divisão de Papéis

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definições do processo de desenvolvimento.

A equipe está organizada da seguinte forma: 
- Scrum Master: Bárbara Mattioly
- Product Owner: Laura Enísia
- Equipe de desenvolvimento: 
  - Anthony
  - Bárbara
  - Laura
  - Marco
  - Pedro 
  - Raul
  - Naára

Para organização e distribuição das tarefas do projeto, a equipe utilizou o Discord com canais de texto para definir prazos e projetos a serem entregues. 



## Ferramentas

**Relação de Ambientes de Trabalho**
Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinking | Miro | https://miro.com/app/board/uXjVOA3Il6Y=/ | 
|Projeto de Interface e  Wireframes | Figma |  https://www.figma.com/file/96nd2RS4AxKHqzXrUbuMJP/Prot%C3%B3tipo-SIP?node-id=0%3A1 | 
|Gerenciamento do Projeto | Discord | https://discord.com/login?redirect_to=%2Fchannels%2F%40me |
|Repositório de código fonte | GitHub | https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti1-7946100-02-grupo-5-sip | 

A metodologia adotada pelo grupo referente às ferramentas utilizadas para a realização do projeto foram:

- Discord: (Ferramenta de comunicação / organização) usada para reuniões e divisão das tarefas; 
- Whatsapp:  (Ferramenta de comunicação) usada para todos os integrantes do grupo se comunicarem;
- Miro:  (Ferramenta de Design Thinking) usada  para a realização do Design Thinking;
- Figma:  (Ferramenta de diagramação) usada para a realização do FrameWork Scrum;
- Docs:  (Ferramenta de elaboração de relatório) usada para a realização do relatório técnico do projeto;
- GitHub:  (Plataforma de hospedagem) usada para a realização do repositório do projeto;

	O Discord foi escolhido para reunião e divisão de tarefas pois era um aplicativo que todos da equipe conheciam e com ele é possível criar canais de textos para especificar e organizar as tarefas.

	O Whatsapp foi escolhido para o grupo se comunicar devido ser uma ferramenta útil e simples, e que todos da equipe já conheciam o aplicativo e também já utilizavam.

	O Miro foi escolhido devido a uma sugestão do professor  Rommel para realizarmos o Design Thinking. Ele é bem explicativo e possui a possibilidade de todos os integrantes utilizarem a plataforma mutuamente.

	O Figma foi escolhido devido uma opção do grupo. Tivemos a sugestão da plataforma MarvelApp, porém o grupo não se adaptou e achou os recursos desse sistema muito básico. Com isso, migraram para a plataforma Figma que possui várias opções de implementar o projeto e deixá-lo interativo.

	O Docs foi escolhido pelo grupo para a realização do relatório técnico para que, quando finalizado, fosse repassado para o repositório do GitHub. Ele é uma ótima plataforma para todos do grupo editarem mutuamente. 


## Controle de Versão

**O controle de versão do código no Git será definido com mais detalhes na sprint 2.**

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com) foi utilizado para hospedagem do repositório `upstream`.

O projeto segue a seguinte convenção para o nome de branchs:
- `master`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas: 
- `bugfix`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

SIP é uma ferramenta que visa organizar e otimizar os problemas cotidianos de um prédio/condomínio para que tanto os moradores e o síndico consigam gerenciar as principais demandas e necessidades destes espaços. O sistema SIP promete a organização das demandas,  análise dos indicadores de performance, padrão de qualidade, agendamento de reuniões e eventos, além da possibilidade de contratar empresas parceiras para a solução das demandas preditivas.

# Tecnologias Utilizadas

As tecnologias utilizadas para resolver o problema e implementar sua solução foram: 

 -Linguagem HTML:
            Linguagem utilizada para a construção das páginas do site.
 -Linguagem CSS:
             Linguagem utilizada para estilizar e formatar as páginas do site.
 -Linguagem JavaScript:
             Linguagem utilizada para implementar itens de modo dinâmico nas páginas do site.
 -Bootstrap:
	Framework com componentes de interface que une vários projetos de software, provendo uma funcionalidade. 
 -API:
	Recurso utilizado para integrar o sistema 
            
 	-WhatsApp:
	Utilizada para integrar o botão o do WhatsApp caso o usuário quisesse entrar em contato com a empresa SIP (donos do projeto)
             
	-cdn.jsdelivr:
	Utilizada para integrar os gráficos gerados dos chamados
             
 -Bibliotecas:
	Utilizadas para realizarem alguma função na página web
            
 -JQuery:
	Utilizado para gerenciar os eventos, as animações e as interações Ajax. 
            
 -Chart:
 	para gerar gráficos integrados do total de demandas registradas no chamado, de acordo com o total de chamados separados por categoria
	
 -AJAX:
	Combinação de várias tecnologias para permitir aplicações interativas 
 -JASON:
 
	    Utilizado para a troca de dados pela Web. 
 -LocalStorage:
 	Utilizado para a troca de dados pela Web. Ele oferece um armazenamento permanente de dados e que podem ser acessados a partir de qualquer janela do site.
 
 -Font Awesome:
	Utilizado alguns ícones que foram personalizadas no CSS.
	
	
# Estrutura do Documento	
	
	

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)

#Comentários da Fê

* Instruções sobre como executar

	* Instalar o Node JS (https://nodejs.org/en/)
	* Pelo terminal, se dirigir ao diretório do projeto, executar o comando "npm install" (para instalar as dependências)
	* Pelo terminal, executar o comando "node app" (ou "nodemon app" - monitora as alterações na aplicação e "reseta" o servidor automaticamente)
	* localhost:3000

* Sobre o que foi feito

	A home versão desktop está pronta e também um "esboço" de back no NodeJS, que era para poder cuidar das requisições ao data.json e também do redirecionamento de páginas, etc.
	No geral, busquei me basear nas orientações desse guia: https://cssguidelin.es/. Achei ele bem interessante. Um ponto forte que tive como guia foi tentar escrever o CSS com vários componentes "genéricos" que podem ser reutilizados em diferentes contextos.
	O CSS foi organizado em único arquivo ( :( ), mas dividido por sessões. Também dividi os componentes "genéricos" em "structure" (voltados ao layout, disposição, etc) e "skin" (voltados a cores, fontes, etc.).

* Sobre o que pode melhorar

	Busquei estudar bastante sobre boas práticas no front, então sei que há muito a ser melhorado na organização do CSS, talvez usar SASS fosse uma opção melhor, mas, com certeza, dividir os arquivos em componentes e áreas específicas.
	Também teria que compor o css e o html de forma mais elegante, buscando ao máximo estruturar objetos que possam ser reutilizados no CSS.
	(terminar o restante da aplicação seria legal também... hahahaha)

Obrigada!

# Quer trabalhar com front-end em nosso time?

Esse é o nosso desafio para você!
O objetivo é avaliar o seu conhecimento e habilidades em front-end.

# Sobre nós

Somos a Humanoide. Combinamos design, tecnologia e usabilidade para criar produtos digitais encantadores. Nosso trabalho é tirar grandes ideias do papel.

# O Desafio

O desafio consiste em desenvolver telas de um e-commerce de fantasias para o carnaval (já que estamos no clima, né?!). Esperamos que o candidato construa as telas presentes no layout disponibilizado e siga as instruções abaixo. Boa sorte!

# Setup

* Faça um fork do projeto para a sua conta e clone-o para o seu ambiente de trabalho.

# Instruções

* Desenvolva uma versão desktop e mobile.
  * desktop: https://www.figma.com/file/eoSSiyKixBomqVI8U5b24zq9/CarnaStore?node-id=0%3A1
  * mobile: https://www.figma.com/file/OuazRMSWcvCvL6oaVyhTfFXN/CarnaStore-Responsivo?node-id=0%3A1
* Utilize apenas dois breakpoints: desktop e mobile.
* Você não poderá usar frameworks CSS como Bootstrap, Materialize, Bulma
* Utilize a pasta app/views para colocar os arquivos .html

* Faça uma requisição para o arquivo server/data.json para ler os dados que compõem a página
* A página Home possui um banner e a lista com os produtos
* A página Show contém os detalhes do produto
    * Se tiver preço promocional, então deve mostrá-lo, senão só o preço
* Quando o botão "adicionar ao carrinho" for clicado, deve-se abrir um modal

* O(s) arquivo(s) de CSS deve(m) estar preferencialmente no diretório app/assets/styles
* O(s) arquivo(s) de JS deve(m) estar preferencialmente no diretório app/assets/js
* O(s) arquivo(s) de imagens extraídas do layout deve(m) estar preferencialmente no diretório app/assets/images
* Utilize a metodologia BEM para escrever CSS (http://getbem.com/)
* Ao concluir, crie um PR com a branch em seu nome

# O que será avaliado

* HTML
* CSS
* Javascript
* Semântica
* Organização

# Prazo

O prazo de entrega é até o dia 20/03/2019

# Dúvidas

Se tiver alguma dúvida, você pode entrar em contato pelo e-mail: ola@humanoide.co ou diogo@humanoide.co

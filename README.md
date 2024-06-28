# Teste Econverse: Vaga Desenvolvedor Front-End Jr

### Vem ser #Econverse!

Segue abaixo as instruções para a execução do teste.

## Instruções

- Faça um fork desse projeto para a sua conta pessoal do GitHub.
- Desenvolva a página conforme as **Especificações Técnicas**
- Crie um README com as instruções para compilar, testar e rodar o projeto.
- O link do repositório deverá ser enviado para o e-mail ana.nascimento@econverse.com.br, joao.victor@econverse.com.br e eduardo.rodrigues@econverse.com.br com o título **Teste Vaga FrontEnd Jr**

## Especificações Técnicas

- Desenvolver a pagina em React e TypeScript conforme o [layout](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1). Para conseguir pegar os elementos do Figma, basta copiar o layout para sua conta que terá acesso de edição.
- Montar a [vitrine](https://app.econverse.com.br/teste-front-end/junior/tecnologia/layout/vitrine-produtos.png) de produtos consumindo as informações dos produtos em json atraves desse [Link](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json).
- Desenvolver a interação ao clicar em um produto conforme layout. A interação consiste em abrir um modal com as principais informações do produto presente no arquivo [JSON](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json) conforme o produto que clicar.
- Utilizar Pré-processador Sass, Less ou Stylus.
- Respeitar o Layout pixel a pixel, tamanho das fontes, cores e botões.
- Não Utilizar bibliotecas UI como Bootstrap, Foundation, ou afins.

## Pontos Extras

- Utilizar Boas práticas de SEO
- Uso de HTML semântico

## O que avaliaremos em seu teste

- Organização do projeto
- Lógica do código
- Componentização
- Alcance dos objetivos propostos

**Boa sorte! ;)**


## Instalação e compilação

1- Fazer o git clone do projeto.
2- Executar o comando "npm install".
3- Criar un arquivo .env na raiz do projeto.
4- Criar a variável de entorno: VITE_API_URL=https://api-econverse-products-next.vercel.app/api/products
5- Executar o comando "npm run dev".

Nota: A API fornecida pela Econverse não funcionou para mim. Quando tento fazer a solicitação de dados, recebo um erro de permissão, indicando um problema com as políticas de CORS. No entanto, consigo usar a API sem problemas pelo Postman. Por isso, decidi criar uma API simples, semelhante à da Econverse, utilizando Next.js. Entendo que o problema com as CORS não pode ser resolvido pelo front-end, mas sim pelo back-end.

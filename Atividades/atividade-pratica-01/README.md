# API de Doação de Sangue

## Essa é uma API RESTful para as seguintes entidades: pessoas, tipos_sanguineos, locais_coleta e doacoes.

## funcionalidades da API: 
    Inserir - create
    Atualizar - update
    Excluir - delete
    Recuperar - read - todos os itens e por id.
    
## Tecnologias utilizadas:
    Node.js, Nodemon(postgresql), Express e Axios
    
## Para iniciar:
   1. npm install
   2. configure o banco de dados criando o arquivo .env
   3. crie o banco usando o comando: **npm run prisma** e dê um nome a migração
   4. inicie a API utilizando o comando: **npm run start**

## Rotas 

### Pessoa
    Get all pessoas: GET http://localhost:3000/pessoas
    Get by id pessoa: GET http://localhost:3000/pessoas/:id
    Create pessoa: POST http://localhost:3000/pessoas
    Update pessoa: PUT http://localhost:3000/pessoas/:id
    Delete pessoa: DELETE http://localhost:3000/pessoas/:id

### Tipos Sanguíneos
    Get all tipos_sanguineos: GET http://localhost:3000/tipos
    Get by id tipos_sanguineos: GET http://localhost:3000/tipos/:id
    Create tipos_sanguineos: POST http://localhost:3000/tipos
    Update tipos_sanguineos: PUT http://localhost:3000/tipos/:id
    Delete tipos_sanguineos: DELETE http://localhost:3000/tipos/:id

### Locais_coleta
    Get all locais_coleta: GET http://localhost:3000/local
    Get by id locais_coleta: GET http://localhost:3000/local/:id
    Create locais_coleta: POST http://localhost:3000/local
    Update locais_coleta: PUT http://localhost:3000/local/:id
    Delete locais_coleta: DELETE http://localhost:3000/local/:id

### Doacões
    Get all doacoes: GET http://localhost:3000/doacoes
    Get by id doacoes: GET http://localhost:3000/doacoes/:id
    Create doacoes: POST http://localhost:3000/doacoes
    Update doacoes: PUT http://localhost:3000/doacoes/:id
    Delete doacoes: DELETE http://localhost:3000/doacoes/:id
# API de Doação de Sangue

## Essa é uma API RESTful para as seguintes entidades: pessoas, tipos_sanguineos, locais_coleta e doacoes.

### funcionalidades da API: 
    Inserir - create
    Atualizar - update
    Excluir - delete
    Recuperar - read - todos os itens e por id.
    
### Tecnologias utilizadas:
    Node.js, Nodemon(postgresql), Express e Axios
    
## Para iniciar:
   1. npm install
   2. configure o banco de dados criando o arquivo .env
   3. crie o banco usando o comando: **npm run prisma** e dê um nome a migração
   4. inicie a API utilizando o comando: **npm run start**

### Rotas 

# Pessoa
    Get all pessoas: GET http://localhost:3000/pessoas
    Get by id pessoa: GET http://localhost:3000/pessoas/:id
    Create pessoa: POST http://localhost:3000/pessoas
    Update pessoa: PUT http://localhost:3000/pessoas/:id
    Delete pessoa: DELETE http://localhost:3000/pessoas/:id

# Tipos Sanguíneos
    Get all pessoas: GET http://localhost:3000/pessoas
    Get by id pessoa: GET http://localhost:3000/pessoas/:id
    Create pessoa: POST http://localhost:3000/pessoas
    Update pessoa: PUT http://localhost:3000/pessoas/:id
    Delete pessoa: DELETE http://localhost:3000/pessoas/:id

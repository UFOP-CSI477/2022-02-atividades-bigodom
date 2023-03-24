# **CSI606-2021-02 - Presencial - Proposta de Trabalho Final**

## *Aluno: Pedro Augusto Silva Figueiredo*

--------------

## Resumo

Foi desenvolvido um sistema de gerenciamento de manutenções de veículos, visando ser um sistema útil para mecânicas em geral fazerem o controle dos clientes e das manutenções do seu veículo.

## 1. Tema

Mecânica Golden Hammer

## 2. Escopo

O sistema possui funcionalidas CRUD de três entidades: Cliente, Carro e Manutenção.

### API:
  #### Pasta prisma, contém as migrações e o modelo do banco de dados.
  #### Pasta controller com os modulos e metodos CRUD para cada entidade.
  #### Pasta database com a instancia do prisma.
  #### Pasta routes com os as rotas da API.
  #### Arquivo server com a instancia de todas as entidades e suas rotas.

### Frontend:
  #### Pasta public: contém os arquivos de imagens da aplicação
  #### Pasta components: contendo as instancias de CRUD, além dos módulos do site divididos.
  #### Arquivo routes: com o arquivo de rotas dos componentes.
  #### Pasta services: contendo a conexão da api e a instancia da mesma.
  #### Arquivo main: criação do Root utilizando o reactDOM.

## 3. Restrições

No sistema não é requerido estar logado para poder acessar todas as páginas

# Overview

*(Remover o Overview do README em baixo na criação dos repositórios)*.

Micro-service boilerplate para novas apis de serviços e processos na Trademaster

## Clean Code

​​​O Clean Code nos dá uma serie de boas práticas que podemos aplicar no nosso código para torna-lo limpo e objetivo. Abaixo é apresentado este conjunto de boas práticas com base na linguagem de programação adotada para a construção do backend dos sistemas TRADEMASTER, segue o link abaixo:

https://trademastersa.sharepoint.com/sites/governancasistemas/SitePages/Clean%20Code.aspx

## Padrão em nomes

Os nomes abaixo serão padronizados com nomenclatura.

### Repositório no GitHub:

'sistema'-'modulo'-'servico'*

**OBS:** A última nomenclatura de "servico" é opcional, porque estamos criando inicialmente um micro-serviço baseado em serviço e não em processo, mas se o serviço estiver escalando muito, vamos retirar aquele processo e criar um novo repositório no github apenas para o mesmo, ou seja, onde é inserido o nome do "servico". Também só aceitar somente traços na divisão, não colocar pontos ou camelcase.

Por exemplo: neurotech-creditlimit-request

- Sistema: portal, tradepay, neurotech
- Modulo: creditlimit, agreement
- Servico: create, setting

### Key para RabbitMQ:

*'sistema'.'modulo'.'servico'*

**OBS:** As chaves são separados por somente pontos, não pode colocar traços, underline, camelcase e entre outros. A última opção de "servico" e o nome do arquivo na pasta service do repositório.

Por exemplo: neurotech.creditlimit.createsetting

- Sistema: portal, tradepay, neurotech
- Modulo: creditlimit, agreement
- Servico: create, setting

### Exchange e Queue para RabbitMQ:

- Exchange: O nome do sistema, por exemplo: portal, tradepay, neurotech
- Queue: O nome do repositório retirando as inicias, por exemplo: o nome do repositório é "node-svc-neurotech-creditlimit-request", o nome da queue será "neurotech-creditlimit-request"


## Configuração inicial instalada no projeto

https://www.notion.so/Configurando-estrutura-Typescript-c3bdfd63d9594c8b84c714b418fbacf3


## Diretórios

* src: diretório raiz de todos os subdiretórios do serviço.
* services: todas as regras de negócios de serviços.
* common: todas as funcionalidades e serviços de terceiros, por exemplo: Google Cloud, logs e outros.
* channel: serviço de comunicação entre microsserviços, por exemplo: RabbitMQ.
* database: toda configuração, conexão, modelagem no banco de dados.
* repositories: a classe de serviço com as consultas do banco de dados.
* validations: validação de todos os campos via solicitação http.
* helpers: qualquer código detalhado, deixando as funções da regra de negócio mais limpas e funcionais.
* server: toda a configuração de serviço da web (express).


## Jenkinsfile

Para realizar o deploy da API é necessário configurar o Jenkins no repositório final da aplicação.
As instruções para configurar estão [aqui](https://github.com/trademasterbr/devops-jenkinsfile).

---
*(Remover o Overview do README a cima na criação dos repositórios)*.

---
# node-boilerplate-microservice

Descrição do projeto.

## Instalação

É utilizado `npm` para instalar e executar este serviço.

Se optar por utilizar o `Yarn` para desenvolvimento, lembre-se de manter o arquivo `package-lock.json` atualizado.

O Dockerfile utiliza o `package-lock.json` para instalar os módulos no ambiente de produção.

Instalação:
```
npm install
```

Executar:
```
npm run start:development
```

Testar:
```
npm run test
```

Build:
```
npm run build
```

Executar o build:
```
npm run start:server
```

## Rotas

Este serviço possui duas rotas que podem ser acessadas.

### GET /test

Retorna um *json* informando que a API está funcionando.

**Resposta 200:**

*message*: Descrição informando que a API está OK.

```
{
  "message": "API OK",
}
```

**Resposta 400/500:**

Exemplo de resposta de erro com código 400/500. Se for possível identificar, descreva as respostas de erro que pode acontecer na API.

```
{
  "status": "error",
  "message": "Messagem de erro"
}
```

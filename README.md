
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
<h1 align="center">:star: Minha primeira API com Node.js, Express.js e MySQL </h1> 

<img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/J0a00liveira/snxApi"> <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/J0a00liveira/snxApi">

> Objetivo da API :information_source:

Permitir o cadastro de posts e a possibilidade de adicionar comentarios aos mesmos.

> Funcionalidades :wrench:

`Post`
- Listar todos
- Listar um
- Inserir 
- Apagar 
- Alterar 

`Comentario`
- Listar todos de um post especifico
- Apagar
- Inserir

---

<details>
<summary> Técnologias usadas :bulb:</summary>
<img height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"> &nbsp;&nbsp;
<img height="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"> <img height="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"> &nbsp;&nbsp;
<img height="20px" src="https://user-images.githubusercontent.com/123258561/215355451-ccaf4bf8-9482-4375-87f7-3f2fdc55f0b0.png"> &nbsp;&nbsp;
<img height="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"> &nbsp;&nbsp;
<img height="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg"> &nbsp;&nbsp;
</details>

---

> Requisitos e informações para o projeto :white_check_mark:

- instalações:
  - Node.js
  - MySQL

<details>
<summary>Sobre o banco de dados</summary>

- diagrama do banco

![image](https://user-images.githubusercontent.com/123258561/215357435-cf659c9c-e0df-4df6-9135-652d97b4c1fb.png)

- Queryes para criaçao do banco e inserção de dados.

```
create database dbApiPost;

use dbApiPost;

create table post(
    codigo int primary key auto_increment,
    titulo varchar(100));

create table comentario(
    codigo int primary key auto_increment,
    descricao varchar(200),
    postCodigo int,
    foreign key (postCodigo) references post(codigo)
    ON DELETE CASCADE
	ON UPDATE CASCADE);

insert into 
    post (titulo)
values 
    ('A empresa juiz-forana de tecnologia Smart NX, passa a integrar o Grupo Nuvini'),
    ('Smart NX, conectando o seu negócio a clientes e consumidores');

insert into 
    comentario (descricao, postCodigo)
values 
    ('Esta empresa é incrivel, eu adoraria poder crescer junto dela!',1),
    ('Usamos tecnologias de ponta!', 2);
```

Ao executar o projeto, tive o erro 1251, assim como na foto abaixo, caso voce tenha tambem, execute essa query em seu mysql (altere root, localhost e passowrod com os dados do seu banco)

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'`

![errorclient](https://user-images.githubusercontent.com/123258561/215360762-2003ebc6-0299-459b-95dc-643ee81dd2c9.png)



</details>

- AO INICIAR :door:

usei `npm init -y` para criaçao do package.json

logo após `npm install express mysql dotenv cors` para inserir dependencias no projeto

executei separadamente `npm install nodemon --save-dev` para instalar o nodemon como dependencia de desenvolvimento para recarregar o servidor automaticamente

- SOBRE ALGUNS ARQUIVOS :file_folder:

o arquivo /variaveis.env :page_facing_up: ira receber as variaveis onde armazenaremos as informações do servidor, a porta padrão para acesso no localhost e os dados de login para o banco de dados (mude os dados caso tenha outro nome de instancia ou outra senha)

as rotas se encontram no arquivo src/routes.js :page_facing_up: onde incluimos o express.

no arquivo src/server.js :page_facing_up: dentro dos scripts, inserimos o comando `"start":"nodemon ./src/server.js"` para que quandos iniciarmos o projeto com `npm start`, ele inicie o nodemon para controlar as alterações no servidor

no arquivo src/server.js :page_facing_up: incluimos o `dotenv` para que possa ser lido o arquivo variaveis.env que criamos anteriormente, e o `cors` para podermos acessar a api de outros sites mesmo estando em dominios diferentes. criamos a variavel routes para mostrar ao servidor onde estarão as variaveis, e `server.use('/api', routes);` faz com que nossas rotas iniciem com `/api`.

---

- Outras informações do projeto :bookmark_tabs:
  - [Site que usei como referencia para configurar o ESLint](https://medium.com/jaguaribetech/melhorando-a-qualidade-do-seu-código-com-airbnb-style-guide-eslint-ba2979cabcaa)
  - [Curso usado como referencia para o projeto](https://www.youtube.com/playlist?list=PL1hl9qLyFtfDXY9NO8F3TnjxezKJ_1HlI)
  - [Site usado para testes na API](https://resttesttest.com)
  - [Git - the simple guide](https://rogerdudler.github.io/git-guide/)

---

- Sites usados para criação deste README :page_with_curl:
  - Badges: [Github badges](https://github-badges.netlify.app)
  - Icones das tecnologias: [Devicon](https://devicon.dev)
  - Repositório dos emojis: [rxaviers/gist:7360908](https://gist.github.com/rxaviers/7360908)
  - Diagrama do banco: [Visual Paradigm](https://online.visual-paradigm.com/pt/)
  - Entidade de html [w3schools html_entities](https://www.w3schools.com/html/html_entities.asp)



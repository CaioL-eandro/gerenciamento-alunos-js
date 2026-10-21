# 📚 Sistema de Gerenciamento de Alunos

Aplicação web desenvolvida com **HTML, CSS e JavaScript**, com o objetivo de gerenciar alunos, calcular médias escolares e acompanhar o desempenho acadêmico.

O projeto foi desenvolvido para praticar lógica de programação, manipulação do DOM, eventos, validação de formulários e armazenamento local de dados.

## 🚀 Funcionalidades

- Cadastro de alunos com nome, idade, turma e duas notas.
- Listagem dos alunos cadastrados.
- Edição e exclusão de alunos.
- Cálculo automático da média escolar.
- Classificação automática da situação acadêmica.
- Busca de alunos por nome.
- Filtros por turma e situação acadêmica.
- Combinação de filtros.
- Indicadores de total de alunos, aprovados, reprovados e em recuperação.
- Validação de campos com HTML e JavaScript.
- Persistência dos dados utilizando `localStorage`.

## 📊 Regras de negócio

A situação do aluno é definida automaticamente de acordo com sua média:

| Média | Situação |
|---|---|
| Maior ou igual a 7 | Aprovado |
| Maior ou igual a 5 e menor que 7 | Recuperação |
| Menor que 5 | Reprovado |

**Cálculo da média:**

`Média = (Nota 1 + Nota 2) / 2`

## 🛠️ Tecnologias utilizadas

- **HTML5:** estrutura e formulários.
- **CSS3:** estilização da interface.
- **JavaScript:** lógica da aplicação, eventos e manipulação do DOM.
- **LocalStorage:** armazenamento dos alunos no navegador.

## 📁 Estrutura do projeto

```text
gerenciamento-alunos/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 💻 Como executar

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo `index.html` em um navegador.
4. Cadastre alunos e utilize os recursos de gerenciamento.

Não é necessário instalar dependências ou configurar um servidor de banco de dados.

## 🧠 Conceitos praticados

- Manipulação do DOM.
- Eventos com `addEventListener()`.
- Funções e estruturas condicionais.
- Arrays e objetos JavaScript.
- Métodos `push()`, `forEach()`, `filter()`, `indexOf()` e `splice()`.
- Atualização de objetos com `Object.assign()`.
- Validação de formulários.
- Conversão de dados com `Number()`.
- Persistência com `JSON.stringify()`, `JSON.parse()` e `localStorage`.
- Organização e refatoração de código.

## 📌 Observações

Os dados são armazenados localmente no navegador utilizado. O projeto não possui back-end nem banco de dados externo.

## 🎯 Objetivo

Consolidar conhecimentos fundamentais de desenvolvimento front-end por meio de uma aplicação funcional, aplicando operações de cadastro, consulta, atualização e exclusão (CRUD).
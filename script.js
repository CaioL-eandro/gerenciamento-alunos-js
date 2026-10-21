const inputNome = document.getElementById("input-nome")
const inputIdade = document.getElementById("input-idade")
const selectTurma = document.getElementById("select-turma")
const primeiraNota = document.getElementById("nota1")
const segundaNota = document.getElementById("nota2") 
const botaoCadastrar = document.getElementById("botao-cadastrar")
const formCadastrarAluno = document.getElementById("form-cadastrar-aluno")
const listaAlunos = document.getElementById("lista-alunos")
const resumoAprovados = document.getElementById("aprovados")
const resumoReprovados = document.getElementById("reprovados")
const resumoRecuperacao = document.getElementById("recuperacao")
const inputBuscarAluno  = document.getElementById("input-buscar-aluno")
const selectTurmaLista = document.getElementById("select-turma-lista")
const resumoTotal = document.getElementById("total-alunos")
const radioSituacao = document.querySelectorAll('input[name="grupo-situacao"]')
let arrayTurma = []
let indiceEdicao = -1;

function cadastrarAluno(event)
{
    event.preventDefault();
    const nome = inputNome.value.trim()
    const idade = Number(inputIdade.value)
    const turma = selectTurma.value
    const nota1 = Number( primeiraNota.value)
    const nota2 = Number( segundaNota.value)
    const media = (nota1+nota2 )/2 
    if(nome === "")
    {   
        return;
    }
    if(!Number.isInteger(idade) || idade < 10)
    {
        return
    }
    if(turma ==="" )
    {
        return
    }
    if(nota1 <0 || nota1 >10 ||nota2 <0 || nota2 >10)
    {
        return
    }

    let situacao = "";
    if(media >=7)
    {
       situacao = "Aprovado"
    }
    else if(media >=5)
    {
        situacao ="Recuperação"
    }
    else{
        situacao = "Reprovado"
    }
     
    const aluno = {
        Nome: nome,
        Idade:idade,
        Turma:turma,
        Nota1 :nota1,
        Nota2 :nota2,
        Media : media,
        Situacao : situacao
    }
if( indiceEdicao ===-1 )
    {
   
    arrayTurma.push(aluno)
    
}   
else{
    Object.assign(arrayTurma[indiceEdicao],aluno)
    indiceEdicao =-1
    
}
    salvarAlunos()
   buscarAluno()
    atualizarResumo(arrayTurma)
botaoCadastrar.textContent = "Cadastrar aluno"
    inputNome.value ="";
    inputIdade.value ="";
    selectTurma.value="";
    primeiraNota.value ="";
    segundaNota.value ="";


}
function exibirAlunos(alunos)
{  
  listaAlunos.innerHTML=""
   alunos.forEach(aluno => {
    const li=  document.createElement("li")
    const botaoExcluir = document.createElement("button")
    const botaoEditar = document.createElement("button")
    botaoExcluir.textContent = "Excluir"
    botaoEditar.textContent = "Editar"
    li.textContent= aluno.Nome + " || "+ "Idade:"+ aluno.Idade+" || "+"1°Nota:" + aluno.Nota1+ " || "+"2°Nota:"+ aluno.Nota2 + 
    "||" + "Média:"+aluno.Media +"||"+ "Situação:"+ aluno.Situacao
    li.appendChild(botaoExcluir)
    li.appendChild(botaoEditar)
    listaAlunos.appendChild(li)
   

    botaoExcluir.addEventListener("click",function(){
          let excluir = confirm("Deseja excluir esse aluno?")
          if(!excluir)
          {
            return
          }
          const indice = arrayTurma.indexOf(aluno)
          arrayTurma.splice(indice,1)
          salvarAlunos()
          buscarAluno()
          atualizarResumo(arrayTurma)
    })

    botaoEditar.addEventListener("click",function(){
        inputNome.value =aluno.Nome;
        inputIdade.value = aluno.Idade;
        selectTurma.value=aluno.Turma;
        primeiraNota.value =aluno.Nota1;
        segundaNota.value =aluno.Nota2;
        botaoCadastrar.textContent = "Salvar Aluno"
        indiceEdicao = arrayTurma.indexOf(aluno)
    })
   });
}
function salvarAlunos()
{
    const alunos = JSON.stringify(arrayTurma);
    localStorage.setItem("alunos",alunos)
}
function carregarAlunos() {
    const alunosRecuperados =  localStorage.getItem("alunos")
    arrayTurma = JSON.parse(alunosRecuperados)||[]
}
function atualizarResumo(arrayTurma)
{  
    let aprovados = 0
    let reprovados = 0
    let recuperacao = 0
    arrayTurma.forEach(aluno => {
        if(aluno.Situacao === "Aprovado")
        {
            aprovados++;
        }
        else if( aluno.Situacao ==="Reprovado")
        {
             reprovados ++
        }
        else if(aluno.Situacao =="Recuperação"){
           recuperacao++;
        }
        
    });
    resumoAprovados.textContent = aprovados
    resumoReprovados.textContent = reprovados
    resumoRecuperacao.textContent = recuperacao
    resumoTotal.textContent = arrayTurma.length
        
}//copiar aqui
function buscarAluno()
{   
    let alunoBusca = inputBuscarAluno.value.toLowerCase()
    let filtroTurma = selectTurmaLista.value
    let situacaoSelecionada = document.querySelector('input[name="grupo-situacao"]:Checked').value
    const arrayBusca =  arrayTurma.filter(aluno=>
        {
            
           const correspondeAluno= aluno.Nome.toLowerCase().includes(alunoBusca)
           const correspondeTurma = aluno.Turma===filtroTurma||filtroTurma ===""
           const correspondeSituacao = (aluno.Situacao === situacaoSelecionada) || situacaoSelecionada ==="todos"
          
           return correspondeAluno && correspondeTurma&& correspondeSituacao

             
        })
    exibirAlunos(arrayBusca)
}
//ate aqui 
carregarAlunos()
exibirAlunos(arrayTurma)
atualizarResumo(arrayTurma)
radioSituacao.forEach(radio =>{
    radio.addEventListener("change",buscarAluno)
})
inputBuscarAluno.addEventListener("input",buscarAluno)
formCadastrarAluno.addEventListener("submit",cadastrarAluno)
 selectTurmaLista.addEventListener("change", buscarAluno);//precisa porque sempre que mudar chama a funçaõ 



// Cadastrar alunos com nome, idade, turma e notas.



// Calcular a média das duas notas.



// Determinar se o aluno foi aprovado ou reprovado.



// Exibir os alunos cadastrados na página.



// Atualizar os indicadores de total, aprovados e reprovados.



// Permitir buscar, filtrar, editar e excluir alunos.



// Salvar os dados no localStorage.

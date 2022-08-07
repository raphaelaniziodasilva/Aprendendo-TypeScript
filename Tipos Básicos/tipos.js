"use strict";
// Para fazer as declarações de tipos no typescript primeiro você declara as variaveis e depois diz qual e o tipo delas. Os tipos sempre começam com as letra minuscula
// Boolean: verdadeiro ou falso
const contaPaga = true;
const contaNaoPaga = false;
// Number: inteiro ou real
const idade = 27;
const nota = 5.5;
// String: caractere
const nome = "Raphael Anizio";
// Array só de numeros
const loterica = [10, 44, 08, 22, 11];
// Array de strings
const nomes = ["anderson", "nah", "diego"];
// Tuple: vai ser um array aonde pode ter Number, String e Boolean
// let jogador = [string, number, boolean];
// jogador = ["Raphael", 7, true];
// Enum: é muito utilizado para fazer um mapeamento de informações 
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Reprovado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const AprovacaoStatus = StatusAprovacao.Pendente;
// Any: aceita qualquer coisa, quando for utilizar e para utilizar com muita cautela porque e realmente quando voce não precisa saber qual e o tipo
const retornoApi = [12, "Cobertor", false];
const retornoApi2 = {
// aqui eu vou receber varias coisas que eu não sei o que e 
};
// Void: e utilizado em funções que e para dizer quando uma função não retorna nada
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined:
const u = undefined;
const n = null;
// Object:
function criar(object) {
    // ...
}
criar({
    propriedade: 1
});
// criar("raphael") // da erro
// Never: o tipo never quase nunca vai ver ele sendi aplicado nos projetos
function loopInfinito() {
    while (true) {
    }
}
function erro(mensagem) {
    throw Error(mensagem);
}
function falha() {
    return erro("Algo falhou");
}
// Union types: quando algo pode ter um tipo ou outro ou seja pode ter mais de um tipo
const notas = 5;
function exibirNotas(nota) {
    console.log(`A sua nota e ${notas}`);
}
// atribuindo valores a função exibirNotas
exibirNotas("10"); // string
exibirNotas(8); // number
// type Funcionarios = Array <Funcionario>
// criando um array de funcionarios
const funcionarios = [
    {
        nome: "Raphael",
        sobrenome: "Anizio",
        idade: 27,
        dataNascimento: new Date
    },
    {
        nome: "Doctor airton",
        sobrenome: "Nobrega",
        idade: 47,
        dataNascimento: new Date
    }
];
// função para trata funcionarios
function tratarFuncionarios(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log("Nome do funcionario: ", funcionario.nome);
    }
}
// Valores nulos ou opcionais
let altura = 1.61;
// criando uma variavel contado que vai ser do tipo Contato
const contato = {
    nome: "Israel",
    telefone1: "1133263625"
};
// Type Assertion: e quando você define explicitamente no codigo qual que é o tipo de determinada variavel
/*
const minhaIdade: any = 27
<number>minhaIdade.toString() --> primeira forma

(minhaIdade as number).toString() --> primeira forma
*/
// const input = <HTMLInputElement>document.getElementById("numero1") --> primeira forma
const input = document.getElementById("numero1"); // segunda forma
console.log(input.value);

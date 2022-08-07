"use strict";
// Criando classes em TypeScript
class Data {
    // criando um construtor da classe que vai inicializar inicializar as variaveis atribuindo um valor para elas
    constructor(dia, mes, ano = 1994) {
        // definindo o ano como valor padrão caso eu não atribua nem um valor o typescript vai utilizar o valor 1994 como valor default
        // atribuindo valores que vai vir dos parâmetros
        this.dia = dia;
        this.mes = dia;
        this.ano = ano;
    }
}
let data = new Data(1, 3, 2012);
console.log(data);
let data2 = new Data(10, 08);
// console.log(data2.mes) --> A propriedade mes é particular e somente é acessivel na classe Date
// Outra forma de criar uma classe e definindo modificadores de acesso direto no constructor. O próprio typescript no momento que for gerar o javascript ele vai gerar um javascript que ja faça as atribuições pro default, ja pega o valor e atribui no this da clase porque eu estou utilizando o modificador para dizer qual e o acesso da propriedade
class Data1 {
    constructor(dia, mes, ano = 2017) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
let data3 = new Data1(10, 10, 2007);
console.log(data3.dia);
let data4 = new Data1(08, 11);

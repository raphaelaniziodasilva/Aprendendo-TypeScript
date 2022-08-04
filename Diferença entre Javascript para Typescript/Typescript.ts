/* Agora vamos trabalhar com arquivos typescript

Vamos inicar as configurações do typescript nesse projeto, use a linha de comando: tsc --init

O tsc --init: vai criar um arquivo tsconfig.json, que é um arquivo que configura o meu typescript, com todas as regras que eu quiser.

Agora vamos corrigir o arquivo que esta escrito em javascript para typescript, vou ter que dar tipos para as coisas se vai ser do tipo string, number ou boolean
*/

function somar (numero1: number, numero2: number) {
    return numero1 + numero2
}

let firstNumber = 3
let secondNumber = 4

const results = somar(firstNumber, secondNumber)
console.log(results)

/* Esta escrito em TypeScript agora vou ter que converter para o Javascript ou seja vou fazer a compilação para Javascript, pois eu tenho um typescript mais preciso e do javascript para poder usar

Para converter(compilar): use a linha de comando tsc

Tsc: o comando tsc vai pegar o meu arquivo typescript, e vai gerar um arquivo javascript
*/
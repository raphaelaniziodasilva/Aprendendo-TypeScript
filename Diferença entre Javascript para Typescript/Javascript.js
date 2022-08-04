
function somar (numero1, numero2) {
    return numero1 + numero2
}

let firstNumber = "3"
let secondNumber = "4"

const results = somar(firstNumber, secondNumber)
console.log(results)

/* O resultado deu 34 ou seja esta errado porque tem erro de codigo aqui. A função somar recebeu 3 e 4 mais ao inves de somar ele concatenou, isso porque no firstNumber e secondNumber eu tenho strigns

O javascript ele e tipado dinamicamente, porque não estava dizendo que tinha que ser numero, ele aceita o que vier 

Com o TypeScript esse tipo de erro a gente não vai cometer mais, porque ele impede que a gente cometa esses erros 

Agora vamos criar o mesmo codigo em TypeScript para isso abra um arquivo em vez de ser com o js vai ser ts no final
*/
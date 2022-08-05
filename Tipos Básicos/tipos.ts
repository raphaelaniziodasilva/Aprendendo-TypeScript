// Para fazer as declarações de tipos no typescript primeiro você declara as variaveis e depois diz qual e o tipo delas. Os tipos sempre começam com as letra minuscula

// Boolean: verdadeiro ou falso
const contaPaga: boolean = true;
const contaNaoPaga: boolean = false;

// Number: inteiro ou real
const idade: number = 27;
const nota: number = 5.5;

// String: caractere
const nome: string = "Raphael Anizio";

// Array só de numeros
const loterica: number[] = [10, 44, 08, 22, 11];
// Array de strings
const nomes: string[] = ["anderson", "nah", "diego"];

// Tuple: vai ser um array aonde pode ter Number, String e Boolean
let jogador = [string, number, boolean];
jogador = ["Raphael", 7, true];

// Enum: é muito utilizado para fazer um mapeamento de informações 
enum StatusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    Reprovado = "003"
}
const AprovacaoStatus: StatusAprovacao = StatusAprovacao.Pendente;

// Any: aceita qualquer coisa, quando for utilizar e para utilizar com muita cautela porque e realmente quando voce não precisa saber qual e o tipo
const retornoApi: any[] = [12, "Cobertor", false];

const retornoApi2: any = {
    // aqui eu vou receber varias coisas que eu não sei o que e 
}

// Void: e utilizado em funções que e para dizer quando uma função não retorna nada
function printarNaTela (msg: string): void {
    console.log(msg);

}

// Null e Undefined:
const u: undefined = undefined;
const n: null = null;

// Object:
function criar(object: object) {
    // ...
}
criar({
    propriedade: 1

})
// criar("raphael") // da erro

// Never: o tipo never quase nunca vai ver ele sendi aplicado nos projetos
function loopInfinito(): never {
    while(true) {

    }
}

function erro(mensagem: string): never {
    throw Error(mensagem)
}

function falha() {
    return erro("Algo falhou")
}

// Union types: quando algo pode ter um tipo ou outro ou seja pode ter mais de um tipo
const notas: number | string = 5
function exibirNotas(nota: number| string) {
    console.log(`A sua nota e ${notas}`)
}

// atribuindo valores a função exibirNotas
exibirNotas("10") // string
exibirNotas(8) // number




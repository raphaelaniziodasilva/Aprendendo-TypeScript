// Criando classes em TypeScript
class Data {
    /* definindo propriedades da classe

    No typscript temos os modificadores de acesso para cada uma das propriedades que são propriedades publicas e propriedades privadas

    Propriedades publicas: significa que qualquer um consegue acessar ou outra classe, mas eu consigo definir modificadores de acesso para essas propriedade, quando coloco public estou deixando explicito que essa propriedade e publica. Mas se eu não colocar nada por default ela ja e publica

    Propriedades privadas: a propriedade que esta como private ela só poderá ser acessada de dentro da propria classe, atraves de metodos da propria classe 
    */

    public dia: number
    private mes: number
    ano: number

    // criando um construtor da classe que vai inicializar inicializar as variaveis atribuindo um valor para elas
    constructor(dia: number, mes: number, ano: number = 1994){ 

        // definindo o ano como valor padrão caso eu não atribua nem um valor o typescript vai utilizar o valor 1994 como valor default

        // atribuindo valores que vai vir dos parâmetros
        this.dia = dia
        this.mes = dia
        this.ano = ano

    }
}

let data = new Data(1, 3, 2012)
console.log(data)

let data2 = new Data(10, 08)
// console.log(data2.mes) --> A propriedade mes é particular e somente é acessivel na classe Date


// Outra forma de criar uma classe e definindo modificadores de acesso direto no constructor. O próprio typescript no momento que for gerar o javascript ele vai gerar um javascript que ja faça as atribuições pro default, ja pega o valor e atribui no this da clase porque eu estou utilizando o modificador para dizer qual e o acesso da propriedade
class Data1 {
    constructor(public dia: number, public mes: number, public ano: number = 2017) {

    }

    // utilize o site do TypeScript playground para ver o codigo convertido em javascript   
}

let data3 = new Data1(10, 10, 2007)
console.log(data3.dia)

let data4 = new Data1(08, 11)


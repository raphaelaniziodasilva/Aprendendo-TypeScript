class Carro {
    // velocidade vai começar com 0 porque o carro esta parado
    private velocidadeAtual = 0

    constructor(
        public marca: string, 
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {}

    // criando uma função ara alterar a velocidade
    private alterarVelocidade (delta: number) {

        // nova velocidade
        const novaVelocidade = this.velocidadeAtual + delta

        // verificar qual vai ser a nova velocidade
        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade
        } else {
            // se a velocidade atual for positiva vai para a velocidade maxima, se for uma velocidade negativa menor que 0 então a velocidade fica zerada
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima: 0
        }
    }

    // função acelerar
    acelerar() {
        this.alterarVelocidade(10)
    }

    // função frear
    frear() {
        this.alterarVelocidade(-5)
    }
}

const carro = new Carro("Mercedes", "BMW21X", 250)
carro.acelerar()
carro.frear()
console.log(carro)

// Herança: a minha classe Camaro vai herdar tudo que tem na classe Carro, para fazer a herança use a palavra chave extends e o nome da classe que vai herda
class Camaro extends Carro {
    private turbo = false

    // Use o metodo super para poder pegar tudo o que tem no construtor da classe pai: Carro
    constructor() {
        super("Camaro", "Camaro amarelo XT", 480)
    }

    ligarTurbo(){
        this.turbo = true
    }
}

const camaro = new Camaro()
camaro.acelerar()
camaro.ligarTurbo()
camaro.frear()


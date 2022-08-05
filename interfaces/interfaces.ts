/* Interfaces é uma coisa que existe no typescript, ela não existe no javascript

A gente utiliza muito interface para tipar alguns dadoa

*/

interface Usuario {
    nome: string,
    idade: number,
    email: string,
    endereco?: string // vai ser opcional
}

// função para retornar um usuario
function getUser(): Usuario {
    return {
        nome: "Jõao",
        idade: 37,
        email: "joao@gmail.com"
    } 
}

function setUser(usuario: Usuario) {
    //...
}
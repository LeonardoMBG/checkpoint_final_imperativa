// CHECKPOINT 3 PROGRAMAÇÃO IMPERATIVA
// Esse checkpoint teve como objetivo a realização de 7 desafios conectados entre si. Para a execução dele, basta ir ao arquivo class.js, e no terminal integrado do visual studio code inserir "node class.js" sem as aspas. 

// Primeiro desafio é a criação de uma classe construtora com adição de atributos "nome", "falta" e "notas"
class Students {
    nameStudent = " ";
    defaultStudent = 0;
    gradesStudent = [ ];

    constructor (nameStudent, defaultStudent, gradesStudent){
        this.nameStudent = nameStudent;
        this.defaultStudent = defaultStudent;
        this.gradesStudent = gradesStudent;

        // Segundo desafio consta na criação de um método para calcular a média
        this.average = function () {
            let average = 0;
            let sum = 0;

            this.gradesStudent.forEach( unity => { sum += unity; } )

            average = sum / this.gradesStudent.length;
            return average;
        }

        // Segundo desafio ainda conta com a criação de outro método, o de adicionar +1 falta sempre que for chamado
        this.default = function () { this.defaultStudent ++ }
    }
}

module.exports = Students;
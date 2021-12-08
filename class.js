const undergraduate = require ('./student'); // importação da lista "undergraduate" do arquivo students

// Terceiro desafio foi a criação de um Objeto curso, com atributos "nome do curso", "nota de aprovação", "faltas maximas" e uma lista de estudantes
const course = {
    nameCourse: 'Engineer',
    gradesApproval: 7,
    defaultMaxium: 4,
    listUnderGraduate: undergraduate,

// Quarto desafio consiste na criação de método que permita adicionar um novo estudante na lista estudantes
    addStudent: function(student) { this.listUnderGraduate.push (student) },
    

    // Quinto desafio é a a criação de um método que nos retorne se um estudante em específico foi aprovado ou reprovado de acordo com os parâmetros estabelecidos pelo desafio.
    undergraduateApproved: function (student) {
        if (student.average() >= this.gradesApproval && student.defaultStudent < this.defaultMaxium) {
            return "aprovado";
        } else if  (student.defaultStudent === this.defaultMaxium && student.average() >(this.gradesApproval*1.1)) {
            return "aprovado";
        } else {
            return "reprovado";
        }
    },

    // Sexto desafio é a criação de um métodos que retorne um array de booleanos, com resposta de aprovado ou reprovado de todos os estudantes do curso.
    engineerClassApproved: function () {
        const classEngineer = [];
        this.listUnderGraduate.forEach( unity => {
            if (unity.average() >= this.gradesApproval && unity.defaultStudent < this.defaultMaxium) {
                classEngineer.push ("aprovado");
            } else if (unity.defaultStudent === this.defaultMaxium && unity.average() > (this.gradesApproval*1.1)) {
                classEngineer.push("aprovado");
            } else {
                classEngineer.push("reprovado");
            }
            }
        )
        return classEngineer
    }
}


// Para realizar o teste do microdesafio 5 e 6, basta usar os consoles.log a seguir:
// console.log(course.undergraduateApproved(undergraduate[0])); // Imprime se o estudante que escolhemos de acordo com a posição do "undergraduate" está aprovado ou reprovado.

// console.log ("Estudante " + undergraduate[0].nameStudent + " " + "foi " + course.undergraduateApproved(undergraduate[0]));  // Imprime se o estudante da posição 0 foi aprovado junto de uma mensagem
// console.log ("Estudante " + undergraduate[1].nameStudent + " " + "foi " + course.undergraduateApproved(undergraduate[1])); // Imprime se o estudante da posição 1 foi aprovado junto de uma mensagem
// console.log ("Estudante " + undergraduate[2].nameStudent + " " + "foi " + course.undergraduateApproved(undergraduate[2])); // Imprime se o estudante da posição 2 foi aprovado junto de uma mensagem
// console.log ("Estudante " + undergraduate[3].nameStudent + " " + "foi " + course.undergraduateApproved(undergraduate[3])); // Imprime se o estudante da posição 3 foi aprovado junto de uma mensagem
// console.log ("Estudante " + undergraduate[4].nameStudent + " " + "foi " + course.undergraduateApproved(undergraduate[4])); // Imprime se o estudante da posição 4 foi aprovado junto de uma mensagem
// console.log ("Estudante " + undergraduate[5].nameStudent + " " + "foi " + course.undergraduateApproved(undergraduate[5])); // Imprime se o estudante da posição 5 foi aprovado junto de uma mensagem

console.log(course.engineerClassApproved()); // Imprime a resposta final do exercício. Um desafio pessoal que eu não consegui resolver foi a inclusão do nome do aluno aprovado ou reprovado junto no array.

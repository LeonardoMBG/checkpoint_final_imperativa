// Sétimo desafio é a criação de um terceiro arquivo, que receba o instanciamento do objeto aluno que criamos no primeiro arquivo, e que exporte as informações daqui em forma de lista para o arquivo do objeto curso.

const Students = require('./modules'); // Importação do objeto aluno "Students" do arquivo index

// Instanciamento do objeto aluno
const student1 = new Students ('Leonardo', 2, [8, 9, 9])
const student2 = new Students ('Giovanna', 4, [8, 7, 6])
const student3 = new Students ('Arlete', 0, [10, 8, 4])
const student4 = new Students ('João', 7, [5, 2, 7])
const student5 = new Students ('Manuel', 3, [7, 6, 7])
const student6 = new Students ('Clara', 2, [8, 8, 8])

// Uma dúvida que me surgiu foi a criação dessa Lista. Talvez tenha um jeito melhor desenvolvido para criá-la, não tendo que declarar uma variável e colocando estudante por estudante dentro de um array. Talvez tenha como criá-la no objeto Aluno do arquivo index, ou de um jeito melhor aqui mesmo nesse arquivo. Ficará como desafio para eu resolver posteriormente.
let undergraduate = [student1, student2, student3, student4, student5, student6];

module.exports = undergraduate;


// Para testar algumas funcionalidades do Checkpoint, pode-se usar os console.log abaixo:

// console.log(student1); // Usado para receber todas as informações de um estudante específico
// console.log(student1.average()); // Ao ser usado, irá mostrar a média que o estudante específico obteve
// console.log(student1.default()); // Toda vez que usado, irá acrescentar em 1 o número de faltas
// console.log(student1.defaultStudent); // Ao ser usado será mostrado o número total de faltas do estudante específico
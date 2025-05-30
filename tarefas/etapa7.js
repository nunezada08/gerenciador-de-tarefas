let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador']
let tarefaRemovida

tarefaRemovida = tarefas.splice(2, 3)

console.table(tarefas)
console.log("tarefas Removidas:", tarefaRemovida)

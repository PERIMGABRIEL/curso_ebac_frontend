
const alunos = [
    { nome: 'Iago', nota: 7 },
    { nome: 'Gabriel', nota: 5 },
    { nome: 'Caetano', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Luiza', nota: 6 }
];


const alunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};


console.log(alunosAprovados(alunos));

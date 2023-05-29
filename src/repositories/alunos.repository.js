import { db } from "../database/database.connection.js"

export function getAlunoByIdAluno (idAluno) {
    return db.query(`SELECT "alunosTurmas".*, alunos.*, turmas.nomenclatura FROM "alunosTurmas"
    JOIN alunos ON alunos.id="alunosTurmas"."idAluno"
    JOIN turmas ON turmas.id="alunosTurmas"."idTurma"
    WHERE alunos.id=$1;`, [idAluno])
}

export function getAlunosByIdTurma (idTurma) {
    return db.query(`SELECT "alunosTurmas"."idAluno", alunos.nome, alunos.foto 
    FROM "alunosTurmas"
    INNER JOIN alunos ON "alunosTurmas"."idAluno"=alunos.id
    WHERE "alunosTurmas"."idTurma"=$1 AND "alunosTurmas"."dataFim" IS NULL;
    `, [idTurma])
}

export function insertNewAluno (nome, cpf, email, foto) {
    return db.query(`INSERT INTO alunos (nome, cpf, email, foto) VALUES ($1, $2, $3, $4) RETURNING id`, [nome, cpf, email, foto])
}

export function insertNewAlunoTurma (idAluno, idTurma) {
    return db.query(`INSERT INTO "alunosTurmas" ("idAluno", "idTurma") VALUES ($1, $2)`, [idAluno, idTurma])
}


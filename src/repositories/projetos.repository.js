import { db } from "../database/database.connection.js"

export function getProjetosTurma (idTurma) {
    return db.query(`SELECT * FROM "projetosAlunos" WHERE "idTurma"=$1`, [idTurma])
}

export function getProjetosTurmaProjeto(idTurma, idProjeto) {
    return db.query(`SELECT "projetosAlunos".id, alunos.foto, alunos.nome, notas.nota FROM "projetosAlunos"
    JOIN alunos ON "projetosAlunos"."idAluno" = alunos.id
    JOIN notas ON "projetosAlunos"."idNota" = notas.id
    WHERE "projetosAlunos"."idProjeto"=$2 AND "projetosAlunos"."idTurma"=$1;`, [idTurma, idProjeto])
}

export function getAllProjetos() {
    return db.query(`SELECT * FROM projetos;`)
}

export function updateNota(id, idNota) {
    return db.query(`UPDATE "projetosAlunos" SET "idNota"=$1 WHERE id=$2`, [idNota, id])
}

export function postNewProjeto(idAluno, idTurma, idProjeto, link) {
    return db.query(`INSERT INTO "projetosAlunos" ("idAluno", "idTurma", "idProjeto", "link") VALUES ($1, $2, $3, $4)`, [idAluno, idTurma, idProjeto, link])
}
import { Router } from "express";
import { getAlunoByIdDetail, getAlunoByIdTurmaList, postNewAluno } from "../controllers/alunos.controller.js";

const alunosRouter = Router()

alunosRouter.get("/alunos/aluno/:idAluno", getAlunoByIdDetail)
alunosRouter.get("/alunos/turma/:idTurma", getAlunoByIdTurmaList)
alunosRouter.post("/alunos", postNewAluno)

export default alunosRouter
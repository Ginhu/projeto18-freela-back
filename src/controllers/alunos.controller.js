import { getAlunoByIdAluno, getAlunosByIdTurma, insertNewAluno, insertNewAlunoTurma } from "../repositories/alunos.repository.js"

export async function getAlunoByIdDetail(req, res) {
    const {idAluno} = req.params

    try {
        const alunoDetails = await getAlunoByIdAluno(idAluno)
        res.status(200).send(alunoDetails.rows)
    } catch (err) {
        console.log(err.message)
    }
}

export async function getAlunoByIdTurmaList (req, res) {
    const {idTurma} = req.params

    try {
        const alunosList = await getAlunosByIdTurma(idTurma)
        res.status(200).send(alunosList.rows)
    } catch (err) {
        console.log(err.message)
    }
}

export async function postNewAluno (req, res) {
    const {nome, cpf, email, foto, idTurma} = req.body

    try {
        const idAluno = await insertNewAluno(nome, cpf, email, foto)
        const newIdAluno = parseInt(idAluno.rows[0].id)
        const newIdTurma = parseInt(idTurma)
        await insertNewAlunoTurma(newIdAluno, newIdTurma)

        res.sendStatus(201)
    } catch (error) {
        res.send(error.message)
    }
}
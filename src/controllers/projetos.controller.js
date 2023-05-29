import { getAllProjetos, getProjetosTurma, getProjetosTurmaProjeto, postNewProjeto, updateNota } from "../repositories/projetos.repository.js"

export async function getProjetosByIdTurma (req, res) {
    const {idTurma} = req.params

    try {
        const projetos = await getProjetosTurma(idTurma)
        res.status(200).send(projetos.rows)
    } catch (err) {
        console.log(err.message)
    }
}

export async function getProjetosByIdTurmaByIdProjeto (req, res) {
    const {idTurma, idProjeto} = req.params

    try {
        const projetos = await getProjetosTurmaProjeto(idTurma, idProjeto)
        res.status(200).send(projetos.rows)
    } catch (err) {
        console.log(err.message)
    }
}

export async function getProjetos (req, res) {
    try {
        const projetos = await getAllProjetos()
        res.send(projetos.rows)
    } catch (error) {
        console.log(error.message)
    }
}

export async function updateNotaProjeto (req, res) {
    const {id, idNota} = req.body

    try {
        await updateNota(id, idNota)
        res.status(202).send("Nota atualizada")
    } catch (error) {
        console.log(error.message)
    }
}

export async function postProjeto(req, res) {
    const {idAluno, idTurma, idProjeto, link} = req.body

    try {
        await postNewProjeto(idAluno, idTurma, idProjeto, link)
        res.status(201).send('Projeto enviado com sucesso')
    } catch (error) {
        console.log(error.message)
    }
}
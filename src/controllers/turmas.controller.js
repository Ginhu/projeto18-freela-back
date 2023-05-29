import { getTurmas } from "../repositories/turmas.repository.js"

export async function getAllTurmas (req, res) {
    try {
        const turmas = await getTurmas()
        res.status(200).send(turmas.rows)
    } catch (err) {
        console.log(err.message)
    }
}
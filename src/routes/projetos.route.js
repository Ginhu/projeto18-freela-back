import { Router } from "express"
import { getProjetos, getProjetosByIdTurma, getProjetosByIdTurmaByIdProjeto, postProjeto, updateNotaProjeto } from "../controllers/projetos.controller.js"

const projetosRouter = Router()

projetosRouter.get("/projetos", getProjetos)
projetosRouter.get("/projetos/:idTurma", getProjetosByIdTurma)
projetosRouter.get("/projetos/:idTurma/:idProjeto", getProjetosByIdTurmaByIdProjeto)
projetosRouter.put("/projetos", updateNotaProjeto)
projetosRouter.post("/projetos", postProjeto)

export default projetosRouter
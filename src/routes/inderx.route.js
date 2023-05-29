import { Router } from "express"
import turmasRouter from "./turmas.route.js"
import projetosRouter from "./projetos.route.js"
import alunosRouter from "./alunos.route.js"

const router = Router()

router.use(turmasRouter)
router.use(projetosRouter)
router.use(alunosRouter)

export default router
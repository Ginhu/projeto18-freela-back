import { Router } from "express"
import { getAllTurmas } from "../controllers/turmas.controller.js"

const turmasRouter = Router()

turmasRouter.get("/turmas", getAllTurmas)

export default turmasRouter
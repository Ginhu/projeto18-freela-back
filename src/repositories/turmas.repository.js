import {db} from "../database/database.connection.js"

export function getTurmas () {
    return db.query(`SELECT * FROM turmas;`)
}
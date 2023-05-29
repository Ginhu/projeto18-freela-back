import express from "express"
import router from "./routes/inderx.route.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`SERVER ON ${PORT}`))
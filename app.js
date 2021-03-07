const express = require('express')
const taskRoutes = require('./routes/task')
const adminRoutes = require("./routes/admin")
const employRoutes = require("./routes/employ")
const connect = require("./db")
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())
app.use("/tasks", taskRoutes)
app.use("/admin", adminRoutes)
app.use("/employees", employRoutes)
app.get("/ping", (req, res) => res.send("pong"))

const PORT = process.env.PORT || 8080
const start = async () => {
    await connect()
    app.listen(PORT, () => console.log(`app started on port ${PORT}`))
}
start()
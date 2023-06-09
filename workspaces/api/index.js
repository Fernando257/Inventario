if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const path = require('path')
const cors = require('cors')
const router = require('./router/routes')
const app = express()

app.use(cors())
app.use(express.json())

//Conexion a la base de datos

//Peticiones a la base de datos

app.use("/api", router)


app.listen(process.env.PORT || 80, () => {
  console.log(`app listening at ${process.env.PORT || 80}`)
})

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
})




//Pelame la verga 

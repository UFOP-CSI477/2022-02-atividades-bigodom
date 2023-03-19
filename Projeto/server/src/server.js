import express from 'express'
import { carroRouter } from './routes/carro.js'
import { clienteRouter } from './routes/cliente.js'
import { mainRouter } from './routes/main.js'
import { manutencaoRouter } from './routes/manutencao.js'

const PORT = 3000

const app = express()
app.use(express.json())

app.use(mainRouter)
app.use(clienteRouter)
app.use(carroRouter)
app.use(manutencaoRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
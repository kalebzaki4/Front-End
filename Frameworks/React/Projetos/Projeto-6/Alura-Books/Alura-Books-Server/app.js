const express = require("express")
const rotaLivro = require("./rotas/livro")
const rotaFavorito = require("./rotas/favorito")

const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
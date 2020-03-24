const express = require("express")
const cors = require("cors")
const routes = require("./routes")
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
/*
métodos HTTP:
GET: buscar/listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Excluir uma informação no back-end
*/

/*
Tipos de parâmetros:
Query Params: Parâmetros nomeados enviados na rota após o símbolo de  "?" (Filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
Driver: SELECT * FROM users
Query Builder: table('users).select("*").where()
*/

app.listen(3001, () => {
    console.log("Backend em Execução!".toUpperCase())
})
const axios = require("axios")
const api = axios.create({
    baseURL: "http://localhost:3001",//vai fazer a integração da API com o frontend da aplicação
})

export default api
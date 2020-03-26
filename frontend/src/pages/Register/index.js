import React, { useState } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link, useHistory } from "react-router-dom"
import "./styles.css"
import logoImg from "../../assets/logo.svg"
import api from "../../services/api"

function Register() {
    //guardar os valores que o usuário digitar no formulário
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [city, setCity] = useState("")
    const [uf, setUf] = useState("")
    //enviar o usuário de volta a página de login
    const history = useHistory()//faz navegação através de função em javascript
    async function handleRegister(event) {
        event.preventDefault()
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }//dados que serão enviados para a api
        try {
            const response = await api.post("ongs", data)//envio dos dados via método post para a rota definida na api
            alert(`Cadastro realizado com sucesso! Id de acesso: ${response.data.id}`)
            history.push("/")//redireciona o usuário para a rota raiz (neste caso)
        } catch(error) {
            alert("Erro no cadastro, tente novamente.")
        }
    }//função responsável por cadastrar o usuário
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                            Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register
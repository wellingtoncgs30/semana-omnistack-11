import React, { useState } from "react"
import { FiLogIn } from "react-icons/fi"
import { Link, useHistory } from "react-router-dom"
import "./styles.css"
import heroesImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg"
import api from "../../services/api"
function Logon() {
    const [id, setId] = useState("")
    const history = useHistory()
    async function handleLogin(event) {
        event.preventDefault()
        try {
            const response = await api.post("sessions", { id })
            localStorage.setItem("ongId", id)
            localStorage.setItem("ongName", response.data.name)
            history.push("/profile")
        } catch(error) {
            alert("Falha no login, tente novamente.")
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={event => setId(event.target.value)}    
                    />
                    <button type="submit" className="button">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"></FiLogIn>
                            Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}

export default Logon
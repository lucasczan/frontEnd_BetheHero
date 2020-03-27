import React, {useState} from 'react'
import './style.css'
import heroesImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
export default function Logon() {
  const [id,setId] = useState('')
  const history = useHistory('')
  async function handleLogin(e){
    e.preventDefault();
    console.log(id)
    try {
      const response = await api.post('sessions',{id});
      
      localStorage.setItem('ongId',id);
      localStorage.setItem('ongName', response.data.name)
      history.push('/profile')
    } catch (error) {
      alert('erro')
    }
  }
  return (
    <div className="logon-container">


      <div className="container">
        <div className="row justify-content-center align-items-center">

          <div className="col-12 col-md-6 p-5" id="form-container">
            <img src={logo} alt="" id="logo" />
            <form onSubmit={handleLogin} className="logon-form">
              <h1>Faça seu logon</h1>
              <input type="text" placeholder="Sua ID"  value={id} onChange={e => setId(e.target.value)}/>
              <button type="submit" className="button">Entrar</button>
              <br />
              <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
              </Link>
            </form>
          </div>

          <div className="col-12 col-md-6">

            <img src={heroesImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
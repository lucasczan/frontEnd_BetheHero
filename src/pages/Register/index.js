import React, {useState} from 'react'
import './style.css'
import logo from '../../assets/logo.svg'
import {Link , useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

export default function Register(){

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [whatsapp,setWhatsapp] = useState('')
  const [city,setCity] = useState('')
  const [uf,setUf] = useState('')

  const history = useHistory('')

  async function handleRegister(e){
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response =  await api.post('ongs',data);
      alert(`seu id : ${response.data.id}`)
      history.push('/')
    } catch (error) {
      console.log(error)
    }


  }

  return(
    <div className="register-container">
      <div className="container" id="content">
        <div className="row align-items-center p-5">

          <div className="col-12 col-md-6 p-5">
              <img src={logo} alt="Be The hero"/>
              <h1>Cadastro</h1>
              <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG</p>
              <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#E02041" />
              Não tenho cadastro
            </Link>     
          </div>
          <div className="col-12 col-md-6  ">
            <form onSubmit={handleRegister}>
              <input type="text" placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
              <input type="Email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
              <input placeholder="whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />

              <div className="row">
                <div className="col-9 pr-1">
                  <input type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                </div>

                <div className="col-3 pl-0">
                  <input type="text" placeholder="UF" value={uf} onChange={e => setUf(e.target.value)}/>
                </div>
              </div>

              <button className="button" type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
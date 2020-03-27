import React, {useState} from 'react';
import './style.css';
import logo from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'
export default function NewIncident(){
  const [title,setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const ongId = localStorage.getItem('ongId')
  const history = useHistory('')

  async function handleNewIncident(e){
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    }

    try {
      await api.post('incidents',data,{
        headers:{
          authorization:ongId
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('erro ao cadastrar caso');
    }
  }
  return (
    <div className="new-incident-container">
      <div className="container" id="content">
        <div className="row align-items-center p-5">

          <div className="col-12 col-md-6 p-5">
              <img src={logo} alt="Be The hero"/>
              <h1>Cadastro</h1>
              <p>Desceva o caso detalhadamente para encontrar um herói para resolver isso.</p>
              <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041" />
              Voltar para home
            </Link>     
          </div>
          <div className="col-12 col-md-6  ">
            <form onSubmit={handleNewIncident}>
              <input 
                type="text" 
                placeholder="Título do caso" 
                value={title} 
                onChange={e => setTitle(e.target.value)}
              />
              <textarea 
                placeholder="Descrição" 
                value={description} 
                onChange={e => setDescription(e.target.value)}
              />
              <input 
                placeholder="Valor em reais" 
                value={value} 
                onChange={e => setValue(e.target.value)}
                />
              <button className="button" type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
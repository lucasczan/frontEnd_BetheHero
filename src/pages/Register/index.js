import React from 'react'
import './style.css'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
export default function Register(){
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
            <form action="">
              <input type="text" placeholder="Nome da ONG"/>
              <input type="Email" placeholder="E-mail"/>
              <input placeholder="whatsapp"/>

              <div className="row">
                <div className="col-9 pr-1">
                  <input type="text" placeholder="Cidade"/>
                </div>

                <div className="col-3 pl-0">
                  <input type="text" placeholder="UF"/>
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
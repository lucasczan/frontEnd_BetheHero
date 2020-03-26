import React from 'react'
import './style.css'
import heroesImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Logon() {
  return (
    <div className="logon-container">


      <div className="container">
        <div className="row justify-content-center align-items-center">

          <div className="col-12 col-md-6 p-5" id="form-container">
            <img src={logo} alt="" id="logo" />
            <form action="" className="logon-form">
              <h1>Faça seu logon</h1>
              <input type="text" placeholder="Sua ID" />
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
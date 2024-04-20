import React from 'react';
import './Login.css';
import '../../components/UI/Button.css';
import Button from '../../components/UI/Button.js';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleClick =() =>{
        console.log('Boton funcionaa');
    }    
  return (
    
    <div className="container">
        <div className="container-login">
            <div>
            <img src="/img/logoRebuild.png" alt="Imagen" className='logo'/>
            </div>            
            <div className="h2">
                <h2>Iniciar sesión</h2>
            </div> 
            <form className="form">
                <div>
                    <label className="label" htmlFor="email">Correo electrónico</label>
                    <input className="input" type="email" placeholder="Correo electrónico" />
                </div>
                <div>
                    <label className="label" htmlFor="password">Contraseña</label>
                    <input className="input" type="password" placeholder="Contraseña" />
                </div>

                <Link to="/HomePage">
                    <Button onClick={handleClick} text="Ingresar" className="btn-primary" />
                </Link>
                
                <Button onClick={handleClick} text="¿Olvidaste tu contraseña?" className="btn-text" />
            </form>
        </div>
    </div>
    
  );
}

export default Login;

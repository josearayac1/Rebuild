//Home.js
import React from 'react';
import Layout from '../Layout/Layout.js';
import './Home.css'
import ProfilePicture from '../../components/UI/ProfilePicture.js';
import perfil from '../../img/perfil.png';


const HomePage = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  const imageUrl = perfil;
  
    return (
        <Layout>
          <div className='content-wrapper'>
            <div className='container-left'>
              <form onSubmit={handleSubmit} className='form-search'>
                <input className='input-search' type='text' placeholder='Buscar una inspección'/>
                <button className='button-search' type='submit'>Buscar</button>
              </form>  
            </div>
            <div className='container-right'>
              <ProfilePicture imageUrl={imageUrl} />
            </div>
          </div>
        </Layout>
      );
  
    };
export default HomePage;
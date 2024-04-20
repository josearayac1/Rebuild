import React from 'react';
import './ProfilePicture.css';


const ProfilePicture = ({ imageUrl }) => {
    
    return(
        <div className="profile-picture-container">
            <img src={imageUrl} className="profile-picture" alt='Foto de perfil' />
        </div>
    );
};

export default ProfilePicture;
import React from 'react';
import userImg from '../../assets/img/daniel.jpg';
import Stack from '../Stack';
import SoftSkills from '../SoftSkills';
import Langue from '../Langue';
import Contact from './Contact';

const User = () => {
  return (
    <>
      <img src={userImg} alt="portrait de profil" />
      <div className="user">
        <h1>Daniel Gonzalez</h1>
        <h2>Développeur Frontend junior</h2>
        <Stack />
        <SoftSkills />
        <Langue />
      </div>
      <Contact />
    </>
  );
};

export default User;

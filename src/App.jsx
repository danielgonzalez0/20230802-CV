import React from 'react';
import User from './components/user/User';

const App = () => {
  return (
    <div className="app">
      <div className="grid-container">
        <div className="main">main</div>
        <div className="sidebar">
            <User/>
        </div>
      </div>
    </div>
  );

  //https://dribbble.com/shots/21147909-Professional-Resume-Word-Indesign

  //   react, material ui, react-html2pdf
  //   variables css
  //   colonne de droite
  //   details perso users
  //   compétences - skills
  //   langues - skills
  //   centres d'intérêts
  //   colonne de gauche
  //   profil
  //   formations
  //   experiences
  //   génération de pdf
};

export default App;

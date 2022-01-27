import React, {useState} from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Sobre from './componentes/Sobre/Sobre';
import Catalogo from './componentes/Catalogo/Catalogo';
import Contatos from './componentes/Contatos/Contatos';


function App() {
  return (
    <section>
      <Header/>
      <Sobre/>
      <Catalogo/>
      <Contatos/> 
    </section>
  );
}

export default App;

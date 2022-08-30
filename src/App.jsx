import React from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';
import { useState } from 'react';

export default function App() {
  
  const [elementosComprados, setElementosComprados] = useState(0);

  const agregar = () => {
    setElementosComprados((prevState) => prevState+=1);
  }

  return (
    <div className="App">
      <Cabecera elementosComprados={elementosComprados}/>
      <Listado agregar={agregar}/>
    </div>
  );
}
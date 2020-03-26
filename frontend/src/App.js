import React, { Fragment } from 'react';
import "./global.css"
import Routes from "./routes"

//componente: É uma função que retorna conteúdos HTML5
//JSX (JavaScript XML(Extended)): JavaScript integrado ao HTML
//propriedades: passar atributos para um componentes
//estado: informação que será mantida por um componente
//imutabilidade: não pode alterar o valor do estado de forma direta
//useState retorna um array. Array[valor, função de atualização]
function App() {
  return (
    <Fragment>
      <Routes></Routes>
    </Fragment>
  );
}

export default App;

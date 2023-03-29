import './App.scss';
import React from 'react';
import Navbar from './components/Navbar/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className="mainContainer">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/productos' element={<h1><ItemListContainer /></h1>}/>
        <Route path='/sintacc' element={<h1>Productos SIN TACC</h1>}/>
        <Route path='/veggies' element={<h1>Productos VEGGIES</h1>}/>
        <Route path='/suplementos' element={<h1>SUPLEMENTOS</h1>}/>
        <Route path='/nosotros' element={<h1>SOMOS BE LIFE</h1>}/>
        <Route path='/contacto' element={<h1>CONTACTO</h1>}/>
        <Route path='/' element={<h1>HOME</h1>}/>
        <Route path='*' element={ <h1>Esta pagina no existe</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

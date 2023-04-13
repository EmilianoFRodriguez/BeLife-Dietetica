import './App.scss';
import React from 'react';
import Navbar from './components/Navbar/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer';
import CartContainer from './components/CartContainer';
import ItemDetailContainer from './components/itemDetailContainer';
import Footer from './components/footer';
import { exportData } from './components/firebase/firestoreExportData';
import { CartContextProvider } from './context/cartContext';
import { QuienesSomos } from './components/QuienesSomos';

function App() {
  return (
    <div className="mainContainer">
      <CartContextProvider>
        <BrowserRouter>
          {/* <button onClick={ exportData }>Exportar productos</button> */}
          <Navbar />
          <div className='main'>
            <Routes>
              <Route path='/productos' element={<div><ItemListContainer /></div>} />
              <Route path='/detalle/:idProduct' element={<div><ItemDetailContainer /></div>} />
              <Route path='/category/:idCategory' element={<div><ItemListContainer /></div>} />
              <Route path='/nosotros' element={<div><QuienesSomos /></div>} />
              <Route path='/contacto' element={<h1>CONTACTO</h1>} />
              <Route path='/' element={<h1>HOME</h1>} />
              <Route path='*' element={<h1>Esta pagina no existe</h1>} />
              <Route path='/cart' element={<div><CartContainer /></div>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

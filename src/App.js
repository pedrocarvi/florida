import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Intercambiabilidad from './components/intercambiabilidad.jsx';
// import Caso1 from './components/abstraccion1.jsx';
// import Caso2 from './components/abstraccion2.jsx';
// import { Viewport } from './components/mouse.jsx';
import './App.css';
import Cart from './components/Cart/Cart.jsx';
import CartContextProvider from './context/CartContext.jsx'

function App() {

  return (    
      <div className="App">
        <CartContextProvider>
          <BrowserRouter> 
            
            <NavBar/>
            
            <Routes> 
              <Route exact path="/" element={<ItemListContainer greeting="Florida E-Commerce"/>}/>
              <Route exact path="/categoria/:categoryID" element={<ItemListContainer greeting="Florida E-Commerce"/>}/>
              <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
            </Routes>

          {/* <Intercambiabilidad/> */}
          {/* <Caso1/> */}
          {/* <Caso2/> */}

          </BrowserRouter>
          </CartContextProvider>
      </div>

  );
}

export default App;

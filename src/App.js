import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart.jsx';
import CartContextProvider from './context/CartContext.jsx'
import Footer from './components/Footer/Footer.jsx';
import Destacados from './components/ItemListContainer/Destacados.jsx';
import Contact from './components/Contact/Contact.jsx';
import CategoriesContainer from './components/Categories/CategoriesContainer.jsx';

function App() {

  return (    
      <div className="App">
        <CartContextProvider>
          <BrowserRouter> 
            
            <NavBar/>
            
            <Routes> 
              <Route exact path="/" element={<Destacados greeting="¡Bienvenido a la Tienda Online de Florida Frutas Secas!"/>}/>
              <Route exact path="/categoria/:categoryID" element={<ItemListContainer greeting="Florida E-Commerce"/>}/>
              <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
            </Routes>

          </BrowserRouter>
          </CartContextProvider>

          <CategoriesContainer/>
          <Contact/>
          <Footer/>
      </div>

  );
}

export default App;

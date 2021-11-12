import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (    
      <div className="App">
        <BrowserRouter> 
          <NavBar/>
          <Routes> 
            <Route exact path="/" element={<ItemListContainer greeting="Florida E-Commerce"/>}/>
            <Route exact path="/categoria/:categoryID" element={<ItemListContainer greeting="Florida E-Commerce"/>}/>
            <Route exact path="/detail/:id" element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;

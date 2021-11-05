import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {

  // const style = {
  //   margin: "0",
  //   color: "red"
  // } Para llamar el style, pongo style= {style} en la etiqueta que le quiero poner ese estilo.

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Florida Frutas Secas E-commerce"/>
    </div>
  );
}



export default App;

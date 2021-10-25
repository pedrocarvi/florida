import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import Greeting from './components/ItemListContainer/ItemListContainer';
import './components/ItemListContainer/ItemListContainer.css'



function App() {

  // const style = {
  //   margin: "0",
  //   color: "red"
  // } Para llamar el style, pongo style= {style} en la etiqueta que le quiero poner ese estilo.

  return (
    <div className="App">
      <NavBar/>
      <Greeting titulo="Florida Frutas Secas"/>
    </div>
  );
}



export default App;

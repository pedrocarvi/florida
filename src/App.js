import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import './components/ItemListContainer.css'
import Greeting from './components/ItemListContainer';



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

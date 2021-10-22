import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import {Titulo, Input, Item} from './Titulo.jsx'
import ComponenteConteiner from './ComponenteConteiner'


function App() {

  // const style = {
  //   margin: "0",
  //   color: "red"
  // } Para llamar el style, pongo style= {style} en la etiqueta que le quiero poner ese estilo.
  let nombre = 'Pedro'

  function mostrar() {
    console.log("Hola");
  }

  return (
    <div className="App">
      <NavBar />
      <h1> Componente App </h1>
      <Titulo nombre={nombre} apellido="Carvi" mostrar={mostrar}/>
      <Input />
      <Item />
      <ComponenteConteiner/>
    </div>
  );
}



export default App;

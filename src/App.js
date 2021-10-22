// import logo from './logo.svg';
import './App.css';
// import reactDom from 'react-dom';

import NavBar from './NavBar/NavBar';
import './NavBar/NavBar.css';


function App() {

  // const style = {
  //   margin: "0",
  //   color: "red"
  // } Para llamar el style, pongo style= {style} en la etiqueta que le quiero poner ese estilo.

  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;

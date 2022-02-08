import React, {Component} from 'react';
import img from "./assets/morango.jpg"
class App extends Component{
  state = {
    nome:"Isabella Bueno",
    idade:"17",
    comida:"lazanha",
    musica:["musica","musica","musica"]

  }
  //desafio01
  //desafio03
  render(){
    return(
      <div>
        <h2> Hello World</h2>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
        <ol>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ol>
        <img src={img} alt="morango"/>
      </div>
    );
  }
}

export default App
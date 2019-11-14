import React from 'react';
import './App.css';

function DataFormatada(props) {
  return (
    <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define o estado Date recebendo a data atual
      date: new Date()
    }
  }

  // Ciclo de vida que ocorre quando o componente é inserido no DOM
  // Através da função setInterval, o relógio e criado (com um timerID atrelado)
  // Chama a função thick() a cada 1000 ms (1s)
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.thick()
    }, 1000);

    console.log("Eu sou o relógio : " + this.timerID);
  }

  // Ciclo de vida que ocorre quando o componente é removido do DON
  componentWillUnmount() {
 
  }

  // Define no state date a data atual a cada vez que é chamada
  thick() {
    this.setState({
      date: new Date()
    });
  }

  // Renderiza na tela o título e o retorno da função DataFormatada
  // passando date com o valor atual do state
  render() {
    return (
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
      </div>
    );
  }
}

// Função principal invocada index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;

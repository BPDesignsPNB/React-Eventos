import React, { Component } from 'react';
import Header from '../components/Header';
import Formulario from '../components/Formulario';
import Eventos from '../components/Eventos';

class App extends Component {

  token = 'S3JHH6V4IVIKBF5V74LR';
  ordenar = 'date';

  state = {
    categorias: [],
    eventos: []
  }

  //run function cuando termina de iniciar el componente
  componentDidMount(){
    this.consultarCategorias();
  }

  // request de categorias con ES6 async/await de API
  consultarCategorias = async () => {
    
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    await fetch(url) 
      .then(respuesta => {
        return respuesta.json();
      })
      .then (categorias => {
        this.setState({
          categorias: categorias.categories
        }) 
      })
  };

  obtenerEventos = async (busqueda) => {
    
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

    await fetch(url) 
      .then(respuesta => {
        return respuesta.json();
      })
      .then (eventos => {
        this.setState({
          eventos: eventos.events
        }) 
      })
  };

  render() {
    return (
      <div className="App">
        <Header
        titulo="Eventify"
        />    

        <div className="uk-container">
          <Formulario
          categorias = {this.state.categorias}
          obtenerEventos = {this.obtenerEventos}
          />   
          <Eventos
            eventos={this.state.eventos}
          />
        </div>     
      </div>
    );
  }
}

export default App;

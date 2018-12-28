import React, { Component } from 'react';

class Formulario extends Component {

    //referencias de inputs
    nombreRef = React.createRef();
    categoríaRef = React.createRef();

    mostrarOpciones = (key) => {
        const categoria = this.props.categorias[key];
        const {id, name_localized} = categoria;

        if (!id || !name_localized) return null;

        return (
            <option value={id} key={id} >{name_localized}</option>
        )
    };

    buscarEvento = (e) =>{
        e.preventDefault();

        //crear el objeto
        const datosBusqueda = {
            nombre: this.nombreRef.current.value,
            categoria: this.categoríaRef.current.value
        }

        //pasar por props
        this.props.obtenerEventos(datosBusqueda);


    }

    render() {

        const categorias = Object.keys(this.props.categorias);

        return (
            <form onSubmit={this.buscarEvento}>
                <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                Buscar eventos por nombre o categoría
                </legend>

                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                        <input ref={this.nombreRef} type="text" className="uk-input" placeholder="Nombre de Evento o Ciudad"/>
                    </div>
                    <div className="uk-margin" uk-margin="true">
                        <select ref={this.categoríaRef} className="uk-select">
                            {categorias.map(this.mostrarOpciones)}
                        </select>
                    </div>
                    <div className="uk-margin" uk-margin="true">
                        <button type="submit" className="uk-button uk-button-danger">Buscar</button>
                    </div>  
                </div>

                </fieldset>
            </form>
        );
    }
}

export default Formulario;
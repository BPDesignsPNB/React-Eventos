import React, { Component } from 'react';
import Evento from './Evento';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Eventos extends Component {
    render() {
        return <div className="uk-child-width-1-3@m" uk-grid="true">
            {/* <TransitionGroup> */}
              {Object.keys(this.props.eventos).map(key => (
                    // <CSSTransition
                    // key={key}
                    // classNames="fade"
                    // timeout={500}
                    // >
                <Evento
                  // pasa la informacion de los eventos y filtra por keys
                  info={this.props.eventos[key]}
                />
                // </CSSTransition>
              ))}
            {/* </TransitionGroup> */}
          </div>;
    }
}

export default Eventos;
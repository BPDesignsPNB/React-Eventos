import React from 'react';

const Evento = (props) => {

    const {name} = props.info;

    if (!name) return null;

    //acortar descripcion a 250 chars max
    let descripcion = (props.info.description.text).substr(0, 250);

    return <div>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            {props.info.logo != null ? (
              <img src={props.info.logo.url} alt={props.info.name.text} />
            ) : (
              ""
            )}
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">{props.info.name.text}</h3>
            <p>{descripcion}</p>
          </div>

          <div className="uk-card-footer">
            <a href={props.info.url} className="uk-button uk-button-secondary" target="_blank" rel="noopener noreferrer">
              Más Info
            </a>
          </div>
        </div>
      </div>;
};

export default Evento;
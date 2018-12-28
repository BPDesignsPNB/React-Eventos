import React from 'react';

const Header = (props) => {
    return (
        <header className="uk-margin" uk-margin="true">
           <h1 className="uk-text-center hero-title">{props.titulo}</h1>
        </header>
    );
};

export default Header;
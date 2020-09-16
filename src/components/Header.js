import React from 'react';

export const Header = (props) => {
    return (
      <React.Fragment>
        <header>
        <div className="title">
            <img src="./img/logo.jpg" alt="Логотип компании Тензор" />
            <h1>{props.title}</h1>
        </div>
        <p>
        {props.description}
        </p>
    </header>
      </React.Fragment>
    )
  }
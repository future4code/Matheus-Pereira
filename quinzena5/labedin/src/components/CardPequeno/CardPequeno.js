import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
                <div>
                <h4>{ props.endereco }</h4>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;
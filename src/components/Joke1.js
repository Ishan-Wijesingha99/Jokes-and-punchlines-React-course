import React from 'react';
import "../index.css"

export const Joke = function(props) {
    return (
    <div>
        {props.setup} - {props.punchline}
    </div>
    )
}
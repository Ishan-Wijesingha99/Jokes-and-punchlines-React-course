import React from 'react';
import { Joke } from './components/Joke1';
import './index.css'
import { jokesData } from './JokesArray';



export const App = function() {
    // using an array and the .map() method to render repetitive JSX
    const setupAndPunchlineJSX = jokesData.map(function(object) {
        return (
            <Joke 
                setup={object.setup}
                punchline={object.punchline}
            />
        )
    })

    return (
        <div>
           {setupAndPunchlineJSX}
        </div>
    )
}
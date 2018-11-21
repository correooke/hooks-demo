/* @flow */
import React from 'react';


export class Example {
    text: string
}

type Param = {
    example: Example
}

const UseExampleComponent = ({ example } : Param) => {
    return (
        <div>
            <p>{example.text}</p>
        </div>
    );
};

export default UseExampleComponent;
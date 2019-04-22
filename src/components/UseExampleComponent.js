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
        <span>{example.text}</span>
    );
};

export default UseExampleComponent;
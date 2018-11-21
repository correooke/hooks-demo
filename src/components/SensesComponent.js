/* @flow */
import React from 'react';
import DefinitionComponent from './DefinitionComponent';
import UseExampleComponent, { Example } from './UseExampleComponent';


export class Sense {
    id: string;
    definitions: Array<string>; 
    examples: Array<Example>;
}

type Param = {
    senses : Array<Sense>
}

const SensesComponent = ({ senses } : Param ) => {
    return (
        <div>
            {
                senses.map( (sense, i) => (
                    <React.Fragment key={sense.id} >
                        <h3>Acepción {i}</h3>
                        <DefinitionComponent definitions={sense.definitions}/>      
                        <h5>Ejemplos</h5>      
                        {
                            sense.examples.map( example => (
                                <UseExampleComponent key={example.text} example={example} />
                            ))
                        }
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default SensesComponent;
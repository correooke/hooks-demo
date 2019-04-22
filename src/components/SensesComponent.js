/* @flow */
import React from 'react';
import DefinitionComponent from './DefinitionComponent';
import UseExampleComponent, { Example } from './UseExampleComponent';


export class Sense {
    id: string;
    definitions: ?Array<string>; 
    examples: ?Array<Example>;
}

type Param = {
    senses : ?Array<Sense>
}

const SensesComponent = ({ senses } : Param ) => {
    return (
        <div>
            {
                senses && senses.map( (sense, i) => (
                    <React.Fragment key={sense.id} >
                        <h3>{i}. Acepción</h3>
                        {
                            sense.definitions && 
                                <DefinitionComponent definitions={sense.definitions}/>
                        }      
                        {
                            sense.examples && <strong>Ejemplos: </strong>
                        }      
                        {
                            sense.examples && sense.examples.map( example => (
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
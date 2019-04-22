import React from 'react';
import DefinitionComponent from './DefinitionComponent';
import UseExampleComponent, { Example } from './UseExampleComponent';

const SensesComponent = ({ senses }) => {
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
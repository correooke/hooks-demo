/* @flow */
import React from 'react';

type Param = {
    definitions: Array<string>,
};

const DefinitionComponent = ({definitions} : Param) => {
    return (
        <div>
            {
                definitions.map(definition => <p key={definition}>{definition}</p>)
            }
        </div>
    );
};

export default DefinitionComponent;
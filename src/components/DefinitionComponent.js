import React from 'react';

const DefinitionComponent = ({definitions}) => {
    return (
        <div>
            {
                definitions.map(definition => <p key={definition}>{definition}</p>)
            }
        </div>
    );
};

export default DefinitionComponent;
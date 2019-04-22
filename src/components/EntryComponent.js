import React from 'react';
import SensesComponent from './SensesComponent';

const EntryComponent = ({entry}) => {
    return (
        <React.Fragment>
            {
                entry && <SensesComponent senses={entry.senses} />
            }
        </React.Fragment>
    );
};

export default EntryComponent;
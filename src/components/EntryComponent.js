/* @flow */
import React from 'react';
import SensesComponent, { Sense } from './SensesComponent';

class Entry {
    senses: Array<Sense>
}

type Param = {
    entry: Entry
}

const EntryComponent = ({entry} : Param) => {
    return (
        <React.Fragment>
            {
                entry && <SensesComponent senses={entry.senses} />
            }
        </React.Fragment>
    );
};

export default EntryComponent;
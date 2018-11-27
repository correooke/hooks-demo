import React, { useEffect, useState } from 'react';
import EntryComponent from './EntryComponent';
import fetchTraductor from './../api/fetchTraductor';

const DictionaryComponent = ({word}) => {
    const [entries, setEntries] = useState(null);

    useEffect( () => {
        if (word && word.length > 0) {
            fetchTraductor(word).then(data => {
                data.results && setEntries(data.results[0].lexicalEntries[0].entries)
            });
        }
    }, [word]);
    return (
        <React.Fragment>
            <h1>Definición de {word}</h1>
            {
                entries && entries.map(entry => <EntryComponent key={entry.homographNumber} entry={entry} />)
            }
        </React.Fragment>
    );
};

export default DictionaryComponent;
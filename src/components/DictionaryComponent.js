import React, { useEffect, useState } from 'react';
import EntryComponent from './EntryComponent';
import fetchTraductor from './../api/fetchTraductor';

const DictionaryComponent = ({word}) => {
    const [entries, setEntries] = useState(null);
    const [error, setError] = useState(false);

    useEffect( () => {
        if (word && word.length > 0) {
            fetchTraductor(word)
            .then(data => {
                data.results && setEntries(data.results[0].lexicalEntries[0].entries)
            })
            .catch(() => {
                setError(true);
            });
        }
    }, [word]);
    return (
        <React.Fragment>
            {
                entries && <h3>Definición de {word}</h3>
            }
            {
                !error ? 
                entries && entries.map(entry => <EntryComponent key={entry.homographNumber} entry={entry} />) :
                "Error de conexión"
            }
        </React.Fragment>
    );
};

export default DictionaryComponent;
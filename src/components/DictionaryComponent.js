/* @flow */
import React, { useEffect, useState } from 'react';
import EntryComponent from './EntryComponent';
import fetchTraductor from './../api/fetchTraductor';

type Param = {|
    word: string
|};

const DictionaryComponent = ({word} : Param) => {
    const [entries, setEntries] = useState(null);
    const [error, setError] = useState(false);

    useEffect( () => {
        if (word && word.length > 0) {
            fetchTraductor(word)
            .then(data => {
                const entries = data.results[0].lexicalEntries[0].entries;
                console.log(entries)
                data.results && setEntries(entries)
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
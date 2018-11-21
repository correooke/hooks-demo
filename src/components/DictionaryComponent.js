import React, { useEffect, useState } from 'react';
import EntryComponent from './EntryComponent';


const url = "http://localhost:3001/traductor/single";

const DictionaryComponent = ({word}) => {
    const [entries, setEntries] = useState(null);

    useEffect( () => {
        fetch(url).then(resp => resp.json()).then(data => {
            data.results && setEntries(data.results[0].lexicalEntries[0].entries)
        });
    }, []);
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
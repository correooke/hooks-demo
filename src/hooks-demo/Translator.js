import React, { useState, useEffect } from 'react';


const url = "http://localhost:3001/traductor/single";

const Translator = () => {
    const [load, doLoad] = useState(false);
    const [result, setResult] = useState("");

    useEffect(() => {
        console.log("useEffect")
        fetch(url).then(data => data.json()).then(data => {
            setResult(JSON.stringify(data));
            console.log(data);
        });
    }, [result]);

    return (
        <div>
            {
                load && (
                    <p>{result}</p>
                )
            }
            <button onClick={() => doLoad(true)}>Traducir</button>
        </div>
    );
};

export default Translator;
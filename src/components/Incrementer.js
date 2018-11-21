import React, { useState, useEffect } from 'react';

const useTwoEffects = count => {
  useEffect(() => {
    document.title = `SuperClick ${count}`;
  });

  useEffect(() => {
    document.title += "_";
    const timer = setInterval(() => {
        document.title += ".";
    }, 1000)
    return () => {
        clearTimeout(timer);
    }
  }, []);

}
export default ({className}) => {
  // Declare a new state variable, which we'll call "count"
  
  const [count, setCount] = useState(0);


  useTwoEffects(count);

  
  const [search, setText] = useState("-");

  return (
    <div className={className}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input type="text" value={search} onChange={e => setText(e.target.value)} />
    </div>
  );
}


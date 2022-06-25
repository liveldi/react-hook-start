import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => setCount(prevState => prevState + 1)}
      >
        count is: {count}
      </button>
    </div>
  )
}

export default App

import React, { useState } from 'react';
import InputComponent from './components/InputComponent';
import BoxList from './components/ListWrapper';

function App() {
  const [count, setCount] = useState(10);

  return (
<main className='h-screen flex items-center justify-center'>
      <div className="max-w-3xl mx-auto mt-10 p-4">
 
      <InputComponent value={count} onChange={setCount} />
      <BoxList count={count} />
    </div>
</main>
  );
}

export default App;

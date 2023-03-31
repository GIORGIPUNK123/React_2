import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Parent } from './components/Parent';
import { Wrapper } from './components/Wrapper';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Wrapper components={[Parent]} />
    </div>
  );
}

export default App;

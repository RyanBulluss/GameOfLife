import './App.css';
import Controls from './Controls';
import { useState } from 'react';

function App() {


  return (
    <div className="App bg-sky-300 h-[100vh] flex flex-col items-center justify-end">
      <div className='h-[80vh] flex items-center justify-center'>
      <div className='bg-red-300 w-[70vmin] h-[70vmin]'>

      </div>

      </div>
      <Controls />
    </div>
  );
}

export default App;

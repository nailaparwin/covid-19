import React from 'react';
import './App.css';
import MainGrid from './components/MainGrid';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      {/* <Header /> */}
      <MainGrid />
      </GlobalProvider>
    </div>
  );
}

export default App;

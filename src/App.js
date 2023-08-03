import { Confetti } from 'react-confetti-cannon';
import './App.css';
import { Main } from './components/Main';
import { useState } from 'react';
function App() {

  const [approved, setApproved] = useState(false);

  const allCorrect = (data) => {
    setApproved(data);
  }

  return (
    <div className="App bg-custom bg-cover flex justify-center items-center h-screen">
      <Main allCorrect={(data => allCorrect(data))} />
      {
        approved &&
        <Confetti count={200} origin={{ x: -10, y: 10 }} />

      }
    </div>
  );
}

export default App;

import './App.css';
import { generateFiveQuizes } from './services/Quiz';

function App() {
  generateFiveQuizes().then((data) => console.log(data));
  return (
    <div className="App">
    </div>
  );
}

export default App;

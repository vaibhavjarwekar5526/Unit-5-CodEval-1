import './App.css';
import { Vegetables } from './Components/Vegetables';
import { Whislist } from './Components/Whislist';

function App() {
  return (
    <div className="App">
      <Whislist />
      <hr />
      <Vegetables />
    </div>
  );
}

export default App;

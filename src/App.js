import FruitContainer from './components/FruitContainer'
import './App.css';

function App() {
  const fruits = ['banana 🍌', 'watermelon 🍉', 'cherry 🍒', 'apple 🍎', 'kiwi 🥝', 'mango 🥭', 'strawberry 🍓', 'avocado 🥑', 'pineapple 🍍']
  return (
    <div>
      <h1>fruit filter</h1>
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;

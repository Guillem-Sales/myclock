import './App.css';
import Reloj from './FechaHora';

function App() {
  return (
    <div className="App">
    <Reloj interval={1000} size="100px" color="gray"/>
    </div>
  );
}

export default App;

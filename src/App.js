import './index.css';
import Foto from './components/foto.jsx';

function App() {

  let lista = ['fallen','kscerato','art']
  const lista2 = lista.map(
    (c) => <p>{c}</p>
  )

  return (
    <div>
      <Foto codigo="1"/>
      <Foto codigo="2"/>
      <Foto codigo="3"/>
    </div>
    
  );
}

export default App;

import './index.css';
import Header from './components/header.jsx';
import Caixa from './components/caixa.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div class="body">
      <Header serie="Dr.House"/>
      <Caixa codigo="12" nome="dwajifwad" telefone="11111" endereco="na casa do caralo" cargo="house"/>
      <Caixa codigo="11" nome="henri" telefone="123" endereco="123" cargo="pai"/>
      <div class="confira">Confira os dados antes de efetuar a matrícula</div>
      <Footer/>
    </div>
  );
}

export default App;

import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite o nome"/>
      <CampoTexto label="Cargo" placeholder="Digite o cargo"/>
      <CampoTexto label="Imagem" placeholder="Carrege a imagem"/>
    </div>
  );
}

export default App;

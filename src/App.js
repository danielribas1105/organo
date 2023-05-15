import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      nome: 'Front-end',
      cor: '#82CFFA',
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      nome: 'DevOps',
      cor: '#E06B69',
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  function deletarColaborador() {
    console.log("Deletar colaborador");
  }

  function mudarCorTime(cor, nomeTime){
    setTimes(times.map(time => {
      if(time.nome === nomeTime){
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoCadastrarColaborador={colaborador => aoColaboradorCadastrado(colaborador)}
      />
      {times.map(time => <Time 
          key={time.nome} 
          nome={time.nome} 
          cor={time.cor} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
        />)
      }
      <Rodape/>
    </div>
  );
}

export default App;

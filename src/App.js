import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-end',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'DevOps',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function favoritarCard(id){
    setColaboradores(colaboradores.map(colaborador => {
        if(colaborador.id === id){
          colaborador.favorito = !colaborador.favorito; 
        }
        return colaborador;
    }));
  }

  function mudarCorTime(cor, timeId){
    setTimes(times.map(time => {
      if(time.id === timeId){
        time.cor = cor;
      }
      return time;
    }));
  }

  function criarNovoTime(novoTime){
    setTimes([...times,{...novoTime, id: uuidv4()}]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoCadastrarColaborador={colaborador => aoColaboradorCadastrado(colaborador)}
        criarTime={criarNovoTime}
      />
      {times.map(time => <Time 
          key={time.nome} 
          id={time.id}
          nome={time.nome} 
          cor={time.cor} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
          aoDeletar={deletarColaborador}
          aoFavoritar={favoritarCard}
          mudarCor={mudarCorTime}
        />)
      }
      <Rodape/>
    </div>
  );
}

export default App;

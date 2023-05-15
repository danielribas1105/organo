import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid';
import CampoNovaCor from '../CampoNovaCor';

const Formulario = (props) => {
    
    const id = uuidv4();
    const[nome, setNome] = useState('');
    const[cargo, setCargo] = useState('');
    const[imagem, setImagem] = useState('');
    const[time, setTime] = useState('');
    const[novoTime, setNovoTime] = useState('');
    const[novaCor, setNovaCor] = useState('');
    const[corNovoTime, setCorNovoTime] = useState('');

    const aoClicar = (evento) => {
        evento.preventDefault();
        props.aoCadastrarColaborador({
            id, nome, cargo, imagem, time
        });
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoClicar}>
                <h2>Preencha os campos para gerar o card do colaborador</h2>
                <CampoTexto 
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto 
                    required={true}
                    label="Cargo" 
                    placeholder="Digite o cargo" 
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Carrege a imagem" 
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    required={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                    evento.preventDefault();
                    props.criarTime({nome: novoTime, cor: novaCor});
                }}>
                <h2>Preencha os campos para criar um novo time</h2>
                <CampoTexto 
                    required //valor true é default
                    label="Novo time"
                    placeholder="Digite o nome do novo time"
                    valor={novoTime}
                    aoAlterar={valor => setNovoTime(valor)}
                />
                <CampoNovaCor
                    required
                    label="Selecione uma cor para o time"
                    valor={corNovoTime}
                    aoAlterar={valor => setCorNovoTime(valor)}
                />
                <Botao>
                    Criar novo time
                </Botao>
            </form>
        </section>
    );

}

export default Formulario;
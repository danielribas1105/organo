import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times = [
        'Programação','Front-end','Data Science','DevOps','UX e Design','Mobile','Inovação e Gestão'
    ];
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os campos para gerar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome" />
                <CampoTexto label="Cargo" placeholder="Digite o cargo" />
                <CampoTexto label="Imagem" placeholder="Carrege a imagem" />
                <ListaSuspensa label="Time" itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );

}

export default Formulario;
import { AiFillCloseCircle } from 'react-icons/ai';
import './Colaborador.css';

const Colaborador = ({imagem, nome, cargo, corDeFundo, aoDeletar}) => {
    if(imagem === ""){
        imagem = "/imagens/foto-padrão.jpg";
    }
    return (
        <div className="colaborador">
            <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar}/>
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="corpo">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador;
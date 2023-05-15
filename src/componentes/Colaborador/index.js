import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './Colaborador.css';

const Colaborador = ({id,favorito,imagem,nome,cargo,corDeFundo,aoDeletar,aoFavoritar}) => {
    
    if(imagem === ""){ imagem = "/imagens/foto-padrão.jpg"; }

    const propsFavorito = {
        size: 25,
        color: "#FF0000",
        onClick: favoritar
    };

    function favoritar() {
        aoFavoritar(id);
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => aoDeletar(id)}
            />
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="corpo">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {favorito
                        ? <AiFillHeart {...propsFavorito}/>
                        : <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default Colaborador;
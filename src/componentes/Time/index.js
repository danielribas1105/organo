import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ? 
        <section className="time" 
            style={{backgroundImage:"url(/imagens/fundo.png)", 
                    backgroundColor: hexToRgba(props.cor, 0.4)}}>
            <input type="color" className="input-cor" 
                value={props.cor} 
                onChange={evento => props.mudarCor(evento.target.value, props.nome)}/>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => {
                    return <Colaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.cor}
                        aoDeletar={props.aoDeletar}
                    />
                })}
            </div>
        </section> : ''
    );
}

export default Time;
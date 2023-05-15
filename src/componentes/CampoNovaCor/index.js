import './CampoNovaCor.css';

const CampoNovaCor = (props)=> {

    const aoSelecionarCor = (evento) => {
        props.aoAlterar(evento.target.value);
    }

    return(
        <div className="campo-cor">
            <label>{props.label}</label>
            <input type="color" onChange={aoSelecionarCor} required={props.required}/>
        </div>
    );
}

export default CampoNovaCor;

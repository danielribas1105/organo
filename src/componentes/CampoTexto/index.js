import './CampoTexto.css';

const CampoTexto = (props) => {
    //const placeholdermodificada = `${props.placeholder}...`;
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    );
}

export default CampoTexto;
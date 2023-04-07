import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="redes-sociais">
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="Link Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="Link Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt="Link Instagram" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <img src="/imagens/logo.png" alt="Logo Organo"/>
            </div>
            <div>
                <h4>Desenvolvido por Alura</h4>
            </div>
        </footer>
    );
}

export default Rodape;
import React, {Component} from "react";
import "./Sobre.css"
import programacao from "../../assents/img/programacao.svg"

class Sobre extends Component{
    render(){
        return(
            <section className="fundo" id="Sobre">
                <h2 className="titulo">Desenvolvimento de sites</h2>
                <section className="conf">
                    <img className="prog" src={programacao} alt="foto ilustrativa"/>
                    <p className="texto"> Bem vindos, sintam-se a vontade nesse cantinho, explore o quanto quiser.</p>
                    <p className="texto">Em nosso catálogo há alguns estilos já pré definidos, sendo totalmente modificaveis segundo sua solicitação. Temos também a opção de total personalização.  </p>
                </section> 
            </section>
        )
    }
}

export default Sobre;
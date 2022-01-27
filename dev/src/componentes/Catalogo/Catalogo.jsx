import React, {Component} from "react";
import "./Catalogo.css"


class Catalogo extends Component{
    render(){
        return(
            <section className="back" id="Catalogo">
                <h2 className="titulob">Catálogo</h2>
                <ul className="produtos">
                    <li>
                        <h3>Landing Page</h3>
                        <p className="produto-descricao">Uma página que possui todos os elementos voltados à conversão do visitante em possiveis clientes e ou interessados. </p>
                    </li>
                    <li>
                        <h3>One Page</h3>
                        <p className="produto-descricao">Contém um layout de apenas uma página com todas as informações necessárias para visitantes e clientes.</p>
                    </li>
                    <li>
                        <h3>Hotsite</h3>
                        <p className="produto-descricao">Utiliza-se hotsite para promoção em período determinado, divulgação, lançamento ou promoção de produto. </p>
                    </li>
                    <li>
                        <h3>Personalizado</h3>
                        <p className="produto-descricao">De acordo com os seus objetivos e necessidades específicas, cujas características são levantadas durante a fase de projeto</p>
                    </li>
                </ul>
            </section>
        )
    }
}



export default Catalogo;
import React, {Component} from "react";
import Logobranca from "../../assents/img/Logobranca.svg"
import "./Header.css"

class Header extends Component{
    render(){
        return(
            <section className="Header">
                <header>
                    <div className="logo">
                        <img className="Logo" src={Logobranca} alt="Logo sem fundo branca"/>
                        <nav>
                            <ul>
                                <li><a href="#Sobre">Sobre</a></li>
                                <li><a href="#Catalogo">Catálogo</a></li>
                                <li><a href="#Contatos">Contatos</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </section>
        )
    }
}

export default Header;
import React, {Component, useState} from "react";
import "./Contatos.css"
import Logobranca from "../../assents/img/Logobranca.svg"

class Contatos extends Component{
    render(){

        return(
            <section className="cont" id="Contatos">
                <h1 className="titulo">Contatos</h1>
                <div className="form">
                    <form>   
                        <div>        
                        <label htmlFor="nomecompleto">Nome Completo</label>
                        <input type="text" id="nomecompleto" className="bordas" required />
    
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="bordas" required placeholder="seuemail@dominio.com"/>
    
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" id="telefone" className="bordas" required placeholder="(XX) XXXXX-XXXX"/>
                       
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea cols="120" rows="8" id="mensagem" className="bordas" required placeholder="Escreva sua mensagem"/>

                        <fieldset className="chek">
                            <legend>Como prefere o nosso contato?</legend>  
                            <label className="lbr" for="radio-email">
                            <input type="radio" name= "contato" value="email" id="radio-email"/>Email</label>   
                            <label className="lbr" for="radio-telefone">
                            <input type="radio" name= "contato" value="telefone" id="radio-telefone"/>Telefone</label>   
                            <label className="lbr" for="radio-whatsapp">
                            <input type="radio" name= "contato" value="whatsapp" id="radio-whatsapp"  onChange/>WhatsApp</label>
                        </fieldset>    

                        <button>
                            <span>Enviar</span>
                            <div className="liquid"></div>
                        </button>
                        </div>
                        
                    </form>
                </div>   
                <div>
                    <footer>
                        <img src={Logobranca} alt="Logo branca"/>
                        <p>&copy;Copyright DEV. - 2021</p>
                    </footer>
                </div> 
            </section>
        )
    }
}

export default Contatos;
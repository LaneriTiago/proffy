
import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem () {
    return (
        <article className="teacher-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/65641284?s=460&v=4" alt="Tiago Laneri"/>
                            <div>
                                <strong>Nome do Professor</strong>
                                <span>Química</span>
                            </div>
                        </header>

                        <p>
                            Tes tes tes tess tes tes
                            <br/><br/>
                            tes tes tes tes teste teste
                        </p>

                        <footer>
                            <p>
                                Preço/hora
                                <strong>R$ 20,00</strong>
                            </p>
                            <button type="button">
                                <img src={whatsappIcon} alt="whatsApp"/>
                                Entrar em contato
                            </button>
                        </footer>

                    </article>
    )
}
 

export default TeacherItem;


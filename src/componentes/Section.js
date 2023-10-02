import React from 'react'

export default function SectionContato() {
  return (
    <section className="contact">
      <div className="content">
        <h2>Contato</h2>
        <p>A Warner Bros anunciou hoje que a pré-venda nacional de ingressos para 
        "The Batman", filme que marca a estreia de Robert Pattinson no papel do 
        super-herói, vai ocorrer em 10 de fevereiro, próxima quinta-feira.</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <span className="material-icons">
                place
              </span>
            </div>
            <div className="text">
              <h3>Endereço</h3>
              <p>Rua: Bento dos Reis, 125 <br/>Jardim Bonifacio, São Paulo - SP, <br/>08253-600</p>
            </div>                                        
          </div>
            <div className="box">
              <div className="icon">
                <span className="material-icons">
                  phone
                </span>
              </div>
              <div className="text">
                <h3>Telefone</h3>
                <p>11-95054-3863</p>
              </div>                                        
            </div>
            <div className="box">
              <div className="icon">
                <span className="material-icons">
                  email
                </span>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>thugbrn@gmail.com</p>
              </div>                                        
            </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Enviar Mensagem</h2>
            <div className="inputBox">
              <input type="text" name="" required="required"/>
              <span>Nome Completo</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required"/>
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Digite sua Mensagem...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Enviar"/>                        
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export function SectionComentarios() {
  return (
    <section id="section-comentarios" className="contact">
      <div>
        <h2>Comentários</h2>
      </div>
      <div className="container">
        <div className="navbar">
          <div className="box">
            <div className="icon instagram">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <p>Instagram</p>                                       
          </div>
          <div className="box">
            <div className="icon whatsapp">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            <p>Whatsapp</p>                                       
          </div>
          <div className="box">
            <div className="icon facebook">
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <p>Facebook</p>                                       
          </div>
          <div className="box">
            <div className="icon twitter">
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
            <p>Twitter</p>                                       
          </div>
        </div>
        <div className="Share">
          <h3>Compartilhe</h3>
        </div>            
        <div className="contactForm">
          <form>
            <h2>Deixe seu Comentáro</h2>
            <div className="inputBox">
              <input type="text" name="" required="required"/>
              <span>Nome</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Digite sua Comentáro...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Enviar"/>                        
            </div>
          </form>
        </div>
      </div>        
    </section>
  )
}
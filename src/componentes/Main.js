import React from 'react'
import img1 from '../img/album/img1.jpg'
import img2 from '../img/album/img2.jpg'
import img3 from '../img/album/img3.jpg'
import img4 from '../img/album/img4.jpg'
import img5 from '../img/album/img5.jpg'
import img6 from '../img/album/img6.jpg'
import img7 from '../img/album/img7.jpg'
import img8 from '../img/album/img8.jpg'
import img9 from '../img/album/img9.jpg'
import img10 from '../img/album/img10.jpg'
import img11 from '../img/album/img11.jpg'
import img12 from '../img/album/img12.jpg'
import img13 from '../img/album/img13.jpg'
import img14 from '../img/album/img14.jpg'

// import videoTrailer from '../img/batman_trailer_3_oficial_dublado.mp4'

export default function Main() {
  return (
    <main id="main-home" >
      <div id="banner"></div>
      <div id="trailer-container">
        <div className="content">
          <video controls className="trailer">
            {/* <source src={videoTrailer} type="video/mp4"/> */}
            Seu navegador não possui suporte para vídeos
          </video>
          <div id="sinopse">
            <p className="description">
              Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
              mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitario se estabelece
              como a personificação da vingança para a população.
            </p>
            <button className="button">Comprar ingresso</button>
          </div>
        </div>     
      </div>
      <div className="actor-cards-container">
        <div className="cards-content">
          <div className="card banner-1">Robert Pattison - Batman</div>
          <div className="card banner-2">Zoe Kravitz - Mulher gato</div>
          <div className="card banner-3">Jeffrey Wright - Gordon</div>
        </div>
      </div>
    </main>
  )
}

export function MainFotos() {
  return (
    <main id="main-fotos" >
      <div className="text">
        <h2>Galeria</h2>
      </div>    
      <div className="gallery-container">
          <a href="#img" className="gallery-items">
            <img src={img1} alt="Bruce Warner" />
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img2} alt="Fiquei mais forte do que nunca"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img3} alt="GettyImages"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img4} alt="Gotham Batman e Gordon"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img5} alt="Jim Gordon"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img6} alt="Mulher Gato"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img7} alt="Zoe Mulher Gato"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img8} alt="Prêmio The Batman"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img9} alt="Robert Pattinson"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img10} alt="The Batman 2022"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img11} alt="Batman"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img12} alt="the batman"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img13} alt="the-batman-2022-Mulher-Gato"/>
          </a> 
          <a href="#img" className="gallery-items">
            <img src={img14} alt="the-batman-2022-robert"/>
          </a>             
      </div>
    </main>
  )
}
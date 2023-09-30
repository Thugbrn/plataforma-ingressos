import React from 'react'
// import videoTrailer from '../img/batman_trailer_3_oficial_dublado.mp4'

export default function Main() {
  return (
    <main>
      <div id="banner"></div>
      <div id="trailer-container">
        <div class="content">
          <video controls class="trailer">
            {/* <source src={videoTrailer} type="video/mp4"/> */}
            Seu navegador não possui suporte para vídeos
          </video>
          <div id="sinopse">
            <p class="description">
              Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
              mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitario se estabelece
              como a personificação da vingança para a população.
            </p>
            <button class="button">Comprar ingresso</button>
          </div>
        </div>     
      </div>
      <div class="actor-cards-container">
        <div class="cards-content">
          <div class="card banner-1">Robert Pattison - Batman</div>
          <div class="card banner-2">Zoe Kravitz - Mulher gato</div>
          <div class="card banner-3">Jeffrey Wright - Gordon</div>
        </div>
      </div>
    </main>
  )
}
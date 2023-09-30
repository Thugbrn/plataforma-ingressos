import logo from '../img/logo.jpeg'

export default function Header() {
  return (
    <header>
      <a href="/">
        <img id="Logo" src={logo} alt="logo"/>        
      </a>
      <nav>
        <ul>
          <a href="./index.html">
              <li>Home</li>
          </a>
          <a href="./paginas/contatos.html">
              <li>Contato</li>
          </a>
          <a href="./paginas/fotos.html">
              <li>Fotos</li>
          </a>
          <a href="./paginas/comentarios.html">
              <li>Comentários</li>
          </a>                     
        </ul>
      </nav>
    </header>
  )
}
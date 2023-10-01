import logo from '../img/logo.jpeg'

export default function Header() {
  return (
    <header>
      <a href="/">
        <img id="Logo" src={logo} alt="logo"/>        
      </a>
      <nav>
        <ul>
          <a href="/">
              <li>Home</li>
          </a>
          <a href="/contato">
              <li>Contato</li>
          </a>
          <a href="/fotos">
              <li>Fotos</li>
          </a>
          <a href="/comentarios">
              <li>Comentários</li>
          </a>                     
        </ul>
      </nav>
    </header>
  )
}
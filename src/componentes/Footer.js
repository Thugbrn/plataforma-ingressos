export default function Footer() {
  return(
    <footer>
        <div className="rights-developed-container">
            <span className="rights">Todos os direitos reservados ©</span>
            <span className="rights">Desenvolvido por: Bruno Ramos</span>           
        </div>
        <nav className="footer-navigation">
            <ul className="footer-list">
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/contatos">
                    <li>Contatos</li>
                </a>
                <a href="/fotos">
                    <li>Fotos</li>
                </a>
                <a href="/comentarios">
                    <li>Comentários</li>
                </a>                     
            </ul>
        </nav>
    </footer>
  )
}

export function FooterFotos() {
    return (
      <footer>
        <span className="copy-fotos">Copyright &copy; | Bruno Ramos</span>
      
        <nav class="footer-navigation">
            <ul class="footer-list">
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="./contatos.html">
                    <li>Contatos</li>
                </a>
                <a href="./fotos.html">
                    <li>Fotos</li>
                </a>
                <a href="./comentarios.html">
                    <li>Comentários</li>
                </a>                     
            </ul>
        </nav>
      </footer>
    )
}
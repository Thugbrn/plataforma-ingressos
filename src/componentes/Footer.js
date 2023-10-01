export default function Footer() {
  return(
    <footer>
        <div className="rights-developed-container">
            <span className="rights">Todos os direitos reservados ©</span>
            <span className="rights">Desenvolvido por: Bruno Ramos</span>           
        </div>
        <nav className="footer-navigation">
            <ul className="footer-list">
                <a href="./index.html">
                    <li>Home</li>
                </a>
                <a href="./paginas/contatos.html">
                    <li>Contatos</li>
                </a>
                <a href="./paginas/fotos.html">
                    <li>Fotos</li>
                </a>
                <a href="./paginas/comentarios.html">
                    <li>Comentários</li>
                </a>                     
            </ul>
        </nav>
    </footer>
  )
}
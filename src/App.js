import Header from './componentes/Header';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Fotos from './pages/Fotos';
import Comentarios from './pages/Comentarios';
import './App.css';


function App() {
  let pagina

  switch (window.location.pathname) {
    case '/':
      pagina = <Home />
    break 
    case '/contato':
      pagina = <Contato />
    break 
    case '/fotos':
      pagina = <Fotos />
    break
    case '/comentarios':
      pagina = <Comentarios />
    break 
  }

  return (
    <div className="App">
      <Header />
      {pagina}
    </div>
  )
}

export default App;

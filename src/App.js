import Header from './componentes/Header';
import Home from './pages/Home';
import Contato from './pages/Contato';
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
  }

  return (
    <div className="App">
      <Header />
      {pagina}
    </div>
  )
}

export default App;

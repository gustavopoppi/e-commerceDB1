import './App.css'

import Rotas from './Rotas'
import Header from './componentes/Header/Header'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;

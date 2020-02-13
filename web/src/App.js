import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HTML, CSS e Js, o qual não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para o componete FILHO.
// Estado: 
// tudo no react é feito com esses 3 elementos

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);

    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    console.log("resposta da api => ", response);

    setDevs([...devs, response.data]);
 
  }

  return (
    //para usar mais de um componente, temos que colocar dentro de um container, porém por motivos maiores de estilização podemos usar o fragment: <> componentes ... </>
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
             <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

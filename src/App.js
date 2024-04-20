import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './Components/Header';
import { Pokecard } from './Components/Pokecard';


function App() {

  const [listaPokemon, setListaPokemon] = useState([]);

  const [pokeType, setPokeType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = 'https://pokeapi.co/api/v2/pokemon/';
        const promises = [];

        for (let i = 1; i <= 151; i++) {
          promises.push(fetch(URL + i).then((res) => res.json()));
        }

        const pokemonData = await Promise.all(promises);
        setListaPokemon(pokemonData);
        setPokeType(pokemonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  // pokeType varia con los tipos de pokemon
  // listaPokemon se mantiene fija

  return (
    <div className="App">
      <Header listaPokemon={listaPokemon} setListaPokemon={setListaPokemon} pokeType={pokeType} setPokeType={setPokeType} />
      <Pokecard pokeType={pokeType} />
    </div>
  );
}

export default App;

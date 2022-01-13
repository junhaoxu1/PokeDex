import Header from "./components/Header"
import Pokemons from "./components/Pokemons"
import { useState, useEffect } from "react" 
import AddPokemon from "./components/AddPokemon"

const App = () => {
  const [showAddPokemon, setShowAddPokemon] = useState(true)
  const [pokemons, setPokemons] = useState([])

  useEffect (() => {
    const getPokemons = async () => {
      const pokemonsFromServer = await fetchPokemons()
      setPokemons(pokemonsFromServer)
    }
    
    getPokemons()
  }, [])

  // Fetch Pokemon
  const fetchPokemons = async () => {
    const res = await fetch("/pokedex")
    const data = await res.json()

    return data
  }

  //Add Pokemon
  const addPokemon = async (pokemon) => {
    const res = await fetch("/pokedex", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
    })

    const data = await res.json()

    setPokemons([...pokemons, data])
  }


  //Delete Pokemon
  const deletePokemon = async ( id ) => {
    await fetch(`/pokedex/${id}`, {
      method: "DELETE",
    })

    setPokemons(pokemons.filter((pokemon) => 
    pokemon.id !== id))
  }

  return(
    <div className= "container">
      <Header 
      onAdd={() => setShowAddPokemon(!showAddPokemon)} showAdd={showAddPokemon} />
      {showAddPokemon && <AddPokemon onAdd={addPokemon}/>}
      {pokemons.length > 0 ? <Pokemons pokemons ={pokemons} 
      onDelete={deletePokemon}/> : "No Pokemon To Show"}
    </div>
  )
}

Header.defaultProps = {
  title: "PokeDex",
}


export default App;

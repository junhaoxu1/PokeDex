import Pokemon from "./Pokemon"

const Pokemons = ({ pokemons, onDelete }) => {

    return (
        
        <>
            {pokemons.map((pokemon, index) => (
            <Pokemon 
                key={index} 
                pokemon={pokemon}
                onDelete={onDelete} 
            />
            ))}
        </>
    )
}

export default Pokemons

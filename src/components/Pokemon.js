//npm install react-icons 
import { FaTimes } from "react-icons/fa"

const Pokemon = ({ pokemon, onDelete}) => {
    return (
        <div 
            className={`pokemon ${pokemon.type && "type"}`}
        >

            <h3>
                {pokemon.name}{" "}
                <FaTimes 
                    style={{ color: "red", cursor: "pointer"}}
                    onClick={() => onDelete(pokemon.id)} 
                />
            </h3>
            <p>{pokemon.dex}</p>
            <p>{pokemon.type}</p>
        </div>
    )
}

export default Pokemon

import { useState } from "react"

const AddPokemon = ({ onAdd }) => {
    const [name, setName] = useState("")
    const [dex, setDex] = useState("")
    const [type, setType] = useState("")

const onSubmit = (e) => {

    if (!name) {
        alert("Please add a Pokemon")
        e.preventDefault()
        return
    }

    if (!dex) {
        alert("Please add a Number")
        e.preventDefault()
        return
    }

    if (!type) {
        alert("Please add Type")
        e.preventDefault()
        return
    }

    onAdd({ name, dex, type })

    setName("")
    setDex("")
    setType("")
}

return (
    <form className="add-form" onSubmit={onSubmit}>
         <div className="form-control">
            <label>Pokemon:</label>
            <input 
            type="text" 
            placeholder="Add Pokemon" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label>PokeDex Number:</label>
            <input 
            type="text" 
            placeholder="Add PokeDex Number"
            value={dex} 
            onChange={(e) => setDex(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label>Type:</label>
            <input 
            type="text"
            placeholder="Add Pokemon Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            />
        </div>

        <input type="submit" value="Save Pokemon" 
        className="btn btn-block" />
    </form>
    )
}

export default AddPokemon
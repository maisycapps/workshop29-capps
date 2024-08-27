import { useState } from "react";
import { addPlayer } from "../API";

const NewPlayerForm = () => {

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    
    async function seeNewPlayers(e) {
        e.preventDefault()

        try {
            const result = await addPlayer(name, breed, imageUrl);
       } catch (error) {
            console.error(error)
        }   
        setName("")
        setBreed("")
        setImageUrl("")
    }
    
    return ( 
        <>
        <form onSubmit={seeNewPlayers}>
            <h3>Add New Player</h3>
            <label>Name: {"  "}
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> <br />
            </label>
            <label>Breed: {"  "}
                <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}/> <br />
            </label>
            <label>Image URL: {""}
                <input type="link" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/> <br />
            </label> <br />
            <button type="submit">Submit</button>
        </form>
        </>
     );
}
 
export default NewPlayerForm;
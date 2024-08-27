import { useState, useEffect } from "react";
import { fetchAll } from "../API";
import { useNavigate, Link } from "react-router-dom";
import NewPlayerForm from "./NewPlayerForm";

// use fetchAll() to get all players from API, then update the state with that info. 
const AllPlayers = () => {

    const navigate = useNavigate()

    const [players, setPlayers] = useState([])
    const [error, setError] = useState([])
    const [searchParam, setSearchParam] = useState("")

    useEffect(() => {
        async function getAll() {
            const response = await fetchAll();
                if (response.success) {
                    setPlayers(response.data.players);
                } else {
                    setError(response.error)
                }
        }
        getAll()
    }, [players])
    
// SEARCH BAR
const playersToDisplay = searchParam ? players.filter((player) => player.name.toLowerCase().includes(searchParam)) : players;


// render HTML for all the players from AllPlayers()
    return ( 
    <>

    <h1>All Players</h1>

    <NewPlayerForm />

    {/* SEARCH BAR */}
    <div className="search">
        <label> Search: {"  "}
            <input  type="text"
                    placeholder="search"
                    onChange={(e) => setSearchParam(e.target.value)}/>
        </label>
    </div>

    <div className="playerList">
        
        {playersToDisplay.map((player) => {
        return (
    
            <div key={player.id} className="playerCard">
                <h4>{player.name}</h4>
                <span>#{player.id}</span>
                <img src={player.imageUrl} alt="player image" />
                <Link to={`/players/${player.id}`} >See {player.name}'s details</Link>
            </div>
    
        )}
        )}
    </div>  

    </> 
    );
}
 
export default AllPlayers;

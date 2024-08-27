import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchSingle, deletePlayer } from "../API";
import { useEffect, useState } from "react";


const SinglePlayer = () => {


    const [player, setPlayer] = useState([])

    let navigate = useNavigate();
    let {id} = useParams();

        useEffect(() => {
            async function getSingle() {
                try { 
                    const response = await fetchSingle(id);
                    const result = await response.player;
                    setPlayer(result);
                } catch (error) {
                    console.error(error)
                }    
            } getSingle();  
        }, []);

        async function handleDelete() {
            try {
                const result = await deletePlayer(id);
                setPlayer([])
                navigate('/')
            } catch (error) {
                console.error(error)
            }
        }

    let team = player.team ? player.team : "unassigned";

    return ( 
    <>
        <div key={player.id} className="singlePlayer">
            <h4>{player.name}</h4>
            <span>#{player.id}</span>
            <span><b>Breed:{"  "}</b>{player.breed}</span>
            <span><b>Team:{"  "}</b>{team}</span>
            <span><b>Status:{"  "}</b>{player.status}</span>
            <img src={player.imageUrl} alt="player image" />
                <Link to={'/'}>Back to All Players</Link>
                <button onClick={handleDelete}>Delete {player.name}</button>
        </div>
    
    </> 
    );
}
 
export default SinglePlayer;
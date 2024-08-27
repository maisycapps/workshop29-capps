
// fetch all players
export const fetchAll = async () => {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players", {
            method: "GET"
        })
        const result = await response.json();
        const allPlayers = await result;
        return allPlayers;
    } catch (error) {
        console.error(error)
    }
}

// add a new player
export const addPlayer = async (name, breed, imageUrl) => {
  
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, breed, imageUrl}),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error)
    }
}

// fetch single player
export const fetchSingle = async (id) => {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players/${id}`, {
            method: "GET"
        })
        const result = await response.json();
        const player = await result.data;
        return player;
    } catch (error) {
        console.error(error)
    }
}

// delete single player
export const deletePlayer = async (id) => {
    try {
        await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players/${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        console.error(error)
    }
}




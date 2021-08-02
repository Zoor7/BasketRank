const BASEURL= `https://basketrank.herokuapp.com/api/players`
// const BASEURL= `http://localhost:4000/api/players`

export const getPlayers= async (skip,limit)=>{
    const players=await (await fetch(`${BASEURL}?skip=${skip}&limit=${limit}`)).json()
    return players
}

export const getPlayersByName= async (name,skip,limit)=>{
    const players=await (await fetch(`${BASEURL}/${name}?skip=${skip}&limit=${limit}`)).json()
    return players
}
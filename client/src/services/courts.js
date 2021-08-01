// const BASEURL = `${process.env.REACT_APP_BASEURL}/court`
const BASEURL = `http://localhost:4000/api/court`


export const getCourts = async () => {

    const courts = await (await fetch(BASEURL)).json()
    return courts

}
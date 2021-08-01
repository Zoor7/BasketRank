// const BASEURL = `${process.env.REACT_APP_BASEURL}/court`
const BASEURL = `https://basketrank.herokuapp.com/api/court`


export const getCourts = async () => {

    const courts = await (await fetch(BASEURL)).json()
    return courts

}
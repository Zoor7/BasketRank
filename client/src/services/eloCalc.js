const K = 30;

export const eloCalculation = (playerElo, rivalElo, threes, res) => {

    const expectedElo = (1.0 / (1.0 + Math.pow(10, ((rivalElo - playerElo) / 400))))
    const newElo= playerElo + (K * (res - expectedElo))
    if (threes) return Math.trunc(newElo - playerElo)
    return Math.trunc(newElo)

}
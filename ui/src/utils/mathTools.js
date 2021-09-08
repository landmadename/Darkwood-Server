export function sortByNumber(a, b) {
    return a - b
}

export  function randomIntInRange(a, b) {
    return Math.round(Math.random()*(b-a) + a)
}
export function generateIncreasingRandomRange(boundary){
    const minInterval = 5
    let range = []
    let a = boundary[0]
    let b = boundary[1]
    do{
        range = []
        range.push(randomIntInRange(a, b))
        range.push(randomIntInRange(a, b))
        range = range.sort(sortByNumber)
    } while (range[1]-range[0] < minInterval)
    return range
}
const boardSize = 30;

const createState = () => {
    let arr = new Array(boardSize).fill(new Array(boardSize).fill(0))
    return arr
}

const adjacents = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]


export {
    boardSize,
    createState,
    adjacents,
}
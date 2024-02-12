const boardSize = 5;

const createState = () => {
    let arr = new Array(boardSize).fill(new Array(boardSize).fill(0))
    return arr
}


export {
    boardSize,
    createState,
}
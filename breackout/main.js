// Tablero
let board
let boardWidth = 500
let boardHeight = 500
let context

// Jugador
let playerWidth = 80
let playerHeight = 10

let playe = {
    x: boardWidth/2 - boardWidth/2,
    y: boardHeight - boardHeight - 5,
    width: playerWidth,
    height: playerHeight
}


window.onload = () => {
    board = document.getElementById('board')
    board.width = boardWidth
    board.height = boardHeight
    context = board.getContext('2d')

    context.fillStyle = 'skyblue'
    context.fillRect(playerr.x)
}
let turno = 0
const tablero = []





const btnPulsado = (e, pos) => {

    const btn = e.target
    const jugador = turno % 2 ? "1" : "2"
    const simbolo = turno % 2 ? `url("../img/x.svg")` : `url("../img/circle.svg")`

    if(tablero[pos]){
        alert("Este punto ya tiene un color")
    }
    else{
        turno ++
        btn.style.backgroundImage = simbolo
        // btn.style.backgroundColor = color
        tablero[pos] = jugador
    }

    if(hasWon()){
        alert(`Player ${jugador} ha ganado!`)
        turno = 0
    }
}

const hasWon = () => {
    //Opciones para ganar//

    //Horizontales
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true
    }
    else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true
    }
    else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true
    }

    //Verticales
    else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true
    }
    else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true
    }
    else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true
    }
    //Diagonales
    else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true
    }
    else if(tablero[6] == tablero[4] && tablero[6] == tablero[2] && tablero[6]){
        return true
    }
    //Si se empato
    else if(tablero[0] && tablero[0] && tablero[1] && tablero[2] && tablero[3] && tablero[4] && tablero[5] && tablero[6] && tablero[7] && tablero[8]){
        alert("Empate!")
        return false
    }
    //Si aun no se ganó
    else{
        return false
    }
}



document.querySelectorAll("button").forEach((btn, i)=>{
    btn.addEventListener("click", (e)=> btnPulsado(e, i))
})

document.getElementById("resetButton").addEventListener("click", ()=>{
    location.reload()
})
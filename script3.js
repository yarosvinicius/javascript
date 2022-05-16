const paragrafo = document.createElement("p")
paragrafo.innerHTML = "É culpa do mike"

document.body.appendChild(paragrafo)

function mostrartelefone(){
    document.getElementById("telefone").style.display = "block"
}

function a(){
    document.body.removeChild(telefone)
}
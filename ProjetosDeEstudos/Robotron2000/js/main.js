const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", (evento) => {
    console.log(evento) 
})

function dizOi(nome) {
    console.log(nome)
    console.log("Bem-vindo ao robotron 2000")
}

dizOi("Pedro")
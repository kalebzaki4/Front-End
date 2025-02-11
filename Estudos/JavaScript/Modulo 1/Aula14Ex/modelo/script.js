function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.lenght == 0 || fAno.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança!
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade >= 10 && idade < 18) {
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade >= 18 && idade < 61) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
             genero = 'Mulher'
             if (idade >=0 && idade < 10) {
                // Criança!
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade >= 10 && idade < 18) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade >= 18 && idade < 61) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}
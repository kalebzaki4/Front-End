var idade = 18
if (idade < 18) {
    console.log(`Nao pode votar`)
} else {
    if (idade < 18 || idade > 65) {
        console.log('voto opcional')
    } else {
        console.log('Voto obrigatorio')
    }
}
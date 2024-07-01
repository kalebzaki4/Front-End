var pais = 'frança';
console.log(`Vivendo em ${pais}`);

function verificarNacionalidade(pais) {
  if (pais.toLowerCase() === 'brasil') {
    return 'Você é brasileiro(a)!';
  } else {
    return 'Você é estrangeiro(a)!';
  }
}

var nacionalidade = verificarNacionalidade(pais);
console.log(nacionalidade);

function procesarFrase(frase) {

    const fraseMin = frase.toLowerCase();
    let resultado = '';
  
    for (let i = 0; i < fraseMin.length; i++) {
      const letra = fraseMin[i];
      resultado += letra;
  
      if ('aeiou'.includes(letra)) {
        resultado += 'p' + letra;
      }
    }
  
    return resultado;
  }
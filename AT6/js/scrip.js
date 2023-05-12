function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`  
    let c = 1; 
    if ( n <= 10) {
        let c = 1;
    while (c <= 10) {
        saida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
        c ++;
    }
        }else {
        saida.innerHTML += `<p><strong> Escreva um número de 1 a 10</strong> Número até 10!</p><br>`
    }
}

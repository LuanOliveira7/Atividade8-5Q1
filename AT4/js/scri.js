ler contador = 0
ler res = document.querySelector('section#result')

function contar() {
    contador ++
    res.innerHTML=`<p>O contador está com <mark>${contador}</mark> cliques.</p>
}

function zerar()
function m() {
    let nom = window.prompt('Nome do Aluno?')
    let n1 = Number(window.prompt(`Primeira nota ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1},qual a outra nota de ${nom}?`))
    let n3 = Number(window.prompt(`Além de ${n2},qual a outra nota de ${nom}?`))
    let n4 = Number(window.prompt(`Além de ${n3},qual a outra nota de ${nom}?`))
    med = (n1 + n2 + n3 + n4)/4

    let msg
    if (med >= 6) {
        msg = ' PARABÉNS! '
    } else {
        msg = ' VAI ESTUDAR ! '
    }
    let res = document.getElementById('situacao')
    res.innerHTML = `<p> Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p> As notas foram <mark>${n1}, ${n2}, ${n3} e ${n4}</mark>.</p>`
    res.innerHTML += `<p> Média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p> A mensagem que temos é:<strong style='color:gold;'>${msg}</strong></p>`
}
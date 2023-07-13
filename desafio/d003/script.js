function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.valeu > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebeh.png')
            } else if (idade < 21) {
                // Adole
                img.setAttribute('src', 'img/adoleh.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adultoh.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/velhoh.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebem.png')
            } else if (idade < 21) {
                // Adole
                img.setAttribute('src', 'img/adolem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adultom.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/velhom.png')
            }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}
function calcular() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    if (a === '' || b === '' || c === '') {
        window.alert('Por favor, digite um número em todos os campos!');
    } else {
        var resultado = (b * c) / a;
        document.getElementById('resultado').textContent = resultado;
    }
}
var num_dia = new Date().getDay();
var dia;

switch (num_dia) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda-feira";
    break;
  case 2:
    dia = "Terça-feira";
    break;
  case 3:
    dia = "Quarta-feira";
    break;
  case 4:
    dia = "Quinta-feira";
    break;
  case 5:
    dia = "Sexta-feira";
    break;
  case 6:
    dia = "Sábado";
    break;
  default:
    dia = "Dia inválido";
}

console.log("O dia da semana é:", dia);

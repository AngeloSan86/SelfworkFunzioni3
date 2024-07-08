let numero = prompt(`Inserischi un numero da 0 a 9999.`);

let numProvv = numero;
let numeroCifre = conteggio(numero);

numero = numProvv;

console.log(`Il numero ${numero} ha ${numeroCifre} cifre.`);


function conteggio(num) {
  if (num < 0 || num > 9999) {
    return "Numero non valido";
  }

  let conteggioCifre = 0;

  while (numero > 0) {
    numero = Math.floor(numero / 10);
    conteggioCifre++;
  }

  return conteggioCifre;
}
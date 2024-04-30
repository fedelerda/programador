var numeros = [1000, 156, 1245, 33, 9,119];
for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i])}
    var mayor = 0;
    for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) 
    mayor = numeros[i];
    }
    console.log('el mayor de ' + numeros + ' es ' + mayor);

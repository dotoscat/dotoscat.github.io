'use strict';

function primeraLetra(cadena){
    return cadena.charAt(0);
}

function ultimaLetra(cadena){
    return cadena.charAt(cadena.length-1);
}

function subcadena(cadena){
    return cadena.substring(1, cadena.length-1);
}

function esPalindromo(cadena){
    if (cadena.length < 2) return true;
    if (primeraLetra(cadena) === ultimaLetra(cadena))
        return esPalindromo(subcadena(cadena));
    return false;
}

window.addEventListener('load', evt => {
    const esNoes = document.getElementById('esnoes');
    document.getElementById('palabra')
    .addEventListener('input', (evt) => {
        esNoes.innerText = esPalindromo(evt.target.value) ? "es" : "no es";
    });
});

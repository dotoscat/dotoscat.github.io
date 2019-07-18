'use strict';

window.addEventListener('load', evt => {
    const nacimiento = document.getElementById('nacimiento');
    const fechaNacimiento = nacimiento.dataset.fechanacimiento;
    const edad = Math.floor((Date.now() - new Date(fechaNacimiento)) / 1000 / 60 / 60 / 24 / 365);
    nacimiento.innerText = nacimiento.innerText.replace(/\(.*?\)/, edad);
});

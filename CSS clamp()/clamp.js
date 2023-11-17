window.addEventListener('resize', updateClampCalculation);

const OUTPUT1 = document.querySelector('#output1');
const OUTPUT2 = document.querySelector('#output2');
const OUTPUT3 = document.querySelector('#output3');

function updateClampCalculation() {
    // A 1000px, les 3 ont la même valeur
    OUTPUT1.innerText = window.innerWidth * 1 / 100;
    OUTPUT2.innerText = window.innerWidth * 0.5 / 100 + 5;
    OUTPUT3.innerText = window.innerWidth * 1.5 / 100 - 5;
}
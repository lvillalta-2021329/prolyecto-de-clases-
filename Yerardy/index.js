const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');

function getSuma() {
    const sumatoria = valor1 + valor2;
    return sumatoria;
} 

function getClick() {
    console.log(getSuma());
}

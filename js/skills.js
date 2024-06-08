/* Matthew Spooner. 8/6/2024. */
const popupButton = document.getElementById("popup-button");

const cell_1 = document.getElementById("cell-1");
const cell_2 = document.getElementById("cell-2");
const cell_3 = document.getElementById("cell-3");
const cell_4 = document.getElementById("cell-4");

popupButton.addEventListener("click", computeDeterminant);

function computeDeterminant() {
    let result = 0;
    let ad = (parseFloat(cell_1.value) * parseFloat(cell_4.value));
    let bc = (parseFloat(cell_2.value) * parseFloat(cell_3.value));
    result = ad - bc;
    alert("Determinant = " + result);
}

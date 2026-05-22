let localContent = document.querySelector('#localContent');
let sessionContent = document.querySelector('#sessionContent');
let localInput = document.querySelector('#localStorage');
let sessionInput = document.querySelector('#sessionStorage');
let printContent = document.querySelector('.printContent');
let submit = document.querySelector('.submit');
let submit2 = document.querySelector('.submit2');

submit.addEventListener('click', function (e) {

    e.preventDefault();
    let lC = localInput.value;
    localStorage.setItem('first', lC);

});

submit2.addEventListener('click', function (e) {

    e.preventDefault();

    let sC = sessionInput.value;
    sessionStorage.setItem('second', sC);

});

printContent.addEventListener('click', function (e) {

    e.preventDefault();

    let localPrint = localStorage.getItem('first');
    let sessionPrint = sessionStorage.getItem('second');
    localContent.innerHTML = localPrint;
    sessionContent.innerHTML = sessionPrint;

});

let submit = document.querySelector(".submit");
let date = document.querySelector("#date");
let riddle = document.querySelector("#riddle");


submit.addEventListener("click", function (e) {

  event.preventDefault();

  // localStorage here
  let dateThing = date.value;
  localStorage.setItem('Date', dateThing);

  // sessionStorage here
  let riddleThing = riddle.value;
  sessionStorage.setItem('Riddle', riddleThing);

  console.log('Riddle: ' + riddleThing);
});
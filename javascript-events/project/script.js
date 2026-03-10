// Target each button
const buttons = document.querySelectorAll(".color-btn");
const reset = document.querySelector("#reset");

// Loop through each button to add an event listener, rather than adding one to each button individually
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = button.getAttribute("data-color");
  });
});

reset.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});

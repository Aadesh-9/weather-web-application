const address = document.querySelector("input");
const form = document.querySelector("form");
let messageOne = document.querySelector("#messageOne");
let messageTwo = document.querySelector("#messageTwo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = address.value;
  messageOne.textContent = "Loading ....";
  messageTwo.textContent = "";
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) return (messageTwo.textContent = data.error);
      else {
        messageOne.textContent = "location :   " + data.location;
        messageTwo.textContent = "temperature :   " + data.currentTemperature;
      }
    });
  });
});

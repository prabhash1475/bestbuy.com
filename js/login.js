var registeredUser = JSON.parse(localStorage.getItem("userCred"));
console.log(registeredUser);

document.querySelector("form").addEventListener("submit", loginfun);

function loginfun() {
  event.preventDefault();
  enterEmail = document.querySelector("#email").value;
  enterPass = document.querySelector("#pass").value;

  for (var i = 0; i < registeredUser.length; i++) {
    if (
      registeredUser[i].email == enterEmail &&
      registeredUser[i].pass == enterPass
    ) {
      window.location.href = "index.html";
      alert("login Success");
      break;
    } else {
      alert("Login Fail");
      break;
    }
  }
}

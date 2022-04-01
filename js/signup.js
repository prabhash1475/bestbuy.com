document.querySelector("form").addEventListener("submit", signupfun);

var userdata = JSON.parse(localStorage.getItem("userCred")) || [];

function signupfun() {
  event.preventDefault();

  var userobj = {
    name1: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    pass: document.querySelector("#pass").value,
  };
  userdata.push(userobj);
  //   console.log(userdata);
  localStorage.setItem("userCred", JSON.stringify(userdata));

  window.location.href = "login.html";
}

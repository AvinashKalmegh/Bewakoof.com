let form = document.querySelector("form");

let userdetails = JSON.parse(localStorage.getItem("signup")) || [];
form.addEventListener("submit", function () {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let number = document.querySelector("#number").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let userobj = {
    name: name,
    number: number,
    email: email,
    password: password,
  };
  userdetails.push(userobj);
  console.log(userdetails);
  if (
    userobj.name == "" ||
    userobj.number == "" ||
    userobj.email == "" ||
    userobj.password == ""
  ) {
    alert("field is empty");
    return;
  }

  localStorage.setItem("signup", JSON.stringify(userdetails));
  alert("Sign up successfull");
  window.location.href = "index.html";
});

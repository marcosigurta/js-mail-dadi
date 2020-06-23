var correctEmail = ["marco@gmail.com", "marco88@gmail.com", "marcointothwild@gmail.com"]

var logIn = document.getElementById('btn').addEventListener("click", function () {
    var email = document.getElementById("email").value;
    if (email == correctEmail[0] || email == correctEmail[1] || email == correctEmail[2]) {
        document.getElementById('welcome').innerHTML = "Welcome";
    } else {
        alert("Wrong Email");
    }
})

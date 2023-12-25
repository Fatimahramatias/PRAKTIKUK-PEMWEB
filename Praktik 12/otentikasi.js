const username = "fatim"
const password = "fatim123"

function auth(){
    let userInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value

    let form = document.getElementById("form")

    if(username == userInput && password == passwordInput) {
        alert("Login Berhasil")
        form.submit()
    } else {
    alert("Login Gagal!")
    }
}
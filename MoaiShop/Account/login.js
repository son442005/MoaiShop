const inputUsername = document.getElementById("username")
const inputPassword = document.getElementById("password")

function login(){
    if(inputUsername.value == "" || inputPassword.value == ""){
        alert("Please enter username or password!!");
    } else{
        const user = JSON.parse(localStorage.getItem(inputUsername.value));
        if(
            user.username === inputUsername.value &&
            user.password === inputPassword.value
        ){
            alert("Login Successfully!!");
            window.open("../HomePage/index.html");
        } else{
            alert("Your account or password is incorrect > ~ <");
        }
    }
}

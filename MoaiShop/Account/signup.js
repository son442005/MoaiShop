const userNameRegister = document.getElementById("username");
const passWordRegister = document.getElementById("password");

function signup(){
    if (userNameRegister.value === "" || passWordRegister.value === ""){
        alert("Please enter username and password");
    } 
    else{
        const user = {
            username: userNameRegister.value,
            password: passWordRegister.value,
        };
    let json = JSON.stringify(user);
    localStorage.setItem(userNameRegister.value, json);
    alert("Sign-up successful!!");
    window.open("login.html");
    }
}
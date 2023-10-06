const studentDetail = [{
    firstName: "shivnarayan",
    lastName: "yadav",
    email: "yadavshiv0041@gmail.com",
    password: "yadavshiv@001"
},]


function register(event) {
    let firstName = document.getElementById("userName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    // console.log(firstName,lastName,email,password)

    //for FirstName validation
    if (firstName == "") {
        document.getElementById("error").innerText = "firstName should not be empty !!";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontSize = ".9rem";
    }

    //for lastName validation
    if (lastName == "") {
        document.getElementById("lastNameError").innerText = "lastName should not be empty!!";
        document.getElementById("lastNameError").style.color = "red";
        document.getElementById("lastNameError").style.fontSize = ".9rem";
    }

    //for email validation
    if (email == "") {
        document.getElementById("emailError").innerText = "Email should not be empty!!";
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").style.fontSize = ".9rem";
    }

    //for password validation
    if (password == "") {
        console.log("pass")
        document.getElementById("passwordError").innerText = "password should not be empty and more 8 digit!!";
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").style.fontSize = ".9rem";
    }
    if (password.length <= 8) {
        document.getElementById("passwordError").innerHTML = "Password should more thane 8 digit";
        document.getElementById("passwordError").style.color = "red"
        console.log("Password should more than 8 digit");
    }

    if (firstName && lastName && email && password) {
        // localStorage.setItem("firstName",firstName)
        studentDetail.push({ firstName: firstName, lastName: lastName, email: email, password: password })
        let str = JSON.stringify(studentDetail);
        localStorage.setItem("studentDetail", str)

        clear()
        alert("You are the Register Succesfully")
    }
    console.log("click hua")
}
// clear function 
function clear() {
    let firstName = document.getElementById("userName").value = "";
    let lastName = document.getElementById("lastName").value = "";
    let email = document.getElementById("email").value = "";
    let password = document.getElementById("password").value = "";
}














//------------------loginPage section --------------------------

function login() {
    let LoginEmail = document.getElementById("email").value.trim();
    let LoginPassword = document.getElementById("password").value.trim();
    //for email validation
    if (LoginEmail == "") {
        document.getElementById("emailError").innerText = "Email should not be empty!!";
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").style.fontSize = ".9rem";
    }
    //for password validation
    else if (LoginPassword == "") {
        console.log("pass")
        document.getElementById("passwordError").innerText = "password should not be empty and more 8 digit!!";
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").style.fontSize = ".9rem";
    }
    else if (LoginPassword.length <= 8) {
        document.getElementById("passwordError").innerHTML = "Password should more thane 8 digit";
        document.getElementById("passwordError").style.color = "red"
        console.log("Password should more than 8 digit");
    }


    for (let i = 0; i < studentDetail.length; i++) {
        if (studentDetail[i].email == LoginEmail && studentDetail[i].password == LoginPassword) {
            console.log("ok")
        }
        else {
            console.log("match should not match")
        }
    }

    console.log("click")
}

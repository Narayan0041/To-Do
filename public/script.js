const studentDetail = [ ]

// -----------------------------------------genrate_password start here------------------------------------------------
let char = ["@", "#", "&", "!", "#", "%"]
// let password = document.getElementById("password").value.trim();

// onkeyup function
function myFunction() {
    let securePassword = Math.floor(Math.random() * 100000);
    let chat = char[Math.floor(Math.random() * 6)]
    document.getElementById("passGenrator").style.display = "block"
    let input = document.getElementById("userName").value.trim();
    let up = input.charAt(0).toUpperCase();
    let slice = input.slice(1)
    let final = up + slice + chat + securePassword;
    if (final.length >= 10) {
    } else {
        console.log("your should more then 10 digit")
    }
    let genrate_pass = document.getElementById("passGenrator").innerHTML = "<h2>Suggestion strong password</h2>" + final;


}
// -------------------------------------------genrate_password end here-------------------------------------------------

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
        var id = studentDetail.length + 1;
        studentDetail.push({ firstName: firstName, lastName: lastName, email: email, password: password, id: id })
        let str = JSON.stringify(studentDetail);
        localStorage.setItem("studentDetail", str)
        alert("You are the Register Succesfully")
        clear()
    }
    console.log("You are the Register Succesfully")
}



// clear function 
function clear() {
    let firstName = document.getElementById("userName").value = "";
    let lastName = document.getElementById("lastName").value = "";
    let email = document.getElementById("email").value = "";
    let password = document.getElementById("password").value = "";
    document.getElementById("passGenrator").style.display = "none"
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

   
    for (let i = 0; i < final.length; i++) {
        if (final[i].email == LoginEmail && final[i].password == LoginPassword) {
            console.log("Password should match")
            window.location.href="index.html"
        }
        else {
            console.log("match should not match")
        }
    }

    console.log("click")
}





// -------------------------------------------------------------adminPanel section ---------------------------------------------------
// let adminName =prompt("Enter you name");
// let adminpassword=prompt("Enter the password");

// if(adminName =="shiv" && adminpassword=="narayan"){
//     let students_section = document.getElementById("students-box-section");
// let studentsData = localStorage.getItem("studentDetail")
// let final =JSON.parse(studentsData)

// window.addEventListener("load",()=>{
//     var html = "<table border='1|1' class='table'>"
//     setTimeout(() => {
//         html += "<thead>";
//         html += "<tr>";
//         html += "<td>" + 'SNo.' + "</td>";
//         html += "<td>" + 'first Name' + "</td>";
//         html += "<td>" + 'last Name' + "</td>";
//         html += "<td>" + 'Email' + "</td>";
//         html += "<td>" + 'Action' + "</td>";
//         html += "</tr>"
//         html += "</thead>";
//         for (let j = 0; j < final.length; j++) {
//             var sno = j + 1;
//             html += "<tr>";
//             html += "<td>" + sno + "</td>";
//             html += "<td>" + final[j].firstName + "</td>";
//             html += "<td>" + final[j].lastName + "</td>";
//             html += "<td>" + final[j].email + "</td>";
//             html += "</tr>";
//         }
//         html += "</table>";
//         students_section.innerHTML = html

//     }, 200)
//     console.log("page is loaded")

// })
//     console.log("yes your are Admin")
// }
// else{
//     document.body.innerHTML ="Oops ! You are not a Admin...";
//      document.body.style.marginTop ="10rem";
//      document.body.style.backgroundColor ="black";
//      document.body.style.color ="white";
//      document.body.style.fontSize ="3rem"
//      document.body.style.display ="flex"
//      document.body.style.justifyContent ="center";

// }

let students_section = document.getElementById("students-box-section");
let studentsData = localStorage.getItem("studentDetail")
let final = JSON.parse(studentsData)

let window1 = window.addEventListener("load", () => {
    var html = "<table border='1|1'  class='table'>"
    setTimeout(() => {
        html += "<thead>";
        html += "<tr>";
        html += "<td>" + 'SNo.' + "</td>";
        html += "<td>" + 'first Name' + "</td>";
        html += "<td>" + 'last Name' + "</td>";
        html += "<td>" + 'Email' + "</td>";
        html += "<td>" + 'Action' + "</td>";
        html += "</tr>"
        html += "</thead>";
        for (let j = 0; j < final.length; j++) {
            var sno = j + 1;
            html += "<tr>";
            html += "<td>" + sno + "</td>";
            html += "<td>" + final[j].firstName + "</td>";
            html += "<td>" + final[j].lastName + "</td>";
            html += "<td>" + final[j].email + "</td>";
            html += "<td>" + `<button type="button" class="btn btn-danger" onclick="removeItem(${final[j].id})">Remove</button>` + "</td>";
            html += "</tr>";
        }
        html += "</table>";
        students_section.innerHTML = html

    }, 200)
    console.log("page is loaded")

})
function removeItem(remove) {
    let id = remove;
    removeDataFromLocalStorage(id);
    console.log("click hu remove btn", id)
}

// Function to remove data from localStorage
function removeDataFromLocalStorage(id) {
    const updatedData = final.filter(item => item.id !== id);
    localStorage.setItem('studentDetail', JSON.stringify(updatedData));
}

//   ---------------------------------------------search-option---------------------------------------------

function searched() {
    let search = document.getElementById("search").value;
    let SearchUpperCase = search.toUpperCase();

    console.log(SearchUpperCase)
}
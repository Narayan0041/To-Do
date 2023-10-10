let studentDetail = []

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
    let genrate_pass = document.getElementById("passGenrator")
    genrate_pass.innerHTML = "<h2>Suggestion strong password</h2>" + final;
    genrate_pass.style.marginLeft = "2rem";
    genrate_pass.style.marginTop = "1rem"
}
// ---------------------------------------sign in link--------------------------------------------
function signIn() {
    window.location.href = "login.html"
}

// -------------------------------------------genrate_password end here-------------------------------------------------

function register(event) {
    let firstName = document.getElementById("userName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let firstChar =firstName.charAt(0);

    //for FirstName validation
    if (firstName == "") {
        document.getElementById("error").innerText = "firstName should not be empty !!";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontSize = ".9rem";
        document.getElementById("error").style.marginLeft = "1.2rem";
        document.getElementById("error").style.marginTop = ".5rem";
    }
    //for email validation
    if (email == "") {
        document.getElementById("emailError").innerText = "Email should not be empty!!";
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").style.fontSize = ".9rem";
        document.getElementById("emailError").style.marginLeft = "1.2rem";
        document.getElementById("emailError").style.marginTop = ".5rem";
    }

    //for password validation
    if (password == "") {
        console.log("pass")
        document.getElementById("passwordError").innerText = "password should not be empty and more 8 digit!!";
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").style.fontSize = ".9rem";
        document.getElementById("passwordError").style.marginLeft = "1.5rem";
        document.getElementById("passwordError").style.margintop = ".7rem";
    }
    if (password.length <= 8) {
        document.getElementById("passwordError").innerHTML = "Password should more thane 8 digit";
        document.getElementById("passwordError").style.color = "red"
        console.log("Password should more than 8 digit");
    }

    //write the condition for register 
    if (firstName && email && password) {
        let studentDetail = JSON.parse(localStorage.getItem("studentDetail"));
        var id = studentDetail.length + 1;
        studentDetail.push({ firstName: firstName, email: email, password: password, id: id })
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
        document.getElementById("emailError").style.fontSize = ".8rem";
        document.getElementById("emailError").style.marginLeft = "2.7rem";
        document.getElementById("emailError").style.margintop = "1.2rem";
    }
    //for password validation
    if (LoginPassword == "") {
        console.log("pass")
        document.getElementById("passwordError").innerText = "password should not be empty and more 8 digit!!";
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").style.fontSize = ".8rem";
        document.getElementById("passwordError").style.marginLeft = "2.7rem";
        document.getElementById("passwordError").style.margintop = "1.2rem";
    }
    else if (LoginPassword.length <= 8) {
        document.getElementById("passwordError").innerHTML = "Password should more thane 8 digit";
        document.getElementById("passwordError").style.color = "red"
        console.log("Password should more than 8 digit");
    }


    // get the data from the localStorage
    let studentsData = localStorage.getItem("studentDetail")
    let final = JSON.parse(studentsData)

    // check the condition wether the user are exits or not 
    for (let i = 0; i < final.length; i++) {
        if (final[i].email == LoginEmail && final[i].password == LoginPassword) {
            window.location.href = "index.html";
            console.log("Password should match")
        }
        else {
            let invalid = document.getElementById("invalid");
            invalid.innerHTML = "A user with this email does not exist"
            invalid.style.backgroundColor = "red"
            invalid.style.margin = "1rem 2rem 0 2rem";
            invalid.style.height = "2.5rem"
            invalid.style.width = "80%"
            invalid.style.fontSize = "1rem"
            invalid.style.fontWeight = "300"
            invalid.style.padding = ".5rem 1rem"
            invalid.style.borderRadius = ".2rem"
            console.log("match should not match")
        }
    }

    console.log("click")
}







// -------------------------------------------------------------adminPanel section ---------------------------------------------------

let students_section = document.getElementById("students-box-section");

let studentsData = localStorage.getItem("studentDetail")
let final = JSON.parse(studentsData)

let window1 = window.addEventListener("load", () => {
    var html = "<table border='1|1' class='table'>"
    setTimeout(() => {
        html += "<thead id='table'>";
        html += "<tr>";
        html += "<td>" + 'SNo.' + "</td>";
        html += "<td>" + 'first Name' + "</td>";
        html += "<td>" + 'Email' + "</td>";
        html += "<td>" + 'Action' + "</td>";
        html += "</tr>"
        html += "</thead>";
        for (let j = 0; j < final.length; j++) {
            var sno = j + 1;
            html += "<tr>";
            html += "<td>" + sno + "</td>";
            html += "<td>" + final[j].firstName + "</td>";
            html += "<td>" + final[j].email + "</td>";
            html += "<td>" + `<button type="button" class="btn btn-danger" onclick="removeItem(${final[j].id})">Remove</button>` + "</td>";
            html += "</tr>";
        }
        html += "</table>";
        students_section.innerHTML = html
        // noCustomer --------------------------------
        let Nocustomer = document.getElementById("noCustomer");
        Nocustomer.innerHTML = final.length;

    }, 200)
    console.log("page is loaded")

})
function removeItem(remove) {
    let id = remove;
    let conf = confirm("Do you want Delete the user");
    if (conf) {
        removeDataFromLocalStorage(id);
        console.log("click hu remove btn", id)
        document.location.reload()
    }
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
    let myTable = document.getElementsByClassName("table")[0]
    let tr = myTable.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];
        let email =tr[i].getElementsByTagName('td')[2];

        if (td) {
            let emailValue =email.textContent || email.innerHTML;
            let textValue = td.textContent || td.innerHTML;
            if (textValue.toUpperCase().indexOf(SearchUpperCase) > -1 || emailValue.toUpperCase().indexOf(SearchUpperCase) >-1) {
               
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none"
            }
            //   if(textValue.toUpperCase())
        }
    }

}
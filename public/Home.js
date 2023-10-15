let userDataStore=[];
let user = document.querySelector(".image");
let user_menu = document.querySelector(".user-menu")
let logOutBtn = document.querySelector(".link")
let subContainer = document.querySelector(".sub-container");
let profile = document.querySelector(".pro")
let profileContainer = document.querySelector(".profile-conatiner")
let toggleMenu = false;
let onClickContainer = false;
user.addEventListener("click", () => {
  user_menu.classList.toggle("active")
  if (toggleMenu) {
    document.querySelector(".container").style = "opacity:1 ";
    toggleMenu = false;
    logOutBtn.classList.toggle("active")
  } else {
    document.querySelector(".container").style = "opacity:0.5";
    toggleMenu = true;
  }
})
window.onscroll = () => {
  user_menu.classList.remove("active")
  document.querySelector(".container").style = "opacity:1 ";
}
subContainer.addEventListener("click", () => {
  user_menu.classList.remove("active")
  document.querySelector(".container").style = "opacity:1 ";
})
profile.addEventListener("click", () => {
  profileContainer.classList.toggle("active")
  // profileContainer.style.display ="block";
  user_menu.style.display = "hidden";
  user_menu.classList.toggle("activeFor")
})

// get the data from localStorage and display the data

let email = document.querySelector(".Email");
let Name = document.querySelector(".name")
let loginUser = localStorage.getItem("loginUser")
let valueOfData = JSON.parse(loginUser)
for (let i = 0; i < valueOfData.length; i++) {
  email.innerHTML = valueOfData[0]
}
for (let i = 0; i < valueOfData.length; i++) {
  Name.innerHTML = valueOfData[1]
}

let logOut = document.querySelector(".logOut");
logOut.addEventListener("click", () => {
  localStorage.removeItem("loginUser");
  window.location.href = "index.html"
})

// image change from file 
let image = document.querySelectorAll(".imageUser")
let input = document.querySelector("input")

input.addEventListener("change", () => {
  // get the data from the localStorage 
  let finalData =JSON.parse(localStorage.getItem("studentDetail"));
  if (input.files.length > 0) {
    // Create a URL for the selected file
    const imageUrl = URL.createObjectURL(input.files[0]);
   for(i=0;i<image.length;i++){
  image[i].src = imageUrl;
   }
   finalData["image[i].src"]=imageUrl
   let str = JSON.stringify(finalData);
   localStorage.setItem("studentDetail", str)
  }

})

let saveBtn =document.querySelector(".btn-save");
saveBtn.addEventListener("click",()=>{
let mobileNumber =document.getElementById("mobileNumber").value.trim();
let finalData =JSON.parse(localStorage.getItem("loginUser"));
let userData =JSON.parse(localStorage.getItem("studentDetail"));

for(let i=0;i<userData.length;i++){
  if(userData[i].email === finalData[0] && userData[i].firstName === finalData[1] ){
    userData[i]["mobileNumber"]=mobileNumber;
    let str = JSON.stringify(userData);
    localStorage.setItem("studentDetail", str)
    alert("Your account details has been updated")
    profileContainer.style.display ="none";
    user_menu.classList.remove("activeFor")

  }else{
    console.log("not")
  }
}

})


// todo list

var textFild =document.getElementById("text");
var btnn =document.getElementById("btn");
var listText =document.getElementById("list-Task");
btnn.addEventListener("click",function(){
   let text = textFild.value.trim();
   if(text !==""){
   const ListElement= document.createElement("li");
  ListElement.innerHTML =`${text} <button class="delete-btn">Delete</button>`
  

    listText.appendChild(ListElement);
    textFild.value="";
    var storeData =localStorage.getItem("userStoreData") ? JSON.parse(localStorage.getItem("userStoreData")) : [];
     let storeDataString = JSON.stringify(storeData);
     console.log(storeDataString)
     let lis =list
    // console.log(ListElementWithValue)
    //  console.log(listTextWithValue,userDataStore)
     userDataStore.push(lis)
     console.log(userDataStore)
   }
   listText.addEventListener("click",function(even){
    if(even.target.classList.contains("delete-btn")){
        even.target.parentNode.remove();
    }
   })
})


// add the todo result in the localStorge 

localStorage.get



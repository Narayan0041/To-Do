let userDataStore = [];
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
let mobile = document.querySelector("#mobileNumber");
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
let profileImage = document.querySelectorAll(".imageUser")
let changeImageButton = document.querySelector(".btn-save")
let imageUploadInput = document.querySelector("input")


// Check if a profile image is already stored in localStorage
// var storedProfileImage = localStorage.getItem("studentDetail") ? JSON.parse(localStorage.getItem("studentDetail")) : [];
//  const storedProfileImage = localStorage.getItem("studentDetail");
// console.log(storedProfileImage);
// if (storedProfileImage) {
//   profileImage.src = storedProfileImage;
// } else {
//   // If no profile image is set, use a default image
//   const defaultImageURL = "../src/man.png";
//   profileImage.src = defaultImageURL;
//   // localStorage.setItem("profileImage", defaultImageURL);
// }
const storedProfileImage = localStorage.getItem("studentDetail");
const parseProfile = JSON.parse(storedProfileImage)
if (parseProfile[0].profileImage) {
  for (let i = 0; i < profileImage.length; i++) {
    profileImage[i].src = parseProfile[0].profileImage;
  }
} else {
  // If no profile image is set, use a default image
  const defaultImageURL = "../src/man.png";
  profileImage.src = defaultImageURL;
  // localStorage.setItem("profileImage", defaultImageURL);
}

// Add an event listener to the "Change Image" button
changeImageButton.addEventListener("click", function () {
  imageUploadInput.click(); // Trigger the file input when the button is clicked
});

// Add an event listener to the file input to handle the image selection
imageUploadInput.addEventListener("change", function () {
  const selectedImage = imageUploadInput.files[0];
  // for(i=0;i<profileImage.length;i++){
  //   profileImage[i].src = selectedImage;
  // }
  if (selectedImage) {
    const reader = new FileReader();
    reader.onload = function () {
      const imageUrl = reader.result;
      for (i = 0; i < profileImage.length; i++) {
        profileImage[i].src = imageUrl;
      }
      let userData = JSON.parse(localStorage.getItem("studentDetail"));
      for (let i = 0; i < userData.length; i++) {
        userData[i]["profileImage"] = imageUrl;
        let str = JSON.stringify(userData);
        localStorage.setItem("studentDetail", str)
        alert("Your profile has been  updated")
      }


      // profileImage.src = imageUrl; // Set the profile image source to the selected image
      // localStorage.setItem("profileImage", imageUrl); // Store the image URL in localStorage
    };
    reader.readAsDataURL(selectedImage);
  }
});

// input.addEventListener("change", () => {
//   // get the data from the localStorage 
//   let finalData =JSON.parse(localStorage.getItem("loginUser"));
//   if (input.files.length > 0) {
//     // Create a URL for the selected file
//     const imageUrl = URL.createObjectURL(input.files[0]);
//    for(i=0;i<image.length;i++){
//   image[i].src = imageUrl;
//   localStorage.setItem("userProfile",imageUrl)
// }
// // let userData =JSON.parse(localStorage.getItem("studentDetail"));
// // for(let i=0;i<userData.length;i++){
// //   if(userData[i].email === finalData[0] && userData[i].firstName === finalData[1] ){
// //     userData[i]["userImage"]=userimage;
// //     console.log(userimage)
// //     let str = JSON.stringify(userData);
// //       localStorage.setItem("studentDetail", str)
// //       alert("Your profile has been change")
// //   }
// // }
//   //  let str = JSON.stringify(finalData);
//   //  localStorage.setItem("studentDetail", str)
//   }

// })

let saveBtn = document.querySelector(".btn-save");
saveBtn.addEventListener("click", () => {
  let mobileNumber = document.getElementById("mobileNumber").value.trim();
  let finalData = JSON.parse(localStorage.getItem("loginUser"));
  let userData = JSON.parse(localStorage.getItem("studentDetail"));

  for (let i = 0; i < userData.length; i++) {
    if (userData[i].email === finalData[0] && userData[i].firstName === finalData[1]) {
      if(userData[i].mobileNumber ==""){
        userData[i]["mobileNumber"] = mobileNumber;
        let str = JSON.stringify(userData);
        localStorage.setItem("studentDetail", str)
        alert("Your account details has been updated")
      }
      else{
        profileContainer.style.display = "none";
        user_menu.classList.remove("activeFor")
      }

    } else {
      console.log("not")
    }
  }

})
let finalll = localStorage.getItem("studentDetail")
let finalllStr = JSON.parse(finalll)
for (let i = 0; i < finalllStr.length; i++) {
  if (finalllStr[i].hasOwnProperty("mobileNumber")) {

    mobile.style.display = "none";
    document.querySelector(".textMobile").style.display = "block"
    document.querySelector(".textMobile").innerHTML = finalllStr[i].mobileNumber;

  }
}


// todo list

var textFild = document.getElementById("text");
var btnn = document.getElementById("btn");
var listText = document.getElementById("list-Task");

btnn.addEventListener("click", function () {
  let text = textFild.value.trim();

  if (text !== "") {

    const ListElement = document.createElement("li");
    ListElement.innerHTML = `${text} <button class="delete-btn">Delete</button>`
    listText.appendChild(ListElement);
    textFild.value = "";
    var userDataStore = localStorage.getItem("userStoreData") ? JSON.parse(localStorage.getItem("userStoreData")) : [];
    userDataStore.push(text)
    let userDataStoreString = JSON.stringify(userDataStore);
    localStorage.setItem("userStoreData", userDataStoreString)
    console.log(userDataStore)
  }
  listText.addEventListener("click", function (even) {
    if (even.target.classList.contains("delete-btn")) {
      even.target.parentNode.remove();
    }
  })
})


// add the todo result in the localStorge 





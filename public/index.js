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
   }
   listText.addEventListener("click",function(even){
    if(even.target.classList.contains("delete-btn")){
        even.target.parentNode.remove();
        // console.log("click")
    }
   })
})


let getUserLogin =localStorage.getItem("loginUser");
console.log(getUserLogin)


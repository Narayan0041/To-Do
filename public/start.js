function loadData(){
    let data= localStorage.getItem("currentLogUser");
    let userData = JSON.parse(data)

    for(i=0;i<userData;i++){
        if(userData[i].isCurrentLogin === 1){
            console.log(userData[i])
        }
    }
}
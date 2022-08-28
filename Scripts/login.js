let userdetails = JSON.parse(localStorage.getItem("signup")) || [];

   let btn = document.querySelector("button");
   btn.addEventListener("click",function(){
    
    let  number = document.querySelector("#mobnumber").value;
    if(number == ""){
        alert("Enter number first");
        return;
    }
    userdetails.forEach(function(ele){
     if(number == ele.number){
        alert("Login Successful");
        window.location.href = "index.html";
     }
     else{
        alert("New User! Signup First");
        window.location.href = "signup.html";
     }
    })
   })
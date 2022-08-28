let userdetails = JSON.parse(localStorage.getItem("signup")) || [];


   let btn = document.querySelector("button");
   btn.addEventListener("click",function(){
    
    let  number = document.querySelector("#mobnumber").value;
    
    if(number == ""){
        alert("Enter number first");
        return;
    }
    let flag=false;
    userdetails.filter(function(ele){
     if(number == ele.number){
        flag=true;
       
     }
    
    })
    if(flag){
      alert("log in successful");
      window.location.href= "index.html";
    }
    else{
      alert("New User! Signup First");
      window.location.href = "signup.html";
    }
   })
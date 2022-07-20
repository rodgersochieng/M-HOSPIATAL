var log = document.getElementById("submit");
log.addEventListener("onclick, matchPassword");

function matchPassword() {  
    var pw1 = document.getElementById("password1");  
    var pw2 = document.getElementById("password2");  
    if(pw1 != pw2)  
    {   
      alert("Passwords do not match");  
    } else {  
      alert("Password created successfully");  
      document.write("Details have been submitted successfully, proceed to login"); 
    }  
  }  
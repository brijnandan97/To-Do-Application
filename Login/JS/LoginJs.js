function check() {

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
        
    var storedName = localStorage.getItem(userName.value);
    var storedVal=JSON.parse(storedName);
    
    
    if(storedName==null){
        alert('You are not Registered User! Please Register.');
        
    }
    else{
        if(userName.value == storedVal.userNameval) {
            if(userPw.value == storedVal.pw){
                storedVal.isLogged="true";
                localStorage.setItem(userName.value,JSON.stringify(storedVal));
                return true;
            }
            else{
                alert("You have entered the wrong password");
                return false;
            }
        }
    }
}

const loginform=document.getElementById("login-form");
loginform.addEventListener('submit',()=>{
    event.preventDefault();
    if(check()){
        alert('You are logged in.');
        window.location.href="To-Do.html";
        event.returnValue = true;
    }
    else{
        event.returnValue = false;
    }
});


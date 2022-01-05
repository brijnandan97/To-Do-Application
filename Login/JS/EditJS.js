// Image Upload
const image_input = document.querySelector("#image_input");
let reader="";
image_input.addEventListener("change", function() {
    reader = new FileReader();
   reader.addEventListener("load", () => {
   const uploaded_image = reader.result;
   document.querySelector("#display_image").setAttribute ("src",uploaded_image);
});
   reader.readAsDataURL(this.files[0]);
});



function back(){
    location.href="To-Do.html";
}



let getFirstName = document.getElementById('firstname');
let getLastName = document.getElementById('lastname');
let getGender = document.getElementById('gender');
let getPhone = document.getElementById('Phone');
let getAddress = document.getElementById('address');
let getEmail = document.getElementById('email');
let getImage_Input = document.getElementById('image_input');


var arrayOfKeys = Object.keys(localStorage);
let getUserName="";
let getUserVal="";
for(let i=0;i<arrayOfKeys.length;i++){
    let userVal=localStorage.getItem(arrayOfKeys[i]);
    getUserVal=JSON.parse(userVal);
    if(getUserVal.isLogged==="true"){
        getUserName=getUserVal.userNameval;
        break;
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    const recentImagedataURl=getUserVal.img;
    if(recentImagedataURl){
        document.querySelector("#display_image").setAttribute("src",recentImagedataURl);
    }
});



function Edit(){
    getUserVal.firstname=getFirstName.value;
    getUserVal.lastname= getLastName.value;
    getUserVal.gender=getGender.value;
    getUserVal.Phone=getPhone.value;
    getUserVal.address=getAddress.value;
    getUserVal.email=getEmail.value;
    getUserVal.img=reader.result;
    localStorage.setItem(getUserName,JSON.stringify(getUserVal));
}


//Validations Start
const firstname=document.getElementById("firstname");
const lastname=document.getElementById("lastname");
const gender=document.getElementById("gender");
const Phone=document.getElementById("Phone");
const email=document.getElementById("email");
const addr=document.getElementById("address");

const editform=document.getElementById("edit-form");

editform.addEventListener('submit',()=>{
    event.preventDefault();
    if(validate()){
        Edit();
        event.returnValue = true;
        alert("Profile Updated");
    }
    else{
        event.returnValue = false;
    }
})


const validate=()=>{
    
    const firstnameval=firstname.value.trim();
    const lastnameval=lastname.value.trim();
    const genderval=gender.value.trim();
    const Phoneval=Phone.value.trim();
    const emailval=email.value.trim();
    const addrval=addr.value.trim();

    let result=true;
    
    //Validating Email
    var error5 = document.getElementById("error5")
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    if(emailval.match(validRegex)==null){
        error5.innerHTML = "<span style='color: red;'>"+
                        "Please enter the correct E-mail</span>"
        
        result=false;
    }else {
        error5.innerHTML = ""
    }

    //Validating Firstname
    var error1 = document.getElementById("error1")
    if(firstnameval==null || firstnameval===""){
        error1.innerHTML = "<span style='color: red;'>"+
                        "Please enter the First Name</span>"
        result=false;
    }else {
        error1.innerHTML = ""
    }
    //Validating LastName
    var error2 = document.getElementById("error2")
    if(lastnameval==null || lastnameval===""){
        error2.innerHTML = "<span style='color: red;'>"+
                        "Please enter the Last Name</span>"
        result=false;
    }else {
        error2.innerHTML = ""
    }
    //Validating Phone no.
    var error3 = document.getElementById("error3")
    let Phonereg=/^\d{10}$/;
    if(Phoneval.match(Phonereg)==null || Phoneval.length!=10){
        error3.innerHTML = "<span style='color: red;'>"+
                        "Please enter the correct Number</span>"
        
        result=false;
    }else {
        error3.innerHTML = ""
    }

    //validating address
    var error4 = document.getElementById("error4")
    if(addrval==null || addrval===""){
        error4.innerHTML = "<span style='color: red;'>"+
                        "Please enter the correct Address</span>"
        result=false;
    }else {
        error4.innerHTML = ""
    }

    return result;
}


//InnerText
document.getElementById("firstname").value=getUserVal.firstname;
document.getElementById("lastname").value=getUserVal.lastname;
document.getElementById("gender").value=getUserVal.gender;
document.getElementById("Phone").value=getUserVal.Phone;
document.getElementById('address').value=getUserVal.address;
document.getElementById("email").value=getUserVal.email;


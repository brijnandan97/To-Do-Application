//Image Upload
// const image_input = document.querySelector("#image_input");
// image_input.addEventListener("change", ()=> {
//    const reader = new FileReader();
//    reader.addEventListener("load", () => {
//    const uploaded_image = reader.result;
//    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
// });
//    reader.readAsDataURL(this.files[0]);
// });

// function getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;

//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);

//     var dataURL = canvas.toDataURL("image/png");

//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

// getImage_Input = getBase64Image(bannerImage);
// localStorage.setItem("getImage_Input", getImage_Input);


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

function Edit(){
    getUserVal.firstname=getFirstName.value;
    getUserVal.lastname= getLastName.value;
    getUserVal.gender=getGender.value;
    getUserVal.Phone=getPhone.value;
    getUserVal.address=getAddress.value;
    getUserVal.email=getEmail.value;
    localStorage.setItem(getUserName,JSON.stringify(getUserVal));
}


//Validations Start
const firstname=document.getElementById("firstname");
const lastname=document.getElementById("lastname");
const gender=document.getElementById("gender");
const Phone=document.getElementById("Phone");
const email=document.getElementById("email");


const editform=document.getElementById("edit-form");

editform.addEventListener('submit',()=>{
    event.preventDefault();
    if(validate()){
        Edit();
        event.returnValue = true;
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
    


    
    //Validating Email
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    if(emailval.match(validRegex)==null){
        alert("Invalid Email address");
        return false;
    }

    //Validating Firstname
    if(firstnameval==null || firstnameval===""){
        alert("FirstName should not be null");
        return false;
    }
    //Validating LastName
    if(lastnameval==null || lastnameval===""){
        alert("LastName should not be null");
        return false;
    }
    //Validating Phone no.
    let Phonereg=/^\d{10}$/;
    if(Phoneval.match(Phonereg)==null || Phoneval.length!=10){
        alert("Phone Number is not Correct");
        return false;
    }

    return true;
}


//InnerText
document.getElementById("firstname").value=getUserVal.firstname;
document.getElementById("lastname").value=getUserVal.lastname;
document.getElementById("gender").value=getUserVal.gender;
document.getElementById("Phone").value=getUserVal.Phone;
document.getElementById('address').value=getUserVal.address;
document.getElementById("email").value=getUserVal.email;

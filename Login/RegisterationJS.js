//Image Upload
const image_input = document.querySelector("#image_input");
let reader="";
image_input.addEventListener("change", function() {
    reader = new FileReader();
   reader.addEventListener("load", () => {
   const uploaded_image = reader.result;
   document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
});
   console.log(reader.readAsDataURL(this.files[0]));
});

//debug start

// Get a reference to the image element
// var elephant = document.getElementById("image_input");
// var imgAsDataURL="";
// // Take action when the image has loaded
// elephant.addEventListener("load", function () {
//     var imgCanvas = document.createElement("canvas"),
//         imgContext = imgCanvas.getContext("2d");

//     // Make sure canvas is as big as the picture
//     imgCanvas.width = elephant.width;
//     imgCanvas.height = elephant.height;

//     // Draw image into canvas element
//     imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);

//     // Get canvas contents as a data URL
//     imgAsDataURL = imgCanvas.toDataURL("image/png");

//     // Save image into localStorage

        
    
// }); 


//debug end





let getUserName = document.getElementById('username');
let getPassWord = document.getElementById('pw');
let getFirstName = document.getElementById('firstname');
let getLastName = document.getElementById('lastname');
let getAddress = document.getElementById('address');
let getGender = document.getElementById('gender');
let getPhone = document.getElementById('Phone');
let getEmail = document.getElementById('email');
//var getImage_Input = document.getElementById('image_input');


function store() {
    let obj={
        'userNameval':getUserName.value,
        'pw': getPassWord.value,
        'firstname': getFirstName.value,
        'lastname': getLastName.value,
        'gender': getGender.value,
        'Phone': getPhone.value,
        'address':getAddress.value,
        'email': getEmail.value,
        'isLogged':"false",
        'localtask':[],
    };
    if(localStorage.getItem(getUserName.value)!=null){
        alert("Username already exists. Please try with a different Username!");
        return false;
    }else{
        localStorage.setItem(getUserName.value,JSON.stringify(obj));
        return true;
    }
}



//Validations Start
const form=document.getElementById("register-form");
const firstname=document.getElementById("firstname");
const lastname=document.getElementById("lastname");
const gender=document.getElementById("gender");
const Phone=document.getElementById("Phone");
const username=document.getElementById("username");
const email=document.getElementById("email");
const pwd=document.getElementById("pw");
const cnfpwd=document.getElementById("cnfpw");


form.addEventListener('submit',()=>{
    event.preventDefault();
    if(validate()){
        if(store()){
            event.returnValue = true;
            alert("Registration Successful");
            document.register-form.reset();
        }
        else{
            event.returnValue = false;
        }
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
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const pwdval=pwd.value.trim();
    const cnfpwdval=cnfpwd.value.trim();


    //Validating Username
    if(usernameval===""){
        alert('Username cannot be blank');
        return false;
    }
    if(usernameval.length<=2){
        alert('Minimum length of Userame should be 3');
        return false;
    }
    

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

    //Validating Password
    if(pwdval==="" || pwdval==null || pwdval.length<8){
        alert("Minimum length of password should be 8");
        return false;
    }


    if(cnfpwdval!=pwdval){
        alert("Password doesn't Match! Check Again");
        return false;
    }
    return true;
}


//Validations End
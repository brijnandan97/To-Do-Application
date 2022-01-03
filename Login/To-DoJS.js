


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

function EditButton(){
    window.location.href="Edit.html";
}

function logout(){
    getUserVal.isLogged="false";
    localStorage.setItem(getUserName,JSON.stringify(getUserVal));
    alert("You have successfully Logged out");
    window.location.href='Login.html';
    
}


//To-Do JS
showtask();
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");
let datetaskinput=document.getElementById("datetaskinput");
let remindertaskinput=document.getElementById("remindertaskinput");
let checkboxes = document.getElementsByName("category");

addtaskbtn.addEventListener("click", function(){
    addtaskinputval = addtaskinput.value;
    datetaskinputval=datetaskinput.value;
    remindertaskinputval=remindertaskinput.value;
    if(addtaskinputval.trim()!=0 && datetaskinputval.trim()!=0 && remindertaskinputval.trim()!=0 && remindertaskinputval<=datetaskinputval){
        let arr=[];
        let count=0;
        for(let i = 0; i < checkboxes.length; i++)  
        {  
            if(checkboxes[i].checked==true){
                arr.push(checkboxes[i].value);
                count++;
            }  
                  
        }
        if(count==0){
            alert("Please select any category");
        }
        else{ 
            getUserVal.localtask.push({'task_name':addtaskinputval,'due_date':datetaskinputval,'reminder_date':remindertaskinputval,'categories':arr.toString() ,'completeStatus':false});
            
            localStorage.setItem(getUserName,JSON.stringify(getUserVal));

            addtaskinput.value = '';
            datetaskinput.value='';
            remindertaskinput.value='';
            for(let i = 0; i < checkboxes.length; i++)  {  
                checkboxes[i].checked=false;    
            }
        }
    }
    else if(addtaskinputval.trim()!=0 && datetaskinputval.trim()!=0 && remindertaskinputval.trim()!=0 && remindertaskinputval>datetaskinputval){
        alert("Reminder Date should be less than Due Date");
    }
    else if(addtaskinputval.trim()!=0 && datetaskinputval.trim()==0 && remindertaskinputval.trim()!=0){
        alert("Please select Due Date of the task!");
    }
    else if(addtaskinputval.trim()!=0 && datetaskinputval.trim()!=0 && remindertaskinputval.trim()==0){
        alert("Please enter the Reminder Date!");
    }
    else if(addtaskinputval.trim()==0 && datetaskinputval.trim()!=0 && remindertaskinputval.trim()!=0){
        alert("Please enter the Task name!");
    }
    else{
        alert("Please enter Task name, Due Date and Reminder Date!");
    }
    showtask();
})

// showtask
function showtask(){
    
    
    if(getUserVal.localtask == null){
        taskObj = [];
    }
    else{
        taskObj = getUserVal.localtask;
    }
    
    let html =`<tr>
                <td>Index</td>
                <td>Task Name</td>
                <td>Due Date</td>
                <td>Reminder Date</td>
                <td>Category</td>
            </tr>`;
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>
                                 <td>${item.due_date}</td>
                                 <td>${item.reminder_date}</td>
                                 <td>${item.categories}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>
                                 <td>${item.due_date}</td>
                                 <td>${item.reminder_date}</td>
                                 <td>${item.categories}</td>`;
        }
        html += `<tr>
                    <th >${index+1}</th>
                    ${taskCompleteValue}
                    <td align="right"><button type="button" onclick="edittask(${index})" >Edit</button></td>
                    <td align="right"><button type="button" class="text-success" id=${index}>Complete</button></td>
                    <td align="right"><button type="button" onclick="deleteitem(${index})" >Delete</button></td>
                </tr>`;
    });
    addedtasklist.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    let datetaskinput=document.getElementById("datetaskinput");
    let remindertaskinput=document.getElementById("remindertaskinput");
    let checkboxes = document.getElementsByName("category");
    saveindex.value = index;
    
    let taskObj = getUserVal.localtask; 
    
    addtaskinput.value = taskObj[index]['task_name'];
    datetaskinput.value=taskObj[index]['due_date'];
    remindertaskinput.value=taskObj[index]['reminder_date'];

    let arr=(taskObj[index]['categories']).split(",");
    for(let i = 0; i < checkboxes.length; i++)  
    {  
        if(arr.includes(checkboxes[i].value)){
            checkboxes[i].checked=true;
        }else{
            checkboxes[i].checked=false;
        }  
            
    } 
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="inline";
}

// savetask
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function(){
    let addtaskbtn = document.getElementById("addtaskbtn");
    let taskObj = getUserVal.localtask; 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in taskObj[saveindex]) {
        if(keys == 'task_name'){
            taskObj[saveindex].task_name = addtaskinput.value;
        }
        if(keys == 'due_date'){
            taskObj[saveindex].due_date = datetaskinput.value;
        }
        if(keys == 'reminder_date'){
            taskObj[saveindex].reminder_date = remindertaskinput.value;
        }
        if(keys == 'categories'){
            let arr=[];
            //console.log(checkboxes.length);
            for(let i = 0; i < checkboxes.length; i++)  
            {  
                if(checkboxes[i].checked==true){
                    arr.push(checkboxes[i].value);
                }  
                    
            } 
            taskObj[saveindex].categories = arr.toString();
        }
    }
      
    getUserVal.localtask= taskObj; 
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="inline";
    localStorage.setItem(getUserName,JSON.stringify(getUserVal));
    addtaskinput.value='';
    datetaskinput.value='';
    remindertaskinput.value='';
    for(let i = 0; i < checkboxes.length; i++)  {  
        checkboxes[i].checked=false;    
    }
    showtask();
})
// deleteitem
function deleteitem(index){
    let taskObj = getUserVal.localtask;
    if(confirm("Are you sure you want to delete this item:")){ 
        taskObj.splice(index, 1);
        localStorage.setItem(getUserName,JSON.stringify(getUserVal));
        addtaskinput.value = '';
        datetaskinput.value='';
        remindertaskinput.value='';
        for(let i = 0; i < checkboxes.length; i++)  {  
            checkboxes[i].checked=false;    
        }
        showtask();
    }
}

//completetask
let addedtasklist = document.getElementById("addedtasklist");
    addedtasklist.addEventListener("click", function(e){
        let taskObj = getUserVal.localtask;
        
        let mytarget = e.target;
        let mytargetid = mytarget.getAttribute("id");
            for (keys in taskObj[mytargetid]) {
                if(keys == 'completeStatus' && taskObj[mytargetid][keys]==true){
                    taskObj[mytargetid].completeStatus = false;
                  
                }else if(keys == 'completeStatus' && taskObj[mytargetid][keys]==false){
                    taskObj[mytargetid].completeStatus = true;
                    
                }
              }
        getUserVal.localtask= taskObj; 
        localStorage.setItem(getUserName,JSON.stringify(getUserVal));
        showtask();
    })

// deleteall
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    let savetaskbtn = document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addtaskbtn");
    if(confirm("Are you sure you want to delete all the items:")){
        getUserVal.localtask=[];
        
        savetaskbtn.style.display="none";
        addtaskbtn.style.display="inline";
        localStorage.setItem(getUserName,JSON.stringify(getUserVal));
        for(let i = 0; i < checkboxes.length; i++)  {  
            checkboxes[i].checked=false;    
        }
    }
        showtask();
        addtaskinput.value = '';
        datetaskinput.value='';
        remindertaskinput.value='';
        
    

})


// serachlist
let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function(){
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let searchedtext = item.getElementsByTagName("td")[0].innerText;
        let searchedtextcategory = item.getElementsByTagName("td")[3].innerText;
        let searchtextboxval = searchtextbox.value;
        let re = new RegExp(searchtextboxval, 'gi');
        if(searchedtext.match(re) || searchedtextcategory.match(re)){
            item.style.display="table-row";
        }
        else{
            item.style.display="none";
        }
    })
})

//Sortlist
let sorttaskbtn = document.getElementById("sorttaskbtn");
sorttaskbtn.addEventListener("click",function(){
    
    let taskObj = getUserVal.localtask;
    let temp="";
    if(getUserVal.localtask.length>0){
        temp=taskObj.sort((a,b)=>{
            return new Date(a.due_date)-new Date(b.due_date);
        });
    }
    getUserVal.localtask= taskObj;
    localStorage.setItem(getUserName,JSON.stringify(getUserVal));
    showtask();

})
















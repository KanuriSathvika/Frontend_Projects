const create=document.getElementById("create");

create.addEventListener("mousedown",e=>{
    create.style.backgroundColor="rgb(13, 45, 59)";

})

create.addEventListener("mouseup",e=>{
    create.style.backgroundColor="rgb(25, 86, 115)";

})

create.addEventListener("click",c=>{
    const  pass=document.getElementById("new-pass").value;
    const confirm=document.getElementById("confirm-pass").value;
    const mail=document.getElementById("mail").value;


    var mail_info=document.getElementById("mail_info");
    var word=document.getElementById("pass-info");
    var con_info=document.getElementById("con-pass-info");

    if(mail==""){
        

        mail_info.innerHTML="* Enter valid Email";
        mail_info.style.color="red";
    }
    
    if(pass=="" ){
        
        word.innerHTML="* Enter valid New password";
        word.style.color="red";
    }

    if(pass!=confirm){
        
    
        con_info.innerHTML="* Enter the same password in both";
        con_info.style.color="red";
    }

    if(pass!="" && confirm !="" &&  pass==confirm && mail!=""){

        
        const info=document.getElementById("info");
        
        info.innerHTML="Sucessfully created";
        info.style.color="green";
        info.style.fontSize="15px";

        mail_info.innerHTML="";
        word.innerHTML="";
        con_info.innerHTML="";
        
    }

    

    
})


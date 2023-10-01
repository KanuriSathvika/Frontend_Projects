
const butt=document.getElementById("log");

const area=document.getElementsByClassName("container");

var x=0;


butt.addEventListener("mouseenter",on=>{
    var name=document.getElementById("name").value;
    var pass=document.getElementById("password").value;
    

    if(name==="" || pass===""){
        butt.style.transition="0.5s";
        
        if(x==0){
            butt.style.transform=" translate(120%) ";
            x=1;
        }
        else{
            butt.style.transform="translate(-120%)";
            x=0;
        }
    }

    if(name!="" && pass===""){
        const p=document.querySelector("#password-p");
        p.style.color="rgba(255, 0, 0, 0.756)";
        p.style.fontSize="15px";
        p.style.transform="translate(-40px)";
        p.innerHTML="* Please enter the Password";   
    }
    if(name=="" && pass!=""){
        const p=document.querySelector("#user-p");
        p.style.color="rgba(255, 0, 0, 0.756)";
        p.style.fontSize="15px";
        p.style.transform="translate(-40px)";
        p.innerHTML="* Please enter the Username";

    }
    if(name=="" && pass===""){
        const u=document.querySelector("#user-p");
        u.style.color="rgba(255, 0, 0, 0.756)";
        u.style.fontSize="15px";
        u.style.transform="translate(-40px)";
        u.innerHTML="* Please enter the Username";

        const p=document.querySelector("#password-p");
        p.style.color="rgba(255, 0, 0, 0.756)";
        p.style.fontSize="15px";
        p.style.transform="translate(-40px)";
        p.innerHTML="* Please enter the Password";  
    }
});

function add(){
         window.location.href="./sucess.html";
}
butt.addEventListener("click",add);





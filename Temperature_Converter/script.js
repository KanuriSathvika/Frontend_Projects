
let inputs=document.querySelectorAll(".container input");

const c=document.querySelector("#Celsius");
const f=document.querySelector("#Fahrenheit");
const k=document.querySelector("#Kelvin");

// Loop for all inputs

inputs.forEach(input => {
    
    
    input.addEventListener("input",e=>{

        // The event. target property returns the HTML element that triggered an event. 
        // this unit gets the id of target element
        const unit=e.target.id;

        const val= parseFloat(e.target.value);

        if(unit=="Celsius"){

            f.value=  parseFloat(val*(9/5)+32).toFixed(4)*1;

            k.value=parseFloat(val+273.15).toFixed(4)*1;
        }

        else if(unit=="Fahrenheit"){
            c.value=parseFloat((val-32)*(5/9)).toFixed(4)*1;

            k.value=parseFloat((val-32)*(5/9)+273.15).toFixed(4)*1;
        }

        else if(unit=="Kelvin"){
            c.value=parseFloat(val-273.15).toFixed(4)*1;
            f.value=parseFloat((val-273.15)*(9/5)+32).toFixed(4)*1;
        }
    })
});
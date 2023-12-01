let slider=document.querySelector('.sec1-slider .sec1-list');
let items=document.querySelectorAll('.sec1-slider .sec1-list .sec1-slide');
let dots=document.querySelectorAll('.btn');
let prev=document.getElementById('prev');
let next=document.getElementById('next');

let active=0;
let lengthItems=items.length-1;

next.onclick= function(){
    if(active+1> lengthItems){
        active=0;
    }
    else{
        active=active+1;
    }
    // reloadSlider();
    
    reloadSlider();

}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

let refreshInterval = setInterval(()=> {next.click()}, 60000);

function reloadSlider(){
    // let checkLeft= items[active].offsetLeft;
    // slider.style.left= -checkLeft+'px';
    slider.style.left = -items[active].offsetLeft + 'px';

    let lastActive= document.querySelector('.btn.active');
    lastActive.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 60000);
}

// dots.forEach((li, key) => {
//     li.addEventListener('click', ()=>{
//          active = key;
//          reloadSlider();
//     })
// })
// window.onresize = function(event) {
//     reloadSlider();
// };
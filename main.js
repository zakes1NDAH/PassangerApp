let countEL = document.getElementById('count-el');
let saveEL = document.getElementById('seva-el');
var enter = document.getElementById('entries');
var count = 0;
var entry=count;

function increment(){
    entry++;
    countEL.innerHTML = entry;

}

function save(){
    countEL.innerHTML = entry*0;
    IntersectionObserver.innerHTML = entry;
}

function reset(){
    window.location.reload();
}
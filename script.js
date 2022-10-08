function add(){
    let x = document.getElementById("f1").value;
    let y = document.getElementById("f2").value;
    let a = parseFloat(x)+parseFloat(y);
    document.getElementById("div1").textContent=(a);
}
function sub(){
    let x = document.getElementById("f1").value;
    let y = document.getElementById("f2").value;
    let a = parseFloat(x)-parseFloat(y);
    document.getElementById("div1").textContent=(a);
}
function mul(){
    let x = document.getElementById("f1").value;
    let y = document.getElementById("f2").value;
    let a = parseFloat(x)*parseFloat(y);
    document.getElementById("div1").textContent=(a);
}
function div(){
    let x = document.getElementById("f1").value;
    let y = document.getElementById("f2").value;
    let a = parseFloat(x)/parseFloat(y);
    document.getElementById("div1").textContent=(a);
}
function power(){
    let x = document.getElementById("f1").value;
    let y = document.getElementById("f2").value;
    let a = parseFloat(x)**parseFloat(y);
    document.getElementById("div1").textContent=(a);
}
function mod(){
    let x = document.getElementById("f1").value;
    let y = document.getElementById("f2").value;
    let a = parseFloat(x)%parseFloat(y);
    document.getElementById("div1").textContent=(a);
}
function openurl(){
    window.open("https://github.com/Kkaleesha/","_blank");
}
function abc(){
    location.reload()
}
var next = document.getElementById("next");

next.addEventListener("click", () => {
    document.getElementById("tutorial").style.opacity = 0;
    setTimeout(() => {document.getElementById("tutorial").remove()}, 250);
});



var gradient = document.getElementById("gradient");
var div1 = document.getElementById("color1");
var div2 = document.getElementById("color2");
var text1 = document.getElementById("colorText1");
var text2 = document.getElementById("colorText2");
var copyText = document.getElementById("copyText");

var copy = document.getElementById("text");

var yes = document.getElementById("yes");
var kinda = document.getElementById("kinda");
var no = document.getElementById("no");



function randomColors() {
    let color1Nums = chColor1();
    let color1 = `rgb(${color1Nums[0]}, ${color1Nums[1]}, ${color1Nums[2]})`;
    let color2Nums = chColor2();
    let color2 = `rgb(${color2Nums[0]}, ${color2Nums[1]}, ${color2Nums[2]})`;
    gradient.style.backgroundImage = "linear-gradient(90deg, " + color1 + ", " + color2 + ")";
    div1.style.backgroundColor = color1;
    div2.style.backgroundColor = color2;
    text1.style.color = color2;
    text2.style.color = color1;
    text1.innerText = `#${color1Nums[0].toString(16)}${color1Nums[1].toString(16)}${color1Nums[2].toString(16)}`;
    text2.innerText = `#${color2Nums[0].toString(16)}${color2Nums[1].toString(16)}${color2Nums[2].toString(16)}`;
    copyText.value = `${text1.innerText},${text2.innerText}`
}

function chColor1() {
    var num1 = Math.floor(Math.random() * (190 - 20) + 20);
    var num2 = Math.floor(Math.random() * (190 - 20) + 20);
    var num3 = Math.floor(Math.random() * (190 - 20) + 20);
    return [num1, num2, num3];
}

function chColor2() {
    var num1 = Math.floor(Math.random() * (190 - 20) + 20);
    var num2 = Math.floor(Math.random() * (190 - 20) + 20);
    var num3 = Math.floor(Math.random() * (190 - 20) + 20);
    return [num1, num2, num3];
}



yes.addEventListener("click", randomColors);
kinda.addEventListener("click", randomColors);
no.addEventListener("click", randomColors);



copy.addEventListener("mouseover", () => {
    document.getElementById("copy").style.opacity = 1;
    document.getElementsByTagName("svg")[0].style.opacity = 1;
});

copy.addEventListener("mouseout", () => {
    document.getElementById("copy").style.opacity = 0;
    document.getElementsByTagName("svg")[0].style.opacity = 0;
});

copy.addEventListener("click", () => {
    copyText.select();
    copyText.setSelectionRange(0,9999);
    document.execCommand("copy");

    document.getElementById("copy").style.opacity = 1;
    document.getElementsByTagName("svg")[0].style.opacity = 1;
    document.getElementById("copy").innerHTML = "Copied!";
    setTimeout(() => {
        document.getElementById("copy").style.opacity = 0;
        document.getElementsByTagName("svg")[0].style.opacity = 0;
    }, 750);
    setTimeout(() => {
        document.getElementById("copy").innerHTML = "Copy?";
    }, 1000);
});
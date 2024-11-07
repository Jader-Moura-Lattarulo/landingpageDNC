var leftArrow = window.document.getElementById("left-arrow");
var rightArrow = window.document.getElementById("right-arrow");

var leonardo = window.document.getElementById("leonardo");
var samantha = window.document.getElementById("samantha");
var bruna = window.document.getElementById("bruna");

function scrollRight(){
    samantha.style = "display:none"
    bruna.style = "display:flex"
    leonardo.style = "display:flex"
    leftArrow.style = "display:flex"
    rightArrow.style = "display:none"

    leftArrow.onclick = scrollLeft;
}

function scrollLeft(){
    samantha.style = "display:flex"
    bruna.style = "display:flex"
    leonardo.style = "display:none"
    leftArrow.style = "display:none"
    rightArrow.style = "display:flex"
}

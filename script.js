
    var c = document.getElementById("c");
    var r = document.getElementById("r");
    var y = document.getElementById("y");
    var p = document.getElementById("p");
    var t = document.getElementById("t");
    var i = document.getElementById("i");
    var d = document.getElementById("d");
    var word = "3";
    var count =0;
    console.log("here prompt is a help for you")
function myfuncc() {
    word += "c"
    count++;
    console.log(word);
}
function myfuncr() {
    word += "r"
    count++;
    console.log(word);
}
function myfuncy() {
    word += "y"
    count++;
    console.log(word);
}
function myfuncp() {
    word += "p"
    count++;
    console.log(word);
}
function myfunct() {
    word += "t"
    count++;
    console.log(word);
}
function myfunci() {
    word += "i"
    count++;
    console.log(word);
}

function myfuncd() {
    word += "d"
    count++;
    console.log(word);
}
function check() {
    
    if(word == "3cryptid")
    {
        window.location.href = "./pages/page2.html";
    }
}
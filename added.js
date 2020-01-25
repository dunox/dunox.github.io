// var lionIn = document.getElementById("lion");
// lionIn.value = "lion";
var check = document.getElementById("check-name__lion");
check.onclick = second;
var lionCage = document.getElementById("lionCage");

function second(){
    if( animals[1].name == lionIn.value.toLowerCase()){
        lionIn.classList.add("green");
        lionCage.className = "saved";
        lionIn.classList.remove("red");
        animals[1].sound.play();
    }else if(lionIn.value == ""){
        lionIn.classList.remove("red", "green");
    }else {
        lionIn.classList.add("red");
    }
};
// var bearIn = document.getElementById("bear");
// bearIn.value = "bear";
var checkBear = document.getElementById("check-name__bear");
checkBear.onclick = third;
var bearCage = document.getElementById("bearCage");

function third(){
    if( animals[2].name == bearIn.value.toLowerCase()){
        bearIn.classList.add("green");
        bearCage.className = "saved";
        bearIn.classList.remove("red");
        animals[2].sound.play();
    }else if(inpubearIn.value == ""){
        bearIn.classList.remove("red", "green");
    }else {
        bearIn.classList.add("red");
    }
};
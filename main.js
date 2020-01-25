// var elephantIn = document.getElementById("elephant");
// elephantIn.value = "elephant";
var typed = document.getElementById("check-name");
var name = document.getElementById('lion');
var cage = document.getElementById("cage");
var audio = new Audio('audio/lion.mp3');
typed.onclick = first;
var inputs = [document.getElementById('lion').value , document.getElementById('giraffe').value, document.getElementById('elephant').value, document.getElementById('monkey').value ];
var animals = [ lion = {name: "lion", sound: new Audio("audio/lion.mp3")}, giraffe = {name: "giraffe" }, elephant = {name: "elephant", sound: new Audio("audio/elephant.mp3")}, monkey = {name: "monkey"}, zebra = {name: "zebra"}, hippo = {name: "hippo"}, rhino = {name: "a"}, rhino = {name: "rhino"}];
function first(){
    for( var i = 0;i < animals.length; i++ ) {
        if( animals[0].name == inputs[0] ){
            this.classList.add("green");
            cage.classList.add("saved");
            this.classList.remove("red");
            audio.play();
        }else if(inputs[i] == ""){
            this.classList.remove("red", "green");
        }else {
            this.classList.add("red");
        }
        console.log(inputs);
    };
};
// var inp = document.getElementsByClassName("animal-type__name");
//     but = document.getElementsByTagName("button");
//     animal = document.getElementsByClassName("animal");
// for(i = 0; i < animals.length; i++){
//     if(animal[i].value == inp.value.toLowerCase()){
//         inp.classList.add("green");
//         cage.classList.add("saved");
//         inp.classList.remove("red");
//         audio.play();
//     }
// }


console.log(name.value);

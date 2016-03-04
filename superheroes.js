
var superheroes = [{
  Name: "Incredible Hulk",
  Color: "Green",
  Superpower: "Strength"
}, {
  Name: "Superman",
  Color: "Blue",
  Superpower: "Flying"
}, {
  Name: "Hawkeye",
  Color: "Purple",
  Superpower: "Archery"
}];

function toggleList(){
  var superheroes
}


for(var i in superheroes){
 document.getElementById("Superheroes").innerHTML += "<p>" + superheroes[i].Name + "</p>";
}
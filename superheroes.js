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

showList();
function showList(){
  var headings = Object.keys(superheroes[0]);
  for(var i in headings){
    document.getElementById("headings").innerHTML+='<p>' + headings[i] + '</p>';
  }
}

function toggleList(){
  var headings = document.getElementById("headings");
  if (headings.style.display == "none"){
    headings.style.display = "";
  } else headings.style.display = "none";
};
showTable();
function showTable(){
  var table = '';
  for(var i = 0; i < 3; i++){
    table += "<tr><td>" + superheroes[i].Name + "</td><td>" + superheroes[i].Color + "</td><td>" + superheroes[i].Superpower + "</td></tr>";
    document.getElementById("Table").innerHTML= table;
  }
};
function toggleTable(){
  var table = document.getElementById("Table");
  if(table.style.display == "none"){
    table.style.display = "";
  }else table.style.display = "none";
};



showNames();

function showNames() {
  for (var i in superheroes) {
    document.getElementById("superheroes").innerHTML += '<p>' + superheroes[i].Name + '</p>';
  }
}

function toggleNames() {
  var superheroes = document.getElementById("superheroes");
  if (superheroes.style.display == "none") {
    superheroes.style.display = "";
  } else superheroes.style.display = "none";
};
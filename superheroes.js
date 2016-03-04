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
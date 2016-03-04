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
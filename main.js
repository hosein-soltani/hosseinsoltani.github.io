var personel = {name:"Hossein", family:"soltani"}
var personels = [];
function login(){
  if (document.getElementById('name').value.length == 0){
    document.getElementById("error").style.display ="block";
  }
  else {
    document.getElementById("error").style.display ="none";
    personel.name = document.getElementById('name').value;
    personel.family = document.getElementById('family').value;
    personels.push({name: document.getElementById('name').value, family: document.getElementById("family").value});
    document.getElementById('name').value="";
    document.getElementById('family').value="";
    for (x in personels){
    alert(personels[x].name + " " + personels[x].family)
    }
  }
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

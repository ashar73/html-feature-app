document.getElementById("header").innerHTML="this header is modified by javascript"
document.getElementById("para").innerHTML="this para is comminf from js"
function editDOMControl(){
    document.getElementById("header").style.backgroundColor = "red";
    document.getElementById("header").style.color= "white";//change text color to white
    document.getElementById("firstname").value="ashar" //so it will put the value ashar into textbox
}
function login(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){
window.location="index.html";
}
else{
document.getElementById("msg").innerHTML="Invalid Login";
}

}


function generateReceipt(){

var vehicle=document.getElementById("vehicle").value;

var violation=document.getElementById("violation");
var fine=violation.value;
var violationText=violation.options[violation.selectedIndex].text;

var status=document.getElementById("status").value;

var date=new Date().toLocaleString();

if(vehicle=="" || fine=="" || status==""){
document.getElementById("receipt").innerHTML="Please fill all details";
}
else{

document.getElementById("receipt").innerHTML=

"<h3>Traffic Fine Receipt</h3>"+
"<p><b>Vehicle:</b> "+vehicle+"</p>"+
"<p><b>Violation:</b> "+violationText+"</p>"+
"<p><b>Fine:</b> ₹"+fine+"</p>"+
"<p><b>Status:</b> "+status+"</p>"+
"<p><b>Date:</b> "+date+"</p>";

}

}
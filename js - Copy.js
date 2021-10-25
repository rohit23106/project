alert("Welcome to MyBooks!.....Hope you have a wonderful experience");

$("header").click(function() {
	alert("Welcome to mybooks!");
});
$("nav").click(function() {
	alert("Please fill up the details to contact with us");
});
$("footer").click(function() {
	alert("Follow us on social media by clicking below social icons");
});
document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 101);
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});

var d = new Date();
document.getElementById("demo1").innerHTML = d;
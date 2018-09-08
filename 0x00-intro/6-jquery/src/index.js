const $ = require('jquery');

$(document).ready(function() {
  $("body").append("<h1>Holberton School</h1>");
  setInterval(function() {
    if ($("h1").text() == "HBTN") {
        $("h1").text("Holberton School");
    } else {
        $("h1").text("HBTN");
    }
   }, 2000);
});

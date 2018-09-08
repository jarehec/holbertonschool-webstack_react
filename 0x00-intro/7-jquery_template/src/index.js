const $ = require('jquery');

$(document).ready(function() {
  $("h1").text("Holberton School");
  setInterval(function() {
    if ($("h1").text() == "HBTN") {
        $("h1").text("Holberton School");
    } else {
        $("h1").text("HBTN");
    }
   }, 2000);
});

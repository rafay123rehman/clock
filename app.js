var hrs = document.getElementById("hrs")
var mint = document.getElementById("mint")
var sec = document.getElementById("sec")
var am = document.getElementById("AM")


setInterval (function () {
    var currentdate = new Date()
    
  
    hrs.innerText= currentdate.getHours()
    mint.innerText = currentdate.getMinutes()
    sec.innerText= currentdate.getSeconds()

} ,1000 );
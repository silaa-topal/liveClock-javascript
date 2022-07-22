let name = prompt("Please enter your name: ")
document.body.style.backgroundColor = "violet"
let title = document.querySelector("#title")
title.classList.toggle("text-primary")
console.log(title.classList)

let hi = document.querySelector("#hi")
hi.classList.add("text-primary")
hi.innerHTML =` ${hi.innerHTML}Merhaba ${name} Hoşgeldin!`


function date(){
    var time = new Date().toLocaleString('tr-TR')
    document.querySelector("#time").innerHTML = time
}

var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let day = document.querySelector("#day")
day.innerHTML = days[new Date().getDay()]
document.querySelector("#time").classList.toggle("text-primary")
setInterval(date, 1000)

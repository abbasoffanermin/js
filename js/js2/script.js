let number = "22 avqust 2022"
let cavab = prompt("Bu günün tarixi")
let show = document.getElementById("ekran")
show.style.color = "red"
number == cavab ? show.innerHTML = number : show.innerHTML = "error"
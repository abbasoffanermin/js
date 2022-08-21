let reqem = "22 avqust 2022"
 let cvb = prompt("Bu günün tarixi")
 let show = document.getElementById("ekran")
if( cvb == reqem){ 
    show.innerHTML = reqem
}else{
    show.innerHTML = "yanlış"
  }

  show.style.color = "red"
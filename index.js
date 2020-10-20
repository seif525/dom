
var plusbutton = document.querySelectorAll(".aug");
  var totalprix = document.querySelector(".m");
      
Array.from(plusbutton).map((el) => {
    el.addEventListener("click" ,() => {
      el.nextElementSibling.innerHTML = parseInt( el.nextElementSibling.innerHTML) + 1 ;
     
      var price = el.parentElement.nextElementSibling.innerHTML.replace("$","")
      console.log (price)
      totalprix.innerHTML = parseInt(totalprix.innerHTML) + parseInt(price) + $
    })   ; 
})
var moinsbutton = document.querySelectorAll(".min");
Array.from( moinsbutton).map((el) => {
    el.addEventListener("click" ,() => {    
        if( el.previouseElementSibling.innerHTML > 0) {
            el.previouseElementSibling.innerHTML = parseInt( el.previouseElementSibling.innerHTML) - 1 ;}
    })   ; 
        })
       

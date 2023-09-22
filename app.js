var ironManImage = document.getElementById("iron-man");
var hulk = document.getElementById("hulk");
var num = 1000;
var num2 = 0;
var position = true ; 
function iron() {
    // // // // console.log("num------->",num)
   // // // // console.log("num2 ---->", num2)
   // //  // //console.log("num3---->", num3)
//    console.log(event.keyCode)
   var num3 = num - 240 ;
    if (num2 === num3){
        position = false ;
    }
    else{
        position = true
    }
  
    if (event.keyCode === 39 && num < 1020  ) {
        num = num + 20;
        var text = num.toString();
        
        ironManImage.style.left = text + "px";
        console.log(text + "px")
        setTimeout(function () {
            ironManImage.src = "public/iron-walk.gif"
            ironManImage.style.width = "280px";
            ironManImage.style.height = "auto"
        }, 100)
        setTimeout(function () {
            ironManImage.src = "public/iron-man-jaga.gif"
        }, 500)

    }
    if (event.keyCode === 37 && num > 20 && position ) {
        num = num - 20;
        var text = num.toString();
        ironManImage.style.left = text + "px";
        // console.log(text + "px")
        setTimeout(function () {
            ironManImage.src = "public/iron-walk.gif"
            ironManImage.style.width = "280px";
            ironManImage.style.height = "auto"
        }, 100)
        setTimeout(function () {
            ironManImage.src = "public/iron-man-jaga.gif"
        }, 500)
    }
    else if (event.keyCode === 80) {
        ironManImage.src = "public/iron-punch.gif"
        ironManImage.style.width = "410px";
          ironManImage.style.height = "auto";
        setTimeout(function () {
            ironManImage.src = "public/iron-man-jaga.gif" 
            ironManImage.style.width = "280px";
          ironManImage.style.height = "auto";
          
        }, 1800)
    }
    else if (event.keyCode === 38) {
        ironManImage.src = "public/iron-fly.gif"
        ironManImage.style.width = "300px";
        ironManImage.style.height = "auto";
        setTimeout(function () {
            ironManImage.src = "public/iron-man-jaga.gif"
            ironManImage.style.width = "280px";
            ironManImage.style.height = "auto"
        }, 1500)

    }

    // =======================================================================================
    // ========================================== HULK =======================================
    // =======================================================================================
    if (event.keyCode === 68 && num2 < 1050 && position ) {
        num2 = num2 + 20;
        var text = num2.toString();
        hulk.style.left = text + "px";
    
        setTimeout(function () {
            hulk.src = "public/hulk-aga.gif"
            hulk.style.height = "auto"
            hulk.style.width = "320px"
        }, 200)

        setTimeout(function () {
            hulk.src = "public/hulk-jaga.gif"
            hulk.style.height = "auto"
            hulk.style.width = "320px"

        }, 300)
    }
    else if (event.keyCode === 65 && num2 > 20 ) {
        setTimeout(function(){
            num2 = num2 - 20;
        var text = num2.toString();
        hulk.style.left = text + "px";
        // console.log(text + "px")
        hulk.src = "public/hulk-picha.gif"
        hulk.style.height = "auto"
        hulk.style.width = "320px"
        } , 100 )
        setTimeout(function () {
            hulk.src = "public/hulk-jaga.gif"
            hulk.style.height = "auto"
            hulk.style.width = "320px"
        }, 500)
    }
    else if (event.keyCode === 72) {
        hulk.src = "public/hulk-punch.gif";
        hulk.style.height = "auto"
        hulk.style.width = "650px"
        setTimeout(function () {
            hulk.src = "public/hulk-jaga.gif"
            hulk.style.height = "auto"
            hulk.style.width = "320px"
        }, 1000)

    }
   else if(event.keyCode === 70 ){
   hulk.src = "public/hulk-hasa.gif"
   setTimeout(function(){
    hulk.src = "public/hulk-jaga.gif"
    hulk.style.height = "auto"
    hulk.style.width = "320px"
   },1000)
   }
   else if(event.keyCode === 71 ){
    hulk.src = "public/hulk-mara.gif"
    hulk.style.height = "auto"
     hulk.style.width = "250px"
    setTimeout(function(){
     hulk.src = "public/hulk-jaga.gif"
     hulk.style.height = "auto"
     hulk.style.width = "320px"
    },1000)
    }
}

window.onkeyup = iron;
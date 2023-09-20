var ironManImage = document.getElementById("iron-man");
var hulk = document.getElementById("hulk");

var num = 20;
function iron() {
    console.log("event", event.keyCode)

    if (event.keyCode === 37) {
        num = num + 20;
        var text = num.toString();
        ironManImage.style.right = text + "px";
        console.log(text + "px")
        setTimeout(function () {
            ironManImage.src = "public/iron-walk.gif"
        }
            , 100)
        setTimeout(function () {
            ironManImage.src = "public/iron-man-jaga.gif"
        }
            , 500)

    }
    if (event.keyCode === 39) {
        num = num - 20;
        var text = num.toString();
        ironManImage.style.right = text + "px";
        console.log(text + "px")
        setTimeout(function () {
            ironManImage.src = "public/iron-walk.gif"
        }
            , 100)
        setTimeout(function () {
            ironManImage.src = "public/iron-man-jaga.gif"
        }
            , 500)


    }
    else if (event.keyCode === 80) {
        ironManImage.src = "public/iron-punch.gif"
        setTimeout(function () {
            ironManImage.src = "public/iron-man-jaga.gif"
        }
            , 1100)
    }
    else if (event.keyCode === 38) {
        ironManImage.src = "public/iron-fly.gif"
        setTimeout(function () {
            ironManImage.src = "public/iron-man-jaga.gif"
        }
            , 1100)

    }

    if (event.keyCode === 37) {
        num = num + 20;
        var text = num.toString();
        ironManImage.style.right = text + "px";
        console.log(text + "px")  
        setTimeout(function () {
            ironManImage.src = "public/iron-walk.gif"
        }
            , 100)
        setTimeout(function () {
            ironManImage.src = "public/iron-man-jaga.gif"
        }
            , 500)

    }
    // ===========================================hulk==========================
    if (event.keyCode === 68) {
        num = num - 20;
        var text = num.toString();
        hulk.style.right = text + "px";
        console.log(text + "px")
        setTimeout(function () {
            hulk.src = "public/hulk-aga.gif"
        }
            , 100)
        setTimeout(function () {
            
            hulk.src = "public/hulk-jaga.gif"
        }
            , 500)
    }
    else if (event.keyCode === 65) {
        setTimeout(function(){
            num = num + 20;
        var text = num.toString();
        hulk.style.right = text + "px";
        console.log(text + "px")
        hulk.src = "public/hulk-picha.gif"
        })
        setTimeout(function () {
            hulk.src = "public/hulk-jaga.gif"
        }
            , 1100)
    }
    else if (event.keyCode === 72) {
        hulk.src = "public/hulk-punch.gif";
        setTimeout(function () {
            hulk.src = "public/hulk-jaga.gif"
        }
            , 1100)

    }

}

window.onkeyup = iron;

var i = 0
var text = "SELAMAT DATANG DI WEBSITE KAMI"

function ketik(){
    if(i < text.length){
        document.getElementById("demo").innerHTML += text.charAt(i)
        i++
    }
    setTimeout(ketik, 70)
}

ketik()
var allproduct = document.querySelectorAll(".btn")
var content = document.querySelector("#content")
var btn1 = document.querySelector("#btn1")
var del = document.querySelector("#del")
var totalprice = 0



allproduct.forEach(function(item){
    item.onclick = function(){
        totalprice += +(item.getAttribute("price"))
        // content.innerHTML += item.textContent + "<br>"
        content.innerHTML += item.getAttribute("product") + "<br>"
        


        if(content.innerHTML != ""){

            btn1.style.display = "block"
            btn1.style.backgroundColor = "blue"
            btn1.style.color = "white"
            btn1.style.width = "100%"
            btn1.style.height = "40px"
            btn1.style.marginTop = "10px"
            btn1.style.borderRadius = "10px"
            




            del.style.display = "block"
            del.style.backgroundColor = "red"
            del.style.color = "white"
            del.style.width = "15%"
            del.style.height = "40px"
            del.style.marginTop = "10px"
            del.style.borderRadius = "10px"




            content.style.backgroundColor = "green"
            content.style.color = "white"
            content.style.width = "100%"
            content.style.textAlign = "center"
            content.style.marginTop = "10px"
            content.style.borderRadius = "10px"

        }
    }
})






btn1.onclick = function(){
    document.getElementById("mony").innerHTML = totalprice
    mony.style.marginTop = "10px"
    mony.style.width = "100%"
    mony.style.textAlign = "center"
}




del.onclick = function(){
    content.innerHTML = " "
    document.getElementById("mony").innerHTML = totalprice = 0
    del.style.display = "none"
    btn1.style.display = "none"

}



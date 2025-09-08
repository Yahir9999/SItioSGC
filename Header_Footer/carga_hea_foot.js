//Cargamos header
fetch("Header_Footer/header.html")
.then(res=>res.text())
.then(data=>{
    document.getElementById("header").innerHTML = data;
});

//Cargamos footer
fetch("Header_Footer/footer.html")
.then(res=>res.text())
.then(data=>{
    document.getElementById("footer").innerHTML = data;
});
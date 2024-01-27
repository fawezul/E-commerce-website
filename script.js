const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const x = document.getElementById("close");

//If the shortcut bar icon is clicked navbar will call the class "active".
if (bar) {
    bar.addEventListener("click", ()  =>{
        nav.classList.add("active");
    })
}

//If x icon is clicked, closes side navbar, removes the class "active".
if (x){
    x.addEventListener("click", ()=>{
        nav.classList.remove("active");
    })
}
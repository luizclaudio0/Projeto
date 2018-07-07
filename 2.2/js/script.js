var btn = document.getElementById("MyBtn");
var modal = document.getElementById("MyModal");

btn.onclick = function() {
	modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

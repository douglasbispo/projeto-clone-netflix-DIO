var buttonMoreInfo = document.getElementById("more-info");
var element = document.getElementById("modal-info");

function showModal() {
    element.classList.add("show-modal");
}

buttonMoreInfo.addEventListener("click", showModal);



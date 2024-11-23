// Cambio de color oscuro-claro

let toggle = document.getElementById("toggle");
let toggle_label = document.getElementById("toggle_label");
toggle.addEventListener("change", (event) => {
    let checked = event.target.checked;
    let main = document.querySelector('main'); 
    main.classList.toggle("dark");
    if (checked == true) {
        toggle_label.innerHTML = '<i class="fa-solid fa-sun"></i>';
        toggle_label.style.color="yellow";       
    } else {
        toggle_label.innerHTML = '<i class="fa-solid fa-moon"></i>';
        toggle_label.style.color="black";   
    }
});

// Cambio de color oscuro-claro

let toggle = document.getElementById("toggle");
let toggle_label = document.getElementById("toggle_label");
toggle.addEventListener("change", (event) => {
    let checked = event.target.checked;
    let main = document.querySelector('main'); 
    main.classList.toggle("dark");
    if (checked == true) {
        toggle_label.innerHTML = '<i class="fa-solid fa-moon"></i>';
        toggle_label.style.color="black";       
    } else {
        toggle_label.innerHTML = '<i class="fa-solid fa-sun"></i>';
        toggle_label.style.color="yellow";   
    }
});


// Animación del h1

let texto = document.querySelector('.titulo'); //Query para traer del html una clase
let contenido = 'A pottery studio dedicated to creativity and community.';
let i = 0;

function animacion(){
    if (i < contenido.length){
        texto.textContent += contenido.charAt(i)
        i++
        setTimeout(animacion, 100);
    }

}

animacion()

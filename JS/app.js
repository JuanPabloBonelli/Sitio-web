// Cambio de color oscuro-claro

let toggle = document.getElementById("toggle");
let toggle_label = document.getElementById("toggle_label");
toggle.addEventListener("change", (event) => {
    let checked = event.target.checked;
    let main = document.querySelector('main');   // Solo se aplica al main
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


// Animación a las cartas
const cards = document.querySelectorAll('.card'); // Llama a las 6 cartas por su clase

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {     // Mouse  enter hace referencia a cuando el cursor pasa por encima de la carta       
    card.style.boxShadow = "6px 6px 6px #635f5f"; // Sombra con el mismo color que el modo oscuro
    card.style.transform = 'scale(1.04)'; // Un aumento del 4%     
  });

  card.addEventListener('mouseleave', () => {  // Mouse leave hace referencia a cuando el cursor no se encuentra más sobre la carta    
    card.style.boxShadow = "none";    // Quita de sombra
    card.style.transform = 'scale(1)'; // Aumento original
  });
});

// Boton para subir
const boton_up = document.getElementById("boton_up")
boton_up.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

window.onscroll = () => {
    if (window.scrollY < 1000) {
        boton_up.classList.remove("botonUpOn")        
    }
    else boton_up.classList.add("botonUpOn")
}

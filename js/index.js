class Libro{
    constructor(id, titulo, autor, precio, categoria, editorial, paginas, encuadernacion, img, descripcion){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.categoria = categoria;
        this.editorial = editorial;
        this.paginas = paginas;
        this.encuadernacion = encuadernacion
        this.img = img;
        this.descripcion = descripcion
    }
}

const libro1 = new Libro(1, "La felicidad", "Gabriel Rolon", 34999, "Psicologia", "Planeta", 392, "Tapa Blanda", "./img/lafelicidad-rolon.jpg", "Este libro parte de la duda, de un cuestionamiento: ¿qué es la felicidad No tengo certezas, pero puedo asegurar que la felicidad no está en las falsas metas que nos propone la cultura contemporánea");
const libro2 = new Libro(2, "El poder del ahora", "Eckhart Tolle", 24999, "Autoayuda", "Debolsillo", 256, "Tapa Blanda", "./img/poderdelahora.jpg", "El poder del ahora es un libro único. Tiene la capacidad de crear una experiencia en los lectores y de cambiar su vida. Hoy ya es considerado una obra maestra. Su autor, Eckhart Tolle, se convirtió en un maestro universal, un gran espíritu con un gran mensaje: se puede alcanzar un estado de iluminación aquí y ahora" );
const libro3 = new Libro(3, "Crimen y Castigo", "Fedor Dostoyevski", 19999, "Ficcion", "Catedra", 704, "Tapa Blanda", "./img/crimenycastigo.jpg", "Una visita de Balzac a San Petersburgo le sugirió al joven alférez ingeniero Fiódor Dostoievski la idea de traducir Eugénie Grandet. La traducción hizo mucho más que sacarle de un apuro económico; despertó su fiebre creativa y su vocación. Entonces, decidió solicitar la excedencia y dedicarse a la literatura. Obra realmente genial, Crimen y castigo es una de las más grandes creaciones de la literatura mundial.");
const libro4 = new Libro(4, "El arte de amar", "Erich Fromm", 24999, "Sociedad y Cultura general", "Booket", 208, "Nuevo", "./img/elartdeamar.jpg", "El arte de amar es una obra con la que Erich Fromm ha ayudado a varias generaciones a reflexionar sobre el amor y a responder a algunas preguntas aparentemente sencillas: ¿qué significa amar? ¿Cómo desprendernos de nosotros mismos para experimentar este sentimiento…? Fromm nos explica que el amor no es solo una relación personal, sino además un rasgo de madurez que se manifiesta en diversas formas: amor erótico, amor fraternal, amor filial, amor a uno mismo");
const libro5 = new Libro(5, "El extranjero", "Albert Camus", 18999, "Ficcion y Filosofia", "Debolsillo", 128, "Tapa Blanda", "./img/elextranjero.jpg", "Publicado en 1942, cuando la Segunda Guerra Mundial asolaba Europa, El extranjero retrata la vida en Argel de un joven oficinista llamado Meursault. Sus días transcurren entre personajes turbios y rutinas primarias, sin que lo perturben siquiera la muerte de su madre o el amor de una muchacha. Pero, cuando comete un asesinato impulsivo, Meursault descubre que la sociedad está dispuesta a condenarlo no solo por ese acto aberrante, sino por su vida ajena a todo. Narrada en un estilo a la vez parco y lírico, la novela captura con maestría el absurdo del hombre moderno, un extraño que no encuentra el sentido en su paso por el mundo");
const libro6 = new Libro(6, "Siddhartha", "Hermann Hesse", 21999, "Ficcion y Espiritualidad", "Debolsillo", 224, "Tapa Blanda", "./img/siddhartha2.jpg", "Esta novela, ambientada en la India tradicional, relata la vida de Siddhartha, un hombre para quien el camino de la verdad pasa por la renuncia y la comprensión de la unidad que subyace en todo lo existente. En sus páginas, el autor ofrece todas las opciones espirituales del hombre. Hermann Hesse buceó en el alma de Oriente a fin de aportar sus aspectos positivos a nuestra sociedad");
const libro7 = new Libro(7, "La metamorfosis", "Franz Kafka", 17999, "Ficcion", "Planeta Lector", 93, "Tapa Blanda", "./img/lametamorfosis.webp", "Gregorio Samsa se despierta un día convertido en insecto. Su cuerpo se ha transformado y descubre que desde aquel momento dispone de antenas, muchas patitas... Samsa piensa que se trata de un sueño , pero se da cuenta de que todo lo que está ocurriendo es realidad");
const libro8 = new Libro(8, "El Aleph", "Jorge Luis Borges", 23999, "Ficcion Literaria", "Debolsillo", 216, "Tapa Blanda", "./img/elaleph.jpg"," El cuento El Aleph, publicado por primera vez en la revista Sur en 1945 y que en 1949 dio nombre al libro, aborda uno de los temas recurrentes en la literatura de Borges: el infinito. Porque en esa esfera resplandeciente confluyen de un modo asombroso todos los tiempos y todos los espacios");
const libro9 = new Libro(9, "Anna Karenina", "Lev Tolstoi", 34630, "Ficcion Clasica", "Pluton Ediciones", 900, "Tapa Dura", "./img/annakarenina.jpg", "Anna Karenina es, junto con la monumental Guerra y paz, una de las obras clave Lev Tolstoi, en la que vemos todas las señas de identidad del gran realismo ruso: fina crítica social y multitud de personajes con una profundidad psicológica asombrosa. Las desventuras de Anna Karenina y su afán por integrarse en una sociedad hipócrita que la margina por adúltera, pero perdona los desmanes de su amante, nos hacen reflexionar sobre la invisibilización de la mujer a la par que nos ofrecen un fresco monumental de la Rusia decimonónica y todas sus contradicciones");
const libro10 = new Libro(10, "Meditaciones", "Marco Aurelio", 19999, "Filosofia Estoica", "Poseidon", 210, "Tapa Blanda", "./img/meditacionesmarcoaurelio.jpg", "Las Meditaciones del emperador Marco Aurelio fueroncompuestas durante los descansos de sus actividadespoliticas y belicas, y tenia el proposito de recordarle a las maximas fundamentales del estoicismo , de ayudarle a aplicar estas en su vida diaria , para desviarse de su objetivo fundamental : Ser mejor persona");
const libro11 = new Libro(11, "El retrato de Dorian Grey", "Oscar Wilde", 19010, "Ficcion Clasica", "Pluton Ediciones", 320, "Tapa Dura", "./img/retratodoriangrey.jpg", "El retrato de Dorian Gray destaca no sólo por ser su única novela, sino también su trabajo más perdurable. Las desventuras de Dorian Gray, ese dandi paradigmático y ocurrente obsesionado con lo efímero, y su pánico a envejecer nos deparan la más genial y absorbente de las vueltas de tuerca que jamás se le hayan dado a la novela fáustica");
const libro12 = new Libro(12, "El Banquete", "Platon", 29000, "Filosofia Griega", "Gredos", 144, "Tapa Blanda", "./img/elbanquete.jpg");


const libros = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12];
mostrarLibros(libros);

function mostrarLibros(librosParaMostrar){
    let acumulador = ``;
    librosParaMostrar.forEach((libro) =>{
        acumulador += `<div class="box-products" id="book-1">
                <img src=${libro.img} alt=${libro.titulo} por ${libro.autor}>
                <p>${libro.titulo}</p>
                <p>${libro.autor}</p>
                <p>$${libro.precio}</p>

                <div class="button-group">
                <button type="button" id="btn-fav" data-id="${libro.id}">&#10084</button>
                <button type="button" id="btn-cart" data-id="${libro.id}">
                    <i class='bx bx-shopping-bag'></i>
                </button>
                </div>

                <a href="#">Ver más</a>
            </div>`;
    });
    document.getElementById('libros-container').innerHTML = acumulador;
}


const librosContainer = document.getElementById('libros-container');


librosContainer.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button#btn-fav")) {
        const libroFavId = Number(event.target.getAttribute("data-id"));
        const esFavorito = favoritos.includes(libroFavId);

        Toastify({
             text: esFavorito 
                ? "Libro eliminado de favoritos!" 
                : "Libro agregado a favoritos!",
            duration: 4000,
            destination: "https://github.com/apvarun/toastify-js", // Cambiar por pag de favoritos cuando esté hecha
            newWindow: true,
            close: true,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "#301629",
              color: "#f1d3ab",
              fontFamily: "Montserrat",
            },
        }).showToast();
        agregarAFavoritos(libroFavId);
    }
});

librosContainer.addEventListener("click", (event) => {
    if(event.target && event.target.matches("#btn-cart, #btn-cart *")){
        const libroCarritoId = Number(event.target.getAttribute("data-id"));

        Toastify({
            text: "Libro agregado al carrito!",
           duration: 4000,
           destination: "https://github.com/apvarun/toastify-js", // Cambiar por pag de favoritos cuando esté hecha
           newWindow: true,
           close: true,
           gravity: "bottom", 
           position: "right", 
           stopOnFocus: true, 
           style: {
             background: "#301629",
             color: "#f1d3ab",
             fontFamily: "Montserrat",
           },
       }).showToast();
       agregarACarrito(libroCarritoId);
    }
})


let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function agregarAFavoritos(id) {
    if (!favoritos.includes(id)) {
        favoritos.push(id);
        console.log(`Libro con ID ${id} agregado a favoritos`);
    } else {
        favoritos = favoritos.filter((favId) => favId !== id);
        console.log(`Libro con ID ${id} fue eliminado de favoritos`);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    const btn = document.querySelector(`button[data-id="${id}"]`);
    if (btn) {
        if (favoritos.includes(id)) {
            btn.classList.add("fav-active");
        } else {
            btn.classList.remove("fav-active");
        }
    }
}

/*  NUEVA FUNCION - CARRITO        */

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function agregarACarrito(id){
    if(!cart.includes(id)){
        cart.push(id);
        console.log(`Libro con ID ${id} fue agregado a carrito`);
    }

    localStorage.setItem("cart", JSON.stringify(cart))

}


function buscarLibros(){
    let input = document.getElementById("search-bar").value.toLowerCase();
    const resultados = libros.filter(libro => libro.titulo.toLowerCase().includes(input) || libro.autor.toLowerCase().includes(input) || libro.descripcion?.toLowerCase().includes(input));
    mostrarLibros(resultados);
}

document.getElementById("search-bar").addEventListener("input", buscarLibros);


librosContainer.addEventListener("click", (event) => {
    if (event.target && event.target.matches("a")) {
        event.preventDefault(); 

        const libroId = Number(event.target.closest(".box-products").querySelector("button").getAttribute("data-id"));
        const libroSeleccionado = libros.find((libro) => libro.id === libroId);

        if (libroSeleccionado) {
            const popup = new Popup({
                id: `popup-libro-${libroSeleccionado.id}`,
                title: `${libroSeleccionado.titulo} - $${libroSeleccionado.precio}`,
                content: `
                    <p><strong>Autor:</strong> ${libroSeleccionado.autor}</p>
                    <p><strong>Género:</strong> ${libroSeleccionado.categoria}</p>
                    <p><strong>Editorial:</strong> ${libroSeleccionado.editorial}</p>
                    <p><strong>Páginas:</strong> ${libroSeleccionado.paginas}</p>
                    <p><strong>Encuadernación:</strong> ${libroSeleccionado.encuadernacion}</p>
                `,
                titleColor: "rgb(3, 0, 4)",
                titleMargin: "0",
                backgroundColor: "white",
            });

            popup.show(); 
        }
    }
});



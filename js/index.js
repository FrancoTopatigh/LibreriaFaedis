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

const libro1 = new Libro(1, "La felicidad", "Gabriel Rolon", 34999, "Psicologia", "Planeta", 392, "Tapa Blanda", "../img/lafelicidad-rolon.jpg", "Este libro parte de la duda, de un cuestionamiento: ¿qué es la felicidad No tengo certezas, pero puedo asegurar que la felicidad no está en las falsas metas que nos propone la cultura contemporánea");
const libro2 = new Libro(2, "El poder del ahora", "Eckhart Tolle", 24999, "Autoayuda", "Debolsillo", 256, "Tapa Blanda", "../img/poderdelahora.jpg", "El poder del ahora es un libro único. Tiene la capacidad de crear una experiencia en los lectores y de cambiar su vida. Hoy ya es considerado una obra maestra. Su autor, Eckhart Tolle, se convirtió en un maestro universal, un gran espíritu con un gran mensaje: se puede alcanzar un estado de iluminación aquí y ahora" );
const libro3 = new Libro(3, "Crimen y Castigo", "Fedor Dostoyevski", 19999, "Ficcion", "Catedra", 704, "Tapa Blanda", "../img/crimenycastigo.jpg", "Una visita de Balzac a San Petersburgo le sugirió al joven alférez ingeniero Fiódor Dostoievski la idea de traducir Eugénie Grandet. La traducción hizo mucho más que sacarle de un apuro económico; despertó su fiebre creativa y su vocación. Entonces, decidió solicitar la excedencia y dedicarse a la literatura. Obra realmente genial, Crimen y castigo es una de las más grandes creaciones de la literatura mundial.");
const libro4 = new Libro(4, "El arte de amar", "Erich Fromm", 24999, "Sociedad y Cultura general", "Booket", 208, "Nuevo", "../img/elartdeamar.jpg", "El arte de amar es una obra con la que Erich Fromm ha ayudado a varias generaciones a reflexionar sobre el amor y a responder a algunas preguntas aparentemente sencillas: ¿qué significa amar? ¿Cómo desprendernos de nosotros mismos para experimentar este sentimiento…? Fromm nos explica que el amor no es solo una relación personal, sino además un rasgo de madurez que se manifiesta en diversas formas: amor erótico, amor fraternal, amor filial, amor a uno mismo");
const libro5 = new Libro(5, "El extranjero", "Albert Camus", 18999, "Ficcion y Filosofia", "Debolsillo", 128, "Tapa Blanda", "../img/elextranjero.jpg", "Publicado en 1942, cuando la Segunda Guerra Mundial asolaba Europa, El extranjero retrata la vida en Argel de un joven oficinista llamado Meursault. Sus días transcurren entre personajes turbios y rutinas primarias, sin que lo perturben siquiera la muerte de su madre o el amor de una muchacha. Pero, cuando comete un asesinato impulsivo, Meursault descubre que la sociedad está dispuesta a condenarlo no solo por ese acto aberrante, sino por su vida ajena a todo. Narrada en un estilo a la vez parco y lírico, la novela captura con maestría el absurdo del hombre moderno, un extraño que no encuentra el sentido en su paso por el mundo");
const libro6 = new Libro(6, "Siddhartha", "Hermann Hesse", 21999, "Ficcion y Espiritualidad", "Debolsillo", 224, "Tapa Blanda", "../img/siddhartha2.jpg", "Esta novela, ambientada en la India tradicional, relata la vida de Siddhartha, un hombre para quien el camino de la verdad pasa por la renuncia y la comprensión de la unidad que subyace en todo lo existente. En sus páginas, el autor ofrece todas las opciones espirituales del hombre. Hermann Hesse buceó en el alma de Oriente a fin de aportar sus aspectos positivos a nuestra sociedad");
const libro7 = new Libro(7, "La metamorfosis", "Franz Kafka", 17999, "Ficcion", "Planeta Lector", 93, "Tapa Blanda", "../img/lametamorfosis.webp", "Gregorio Samsa se despierta un día convertido en insecto. Su cuerpo se ha transformado y descubre que desde aquel momento dispone de antenas, muchas patitas... Samsa piensa que se trata de un sueño , pero se da cuenta de que todo lo que está ocurriendo es realidad");
const libro8 = new Libro(8, "El Aleph", "Jorge Luis Borges", 23999, "Ficcion Literaria", "Debolsillo", 216, "Tapa Blanda", "../img/elaleph.jpg");
const libro9 = new Libro(9, "Anna Karenina", "Lev Tolstoi", 34630, "Ficcion Clasica", "Pluton Ediciones", 900, "Tapa Dura", "../img/annakarenina.jpg", "León Tolstói (1828-1910) es reconocido como uno de los escritores más importantes de la novela rusa y de la literatura mundial. Nacido en una antigua familia de la nobleza, sus obras constituyen un fiel reflejo de la sociedad rusa de la época, convirtiéndolo en uno de los representantes más reconocidos del realismo. En “Anna Karenina” (que empezó a publicarse como un folletín en 1875, y se publicaría por primera vez entera en 1877), Tolstói narra la relación adúltera entre Anna Karenina, casada con un alto funcionario del gobierno, y el conde Vronsky, vínculo a través del cual el escritor retrata la doble moral y los antivalores de un entorno que no sanciona con la misma dureza moral al hombre y a la mujer. Además, muestra la profunda desigualdad social entre la élite y el campesinado, y la búsqueda de la felicidad del ser humano, que alcanza tras una metamorfosis espiritual");
const libro10 = new Libro(10, "Meditaciones", "Marco Aurelio", 19999, "Filosofia Estoica", "Poseidon", 210, "Tapa Blanda", "../img/meditacionesmarcoaurelio.jpg", "Marco Aurelio gobernó el Imperio Romano entre 161 y 180 d. C., durante el apogeo del poder imperial. Su reinado estuvo marcado por numerosos conflictos militares y la expansión imperial. A pesar de estos conflictos, el imperio prosperó en relativa paz y prosperidad bajo su gobierno. Marco Aurelio reinó como un rey filósofo, practicó el estoicismo y escribió sobre sus propios pensamientos y observaciones en sus diarios. Meditaciones nunca tuvo la intención de ser un texto público. En cambio, Marco Aurelio se dedicó a crear un examen transparente de su propia vida, así como un recurso filosófico personal destinado a ayudar al gobernante a seguir lo que él creía que era el camino moral correcto. Sin más audiencia que él mismo para escribir, elaboró un examen sorprendentemente honesto y hermoso del pensamiento y la ideología en la Antigua Roma y en toda su esfera de influencia");
const libro11 = new Libro(11, "El retrato de Dorian Grey", "Oscar Wilde", 19010, "Ficcion Clasica", "Pluton Ediciones", 320, "Tapa Dura", "../img/retratodoriangrey.jpg", "El Retrato de “Dorian Gray” es la novela más famosa del escritor irlandés Oscar Wilde (1854-1900). Un joven llamado Dorian Gray es seducido por el hedonismo de su nuevo círculo social y empieza a vivir la vida de un libertino en constante búsqueda del placer después de adquirir un impresionante y misterioso retrato de sí mismo, pintado por un amigo. La novela explora temas filosóficos tan complejos como la duplicidad del alma humana y la reverencia por la belleza y el placer. La novela causó gran revuelo en los críticos y lectores británicos de la época, por su supuesta inmoralidad e indecencia y despertó en Wilde una defensa furiosa del proceso creativo y la importancia de la libertad en la expresión artístico");
const libro12 = new Libro(12, "El Banquete", "Platon", 29000, "Filosofia Griega", "Gredos", 144, "Tapa Blanda", "../img/elbanquete.jpg");


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
                <button type="button" id="btn-fav" data-id="${libro.id}">&#10084</button>
                <a href="#">Ver más</a>
            </div>`;
    });
    document.getElementById('libros-container').innerHTML = acumulador;
}


const librosContainer = document.getElementById('libros-container');


librosContainer.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button#btn-fav")) {
        const libroId = Number(event.target.getAttribute("data-id"));
        const esFavorito = favoritos.includes(libroId);

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
        agregarAFavoritos(libroId);
    }
});


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

function buscarLibros(){
    let input = document.getElementById("search-bar").value.toLowerCase();
    const resultados = libros.filter(libro => libro.titulo.toLowerCase().includes(input) || libro.autor.toLowerCase().includes(input) || libro.descripcion?.toLowerCase().includes(input));
    mostrarLibros(resultados);
}

document.getElementById("search-bar").addEventListener("input", buscarLibros);

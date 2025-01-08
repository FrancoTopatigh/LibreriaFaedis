class Libro{
    constructor(id, nombre, autor, precio, categoria, editorial, paginas, img, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
        this.categoria = categoria;
        this.editorial = editorial;
        this.paginas = paginas;
        this.img = img;
        this.descripcion = descripcion
    }
}

const libro1 = new Libro(1, "La felicidad", "Gabriel Rolon", 34999, "Psicologia", "Planeta", 392, "../img/crimenycastigo.jpg", "Este libro parte de la duda, de un cuestionamiento: ¿qué es la felicidad No tengo certezas, pero puedo asegurar que la felicidad no está en las falsas metas que nos propone la cultura contemporánea");
const libro2 = new Libro(2, "El poder del ahora", "Eckhart Tolle", 24999, "Autoayuda", "Debolsillo", 256, "../img/poderdelahora.jpg", "El poder del ahora es un libro único. Tiene la capacidad de crear una experiencia en los lectores y de cambiar su vida. Hoy ya es considerado una obra maestra. Su autor, Eckhart Tolle, se convirtió en un maestro universal, un gran espíritu con un gran mensaje: se puede alcanzar un estado de iluminación aquí y ahora" );
const libro3 = new Libro(3, "Crimen y Castigo", "Fedor Dostoyevski", 19999, "Ficcion", "Catedra", 704, "../img/crimenycastigo.jpg", "Una visita de Balzac a San Petersburgo le sugirió al joven alférez ingeniero Fiódor Dostoievski la idea de traducir Eugénie Grandet. La traducción hizo mucho más que sacarle de un apuro económico; despertó su fiebre creativa y su vocación. Entonces, decidió solicitar la excedencia y dedicarse a la literatura. Obra realmente genial, Crimen y castigo es una de las más grandes creaciones de la literatura mundial.");
const libro4 = new Libro(4, "El arte de amar", "Erich Fromm", 24999, "Sociedad y Cultura general", 208, "../img/elartdeamar.jpg", "El arte de amar es una obra con la que Erich Fromm ha ayudado a varias generaciones a reflexionar sobre el amor y a responder a algunas preguntas aparentemente sencillas: ¿qué significa amar? ¿Cómo desprendernos de nosotros mismos para experimentar este sentimiento…? Fromm nos explica que el amor no es solo una relación personal, sino además un rasgo de madurez que se manifiesta en diversas formas: amor erótico, amor fraternal, amor filial, amor a uno mismo");

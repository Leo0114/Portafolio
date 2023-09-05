import Astro from "@assets/Astro.webp";
import Citas from "@assets/Citas.webp";
import Crypto from "@assets/Crypto.webp";
import Gastos from "@assets/Gastos.webp";
import Tareas from "@assets/Tareas.webp";
import Cabana from "@assets/cabanabanner.webp";
import Beach from "@assets/beach.webp";
import Smart from "@assets/smart.webp";
export const procesarProjects = (estancias: any) => {};

export const projects = [
  {
    id: "citas" ,
    title: "Citas",
    texto:
      "Página Web para agendar citas veterinarias cómodamente. Interfaz intuitiva creada con React y estilizada con Tailwind CSS. Simplifica la programación de citas para mascotas.",
    img: Citas,
    alt: "Agendar Citas Web",
    github: "https://github.com/Leo0114/citas-react",
    href: "https://leo0114.github.io/citas-react/",
    frame: "React",
    style: "Tailwind",
  },
  {
    title: "Cotizador de Criptomonedas",
    id: "crypto",
    texto:
      "Obtén tasas de criptomonedas en tu moneda local. Sitio React con diseño personalizado en CSS. Realiza conversiones cripto instantáneas.",
    img: Crypto,
    alt: "Crypto Calculate Web",
    github: "https://github.com/Leo0114/cripto",
    href: "https://leo0114.github.io/cripto/",
    frame: "React",
    style: "Css",
  },
  {
    title: "Seguimiento de Gastos",
    id: "gastos",
    texto:
      "Controla tus finanzas con esta app. Desarrollada en React y estilizada con CSS. Registra gastos, tipos y calcula saldo restante. Gestiona tus finanzas de manera sencilla.",
    img: Gastos,
    alt: "Gastos Web",
    github: "https://github.com/Leo0114/gastos",
    href: "https://leo0114.github.io/gastos/",
    frame: "React",
    style: "Css",
  },
  {
    title: "Experiences Web",
    id: "experiences",
    texto:
      "Descubre tus destinos de ensueño. Desarrollada en Astro y Preact, con diseño cautivador en Tailwind. Explora lugares de vacaciones, obtén información detallada y planifica tu escapada perfecta. Amplifica tu experiencia de viaje con ExploreVacay App.",
    img: Beach,
    alt: "Experiences Web",
    github: "https://github.com/Leo0114/Experiences",
    href: "https://leo0114.github.io/Experiences/",
    frame: "Astro",
    style: "Tailwindcss",
  },
  {
    title: "Lista de Tareas",
    id: "tareas",
    texto:
      "Administra tareas fácilmente. App React con diseño moderno en Tailwind. Agrega y elimina tareas de manera rápida. Simplifica tu organización diaria.",
    img: Tareas,
    alt: "Crear tarea Web",
    github: "https://github.com/Leo0114/react-example",
    href: "https://leo0114.github.io/react-example/",
    frame: "React",
    style: "Tailwindcss",
  },
  {
    title: "Agencia Turística",
    id: "cabanas",
    texto:
      "Mi versión de la pagina web de Agencia Turistica Volcán Café, desarrollada con Astro y Preact, estilizada con Tailwind. Reserva cabañas y tours emocionantes. Tu escapada perfecta, ahora más accesible.",
    img: Cabana,
    alt: "Cabañas Web",
    github: "https://github.com/Leo0114/volcancafe",
    href: "https://leo0114.github.io/volcancafe/",
    frame: "Astro",
    style: "Tailwindcss",
  },
  {
    title: "Home Smart",
    id: "smart",
    texto:
      "Explora la revolución del hogar inteligente. Impulsada por Astro y Preact, con estilo definido por Tailwind. Simplifica la compra de dispositivos y accesorios, transforma tu espacio con Smart Home App.",
    img: Smart,
    alt: "Home Smart Web",
    github: "https://github.com/Leo0114/HomeSmart",
    href: "https://leo0114.github.io/HomeSmart/",
    frame: "Astro",
    style: "Tailwindcss",
  },
  {
    title: "Café Viejo",
    id: "coffe",
    texto:
      "Sumérgete en el aroma del café con nuestra app. Desarrollada con pasión y tecnología de punta, nuestra plataforma te conecta con los mejores granos. Explora variedades, añade tus favoritos y saborea la comodidad de comprar café de calidad. Tu experiencia perfecta con café comienza aquí.",
    img: Astro,
    alt: "Café Camino Viejo",
    github: "https://github.com/Leo0114/CoffeeS",
    href: "https://leo0114.github.io/CoffeeS/",
    frame: "Astro",
    style: "Tailwindcss",
  },
  {
    title: "Notes App",
    id: "notes",
    texto:
      "Página para organizar tus dieas, desarrollada en Astro y Preact, con diseño elegante en Tailwind. Crea, edita y organiza tus notas de manera eficiente. Potenciando tu productividad y creatividad.",
    img: Astro,
    alt: "Notes Web",
    github: "https://github.com/Leo0114/NotesApp",
    href: "https://leo0114.github.io/NotesApp/",
    frame: "Astro",
    style: "Tailwindcss",
  },
  {
    title: "Netflix Clone",
    id: "netflix",
    texto:
      "Réplica de Netflix desarrollada en Astro y Preact, con diseño atractivo en Tailwind.",
    img: Astro,
    alt: "Netflix clone Web",
    github: "https://github.com/Leo0114/NetflixApp",
    href: "https://leo0114.github.io/NetflixApp/",
    frame: "Astro",
    style: "Tailwindcss",
  },
  {
    title: "Shopping App",
    id: "shopping",
    texto:
      "Desarrollada en Astro y Preact, con diseño moderno en Tailwind. Explora productos, añádelos al carrito y finaliza la compra de manera intuitiva. Una experiencia de compra en línea mejorada y atractiva.",
    img: Astro,
    alt: "Shopping Web",
    github: "https://github.com/Leo0114/ShoppingApp",
    href: "https://leo0114.github.io/ShoppingApp/",
    frame: "Astro",
    style: "Tailwindcss",
  },
  {
    title: "ProjectAmigo",
    id: "pa",
    texto:
      "Mi version de  la pagina web de Projectamigo con Astro, Preact y embellecida con Tailwind. Nueva interfaz intuitiva, navegación mejorada y mayor accesibilidad. Elevando la experiencia de usuarios comprometidos con la causa.",
    img: Astro,
    alt: "Demo PA Web",
    github: "https://github.com/Leo0114/DemoPA",
    href: "https://leo0114.github.io/DemoPA/",
    frame: "Astro",
    style: "Tailwindcss",
  },
  {
    title: "School Website",
    id: "school",
    texto:
      "Reviviendo la nostalgia. Página web clásica creada en HTML y estilizada con Materialize como parte de un proyecto escolar. Explora el pasado mientras demuestra habilidades de diseño y desarrollo web en un contexto educativo.",
    img: Astro,
    alt: "School Project Web",
    github: "https://github.com/Leo0114/Terceraparcial",
    href: "https://leo0114.github.io/Terceraparcial/index.html",
    frame: "Html",
    style: "Materialize",
  },
];

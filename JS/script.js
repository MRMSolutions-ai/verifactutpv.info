/**
 * Proyecto: verifactutpv.info (mrmsolutions)
 * Descripción: Control de interactividad de la página de inicio.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Menú móvil interactivo (Hamburguesa)
    const mobileMenuBtn = document.getElementById("mobile-menu");
    const navLinksContainer = document.getElementById("nav-links");

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener("click", () => {
            // Abre o cierra la clase activa para mostrar los enlaces
            navLinksContainer.classList.toggle("active");
            
            // Efecto visual al botón hamburguesa (opcional si añades CSS)
            const bars = mobileMenuBtn.querySelectorAll(".bar");
            bars.forEach(bar => bar.classList.toggle("active"));
        });
    }

    // 2. Scroll Suave para los enlaces de navegación anclados (#)
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            // Cerramos el menú móvil automáticamente si se hace clic en una opción
            if (navLinksContainer.classList.contains("active")) {
                navLinksContainer.classList.remove("active");
            }

            const targetId = link.getAttribute("href");
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault(); // Evitamos el salto brusco clásico
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    console.log("Ecosistema verifactutpv.info inicializado correctamente.");
});

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".fade-in-up");

    const opciones = {
        root: null, // usa la pantalla del navegador como referencia
        rootMargin: "0px",
        threshold: 0.15 // Se activa cuando el 15% del elemento ya es visible
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase que ejecuta la animación en CSS
                entry.target.classList.add("visible");
                // Opcional: deja de observar el elemento si solo quieres que se anime una vez
                observer.unobserve(entry.target);
            }
        });
    }, opciones);

    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
});
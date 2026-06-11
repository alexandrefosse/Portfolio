const navbar = `
<nav>
    <span class="logo"><a href="accueil.html">Alexandre Fossé</a></span>
    <ul>
        <li><a href="accueil.html">Accueil</a></li>
        <li><a href="projets.html">Projets</a></li>
        <li><a href="competences.html">Compétences</a></li>
        <li><a href="a_propos.html">À propos</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
`;

document.getElementById("navbar").insertAdjacentHTML("afterbegin", navbar);

const currentPath = window.location.pathname;

document.querySelectorAll("#navbar a").forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath) {
        link.classList.add("active");
    }
});
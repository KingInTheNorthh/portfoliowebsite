
document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.querySelector(".center-section a:nth-child(2)");
    const contactLink = document.querySelector(".center-section a:nth-child(3)");
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");

    aboutLink.addEventListener("click", (e) => {
        e.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});


function updateClock(){

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock, 1000);

document.querySelectorAll('.projects div').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


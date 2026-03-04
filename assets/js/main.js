document.addEventListener("DOMContentLoaded", () => {

    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Hero Reveal Animation
    const hero = document.getElementById("hero");
    if(hero) {
        setTimeout(() => {
            hero.classList.remove("opacity-0", "translate-y-10");
        }, 150);
    }
    // 3. Console Easter Egg
    console.log(
        "%c Ray Portfolio %c System Level Access Granted ",
        "background: #111; color: #00ffcc; padding: 5px;",
        "background: #222; color: white; padding: 5px;"
    );
    
});
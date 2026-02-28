// 1. Initialize Lucide Icons
lucide.createIcons();

// 2. Simple Scroll/Load Animation
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.getElementById("hero");
    
    // Small delay to let the page settle
    setTimeout(() => {
        hero.classList.add("reveal");
    }, 100);
});

// 3. Console Message (For fun)
console.log("%c Ray Portfolio %c System Level Access Granted ", 
            "background: #222; color: #bada55; padding: 5px;", 
            "background: #555; color: #fff; padding: 5px;");
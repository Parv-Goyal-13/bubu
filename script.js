// Surprise button function
function showSurprise() {
    alert("You are the most special person in my life! ❤️");
}

// Floating hearts animation
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 4 + 3 + "s";
        document.querySelector(".floating-hearts").appendChild(heart);
    }
});

// CSS for heart animation
const style = document.createElement("style");
style.innerHTML = `
    .heart {
        position: absolute;
        width: 25px;
        height: 25px;
        background: red;
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 50% 75%, 18% 100%, 0% 38%);
        opacity: 0.7;
        animation: floatUp 5s infinite ease-in-out;
    }
    @keyframes floatUp {
        0% { transform: translateY(100vh); opacity: 1; }
        100% { transform: translateY(-10vh); opacity: 0; }
    }
`;
document.head.appendChild(style);

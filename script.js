// Create floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts periodically
setInterval(createHeart, 300);

// Add this CSS to the existing stylesheet
const style = document.createElement('style');
style.textContent = `
    .floating-hearts {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 100;
    }
    
    .heart {
        position: absolute;
        animation: floatUp linear forwards;
    }
    
    @keyframes floatUp {
        to {
            transform: translateY(-100vh);
        }
    }
`;
document.head.appendChild(style);

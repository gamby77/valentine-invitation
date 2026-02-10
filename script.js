// =========================
// SCROLL & NAVIGATION
// =========================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update progress bar based on scroll position
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    
    document.querySelector('.progress-bar').style.width = scrollPercent + '%';
});

// =========================
// PROPOSAL INTERACTION
// =========================

function revealProposal() {
    const proposalSection = document.getElementById('proposal');
    proposalSection.classList.remove('hidden');
    
    // Scroll to proposal with a slight delay for dramatic effect
    setTimeout(() => {
        proposalSection.scrollIntoView({ behavior: 'smooth' });
        createConfetti();
    }, 300);
}

function handleYes() {
    const responseDiv = document.getElementById('response-message');
    responseDiv.innerHTML = `
        <div style="animation: slideDown 0.6s ease;">
            <p style="font-size: 2rem; margin-bottom: 10px;">YES! 💕💕💕</p>
            <p>You've made me the happiest person alive!</p>
            <p style="margin-top: 20px; font-size: 1.1rem;">
                Happy Valentine's Day, Natasha! 
                <span style="animation: heartbeat 1s ease-in-out infinite;">♥</span>
            </p>
        </div>
    `;
    
    createHeartExplosion();
    playConfetti();
}

function handleMaybe(e) {
    const responseDiv = document.getElementById('response-message');
    const button = e.target;
    
    responseDiv.innerHTML = `
        <p style="animation: slideDown 0.6s ease;">
            Teasing me, are we? 😊
            <br><br>
            But you know I'll wait for you... Take your time! 💕
        </p>
    `;
    
    // Make the button "run away" from the click
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// =========================
// CONFETTI & ANIMATION
// =========================

function createConfetti() {
    const container = document.querySelector('.confetti-container');
    
    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random colors matching our theme
        const colors = ['#ff1493', '#e91e63', '#ffb6d9', '#ff69b4', '#ffffff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = randomColor;
        confetti.style.delay = Math.random() * 0.5 + 's';
        
        container.appendChild(confetti);
        
        // Remove confetti element after animation
        setTimeout(() => confetti.remove(), 3500);
    }
}

function playConfetti() {
    createConfetti();
}

function createHeartExplosion() {
    const container = document.querySelector('.proposal-content');
    
    // Create 20 hearts that explode outward
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '♥';
        heart.style.position = 'absolute';
        heart.style.fontSize = '2rem';
        heart.style.color = '#ff1493';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '100';
        
        // Random direction
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        container.appendChild(heart);
        
        let x = 0, y = 0;
        let duration = 0;
        
        const animate = () => {
            duration += 20;
            x += vx;
            y += vy - 0.2; // gravity
            
            heart.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${1 - duration / 2000})`;
            heart.style.opacity = Math.max(0, 1 - duration / 2000);
            
            if (duration < 2000) {
                requestAnimationFrame(animate);
            } else {
                heart.remove();
            }
        };
        
        animate();
    }
}

// =========================
// INTERACTIVE ELEMENTS
// =========================

// Add click animation to reason cards
document.addEventListener('DOMContentLoaded', () => {
    const reasonCards = document.querySelectorAll('.reason-card');
    
    reasonCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'heartbeat 0.6s ease';
            }, 10);
        });
    });

    // Add animation to photo placeholders
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    
    photoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            alert('Replace this placeholder with your favorite photo of you two!\n\nTo add photos:\n1. Open index.html in an editor\n2. Find the photo-placeholder divs in the photos-section\n3. Change the background-image property to your photo URL\n\nExample: background-image: url("your-photo-url.jpg");');
        });
    });

    // Floating animation for background hearts
    addDynamicHearts();
});

// Create additional floating hearts in the background
function addDynamicHearts() {
    const hearts = ['♥', '♡', '♥', '♡'];
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.color = ['#ff1493', '#e91e63', '#ffb6d9'][Math.floor(Math.random() * 3)];
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.animation = `float-up ${Math.random() * 3 + 3}s ease-in forwards`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }, 800);
}

// CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// =========================
// SMOOTH SCROLL HELPER
// =========================

// Enhance smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// =========================
// EASTER EGG
// =========================

// Secret keyboard shortcut: Press 'N' multiple times for a surprise
let secretCounter = 0;
let secretTimer;

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'n') {
        secretCounter++;
        clearTimeout(secretTimer);
        
        if (secretCounter === 3) {
            showHeartRain();
            secretCounter = 0;
        }
        
        secretTimer = setTimeout(() => {
            secretCounter = 0;
        }, 1000);
    }
});

function showHeartRain() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '♥';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.fontSize = (Math.random() * 24 + 12) + 'px';
            heart.style.color = ['#ff1493', '#e91e63', '#ffb6d9', '#ff69b4'][Math.floor(Math.random() * 4)];
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1';
            heart.style.opacity = Math.random() * 0.7 + 0.3;
            heart.style.animation = `float-up ${Math.random() * 4 + 3}s ease-in forwards`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 7000);
        }, i * 30);
    }
}

// =========================
// MOBILE OPTIMIZATION
// =========================

// Prevent accidental zoom on double-click
document.addEventListener('touchend', function(event) {
    if (event.changedTouches && event.changedTouches.length > 0) {
        // You can add custom touch handling here if needed
    }
});

console.log('💕 Natasha\'s Valentine\'s Day invitation is ready! 💕');
console.log('Press "N" three times for a surprise!');

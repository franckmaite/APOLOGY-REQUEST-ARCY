function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 3 + 2;
        const xPos = Math.random() * 100;
        const delay = Math.random() * 2;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = xPos + '%';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';

        particlesContainer.appendChild(particle);
    }
}

function typeWriter() {
    const message = `Arcy, eu sei que já te pedi desculpas e sei que tu me perdoaste, mas confesso que ainda estou com o coração apertado por saber que estás magoada comigo 😔❤️
Não quero ficar a insistir nem te pressionar a falar comigo antes de estares pronta. Só quero que saibas que me dói saber que te fiz sentir mal, porque a última coisa que eu quero é ser motivo para essa tristeza em ti.
Eu tive uma insegurança naquele momento, mas nunca quis fazer-te sentir que não confio em ti ou que penso mal de ti. Eu reconheço o meu erro e vou aprender com ele.
Agora amor, eu imploro vamos ficar bem novamente, vamos deixar tudo para trás pois eu ja não aguento ficar so assim, nos não somos assim, desculpa por tudo eu te amo muito meu amor
COM MUITO AMOR: ARSHEN!.`;

    const typewriterElement = document.getElementById('typewriter');
    let index = 0;

    function type() {
        if (index < message.length) {
            typewriterElement.textContent += message.charAt(index);
            index++;
            setTimeout(type, 30);
        }
    }

    type();
}

function updateRelationshipTimer() {
    const startDate = new Date('2025-07-12');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const timeString = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos juntos 💕`;
    document.getElementById('relationshipTime').textContent = timeString;
}

setInterval(updateRelationshipTimer, 1000);
updateRelationshipTimer();

function openSurprise() {
    const modal = document.getElementById('surpriseModal');
    modal.classList.add('show');
    
    createHearts();
    
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    audioPlayer.play();
    playBtn.classList.add('playing');
}

function closeSurprise() {
    const modal = document.getElementById('surpriseModal');
    modal.classList.remove('show');
}

function createHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['❤️', '💕', ❤️ ', '❤️'];

    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-animated';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            container.appendChild(heart);

            setTimeout(() => heart.remove(), 2000);
        }, i * 100);
    }
}

function toggleMusic() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');

    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.classList.add('playing');
    } else {
        audioPlayer.pause();
        playBtn.classList.remove('playing');
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('surpriseModal');
    if (event.target == modal) {
        closeSurprise();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setTimeout(typeWriter, 500);
    updateRelationshipTimer();
});

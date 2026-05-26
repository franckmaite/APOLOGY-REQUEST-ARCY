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
    const message = `Às vezes eu fico a pensar em como uma pessoa consegue ocupar um espaço tão grande dentro do coração da outra… e depois lembro-me de ti.

Porque contigo nunca foi algo vazio ou passageiro. Tu entraste na minha vida de uma forma tão natural que, sem eu perceber, começaste a fazer parte dos meus pensamentos todos os dias. O teu nome virou conforto. A tua voz virou calma. As tuas mensagens viraram parte da minha rotina. E o teu amor virou uma das coisas mais preciosas que eu já tive.

Eu sei que hoje estás magoada comigo, e sinceramente… eu entendo. Mas mesmo no meio da dor que eu te causei, existe uma coisa que continua intacta dentro de mim: o amor enorme que eu sinto por ti.

E quando eu digo que te amo, não estou a falar só daquele amor de palavras bonitas. Estou a falar do amor de querer saber se já comeste, se dormiste bem, se chegaste em segurança. Do amor de imaginar o teu sorriso do nada e sorrir também. Do amor de lembrar de pequenos detalhes teus sem esforço, porque tu ficas na minha cabeça o tempo inteiro.

Tu tens uma presença diferente. Tu tens aquele tipo de abraço que acalma, aquele jeito que marca, aquele olhar que faz alguém sentir-se importante. E talvez tu nunca tenhas percebido completamente o quanto mexeste comigo desde que apareceste na minha vida.

Eu amo a forma como tu consegues ser forte e sensível ao mesmo tempo. Amo as tuas manias, as tuas reações. Amo as conversas aleatórias contigo, os momentos simples, as brincadeiras, os silêncios… porque contigo até o simples é especial.

E é por isso que tudo isto me dói tanto. Porque no meio de milhões de pessoas, foste tu quem conseguiu tocar partes minhas que ninguém nunca tinha conseguido tocar da mesma forma.

Eu sei que o meu erro fez-te questionar muita coisa. Talvez até tenha feito tu duvidares do meu sentimento. Mas se existe uma coisa que eu queria conseguir colocar dentro do teu coração para tu sentires, era o quanto eu realmente te amo.

Tu és aquela pessoa que eu penso quando imagino felicidade. Aquela pessoa que eu queria continuar a ter ao meu lado nos dias bons e maus. Aquela pessoa que eu ainda olho e penso: "é ela".

E mesmo eu tendo errado contigo, mesmo sabendo que não mereço facilidade depois da dor que causei… eu não consigo fingir que o meu amor diminuiu. Porque não diminuiu. Se tornou ainda mais forte quando eu percebi o quanto a ideia de te perder me destrói por dentro.

Eu amo-te de um jeito que vai além do orgulho, além do ego e além das palavras bonitas que se dizem num momento. Amo-te de verdade. E talvez eu passe muito tempo a tentar mostrar isso da forma certa, mas eu estou disposto a fazê-lo.

Porque tu, para mim, nunca foste qualquer pessoa.`;

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
    const startDate = new Date('2026-01-05');
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
    const hearts = ['❤️', '💕', '💖', '💗'];

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
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
    const message = `Eu quis escrever isto para ti porque sei que estás chateada comigo, e eu não quero agir como se nada tivesse acontecido. Eu sei que as minhas palavras e a minha forma de reagir te magoaram, e eu sinto muito por ter deixado os meus ciúmes e as minhas inseguranças falarem mais alto do que o cuidado que eu devia ter tido contigo.

Dói-me pensar que, em vez de te dar paz, eu te dei tristeza. Dói-me saber que uma pessoa que eu amo tanto pode ter-se sentido magoada por minha causa. Se eu pudesse voltar atrás, eu escolheria falar contigo com calma, abraçar-te com palavras e fazer-te sentir segura, amada e importante para mim.

Tu és a minha namorada, és uma pessoa muito importante para mim. Tu não és apenas alguém na minha vida: és alguém que faz os meus dias terem mais sentido, alguém que eu penso, que eu admiro e que eu quero ver bem. E eu odeio saber que fui eu quem te fez sentir triste.

Eu devia ter falado contigo com calma, devia ter-te escutado melhor e devia ter sido mais carinhoso. Em vez disso, deixei-me levar por pensamentos e reações que não foram justos contigo. E eu reconheço isso de coração, porque tu não merecias carregar o peso das minhas inseguranças.

Eu não quero que o meu amor por ti seja apenas uma coisa bonita que eu digo. Quero que ele apareça na forma como eu falo contigo, na paciência que tenho quando algo me incomoda, na confiança que te dou e no cuidado que demonstro todos os dias. Quero que, quando estiveres comigo, sintas que tens um lugar seguro — um lugar onde podes ser tu, sem medo de seres julgada ou magoada.

Eu sei que tenho muito a melhorar. Sei que os meus ciúmes e alguns dos meus comportamentos não podem continuar a ocupar espaço entre nós. Mas quero que saibas que, por trás desses erros, existe um amor enorme por ti — um amor que não quer prender-te, magoar-te ou fazer-te sentir menos; um amor que quer aprender a ser mais maduro, mais seguro e mais leve para nós dois.

Eu amo a nossa relação. Amo os nossos momentos, as nossas conversas, as brincadeiras, os risos e até as pequenas coisas que só nós entendemos. Amo ter-te na minha vida. Há coisas em nós que eu guardo com muito carinho, e eu não quero que um momento mau apague tudo o que somos, tudo o que sentimos e tudo o que ainda podemos viver juntos.

E é exatamente por amar-te que eu quero cuidar melhor de ti e de nós. Quero aprender a amar-te de uma forma que te faça sorrir mais do que chorar. Quero que te sintas valorizada todos os dias, não só quando tudo está bem, mas também quando estás triste, cansada ou precisas de mim.

Não estou a escrever isto para fazer desaparecer a tua chateação de uma vez, porque eu respeito o que sentes. Só quero que saibas que eu reconheço o meu erro, que me arrependo de verdade e que não quero repetir aquilo que te fez sofrer.

Quero reconstruir a tua confiança com atitudes: falando melhor, ouvindo mais, confiando em ti e escolhendo o amor antes do orgulho. Quero ser alguém que te traz paz, e não alguém que te deixa triste. Quero que o meu abraço, a minha voz e a minha presença sejam coisas que te façam sentir bem.

Desculpa-me, meu amor.Eu amo-te muito. Mais do que consigo explicar nestas palavras. E quero continuar a construir coisas bonitas contigo, com mais carinho, respeito, segurança e amor — porque tu mereces isso de mim, e porque nós merecemos isso um do outro.
Com amor: Franck.`;

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
    const hearts = ['❤️', '💕', '💖', '❤️'];

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

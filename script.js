const movingButton = document.getElementById('moving-button');
const notificationButton = document.getElementById('notification-button');

function moveButtonRandomly() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Gerar novas coordenadas X e Y aleatórias dentro dos limites da janela de visualização
    const newX = Math.random() * windowWidth;
    const newY = Math.random() * windowHeight;

    // Atualizar a posição do botão
    movingButton.style.transform = `translate(${newX}px, ${newY}px)`;
}

movingButton.addEventListener('click', moveButtonRandomly);

notificationButton.addEventListener('click', () => {
    alert('Esta confirmado o nosso encontro ;)');
});

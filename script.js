document.addEventListener('DOMContentLoaded', () => {
    const messageButton = document.getElementById('messageButton');
    const messageDisplay = document.getElementById('messageDisplay');

    // Verifica se os elementos foram encontrados no DOM (importante para depuração!)
    if (!messageButton) {
        console.error("Erro: Botão com ID 'messageButton' não encontrado!");
        return; // Sai da função se o botão não for encontrado
    }
    if (!messageDisplay) {
        console.error("Erro: Parágrafo com ID 'messageDisplay' não encontrado!");
        return; // Sai da função se o parágrafo não for encontrado
    }

    messageButton.addEventListener('click', () => {
        const messages = [
            "Eu vou me tornar o Rei dos Piratas! — Monkey D. Luffy (One Piece)",
            "O que é certo é certo. O que é errado é errado. Eu sou o caçador. Meu alvo é o mal. — Light Yagami (Death Note)",
            "Se você não arriscar a sua vida, não pode criar um futuro. — Eren Yeager (Attack on Titan)",
            "Um herói é aquele que supera as suas próprias tragédias. — All Might (My Hero Academia)",
            "Aqueles que não conseguem reconhecer a si mesmos estão destinados ao fracasso. — Itachi Uchiha (Naruto Shippuden)"
        ];

        const randomIndex = Math.floor(Math.random() * messages.length);
        messageDisplay.textContent = messages[randomIndex];
        messageDisplay.classList.remove('hidden'); // Esta é a linha que mostra a mensagem
    });
});
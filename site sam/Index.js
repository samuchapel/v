function navegarPara(secao) {
            console.log(`Navegando para: ${secao}`);
            alert(`Você clicou em: ${secao.toUpperCase()}\n\nAqui você pode adicionar a lógica para navegar para a seção ${secao}`);
            
            // Adicione sua lógica aqui
            // Por exemplo: window.location.href = `${secao}.html`;
        }

        function iniciarExploracao() {
            console.log('Iniciando exploração...');
            alert('Iniciando exploração do mundo de Panem!\n\nAdicione sua lógica aqui.');
        }

        function saberMais() {
            console.log('Abrindo informações...');
            alert('Aqui você pode adicionar mais informações sobre o projeto!');
        }

        // Animação de entrada
        window.addEventListener('load', () => {
            document.querySelector('.content-text').style.animation = 'fadeIn 1s ease-in';
            document.querySelector('.image-container').style.animation = 'fadeIn 1s ease-in 0.3s both';
        });

        // Adicione o CSS da animação
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
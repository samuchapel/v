function handleMasterLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const accesscode = document.getElementById('accesscode').value;
    const remember = document.getElementById('remember').checked;
    
    console.log('Master login attempt:', { username, accesscode, remember });
    
    // Validação básica do código de acesso (exemplo)
    if (accesscode.replace(/[^A-Z0-9]/g, '').length < 6) {
        alert('Código de acesso inválido!\n\nO código deve ter pelo menos 6 caracteres.');
        return;
    }
    
    // Login OK
    alert(`Bem-vindo ao Painel de Controle, Mestre ${username}!\n\nPreparando sistema de gerenciamento dos Jogos...`);

    // 🔥 Redirecionar após login bem-sucedido
    window.location.href = 'mestre.html';
}

// Animação de entrada
window.addEventListener('load', () => {
    document.querySelector('.login-container').style.animation = 'fadeInUp 0.8s ease';
});

// Formatar código de acesso automaticamente
document.getElementById('accesscode').addEventListener('input', function(e) {
    let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (value.length > 4) {
        value = value.substring(0, 4) + '-' + value.substring(4);
    }
    if (value.length > 9) {
        value = value.substring(0, 9) + '-' + value.substring(9, 12);
    }
    e.target.value = value;
});

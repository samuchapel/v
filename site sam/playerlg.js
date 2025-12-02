function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    console.log('Login attempt:', { username, remember });
    
    // Login OK
    alert(`Bem-vindo, ${username}!\n\nPreparando entrada na arena...`);
    
  
    window.location.href = 'player.html';
}

// Animação de entrada
window.addEventListener('load', () => {
    document.querySelector('.login-container').style.animation = 'fadeInUp 0.8s ease';
});

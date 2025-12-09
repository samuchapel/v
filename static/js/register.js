// Account type selector
const typeOptions = document.querySelectorAll('.type-option');
const accessCodeGroup = document.getElementById('accessCodeGroup');
const masterCodeInput = document.getElementById('masterCode');

typeOptions.forEach(option => {
    option.addEventListener('click', function() {
        typeOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        this.querySelector('input[type="radio"]').checked = true;
        
        const accountType = this.querySelector('input[type="radio"]').value;
        if (accountType === 'master') {
            accessCodeGroup.style.display = 'block';
            masterCodeInput.required = true;
        } else {
            accessCodeGroup.style.display = 'none';
            masterCodeInput.required = false;
        }
    });
});

// Password strength indicator
const passwordInput = document.getElementById('password');
const strengthBars = document.querySelectorAll('.strength-bar');

passwordInput.addEventListener('input', function() {
    const password = this.value;
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    
    strengthBars.forEach((bar, index) => {
        bar.classList.remove('active', 'weak', 'medium', 'strong');
        if (index < strength) {
            bar.classList.add('active');
            if (strength <= 1) bar.classList.add('weak');
            else if (strength <= 2) bar.classList.add('medium');
            else bar.classList.add('strong');
        }
    });
});

// Format master code
document.getElementById('masterCode').addEventListener('input', function(e) {
    let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (value.length > 4) {
        value = value.substring(0, 4) + '-' + value.substring(4);
    }
    if (value.length > 9) {
        value = value.substring(0, 9) + '-' + value.substring(9, 12);
    }
    e.target.value = value;
});

// Form validation and submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('show'));
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    const accountType = document.querySelector('input[name="accountType"]:checked').value;
    const masterCode = document.getElementById('masterCode').value;
    
    let hasErrors = false;
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').classList.add('show');
        hasErrors = true;
    }
    
    // Validate password match
    if (password !== confirmPassword) {
        document.getElementById('passwordError').classList.add('show');
        hasErrors = true;
    }
    
    // Validate master code if master account
    if (accountType === 'master' && masterCode.length < 14) {
        document.getElementById('codeError').classList.add('show');
        hasErrors = true;
    }
    
    // Validate terms
    if (!terms) {
        alert('Você deve aceitar os Termos de Serviço para continuar.');
        hasErrors = true;
    }
    
    if (hasErrors) return;
    
    console.log('Registration data:', {
        firstName,
        lastName,
        username,
        email,
        accountType,
        masterCode: accountType === 'master' ? masterCode : null
    });
    
    if (accountType === 'master') {
        alert(`Bem-vindo à Arena, Mestre ${firstName}!\n\nSua conta de mestre foi criada com sucesso.\nPreparando acesso ao painel de controle...`);
    } else {
        alert(`Bem-vindo à Arena, ${firstName}!\n\nSua conta de jogador foi criada com sucesso.\nPreparando entrada na arena...`);
    }
    
    // Redirect after successful registration
    if (accountType === 'master') {
        window.location.href = 'mestrelg.html';
    } else {
        window.location.href = 'playerlg.html';
    }
});

// Animation on load
window.addEventListener('load', () => {
    document.querySelector('.register-container').style.animation = 'fadeInUp 0.8s ease';
});

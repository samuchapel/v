// =========================================
// 🔗 Conexão com o Supabase
// =========================================
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://SEU-PROJETO.supabase.co"; // 🔥 COLOQUE AQUI O SEU URL REAL
const supabaseKey = "sb_publishable_oQYvlgNxggrXE7EF_jajkw_pNACRETj"; // sua key correta

export const supabase = createClient(supabaseUrl, supabaseKey);

// =========================================
// 🔘 Account type selector
// =========================================
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

// =========================================
// 🔐 Password strength indicator
// =========================================
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

// =========================================
// 🧩 Format master code
// =========================================
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

// =========================================
// 🔥 Função que SALVA no Supabase
// =========================================
async function salvarCadastro(firstName, lastName, username, email, password) {
    
    const { data, error } = await supabase
        .from("cadastrop")
        .insert([
            {
                nome: firstName,
                sobrenome: lastName,
                nome_user: username,
                email: email,
                senha: password
            }
        ]);

    if (error) {
        console.error("❌ ERRO Supabase:", error);
        alert("Erro ao salvar no banco: " + error.message);
        return false;
    }

    console.log("🔥 Salvo com sucesso:", data);
    return true;
}

// =========================================
// 📌 Form validation + envio para Supabase
// =========================================
document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    document.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('show'));
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const terms = document.getElementById('terms').checked;
    const accountType = document.querySelector('input[name="accountType"]:checked').value;
    const masterCode = document.getElementById('masterCode').value.trim();
    
    let hasErrors = false;

    // Email inválido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').classList.add('show');
        hasErrors = true;
    }

    // Senhas diferentes
    if (password !== confirmPassword) {
        document.getElementById('passwordError').classList.add('show');
        hasErrors = true;
    }

    // Código do mestre
    if (accountType === 'master' && masterCode.length < 14) {
        document.getElementById('codeError').classList.add('show');
        hasErrors = true;
    }

    // Termos não aceitos
    if (!terms) {
        alert("Você deve aceitar os Termos.");
        hasErrors = true;
    }

    if (hasErrors) return;

    // 🔥 SALVAR NO BANCO
    const saved = await salvarCadastro(firstName, lastName, username, email, password);

    if (!saved) return;

    // 💬 Mensagens + redirecionamento
    if (accountType === "master") {
        alert(`Bem-vindo à Arena, Mestre ${firstName}!`);
        window.location.href = "mestrelg.html";
    } else {
        alert(`Bem-vindo à Arena, ${firstName}!`);
        window.location.href = "playerlg.html";
    }
});

// =========================================
// 🌟 Animation on load
// =========================================
window.addEventListener('load', () => {
    document.querySelector('.register-container').style.animation = 'fadeInUp 0.8s ease';
});

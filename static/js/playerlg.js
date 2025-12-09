// 🔗 Conexão com o Supabase
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabase = createClient(
    "https://rcwdvxbjqqtnkyriaciy.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjd2R2eGJqcXF0bmt5cmlhY2l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyOTc1ODUsImV4cCI6MjA4MDg3MzU4NX0.eg1zeu6M5-4AiS5LcwX6-4RUxuKi1xAGsMuTO7vzTjI"
);


// Função de login
async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    console.log('Tentando login:', { username, remember });

    // 🔍 Buscar no banco
    const { data, error } = await supabase
        .from("cadastrop")
        .select("*")
        .eq("nome_user", username)
        .eq("senha", senha);

    if (error) {
        console.error("Erro Supabase:", error);
        alert("Erro ao conectar com o banco de dados.");
        return;
    }

    if (!data || data.length === 0) {
        alert("Usuário ou senha incorretos.");
        return;
    }

    // Sucesso
    alert(`Bem-vindo, ${username}!\n\nPreparando entrada na arena...`);
    window.location.href = "player.html";
}

// Evento de submit
document.getElementById('loginForm').addEventListener('submit', handleLogin);

// Animação de entrada
window.addEventListener('load', () => {
    document.querySelector('.login-container').style.animation = 'fadeInUp 0.8s ease';
});

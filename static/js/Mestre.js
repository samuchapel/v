let campanhas = [];

// Carregar campanhas ao iniciar
async function carregarCampanhas() {
    try {
        const campanhasSalvas = localStorage.getItem('campanhas');
        if (campanhasSalvas) {
            campanhas = JSON.parse(campanhasSalvas);
        }
        renderizarCampanhas();
    } catch (error) {
        console.log('Erro ao carregar campanhas:', error);
        renderizarCampanhas();
    }
}

function salvarNoLocalStorage() {
    try {
        localStorage.setItem('campanhas', JSON.stringify(campanhas));
    } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
    }
}

function renderizarCampanhas() {
    const lista = document.getElementById('campanhas-list');
    
    if (campanhas.length === 0) {
        lista.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🎭</div>
                <h3>Nenhuma campanha criada ainda</h3>
                <p>Comece sua jornada criando sua primeira campanha!</p>
            </div>
        `;
        return;
    }

    lista.innerHTML = campanhas.map((campanha, index) => `
        <div class="campanha-card">
            <div class="campanha-header">
                <div>
                    <h3 class="campanha-nome">${campanha.nome}</h3>
                    <p class="campanha-data">Criada em: ${campanha.data}</p>
                </div>
            </div>
            ${campanha.descricao ? `<p class="campanha-descricao">${campanha.descricao}</p>` : ''}
            <div class="campanha-info">
                <div class="info-item">Jogadores: <span>${campanha.jogadores}</span></div>
                ${campanha.local ? `<div class="info-item">Local: <span>${campanha.local}</span></div>` : ''}
            </div>
            <div class="campanha-actions">
                <button class="btn-small" onclick="editarCampanha(${index})">✏️ Editar</button>
                <button class="btn-small" onclick="verDetalhes(${index})">👁️ Detalhes</button>
                <button class="btn-small btn-danger" onclick="excluirCampanha(${index})">🗑️ Excluir</button>
            </div>
        </div>
    `).join('');
}

function salvarCampanha(event) {
    event.preventDefault();

    const nome = document.getElementById('campanha-nome').value;
    const descricao = document.getElementById('campanha-descricao').value;
    const jogadores = document.getElementById('campanha-jogadores').value;
    const local = document.getElementById('campanha-local').value;

    const novaCampanha = {
        id: Date.now(),
        nome,
        descricao,
        jogadores,
        local,
        data: new Date().toLocaleDateString('pt-BR')
    };

    campanhas.push(novaCampanha);
    salvarNoLocalStorage();
    renderizarCampanhas();
    fecharModal();
    document.getElementById('form-campanha').reset();
    alert('✅ Campanha criada com sucesso!');
}

function excluirCampanha(index) {
    if (confirm('Tem certeza que deseja excluir esta campanha?')) {
        campanhas.splice(index, 1);
        salvarNoLocalStorage();
        renderizarCampanhas();
        alert('Campanha excluída com sucesso!');
    }
}

function editarCampanha(index) {
    alert('Funcionalidade de edição em desenvolvimento!');
}

function verDetalhes(index) {
    const campanha = campanhas[index];
    alert(`📋 Detalhes da Campanha\n\n` +
          `Nome: ${campanha.nome}\n` +
          `Jogadores: ${campanha.jogadores}\n` +
          `Local: ${campanha.local || 'Não definido'}\n` +
          `Data de Criação: ${campanha.data}\n\n` +
          `${campanha.descricao || 'Sem descrição'}`);
}

function abrirModalNovaCampanha() {
    document.getElementById('modal-campanha').classList.add('active');
}

function fecharModal() {
    document.getElementById('modal-campanha').classList.remove('active');
}

function mostrarSistema() {
    document.getElementById('modal-sistema').classList.add('active');
}

function fecharModalSistema() {
    document.getElementById('modal-sistema').classList.remove('active');
}

function scrollToCampanhas() {
    document.getElementById('campanhas-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Fechar modal ao clicar fora
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Carregar campanhas ao iniciar a página
    carregarCampanhas();
});
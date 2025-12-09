let personagens = [];
let campanhas = [];

// =============================== INICIALIZAÇÃO ================================
document.addEventListener('DOMContentLoaded', () => {
    carregarDados();
    
    // Fechar modal ao clicar fora
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Inicializar cálculo de pontos
    calcularPontos();
});

// =============================== CARREGAR DADOS ================================
function carregarDados() {
    try {
        // Carregar personagens
        const personagensSalvos = localStorage.getItem('personagens');
        if (personagensSalvos) {
            personagens = JSON.parse(personagensSalvos);
        }

        // Carregar campanhas do mestre
        const campanhasSalvas = localStorage.getItem('campanhas');
        if (campanhasSalvas) {
            campanhas = JSON.parse(campanhasSalvas);
        }

        renderizarPersonagens();
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        renderizarPersonagens();
    }
}

function salvarPersonagensNoLocalStorage() {
    try {
        localStorage.setItem('personagens', JSON.stringify(personagens));
    } catch (error) {
        console.error('Erro ao salvar personagens:', error);
    }
}

// =============================== RENDERIZAR PERSONAGENS ================================
function renderizarPersonagens() {
    const lista = document.getElementById('personagens-list');
    
    if (personagens.length === 0) {
        lista.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🎭</div>
                <h3>Nenhum personagem criado ainda</h3>
                <p>Crie seu primeiro tributo para começar sua aventura!</p>
            </div>
        `;
        return;
    }

    lista.innerHTML = personagens.map((personagem, index) => `
        <div class="personagem-card">
            <div class="personagem-header">
                <h3 class="personagem-nome">${personagem.nome}</h3>
                <div class="personagem-info-row">
                    <span>Distrito ${personagem.distrito}</span>
                    <span>${personagem.idade} anos</span>
                </div>
            </div>
            <div class="personagem-stats">
                <div class="stat-item"><strong>Classe:</strong> ${personagem.classe}</div>
                <div class="stat-item"><strong>FOR:</strong> ${personagem.atributos.forca}</div>
                <div class="stat-item"><strong>DES:</strong> ${personagem.atributos.destreza}</div>
                <div class="stat-item"><strong>CON:</strong> ${personagem.atributos.constituicao}</div>
                <div class="stat-item"><strong>INT:</strong> ${personagem.atributos.inteligencia}</div>
                <div class="stat-item"><strong>SAB:</strong> ${personagem.atributos.sabedoria}</div>
                <div class="stat-item"><strong>CAR:</strong> ${personagem.atributos.carisma}</div>
            </div>
            <div class="personagem-actions">
                <button class="btn-small" onclick="verFicha(${index})">👁️ Ver Ficha</button>
                <button class="btn-small btn-danger" onclick="excluirPersonagem(${index})">🗑️ Excluir</button>
            </div>
        </div>
    `).join('');
}

// =============================== MODAL CAMPANHAS ================================
function abrirCampanhas() {
    const modal = document.getElementById('modal-campanhas');
    const container = document.getElementById('campanhas-disponiveis');
    
    modal.classList.add('active');
    
    if (campanhas.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🎯</div>
                <h3>Nenhuma campanha disponível</h3>
                <p>Aguarde o mestre criar campanhas para você participar!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = campanhas.map((campanha, index) => `
        <div class="campanha-disponivel" onclick="entrarCampanha(${index})">
            <h3 class="campanha-nome-disp">${campanha.nome}</h3>
            ${campanha.descricao ? `<p class="campanha-info-disp">${campanha.descricao}</p>` : ''}
            <p class="campanha-info-disp">
                <strong>Jogadores:</strong> ${campanha.jogadores} | 
                <strong>Local:</strong> ${campanha.local || 'Não definido'}
            </p>
            <p class="campanha-info-disp" style="color: #d4af37;">
                📅 Criada em: ${campanha.data}
            </p>
        </div>
    `).join('');
}

function entrarCampanha(index) {
    const campanha = campanhas[index];
    alert(`✅ Você entrou na campanha: ${campanha.nome}!\n\nAguarde o mestre iniciar a sessão.`);
    fecharModal('modal-campanhas');
}

// =============================== MODAL CRIAR PERSONAGEM ================================
function abrirCriarPersonagem() {
    document.getElementById('modal-personagem').classList.add('active');
    document.getElementById('form-personagem').reset();
    calcularPontos();
}

function calcularPontos() {
    const atributos = ['forca', 'destreza', 'constituicao', 'inteligencia', 'sabedoria', 'carisma'];
    let total = 0;
    
    atributos.forEach(attr => {
        const valor = parseInt(document.getElementById(`attr-${attr}`).value) || 8;
        total += valor;
    });
    
    const pontosRestantes = 75 - total; // 6 atributos * 8 = 48, + 27 pontos = 75
    document.getElementById('pontos-restantes').textContent = pontosRestantes;
    
    // Validar se está dentro do limite
    if (pontosRestantes < 0) {
        document.getElementById('pontos-restantes').style.color = '#ff4444';
    } else {
        document.getElementById('pontos-restantes').style.color = '#d4af37';
    }
}

function salvarPersonagem(event) {
    event.preventDefault();
    
    // Verificar pontos de atributos
    const pontosRestantes = parseInt(document.getElementById('pontos-restantes').textContent);
    if (pontosRestantes !== 0) {
        alert('⚠️ Você deve distribuir todos os 27 pontos de atributos!');
        return;
    }

    const novoPersonagem = {
        id: Date.now(),
        nome: document.getElementById('personagem-nome').value,
        idade: document.getElementById('personagem-idade').value,
        distrito: document.getElementById('personagem-distrito').value,
        classe: document.getElementById('personagem-classe').value,
        historia: document.getElementById('personagem-historia').value,
        atributos: {
            forca: parseInt(document.getElementById('attr-forca').value),
            destreza: parseInt(document.getElementById('attr-destreza').value),
            constituicao: parseInt(document.getElementById('attr-constituicao').value),
            inteligencia: parseInt(document.getElementById('attr-inteligencia').value),
            sabedoria: parseInt(document.getElementById('attr-sabedoria').value),
            carisma: parseInt(document.getElementById('attr-carisma').value)
        },
        dataCriacao: new Date().toLocaleDateString('pt-BR')
    };

    personagens.push(novoPersonagem);
    salvarPersonagensNoLocalStorage();
    renderizarPersonagens();
    fecharModal('modal-personagem');
    alert('✅ Personagem criado com sucesso! Que os jogos comecem!');
}

function verFicha(index) {
    const personagem = personagens[index];
    
    const fichaHTML = `
        <div style="background: rgba(30, 30, 30, 0.95); color: white; padding: 30px; border-radius: 15px; max-width: 600px; margin: 20px auto; border: 2px solid #d4af37;">
            <h2 style="color: #d4af37; text-align: center; margin-bottom: 20px; font-size: 28px;">
                📜 Ficha de Personagem
            </h2>
            
            <div style="margin-bottom: 20px; border-bottom: 2px solid #d4af37; padding-bottom: 15px;">
                <h3 style="color: #d4af37; margin-bottom: 10px;">Informações Básicas</h3>
                <p><strong style="color: #d4af37;">Nome:</strong> ${personagem.nome}</p>
                <p><strong style="color: #d4af37;">Idade:</strong> ${personagem.idade} anos</p>
                <p><strong style="color: #d4af37;">Distrito:</strong> ${personagem.distrito}</p>
                <p><strong style="color: #d4af37;">Classe:</strong> ${personagem.classe}</p>
            </div>
            
            <div style="margin-bottom: 20px; border-bottom: 2px solid #d4af37; padding-bottom: 15px;">
                <h3 style="color: #d4af37; margin-bottom: 10px;">Atributos</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                    <p><strong style="color: #d4af37;">Força:</strong> ${personagem.atributos.forca} (${calcularModificador(personagem.atributos.forca)})</p>
                    <p><strong style="color: #d4af37;">Destreza:</strong> ${personagem.atributos.destreza} (${calcularModificador(personagem.atributos.destreza)})</p>
                    <p><strong style="color: #d4af37;">Constituição:</strong> ${personagem.atributos.constituicao} (${calcularModificador(personagem.atributos.constituicao)})</p>
                    <p><strong style="color: #d4af37;">Inteligência:</strong> ${personagem.atributos.inteligencia} (${calcularModificador(personagem.atributos.inteligencia)})</p>
                    <p><strong style="color: #d4af37;">Sabedoria:</strong> ${personagem.atributos.sabedoria} (${calcularModificador(personagem.atributos.sabedoria)})</p>
                    <p><strong style="color: #d4af37;">Carisma:</strong> ${personagem.atributos.carisma} (${calcularModificador(personagem.atributos.carisma)})</p>
                </div>
            </div>
            
            ${personagem.historia ? `
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #d4af37; margin-bottom: 10px;">História</h3>
                    <p style="line-height: 1.6;">${personagem.historia}</p>
                </div>
            ` : ''}
            
            <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
                Criado em: ${personagem.dataCriacao}
            </p>
        </div>
    `;
    
    const novaJanela = window.open('', '_blank', 'width=700,height=800');
    novaJanela.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ficha - ${personagem.nome}</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d2d2d 100%);
                    margin: 0;
                    padding: 20px;
                }
                @media print {
                    body { background: white; }
                }
            </style>
        </head>
        <body>
            ${fichaHTML}
            <div style="text-align: center; margin-top: 20px;">
                <button onclick="window.print()" style="background: #d4af37; color: #1a1a1a; border: none; padding: 12px 30px; border-radius: 20px; font-size: 16px; font-weight: 600; cursor: pointer;">
                    🖨️ Imprimir Ficha
                </button>
                <button onclick="window.close()" style="background: #555; color: white; border: none; padding: 12px 30px; border-radius: 20px; font-size: 16px; font-weight: 600; cursor: pointer; margin-left: 10px;">
                    Fechar
                </button>
            </div>
        </body>
        </html>
    `);
}

function calcularModificador(valor) {
    const mod = Math.floor((valor - 10) / 2);
    return mod >= 0 ? `+${mod}` : mod.toString();
}

function excluirPersonagem(index) {
    if (confirm('⚠️ Tem certeza que deseja excluir este personagem? Esta ação não pode ser desfeita!')) {
        personagens.splice(index, 1);
        salvarPersonagensNoLocalStorage();
        renderizarPersonagens();
        alert('✅ Personagem excluído com sucesso!');
    }
}

// =============================== MODAL LIVRO ================================
function abrirLivro() {
    document.getElementById('modal-livro').classList.add('active');
}

// =============================== FUNÇÕES GERAIS ================================
function fecharModal(modalId) {
    document.getElementById(modalId).classList.remove('active');

};

const modalContent = {
    projeto: {
        title: "Sobre o Projeto",
        content: `
            <p>Este site foi desenvolvido por <span class="highlight">Chapeleiro</span> como uma ferramenta interativa e colaborativa para a comunidade do servidor Discord <span class="highlight">"Jogos Insanys"</span>.</p>
            
            <div class="info-box">
                <h3>Objetivos do projeto:</h3>
                <ul>
                    <li>Fornecer informações organizadas sobre o universo de Jogos Vorazes</li>
                    <li>Criar uma experiência visual imersiva para os membros da comunidade</li>
                    <li>Servir como material de referência para RPGs e discussões no servidor</li>
                    <li>Expandir criativamente o universo com conteúdo original da comunidade</li>
                </ul>
            </div>
        `
    },
    conteudo: {
        title: "Conteúdo em Evolução",
        content: `
            <p>Este é um projeto <span class="highlight">não oficial, sem fins lucrativos</span> e em constante desenvolvimento. Todo o conteúdo é criado com fins de entretenimento e educação para a comunidade de fãs.</p>
            
            <p><span class="highlight">⚠️ Importante:</span> Como se trata de um projeto colaborativo e em evolução, nomes, descrições, histórias, conceitos e ideias apresentadas neste site <span class="highlight">podem ser alterados, atualizados ou removidos a qualquer momento</span> para:</p>
            
            <ul>
                <li>Melhorar a experiência do usuário</li>
                <li>Corrigir inconsistências no conteúdo</li>
                <li>Adaptar-se ao feedback da comunidade</li>
                <li>Expandir o universo com novas ideias</li>
                <li>Manter a coerência narrativa</li>
            </ul>
            
            <p>O conteúdo não é definitivo e será atualizado conforme necessário.</p>
        `
    },
    direitos: {
        title: "Direitos Autorais",
        content: `
            <p>Reconhecemos e respeitamos que o universo, personagens e conceitos originais de "Jogos Vorazes" são propriedade intelectual de <span class="highlight">Suzanne Collins</span> e <span class="highlight">Lionsgate Entertainment</span>.</p>
            
            <h3>Uso Justo (Fair Use)</h3>
            <p>Este site utiliza esses conceitos sob o princípio de uso justo para fins de:</p>
            <ul>
                <li>Criação de conteúdo transformativo por fãs</li>
                <li>Discussão e análise crítica da obra</li>
                <li>Entretenimento não comercial</li>
                <li>Educação e desenvolvimento criativo da comunidade</li>
            </ul>
            
            <h3>Conteúdo Original</h3>
            <p>Todo conteúdo original criado especificamente para este projeto (textos personalizados, designs, código, histórias expandidas) pertence ao desenvolvedor e à comunidade "Jogos Insanys".</p>
            
            <div class="info-box">
                <p><strong>Nota:</strong> Este é um projeto de fãs sem afiliação oficial com Suzanne Collins ou Lionsgate.</p>
            </div>
        `
    },
    uso: {
        title: "Regras de Uso",
        content: `
            <p>Ao acessar e utilizar este site, você concorda em:</p>
            
            <div class="info-box">
                <h3>✓ Permitido:</h3>
                <ul>
                    <li>Navegar e explorar todo o conteúdo do site</li>
                    <li>Usar as informações para RPGs e discussões na comunidade</li>
                    <li>Compartilhar links do site nas redes sociais</li>
                    <li>Sugerir melhorias e reportar erros</li>
                    <li>Usar o conteúdo para fins pessoais e não comerciais</li>
                </ul>
            </div>
            
            <div class="info-box">
                <h3>✗ Não Permitido:</h3>
                <ul>
                    <li>Copiar ou redistribuir o conteúdo sem autorização</li>
                    <li>Usar o conteúdo para fins comerciais</li>
                    <li>Tentar hackear, danificar ou sobrecarregar o site</li>
                    <li>Remover créditos ou atribuições do desenvolvedor</li>
                    <li>Desrespeitar os direitos autorais da obra original</li>
                </ul>
            </div>
            
            <p><span class="highlight">Importante:</span> Ao compartilhar conteúdo do site, dê crédito ao projeto e à comunidade "Jogos Insanys".</p>
        `
    },
    discord: {
        title: "Comunidade Discord",
        content: `
            <p>Este projeto está diretamente vinculado ao servidor Discord <span class="discord-badge" style="background: #5865F2; color: white; padding: 5px 12px; border-radius: 6px;">Jogos Insanys</span></p>
            
            <h3>Por que participar?</h3>
            <ul>
                <li>Discutir sobre o universo de Jogos Vorazes</li>
                <li>Participar de RPGs e eventos temáticos</li>
                <li>Contribuir com ideias para o site</li>
                <li>Conhecer outros fãs da franquia</li>
                <li>Receber updates sobre novas funcionalidades</li>
            </ul>
            
            <h3>Como contribuir com o projeto:</h3>
            <div class="info-box">
                <ul>
                    <li><strong>Sugestões:</strong> Envie ideias para novos distritos, personagens ou armas</li>
                    <li><strong>Correções:</strong> Reporte erros ou inconsistências encontradas</li>
                    <li><strong>Feedback:</strong> Compartilhe sua experiência usando o site</li>
                    <li><strong>Conteúdo:</strong> Sugira histórias ou conceitos para serem adicionados</li>
                </ul>
            </div>
            
            <p>Encorajamos todos os usuários a participar ativamente da comunidade!</p>
        `
    },
    atualizacoes: {
        title: "Modificações e Atualizações",
        content: `
            <p>O site está em <span class="highlight">constante evolução</span>. Reservamos o direito de:</p>
            
            <h3>Alterações de Conteúdo</h3>
            <ul>
                <li>Adicionar novos distritos e personagens</li>
                <li>Modificar descrições e histórias existentes</li>
                <li>Remover conteúdo que não se encaixe mais no projeto</li>
                <li>Expandir seções com base no feedback</li>
            </ul>
            
            <h3>Melhorias Técnicas</h3>
            <ul>
                <li>Atualizar o design e layout do site</li>
                <li>Adicionar novas funcionalidades e recursos</li>
                <li>Otimizar performance e velocidade</li>
                <li>Corrigir bugs e problemas técnicos</li>
            </ul>
            
            <h3>Política de Termos</h3>
            <ul>
                <li>Atualizar estes Termos de Serviço quando necessário</li>
                <li>Adicionar novas regras conforme o projeto cresce</li>
            </ul>
            
            <div class="info-box">
                <p><strong>📢 Comunicação:</strong> Mudanças significativas serão comunicadas através do servidor Discord "Jogos Insanys".</p>
            </div>
            
            <p>Recomendamos revisar periodicamente esta página para se manter atualizado.</p>
        `
    },
    classificacao: {
        title: "Classificação de Conteúdo",
        content: `
            <p>Este site contém temas relacionados ao universo de Jogos Vorazes, incluindo:</p>
            
            <div class="info-box">
                <h3>⚠️ Conteúdo Presente:</h3>
                <ul>
                    <li><strong>Violência Fictícia:</strong> Referências a combate e arena de batalha</li>
                    <li><strong>Temas Distópicos:</strong> Discussões sobre sistemas opressivos</li>
                    <li><strong>Sobrevivência:</strong> Cenários de competição extrema</li>
                    <li><strong>Perda e Sacrifício:</strong> Temas emocionalmente intensos</li>
                </ul>
            </div>
            
            <h3>Classificação Recomendada</h3>
            <p>Seguindo a classificação da obra original de Jogos Vorazes:</p>
            <ul>
                <li><span class="highlight">Recomendado para maiores de 13 anos</span></li>
                <li>Supervisão parental sugerida para menores de 13 anos</li>
                <li>O conteúdo é apresentado de forma contextualizada e educativa</li>
            </ul>
            
            <h3>Abordagem do Conteúdo</h3>
            <p>Todo conteúdo sensível é tratado com:</p>
            <ul>
                <li>Contexto narrativo apropriado</li>
                <li>Foco em estratégia e história, não em violência gratuita</li>
                <li>Respeito aos temas originais da obra</li>
                <li>Objetivo educativo e de entretenimento</li>
            </ul>
        `
    },
    contato: {
        title: "Contato e Suporte",
        content: `
            <h3>Como entrar em contato</h3>
            
            <div class="info-box">
                <p><strong>👤 Desenvolvedor:</strong> Chapeleiro</p>
                <p><strong>💬 Comunidade:</strong> Servidor Discord "Jogos Insanys"</p>
                <p><strong>🌐 Plataforma:</strong> Projeto Web Jogos Vorazes</p>
            </div>
            
            <h3>Motivos para Contato</h3>
            <ul>
                <li><strong>Dúvidas:</strong> Tire questões sobre o funcionamento do site</li>
                <li><strong>Sugestões:</strong> Envie ideias para melhorar o projeto</li>
                <li><strong>Bugs:</strong> Reporte problemas técnicos encontrados</li>
                <li><strong>Contribuições:</strong> Ofereça ajuda com conteúdo ou código</li>
                <li><strong>Parcerias:</strong> Discuta colaborações com o projeto</li>
            </ul>
            
            <h3>Tempo de Resposta</h3>
            <p>Este é um projeto mantido por fãs em seu tempo livre. Faremos o possível para responder todas as mensagens, mas o tempo de resposta pode variar.</p>
            
            <div class="info-box">
                <p><strong>💡 Dica:</strong> Para respostas mais rápidas, participe das discussões no servidor Discord onde a comunidade está mais ativa!</p>
            </div>
            
            <p style="text-align: center; margin-top: 25px; color: #f0c654;">Última atualização: Dezembro de 2025 | Versão 1.0</p>
        `
    }
};

function openModal(type) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    const content = modalContent[type];
    title.textContent = content.title;
    body.innerHTML = content.content;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (!event || event.target === document.getElementById('modal')) {
        const modal = document.getElementById('modal');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

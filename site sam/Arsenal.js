// ======================================================
// ANIMAÇÃO DE ENTRADA AO CARREGAR A PÁGINA
// ======================================================
window.addEventListener("load", () => {
    const hero = document.getElementById("heroContainer");
    const main = document.getElementById("mainContainer");

    hero.classList.remove("fade-out");
    main.classList.remove("fade-out");

    setTimeout(() => hero.classList.add("fade-in"), 100);
    setTimeout(() => main.classList.add("fade-in"), 300);

    // 👉 INICIAR DIRETAMENTE COM OS ITENS GERAIS
    mudarArsenalStart('geral');
});

// ======================================================
// POPUP
// ======================================================
function abrirPopup(nome, descricao) {
    document.getElementById("popupTitulo").innerText = nome;
    document.getElementById("popupDescricao").innerText = descricao;

    // imagem opcional, não quebra se não existir
    document.getElementById("popupImg").src = "img/armas/" + nome + ".png";

    document.getElementById("popup").classList.remove("hidden");
}

document.getElementById("popupClose").addEventListener("click", () => {
    document.getElementById("popup").classList.add("hidden");
});

window.addEventListener("click", (e) => {
    const popup = document.getElementById("popup");
    if (e.target === popup) popup.classList.add("hidden");
});

// ======================================================
// FUNÇÃO NORMAL DE TROCAR CATEGORIA PELO CLIQUE
// ======================================================
function mudarArsenal(tipo) {
    const hero = document.getElementById("heroContainer");
    const main = document.getElementById("mainContainer");

    // remover botão ativo antigo
    document.querySelectorAll('.btn-area button').forEach(btn =>
        btn.classList.remove('active')
    );

    // ✔ impedir erro quando não há event.target
    if (event && event.target) {
        event.target.classList.add('active');
    }

    hero.classList.remove("fade-in");
    main.classList.remove("fade-in");

    hero.classList.add("fade-out");
    main.classList.add("fade-out");

    setTimeout(() => {
        atualizarConteudo(tipo);

        hero.classList.remove("fade-out");
        main.classList.remove("fade-out");

        setTimeout(() => hero.classList.add("fade-in"), 50);
        setTimeout(() => main.classList.add("fade-in"), 150);
    }, 500);
}

// ======================================================
// FUNÇÃO ESPECIAL PARA O CARREGAMENTO INICIAL
// (ativa o botão Itens Gerais sem clique humano)
// ======================================================

// ======================================================
// BANCO DE DADOS DO ARSENAL
// ======================================================
const arsenal = {
    simples: {
        tabela: [
        ["Arma", "Atributo", "Peso"],
        ["Faca de Combate", "Agilidade", "0.4kg"],
        ["Porrete Leve", "Força", "0.8kg"],
        ["Adaga Afiada", "Agilidade", "0.3kg"],
        ["Bastão de Madeira", "Vigor", "0.9kg"],
        ["Clava Pequena", "Força", "1.0kg"],
        ["Foice Curta", "Agilidade", "1.2kg"],
        ["Estilingue Reforçado", "Agilidade", "0.2kg"],
        ["Punhal Rústico", "Agilidade", "0.5kg"],
        ["Martelinho de Forja", "Força", "1.1kg"],
        ["Chicote Leve", "Agilidade", "0.6kg"],
        ["Canivete Simples", "Agilidade", "0.2kg"],
        ["Taco de Madeira", "Força", "1.3kg"],
        ["Corrente Curta", "Vigor", "0.7kg"],
        ["Espeto de Ferro", "Agilidade", "0.6kg"],
        ["Ferro de Carvão", "Força", "1.4kg"],
        ["Chave Inglesa Pequena", "Força", "0.9kg"],
        ["Peixeira", "Agilidade", "0.5kg"],
        ["Estaca de Madeira", "Vigor", "0.4kg"],
        ["Quebra-Cabeça Metálico", "Força", "1.0kg"],
        ["Ripa Reforçada", "Vigor", "0.8kg"]
    ],
        descricoes: {
    "Faca de Combate":
        "Lâmina versátil usada tanto em sobrevivência quanto em combate.\n\n" +
        "🟡 Dano: 1d8 cortante.\n" +
        "🟡 Pode ser arremessada (alcance 6m).\n" +
        "🟡 Pode realizar ataque rápido com -2 acerto.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Alcance muito curto.\n" +
        "🟡 Pode quebrar ao forçar em superfícies duras.",

    "Porrete Leve":
        "Arma simples feita de madeira ou metal leve.\n\n" +
        "🟡 Dano: 1d6 contundente.\n" +
        "🟡 Fácil de manusear: +1 em testes de ataque.\n" +
        "🟡 Bom para atordoar com CD 11.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Pouco dano contra oponentes grandes.\n" +
        "🟡 Pode rachar com impactos fortes.",

    "Adaga Afiada":
        "Arma curta extremamente rápida.\n\n" +
        "🟡 Dano: 1d6 cortante.\n" +
        "🟡 Pode atacar duas vezes se usada com outra arma leve.\n" +
        "🟡 Ideal para ataques furtivos.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Alcance minúsculo.\n" +
        "🟡 Se usada para bloquear, pode quebrar facilmente.",

    "Bastão de Madeira":
        "Bastão simples, resistente e fácil de improvisar.\n\n" +
        "🟡 Dano: 1d6 contundente.\n" +
        "🟡 Pode empurrar inimigos (Atletismo CD 12).\n" +
        "🟡 Forte contra animais pequenos.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Fraco contra armaduras improvisadas.\n" +
        "🟡 Pode quebrar se molhado ou velho.",

    "Clava Pequena":
        "Porrete curto com cabeça reforçada.\n\n" +
        "🟡 Dano: 1d8 contundente.\n" +
        "🟡 Chance de atordoar (CD 12).\n" +
        "🟡 Leve e rápida de usar.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Pouco eficiente contra cobertura.\n" +
        "🟡 Alcance curto.",

    "Foice Curta":
        "Ferramenta agrícola transformada em arma fatal.\n\n" +
        "🟡 Dano: 1d8 cortante.\n" +
        "🟡 Pode puxar membros ou objetos (CD 12).\n" +
        "🟡 Forte contra vegetação densa.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Formato torna difícil bloquear ataques.\n" +
        "🟡 Pode prender no alvo.",

    "Estilingue Reforçado":
        "Arma silenciosa usada para ataques rápidos à distância.\n\n" +
        "🟡 Dano: 1d4 perfurante/concussivo.\n" +
        "🟡 Alcance: 15–20 metros.\n" +
        "🟡 Silencioso e prático.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Baixo dano.\n" +
        "🟡 Exige precisão (Acrobacia CD 12).",

    "Punhal Rústico":
        "Arma artesanal, pesada e desequilibrada, mas mortal.\n\n" +
        "🟡 Dano: 1d6 cortante.\n" +
        "🟡 Bom para emboscadas.\n" +
        "🟡 Pode causar sangramento com CD 12.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Lâmina instável.\n" +
        "🟡 Difícil de arremessar.",

    "Martelinho de Forja":
        "Martelo pequeno usado em metalurgia.\n\n" +
        "🟡 Dano: 1d6 contundente.\n" +
        "🟡 Pode danificar objetos metálicos (CD 12).\n" +
        "🟡 Forte contra pequenos mecanismos.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Alcance mínimo.\n" +
        "🟡 Pode escorregar se mãos estiverem suadas.",

    "Chicote Leve":
        "Arma flexível com bom alcance e controle.\n\n" +
        "🟡 Dano: 1d4 cortante.\n" +
        "🟡 Alcance: 3 metros.\n" +
        "🟡 Pode desarmar (CD 13).\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Baixo dano.\n" +
        "🟡 Quase inútil em espaços apertados.",

    "Canivete Simples":
        "Canivete dobrável prático e rápido.\n\n" +
        "🟡 Dano: 1d4 cortante.\n" +
        "🟡 Ótimo para furtividade.\n" +
        "🟡 Pode ser escondido facilmente.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Mecanismo pode travar.\n" +
        "🟡 Não aguenta impacto forte.",

    "Taco de Madeira":
        "Improviso comum entre tributos sem armas.\n\n" +
        "🟡 Dano: 1d6 contundente.\n" +
        "🟡 Resistente e fácil de usar.\n" +
        "🟡 Bom para intimidar.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Quebra com impactos fortes.\n" +
        "🟡 Pouco dano contra criaturas grandes.",

    "Corrente Curta":
        "Corrente metálica compacta usada para chicotear ou enroscar.\n\n" +
        "🟡 Dano: 1d6 contundente.\n" +
        "🟡 Pode enroscar membros (CD 12).\n" +
        "🟡 Boa para desarmar.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Difícil de controlar.\n" +
        "🟡 Pode escapar da mão facilmente.",

    "Espeto de Ferro":
        "Barra fina pontiaguda usada para perfuração direta.\n\n" +
        "🟡 Dano: 1d8 perfurante.\n" +
        "🟡 Ótimo para golpes rápidos.\n" +
        "🟡 Pode perfurar madeira leve.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Pode entortar.\n" +
        "🟡 Alcance mínimo.",

    "Ferro de Carvão":
        "Ferramenta de cozinha pesada, usada como arma improvisada.\n\n" +
        "🟡 Dano: 1d8 contundente.\n" +
        "🟡 Forte contra superfícies rígidas.\n" +
        "🟡 Pode empurrar inimigos.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Extremamente lento.\n" +
        "🟡 Cansa rapidamente o usuário.",

    "Chave Inglesa Pequena":
        "Ferramenta metálica resistente.\n\n" +
        "🟡 Dano: 1d6 contundente.\n" +
        "🟡 Boa para danificar engrenagens.\n" +
        "🟡 Alta durabilidade.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Alcance curto.\n" +
        "🟡 Peso desbalanceado.",

    "Peixeira":
        "Lâmina longa usada para corte rápido e profundo.\n\n" +
        "🟡 Dano: 1d10 cortante.\n" +
        "🟡 Excelente para ataques rápidos.\n" +
        "🟡 Forte contra carne e couro leve.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Difícil de bloquear ataques.\n" +
        "🟡 Pode entortar na ponta.",

    "Estaca de Madeira":
        "Estaca afiada improvisada como arma perfurante.\n\n" +
        "🟡 Dano: 1d8 perfurante.\n" +
        "🟡 Pode ser arremessada.\n" +
        "🟡 Leve e fácil de carregar.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Extremamente frágil.\n" +
        "🟡 Perde a ponta rápido.",

    "Quebra-Cabeça Metálico":
        "Peça metálica improvisada usada como soco metálico.\n\n" +
        "🟡 Dano: 1d6 contundente.\n" +
        "🟡 Fácil de usar em ataques rápidos.\n" +
        "🟡 Pode causar atordoamento leve.\n\n" +
        "🟡 Fraqueças:\n" +
        "🟡 Exige combate corpo a corpo extremo.\n" +
        "🟡 Ineficiente contra oponentes grandes.",

    "Ripa Reforçada":
        "Madeira reforçada com metal ou arames.\n\n" +
        "🟡 Dano: 1d8 contundente.\n" +
        "🟡 Resistência maior que um taco comum.\n" +
        "🟡 Pode quebrar ossos mais facilmente.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Mais pesada que parece.\n" +
        "🟡 Pode lascar e machucar o usuário."
}

    },

    tatica: {
        tabela: [
        ["Arma", "Atributo", "Alcance"],
        ["Arco Composto", "Agilidade", "70m"],
        ["Besta Compacta", "Agilidade", "50m"],
        ["Faca Tática Serrilhada", "Agilidade", "—"],
        ["Lança Modular", "Vigor", "2.2m"],
        ["Arpão Urbano", "Agilidade", "30m"],
        ["Punhal Militar", "Agilidade", "—"],
        ["Dardo Equilibrado", "Agilidade", "40m"],
        ["Tonfa Tática", "Força", "—"],
        ["Bastão Retrátil", "Força", "—"],
        ["Garra de Escalada", "Agilidade", "—"],
        ["Arremessador de Facas", "Agilidade", "20m"],
        ["Shuriken Metálico", "Agilidade", "15m"],
        ["Boleadeira", "Agilidade", "25m"],
        ["Lança de Fibra", "Vigor", "3m"],
        ["Chicote Tático de Aço", "Agilidade", "2m"]
    ],
        descricoes: {
    "Arco Composto":
        "Arco moderno com polias, garantindo tiros estáveis e extremamente potentes.\n\n" +
        "🟡 Dano: 1d12 perfurante.\n" +
        "🟡 Alcance eficaz: 60–70m.\n" +
        "🟡 Tiros silenciosos, difíceis de rastrear.\n" +
        "🟡 Pode realizar tiro de precisão (CD 15) para dobro de dano.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Requer força e técnica.\n" +
        "🟡 Cordas podem arrebentar em chuva forte.\n" +
        "🟡 Baixa cadência de tiro.",

    "Besta Compacta":
        "Arma de disparo mecânico leve e silenciosa.\n\n" +
        "🟡 Dano: 2d6 perfurante.\n" +
        "🟡 Alcance 40–50m.\n" +
        "🟡 Pode causar sangramento (CD 12).\n" +
        "🟡 Muito precisa.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Recarregamento lento.\n" +
        "🟡 Poucos virotes disponíveis.\n" +
        "🟡 Falha se a corda estiver molhada demais.",

    "Faca Tática Serrilhada":
        "Lâmina militar com serrilha agressiva.\n\n" +
        "🟡 Dano: 1d8 cortante.\n" +
        "🟡 Pode causar sangramento intenso (CD 14).\n" +
        "🟡 Serve também como ferramenta.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Péssima para arremesso.\n" +
        "🟡 Difícil de limpar, pode enferrujar rápido.",

    "Lança Modular":
        "Arma desmontável utilizada tanto para combate quanto arremesso.\n\n" +
        "🟡 Dano: 1d10 perfurante.\n" +
        "🟡 Pode ser usada a 1 ou 2 mãos.\n" +
        "🟡 Arremessável até 12m.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Junta central pode afrouxar com impacto.\n" +
        "🟡 Difícil de sacar rapidamente desmontada.",

    "Arpão Urbano":
        "Arpão portátil usado para perfurar e puxar alvos.\n\n" +
        "🟡 Dano: 1d12 perfurante.\n" +
        "🟡 Pode puxar inimigos (Atletismo CD 14).\n" +
        "🟡 Excelente contra barricadas.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Pesado e lento.\n" +
        "🟡 Cabo pode enroscar.\n" +
        "🟡 Ruim para ataques consecutivos.",

    "Punhal Militar":
        "Faca curta e equilibrada desenvolvida para combate rápido.\n\n" +
        "🟡 Dano: 1d6 cortante.\n" +
        "🟡 Perfeito para golpes precisos.\n" +
        "🟡 Pode ser ocultado em roupas.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Baixo alcance.\n" +
        "🟡 Pouco útil contra criaturas grandes.",

    "Dardo Equilibrado":
        "Dardo projetado para arremessos de alta precisão.\n\n" +
        "🟡 Dano: 1d6 perfurante.\n" +
        "🟡 Alcance de 15–20m.\n" +
        "🟡 Pode ser arremessado em sequência.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Pequeno: fácil de perder.\n" +
        "🟡 Pouca força contra armaduras improvisadas.",

    "Tonfa Tática":
        "Arma policial adaptada para defesa e ataque.\n\n" +
        "🟡 Dano: 1d8 contundente.\n" +
        "🟡 Excelente para bloquear golpes (+2 defesa).\n" +
        "🟡 Pode desarmar (CD 14).\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Exige técnica.\n" +
        "🟡 Pouco alcance.",

    "Bastão Retrátil":
        "Bastão metálico que se estende com um movimento rápido.\n\n" +
        "🟡 Dano: 1d6 contundente.\n" +
        "🟡 Focado em rapidez.\n" +
        "🟡 Ótimo para imobilizar membros (CD 13).\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Pode enrolar se muito molhado.\n" +
        "🟡 Não suporta pancadas muito fortes.",

    "Garra de Escalada":
        "Ferramenta com ganchos usada para escalar, improvisada como arma.\n\n" +
        "🟡 Dano: 1d6 perfurante.\n" +
        "🟡 Pode prender superfícies (Atletismo CD 12).\n" +
        "🟡 Serve para puxar objetos.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Pouco dano.\n" +
        "🟡 Pode prender em roupas do usuário.",

    "Arremessador de Facas":
        "Dispositivo mecânico que lança facas com força.\n\n" +
        "🟡 Dano: 1d8 perfurante por faca.\n" +
        "🟡 Pode disparar rapidamente (2 tiros por turno).\n" +
        "🟡 Boa precisão até 15m.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Requer recarga frequente.\n" +
        "🟡 Mecanismo falha com sujeira ou areia.",

    "Shuriken Metálico":
        "Estrelas afiadas usadas para ataque à distância.\n\n" +
        "🟡 Dano: 1d4 cortante.\n" +
        "🟡 Rápidas e silenciosas.\n" +
        "🟡 Podem ser arremessadas em múltiplos alvos.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Baixo poder de perfuração.\n" +
        "🟡 Fáceis de perder no mato.",

    "Boleadeira":
        "Cordas com pesos usadas para imobilizar pernas.\n\n" +
        "🟡 Dano: 1d4 contundente (impacto).\n" +
        "🟡 Imobiliza alvo (Acrobacia CD 14 para se soltar).\n" +
        "🟡 Ótimo para capturar mutações rápidas.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Difícil de usar em locais apertados.\n" +
        "🟡 Se errar, enrola no próprio usuário.",

    "Lança de Fibra":
        "Lança leve feita de materiais sintéticos duráveis.\n\n" +
        "🟡 Dano: 1d10 perfurante.\n" +
        "🟡 Arremessável (12m) com boa precisão.\n" +
        "🟡 Leve e resistente à água.\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Pode quebrar na ponta.\n" +
        "🟡 Difícil de usar como arma de bloqueio.",

    "Chicote Tático de Aço":
        "Chicote reforçado com cabos metálicos internos.\n\n" +
        "🟡 Dano: 1d6 cortante.\n" +
        "🟡 Alcance 3m.\n" +
        "🟡 Pode agarrar membros ou armas (CD 14).\n\n" +
        "🟡 Fraquezas:\n" +
        "🟡 Difícil de controlar.\n" +
        "🟡 Ineficaz contra armaduras mesmo leves."
}

    },

    pesada: {
        tabela: [
        ["Arma", "Atributo", "Peso"],
        ["Martelo de Guerra", "Força", "5kg"],
        ["Lança Pesada", "Agilidade", "4.1kg"],
        ["Tridente Reforçado", "Vigor", "3.8kg"],
        ["Machado Duplo", "Força", "6kg"],
        ["Marreta Militar", "Força", "6.5kg"],
        ["Clava de Ferro", "Agilidade", "5.3kg"],
        ["Espadão Antigo", "Agilidade", "4.8kg"],
        ["Foice de Batalha", "Agilidade", "5.0kg"],
        ["Machadão Tribal", "Vigor", "5.4kg"],
        ["Punho de Impacto", "Vigor", "3.5kg"]
    ],
        descricoes: {
    "Martelo de Guerra":
        "Um martelo colossal feito para esmagar armaduras e ossos. Requer enorme força para ser manejado.\n\n" +
        "🟡 Dano: 2d12 contundente.\n" +
        "🟡 Teste de Força CD 10 para atacar sem perder equilíbrio.\n" +
        "🟡 Em acerto crítico, pode derrubar o alvo no chão.\n" +
        "🟡 Ótimo contra escudos ou coberturas leves.",

    "Lança Pesada":
        "Arma de haste longa com ponta reforçada, projetada para perfurar defesas densas.\n\n" +
        "🟡 Dano: 1d12 perfurante.\n" +
        "🟡 Ataques têm alcance de 3 metros.\n" +
        "🟡 Se usada com ambas as mãos, ganha +4 de dano.\n" +
        "🟡 Pode impedir avanço inimigo com Atletismo CD 13.",

    "Tridente Reforçado":
        "Arma naval clássica com três pontas afiadas, ideal para controle de campo.\n\n" +
        "🟡 Dano: 1d10 perfurante por cada dente.\n" +
        "🟡 Pode desarmar com Atletismo CD 14.\n" +
        "🟡 Em terreno úmido, recebe +1 acerto devido à estabilidade.\n" +
        "🟡 Ferramenta excelente para pescaria forçada ou empurrões.",

    "Machado Duplo":
        "Duas lâminas simétricas capazes de desferir golpes devastadores.\n\n" +
        "🟡 Dano: 3d10 cortante.\n" +
        "🟡 Pode atingir 2 alvos adjacentes com penalidade -2 no ataque.\n" +
        "🟡 Exige Força alta; falha crítica pode desequilibrar o usuário.\n" +
        "🟡 Excelente para cortar madeira, escudos e armaduras leves.",

    "Marreta Militar":
        "Versão militarizada da marreta tradicional, adaptada para combate pesado.\n\n" +
        "🟡 Dano: 3d8 contundente.\n" +
        "🟡 Em acertos fortes, pode causar fratura (Condição: Lento por 1 turno).\n" +
        "🟡 Teste de Força CD 12 para girar rápido.\n" +
        "🟡 Pode destruir barricadas frágeis com facilidade.",

    "Clava de Ferro":
        "Um bastão de metal sólido, extremamente pesado e brutal.\n\n" +
        "🟡 Dano: 1d12 contundente.\n" +
        "🟡 Alvos pequenos fazem Acrobacia CD 13 para não serem lançados para trás.\n" +
        "🟡 Ignora resistência leve.\n" +
        "🟡 Eficaz para esmagar ossadas e estruturas improvisadas.",

    "Espadão Antigo":
        "Uma enorme espada de duas mãos, herança de eras passadas, pesada porém mortal.\n\n" +
        "🟡 Dano: 2d10 cortante.\n" +
        "🟡 Requer Força CD 10 para golpes precisos.\n" +
        "🟡 Pode realizar ataque de varredura atingindo 180°.\n" +
        "🟡 Em acerto crítico, pode cortar membros (decisão do mestre).",

    "Foice de Batalha":
        "Arma curva com longo alcance, usada tanto para corte quanto para puxar inimigos.\n\n" +
        "🟡 Dano: 1d12 cortante.\n" +
        "🟡 Pode puxar inimigos para perto (Atletismo CD 14).\n" +
        "🟡 Ótima para desbalancear adversários com pouca mobilidade.\n" +
        "🟡 Arma tem alcance ampliado devido à lâmina curva.",

    "Machadão Tribal":
        "Arma pesada e ritualística, feita com metal e madeira endurecida, usada por guerreiros tribais.\n\n" +
        "🟡 Dano: 2d8 cortante.\n" +
        "🟡 Em combate frenético, concede +1 acerto ao usuário.\n" +
        "🟡 Pode quebrar armas fracas (CD 12).\n" +
        "🟡 Tem presença intimidadora: +2 Intimidação ao carregar.",

    "Punho de Impacto":
        "Manopla pesada com mecanismo interno que amplifica o impacto dos socos.\n\n" +
        "🟡 Dano: 1d10 contundente.\n" +
        "🟡 Em acerto crítico, atordoa o alvo por 1 turno (CD 12).\n" +
        "🟡 Permite golpear portas e pequenas barricadas.\n" +
        "🟡 Ideal para lutadores corpo a corpo que preferem mobilidade."
}

    },

    geral: {
        tabela: [
            ["Item", "Função", "Durabilidade"],
            ["Kit Médico", "Cura ferimentos", "Uso único"],
            ["Cantil Reforçado", "Armazena água", "48h"],
            ["Cordas Resistentes", "Escalada", "Alta"],
            ["Rações Secas", "Alimentação", "72h"],
            ["Kit de Ferramentas", "Manutenção", "Alta"],
            ["Tocha Longa", "Iluminação", "5h"],
            ["Mapa Detalhado", "Navegação", "Alta"],
            ["Kit de Costura", "Reparos", "Média"],
            ["Pederneira", "Fogo", "Alta"],
            ["Frasco de Óleo", "Combustível", "—"],
            ["Mochila Compacta", "Armazenamento", "Alta"],
            ["Capa Impermeável", "Proteção", "Alta"],
            ["Binóculo Médio", "Observação", "Alta"],
            ["Lanterna Pequena", "Iluminação", "12h"],
            ["Pá Dobrável", "Escavação", "Alta"],
            ["Máscara de Filtro", "Proteção", "24h"],
            ["Kit de Pesca", "Coleta", "Alta"],
            ["Caixa de Pregos", "Construção", "Alta"],
            ["Martelo Pequeno", "Construção", "Alta"],
            ["Fita Adesiva Forte", "Reparos rápidos", "Média"]
        ],
descricoes: {
    "Kit Médico":
        "Um conjunto profissional com curativos estéreis, coagulantes, analgésicos e instrumentos de sutura.\n\n" +
        "🟡 Uso em aliado caído: Teste de Medicina CD 20. Se bem-sucedido, estabiliza imediatamente um alvo morrendo.\n" +
        "🟡 Auto-uso: Cura 2d10 pontos de vida.\n" +
        "🟡 Uso limitado: Uma vez por combate.\n" +
        "🟡 Extras narrativos: Remove sangramento e reduz infecções.",

    "Cantil Reforçado":
        "Cantil metálico isolado e resistente.\n\n" +
        "🟡 Armazena até 2 cargas de água potável.\n" +
        "🟡 Beber 1 carga restaura 1d4 vida ou remove 'Desidratado'.\n" +
        "🟡 Pode ser usado para ferver água com teste simples de Sobrevivência.",

    "Cordas Resistentes":
        "Corda sintética capaz de suportar grandes tensões.\n\n" +
        "🟡 Teste de uso: Atletismo ou Sobrevivência CD 12.\n" +
        "🟡 Usada para escalada, armadilhas ou atravessar obstáculos.\n" +
        "🟡 Alvo preso faz teste de Força CD 14 para se soltar.",

    "Rações Secas":
        "Pacote nutritivo e durável.\n\n" +
        "🟡 Removem condição 'Fome'.\n" +
        "🟡 Restauram 1d6 de vida.\n" +
        "🟡 Podem servir como isca para animais.",

    "Kit de Ferramentas":
        "Inclui alicate, chave multiuso e mini martelo.\n\n" +
        "🟡 Concede +2 em testes de Manutenção/Engenharia.\n" +
        "🟡 Necessário para reparar armas (CD variável).\n" +
        "🟡 Pode desarmar armadilhas (Sobrevivência CD 14).",

    "Tocha Longa":
        "Fonte de luz estável com duração de 5h.\n\n" +
        "🟡 Arma improvisada: 1d6 dano e chance de incendiar (CD 12).\n" +
        "🟡 Ilumina 10 metros.\n" +
        "🟡 Espanta animais e mutações sensíveis ao fogo.",

    "Mapa Detalhado":
        "Representação precisa da arena.\n\n" +
        "🟡 Concede vantagem em navegação.\n" +
        "🟡 Permite detectar áreas seguras ou perigosas (CD 10).",

    "Kit de Costura":
        "Conjunto com linhas reforçadas e agulhas.\n\n" +
        "🟡 Repara roupas e mochilas.\n" +
        "🟡 Remove penalidades de proteção leve (CD 10).",

    "Pederneira":
        "Ferramenta de faíscas resistente à água.\n\n" +
        "🟡 Criar fogo: Sobrevivência CD 10.\n" +
        "🟡 Ajuda a secar itens, aquecer e repelir criaturas.",

    "Frasco de Óleo":
        "Óleo inflamável multifuncional.\n\n" +
        "🟡 No chão: área escorregadia (Acrobacia CD 12).\n" +
        "🟡 Com fogo: causa 1d8 de dano por rodada.\n" +
        "🟡 Pode lubrificar mecanismos.",

    "Mochila Compacta":
        "Leve, reforçada e impermeável.\n\n" +
        "🟡 Aumenta em +4 a capacidade de carga.\n" +
        "🟡 Protege itens frágeis de impacto.",

    "Capa Impermeável":
        "Protege contra intempéries.\n\n" +
        "🟡 Remove penalidades de clima.\n" +
        "🟡 Pode virar abrigo improvisado (Sobrevivência CD 10).",

    "Binóculo Médio":
        "Equipamento óptico de médio alcance.\n\n" +
        "🟡 Concede +3 em Percepção à distância.\n" +
        "🟡 Ideal para vigiar inimigos, mutações e terrenos.",

    "Lanterna Pequena":
        "Fonte de luz portátil de 12h.\n\n" +
        "🟡 Ilumina 6 metros.\n" +
        "🟡 Usada para sinalização concede vantagem em Comunicação.",

    "Pá Dobrável":
        "Ferramenta compacta de aço resistente.\n\n" +
        "🟡 Arma improvisada: 1d6 dano.\n" +
        "🟡 Ideal para cavar trincheiras (Atletismo CD 12).\n" +
        "🟡 Pode ativar/desativar armadilhas de solo.",

    "Máscara de Filtro":
        "Equipamento respiratório de 24h.\n\n" +
        "🟡 Imune a poeira, gases leves e esporos.\n" +
        "🟡 Concede vantagem contra sufocamento.",

    "Kit de Pesca":
        "Linha reforçada, anzóis e iscas.\n\n" +
        "🟡 Pesca: Sobrevivência CD 12 garante comida para 1 dia.\n" +
        "🟡 Pode virar armadilha de anzol improvisada.",

    "Caixa de Pregos":
        "Pregos resistentes para construção.\n\n" +
        "🟡 Reforça estruturas (+2 durabilidade).\n" +
        "🟡 Armadilha de piso: causa 1d6 perfurante.",

    "Martelo Pequeno":
        "Ferramenta leve de impacto.\n\n" +
        "🟡 Arma improvisada: 1d6 contundente.\n" +
        "🟡 Facilita desativar/ativar estruturas (-2 CD).",

    "Fita Adesiva Forte":
        "Fita industrial altamente resistente.\n\n" +
        "🟡 Repara objetos rapidamente (CD 10).\n" +
        "🟡 Pode imobilizar mãos (Agilidade CD 14).\n" +
        "🟡 Sela ferimentos reduzindo sangramento temporariamente."
}

    }
};

// ======================================================
// ATUALIZA A TABELA COM O TIPO ATUAL
// ======================================================
function atualizarConteudo(tipo) {
    const a = arsenal[tipo];
    const tabela = document.getElementById("tabelaInfo");

    tabela.innerHTML = "";

    a.tabela.forEach((linha, index) => {
        const tr = document.createElement("tr");

        linha.forEach(col => {
            const td = document.createElement(index === 0 ? "th" : "td");
            td.innerText = col;
            tr.appendChild(td);
        });

        if (index > 0) {
            tr.addEventListener("click", () => {
                const nome = linha[0];
                const desc = a.descricoes[nome];
                abrirPopup(nome, desc);
            });
        }

        tabela.appendChild(tr);
    });
}

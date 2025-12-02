/* =========================
   JavaScript (inline) — mover para script.js se quiser separar
   ========================= */

/* Dados das partições e histórias.
   Nota: estrutura 'tabela' -> primeira linha é cabeçalho, linhas seguintes
   têm [col1, col2, id] para tornar as linhas clicáveis (id referencia historias).
*/
const dados = {
    d1: {
        titulo: "Distrito 1",
        subtitulo: "Conhecido por artigos de luxo e por sua inteligência",
        descricao: "Um centro de academias, bibliotecas vivas e laboratórios de última geração. Seus habitantes são reconhecidos pela mente afiada, pensamento estratégico e capacidade de resolver problemas complexos sob pressão. Nos jogos, destacam-se por vencer com inteligência: calculam cada passo, usam lógica para manipular o terreno, criam planos rápidos e exploram a fraqueza dos oponentes.",
        listaTitulo: "LISTA SOBRE OS VENCEDORES DOS JOGOS",
        tabela: [
            ["Ano", "Vencedor"],
            ["10º Jogos", "Amélia Stone", "amelia"],
            ["24º Jogos", "Varyn Luster", "varyn"],
            ["45º Jogos", "Crystal Hale", "crystal"]
        ]
    },
    d2: {
        titulo: "Distrito 2",
        subtitulo: "Armas, tecnologia e energia",
        descricao: "Tecnologia e habilidade formam o núcleo deste distrito. Seus competidores combinam preparo físico com domínio de armas modernas, equipamentos e engenharia. Lutam como se cada batalha fosse um teste de performance: precisão, velocidade e inovação definem suas vitórias.",
        listaTitulo: "LISTA SOBRE OS VENCEDORES DOS JOGOS",
        tabela: [
            ["Ano", "Vencedor"],
            ["2º Jogos", "Cassian Rock", "cassian"],
            ["25º Jogos", "Marcus Flint", "marcus"],
            ["70º Jogos", "Clove Granite", "clove"]
        ]
    },
    panem: {
        titulo: "Panem",
        subtitulo: "Capital e distritos unificados",
        descricao: "Panem é o coração brilhante — e cruel — de toda a nação. Oficialmente, é apresentada como o símbolo máximo de ordem, progresso e unidade. Mas para as Partições, ela é conhecida por outro nome: Medo. É da Capital que surgem as leis, as armas, os tributos e a vigilância constante que mantêm cada distrito sob controle.",
        listaTitulo: "LISTA SOBRE OS IDEALIZADORES DOS JOGOS",
        tabela: [
            ["Nome", "Função"],
            ["Sr. Snow", "Criador e Organizador", "snow"],
            ["Seraphina Kroll", "Arquiteta das Arenas", "seraphina"],
            ["Magnus Veer", "Chefe de Sistemas", "magnus"]
        ]
    },
    d3: {
        titulo: "Distrito 3",
        subtitulo: "industriabelica e militar",
        descricao: "Forjado pela resistência extrema, disciplina rígida e treinamento militar, a Partição 3 é a personificação da frieza. Seus habitantes tornam-se especialistas em táticas de guerra, sobrevivência prolongada e coordenação em grupo.",
        listaTitulo: "LISTA SOBRE OS VENCEDORES DOS JOGOS",
        tabela: [
            ["Ano", "Vencedor"],
            ["11º Jogos", "Dex Volt", "dex"],
            ["39º Jogos", "Aria Sparks", "aria"],
            ["49º Jogos", "Nero Wire", "nero"]
        ]
    },
    d4: {
        titulo: "Distrito 4",
        subtitulo: "o trabalho sujo",
        descricao: "A Partição 4 é costeira e suas gentes dominam o mar. Competidores daqui vencem com brutalidade, ferocidade e instinto predatório — além de habilidades aquáticas superiores.",
        listaTitulo: "LISTA SOBRE OS VENCEDORES DOS JOGOS",
        tabela: [
            ["Ano", "Vencedor"],
            ["27º Jogos", "Marin Tide", "marin"],
            ["50º Jogos", "Finnick Odair", "finnick"],
            ["68º Jogos", "Pearl Marina", "pearl"]
        ]
    }
};

const historias = {
    // Circus / Panem
    snow: {
        titulo: "Sr. Snow — Criador e Organizador",
        texto: "Coriolanus Snow ascendeu ao poder através de manipulação política e alianças calculadas. Inicialmente um estudante da Academia, ele usou sua inteligência para eliminar rivais e consolidar apoio nas famílias poderosas. Após a primeira rebelião, Snow concebeu os Jogos Vorazes como um método eficiente de controle social — sangue e espetáculo que intimidam e lembram cada distrito do preço da insurreição."
    },
    seraphina: {
        titulo: "Seraphina Kroll — Arquiteta das Arenas",
        texto: "Seraphina alcançou reconhecimento por seus projetos psicológicos e mecânicos que transformavam as arenas em prisões vivas. Com experiência em arquitetura militar e teatro psicológico, ela cria arenas que testam não apenas o corpo, mas a mente: zonas mutáveis, armadilhas silenciosas e desafios que exploram o medo mais íntimo."
    },
    magnus: {
        titulo: "Magnus Veer — Chefe de Sistemas",
        texto: "Magnus era um hacker dos Distritos que tentou derrubar a vigilância da Capital. Capturado, escolheu trabalhar para o regime para sobreviver. Agora lidera a infraestrutura tecnológica dos Jogos: câmeras, armadilhas ativadas remotamente e mutações controladas. Dizem que um comando seu pode isolar um tributo da esperança."
    },

    // Distrito 1
    amelia: {
        titulo: "Amélia Stone — Vencedora dos 10º Jogos",
        texto: "Amélia venceu sem ostensividade: com memória fotográfica e astúcia, mapeou a arena e manipulou rivais para se autoeliminarem. Seu triunfo foi um estudo frio de controle e informação."
    },
    varyn: {
        titulo: "Varyn Luster — Vencedor dos 24º Jogos",
        texto: "Químico nas horas vagas, Varyn criou toxinas improvisadas a partir de plantas e materiais encontrados. Envenenou recursos vitais e esperou: a vitória veio enquanto os mais fortes sucumbiam à fraqueza."
    },
    crystal: {
        titulo: "Crystal Hale — Vencedora dos 45º Jogos",
        texto: "Especialista em códigos sonoros, Crystal decodificou padrões artificiais da arena e antecipou armadilhas e suprimentos. Estudiosa e paciente, virou lenda por vencer com precisão quase científica."
    },

    // Distrito 2
    cassian: {
        titulo: "Cassian Rock — Vencedor dos 2º Jogos",
        texto: "Dominava armas de energia com mira impecável. Usou drones de reconhecimento para mapear o campo e eliminar ameaças à distância. Foi campeão ao desativar o sistema de suporte de um grupo inimigo, deixando-os vulneráveis e finalizando sem desperdiçar munição."
    },
    marcus: {
        titulo: "Marcus Flint — Vencedor dos 25º Jogos",
        texto: "Corpo otimizado para agilidade. Movimentava-se como um raio, atacando antes que percebessem sua presença. Usou lâminas vibratórias leves e um exoesqueleto para correr pelas paredes e surpreender o campeão de uma aliança com um único golpe preciso."
    },
    clove: {
        titulo: "Clove Granite — Vencedora dos 70º Jogos",
        texto: "Manipulava equipamentos elétricos com maestria. Sob tensão máxima, sobrecarregou um arsenal inteiro, transformando o campo de batalha em uma armadilha brilhante onde apenas ele sabia os caminhos seguros."
    },

    // Distrito 3
    dex: {
        titulo: "Dex Volt — Vencedor dos 11º Jogos",
        texto: "Perdeu aliados no primeiro dia, mas transformou a solidão em força. Sobreviveu em regiões tóxicas sem vacilar, ignorando a dor e seguindo em frente. Ganhou quando seu último rival desmaiou de exaustão tentando acompanhá-lo."
    },
    aria: {
        titulo: "Aria Sparks — Vencedora dos 39º Jogos",
        texto: "Treinada para defender qualquer posição até o fim, fez da montanha seu forte. Cada avanço inimigo era repelido com precisão militar. Venceu mantendo território até que todos os outros tombaram tentando invadi-lo."
    },
    nero: {
        titulo: "Nero Wire — Vencedor dos 49º Jogos",
        texto: "Tomou ferimentos que seriam fatais para qualquer outro, mas continuou. Escondeu fraquezas, avançou silencioso e atacou só quando necessário. No duelo final, permaneceu de pé segundos a mais — o suficiente para conquistar a vitória."
    },

    // Distrito 4
    marin: {
        titulo: "Marin Tide — Vencedora dos 27º Jogos",
        texto: "Ataca primeiro, pensa depois. Avançou rompendo barricadas e rivais com pura força física. Terminou os jogos em uma luta corpo a corpo brutal, onde ninguém ousou se aproximar até o último suspiro do oponente."
    },
    finnick: {
        titulo: "Finnick Odair — Vencedor dos 50º Jogos",
        texto: "Usa lâminas pesadas e armaduras improvisadas. Eliminou inimigos marcando território com medo e sangue. No final, venceu esmagando o último adversário com uma brutalidade que virou lenda."
    },
    pearl: {
        titulo: "Pearl Marina — Vencedora dos 68º Jogos",
        texto: "Caçadora nata, se movia como fera cercando presa. Derrubou tributos com emboscadas diretas e ataques certeiros. Sobreviveu porque não hesitou — destruiu qualquer ameaça antes que pudesse reagir."
    }
};

/* Elementos do DOM */
const tituloHero = document.getElementById('tituloHero');
const subtituloHero = document.getElementById('subtituloHero');
const tituloPrincipal = document.getElementById('tituloPrincipal');
const descricaoEl = document.getElementById('descricao');
const imgBox = document.getElementById('imgBox');
const imgBoxText = document.getElementById('imgBoxText');
const tabelaInfo = document.getElementById('tabelaInfo');
const listaTituloEl = document.getElementById('listaTitulo');
const modal = document.getElementById('modalHistoria');
const modalTitulo = document.getElementById('modalTitulo');
const modalTexto = document.getElementById('modalTexto');
const btnCloseModal = document.getElementById('btnCloseModal');

/* Atualiza a página para a partição selecionada */
function mudarPagina(id){
    const info = dados[id];
    if(!info){ console.warn('Partição não encontrada:', id); return; }

    // título/subtítulo
    tituloHero.textContent = info.titulo;
    subtituloHero.textContent = info.subtitulo || '';
    tituloPrincipal.textContent = info.titulo;

    // descrição
    descricaoEl.textContent = info.descricao;

switch(id){
    case 'panem':
        imgBox.style.backgroundImage =
        'linear-gradient(135deg, rgba(0,0,0,0.35), rgba(20,20,20,0.35)), url("img/particoes/panem.jpg")';
        imgBoxText.style.display = 'none';
        break;

    case 'd1':
        imgBox.style.backgroundImage =
        'linear-gradient(135deg, rgba(0,0,0,0.35), rgba(20,20,20,0.35)), url("img/particoes/d1.jpg")';
        imgBoxText.style.display = 'none';
        break;

    case 'd2':
        imgBox.style.backgroundImage =
        'linear-gradient(135deg, rgba(0,0,0,0.35), rgba(20,20,20,0.35)), url("img/particoes/d2.png")';
        imgBoxText.style.display = 'none';
        break;

    case 'd3':
        imgBox.style.backgroundImage =
        'linear-gradient(135deg, rgba(0,0,0,0.35), rgba(20,20,20,0.35)), url("img/particoes/d3.jpg")';
        imgBoxText.style.display = 'none';
        break;

    case 'd4':
        imgBox.style.backgroundImage =
        'linear-gradient(135deg, rgba(0,0,0,0.35), rgba(20,20,20,0.35)), url("img/particoes/d4.jpg")';
        imgBoxText.style.display = 'none';
        break;

    default:
        imgBox.style.backgroundImage = '';
        imgBoxText.style.display = 'block';
}


    // Atualizar lista/tabela
    listaTituloEl.textContent = info.listaTitulo || '';
    popularTabela(info.tabela || []);

    // Atualizar botões ativos
    document.querySelectorAll('.btn-distrito').forEach(b => {
        b.classList.toggle('active', b.dataset.id === id);
    });

    // rolagem sutil para info em dispositivos menores
    if(window.innerWidth < 800){
        document.getElementById('mainContainer').scrollIntoView({ behavior:'smooth' });
    }
}

/* Gera um SVG simples para usar como placeholder de imagem (inline data URL) */
function generateSVG(text){
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
        <rect width='100%' height='100%' fill='#111'/>
        <defs>
            <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
                <stop offset='0' stop-color='#d4af37'/>
                <stop offset='1' stop-color='#f0c654'/>
            </linearGradient>
        </defs>
        <text x='50%' y='50%' font-family='Segoe UI, Arial' font-weight='800' font-size='48' fill='url(#g)' text-anchor='middle' dominant-baseline='middle'>${escapeXml(text)}</text>
    </svg>`;
    return svg;
}
function escapeXml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* Popula a tabela dinamicamente com dados recebidos.
   Espera array onde primeiro item é cabeçalho (2 colunas),
   e linhas seguintes têm [col1, col2, id] (id opcional para abrir modal).
*/
function popularTabela(tabela){
    // limpa
    tabelaInfo.innerHTML = '';

    if(!tabela || tabela.length === 0) return;

    // cabeçalho
    const header = tabela[0];
    const thead = document.createElement('thead');
    const htr = document.createElement('tr');
    header.forEach(h => {
        const th = document.createElement('th');
        th.textContent = h;
        htr.appendChild(th);
    });
    thead.appendChild(htr);
    tabelaInfo.appendChild(thead);

    // corpo
    const tbody = document.createElement('tbody');
    for(let i=1;i<tabela.length;i++){
        const row = tabela[i];
        const tr = document.createElement('tr');

        // se row tem 3 elementos, consideramos [col1,col2,id]
        const colCount = Math.max(header.length, 2);
        for(let c=0;c<colCount;c++){
            const td = document.createElement('td');
            td.textContent = row[c] || '';
            tr.appendChild(td);
        }

        // adiciona onclick se existir id (posição 2)
        const maybeId = row[2];
        if(maybeId){
            tr.style.cursor = 'pointer';
            tr.addEventListener('click', () => mostrarHistoria(maybeId));
            tr.setAttribute('tabindex','0');
            tr.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' ') mostrarHistoria(maybeId); });
        }

        tbody.appendChild(tr);
    }
    tabelaInfo.appendChild(tbody);
}

/* Abre modal com a história */
function mostrarHistoria(chave){
    const info = historias[chave];
    if(!info){
        // caso não exista história, mostrar mensagem genérica
        modalTitulo.textContent = 'Informação indisponível';
        modalTexto.textContent = 'Detalhes sobre este personagem ainda não foram adicionados.';
    } else {
        modalTitulo.textContent = info.titulo;
        modalTexto.textContent = info.texto;
    }
    abrirModal();
}

/* Modal controls */
function abrirModal(){
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
    // foco no botão fechar
    btnCloseModal.focus();
    // prevenir scroll de fundo
    document.body.style.overflow = 'hidden';
}
function fecharModal(){
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
}

/* Eventos do modal */
btnCloseModal.addEventListener('click', fecharModal);
modal.addEventListener('click', (e) => {
    if(e.target === modal) fecharModal(); // clique fora do conteúdo
});
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal.classList.contains('show')) fecharModal();
});

/* Inicialização: carregar Circus como padrão */
document.addEventListener('DOMContentLoaded', () => {
    mudarPagina('panem');
});


// Configuração inicial de animação
    window.addEventListener("load", () => {
        const hero = document.getElementById("heroContainer");
        const main = document.getElementById("mainContainer");

        hero.classList.remove("fade-out");
        main.classList.remove("fade-out");
        
        setTimeout(() => {
            hero.classList.add("fade-in");
        }, 100);
        
        setTimeout(() => {
            main.classList.add("fade-in");
        }, 300);
    });

    // 🌟 CÓDIGO CORRIGIDO: MAPA DE IMAGENS COM CAMINHOS REAIS 
    // Certifique-se de que a estrutura de pastas no seu projeto é:
    // .../static/img/monstruario/Animais/
    // .../static/img/monstruario/Bestantes/
    const imageMap = {
        // Animais
        "Lobo Selvagem": "../static/img/monstruario/Animais/lobo.png",
        "Urso Pardo": "../static/img/monstruario/Animais/urso.png",
        "Cobra Venenosa": "../static/img/monstruario/Animais/cobra.png",
        "Javali Feroz": "../static/img/monstruario/Animais/javali.png",
        "Águia Gigante": "../static/img/monstruario/Animais/aguia.png",
        "Pantera Negra": "../static/img/monstruario/Animais/pantera.png",
        "Crocodilo": "../static/img/monstruario/Animais/crocodilo.png",
        "Escorpião Gigante": "../static/img/monstruario/Animais/escorpiao.png",
        "Aranha Caçadora": "../static/img/monstruario/Animais/aranha.png",
        "Hiena Matilheira": "../static/img/monstruario/Animais/hiena.png",
        "Búfalo Bravo": "../static/img/monstruario/Animais/bufalo.png",
        "Leão Selvagem": "../static/img/monstruario/Animais/leao.png",
        "Tigre Caçador": "../static/img/monstruario/Animais/tigre.png",
        "Lobo Branco": "../static/img/monstruario/Animais/lobo branco.png",
        "Raposa Astuta": "../static/img/monstruario/Animais/raposa.png",
        
        // Bestantes
        "Troll de Pedra": "../static/img/monstruario/Bestantes/Pedra.png",
        "Górgona": "../static/img/monstruario/Bestantes/gorgona.png",
        "Hidra": "../static/img/monstruario/Bestantes/hidra.png",
        "Mantícora": "../static/img/monstruario/Bestantes/manticora.png",
        "Quimera": "../static/img/monstruario/Bestantes/quimera.png",
        "Ciclope": "../static/img/monstruario/Bestantes/ciclope.png",
        "Basilisco": "..static/img/monstruario/Bestantes/Basilisco.png",
        "Grifo": "../static/img/monstruario/Bestantes/grifo.png",
        "Minotauro": "../static/img/monstruario/Bestantes/minotauro.png",
        "Harpia": "../static/img/monstruario/Bestantes/harpia.png",
        "Esfinge": "../static/img/monstruario/Bestantes/esfinge.png",
        "Cerberus": "../static/img/monstruario/Bestantes/cerberus.png",
        "Fênix": "../static/img/monstruario/Bestantes/fenix.png",
        "Banshee": "../static/img/monstruario/Bestantes/banshee.png",
        "Wendigo": "../static/img/monstruario/Bestantes/wendigo.png"
    };
    // FIM DO CÓDIGO CORRIGIDO: MAPA DE IMAGENS

    // DADOS DO MONSTRUÁRIO
    const monstruario = {
        animais: {
            tabela: [
                ["Criatura", "Perigo", "Habitat"],
                ["Lobo Selvagem", "Médio", "Floresta"],
                ["Urso Pardo", "Alto", "Montanhas"],
                ["Cobra Venenosa", "Médio", "Pântanos"],
                ["Javali Feroz", "Médio", "Floresta"],
                ["Águia Gigante", "Baixo", "Picos"],
                ["Pantera Negra", "Alto", "Selva"],
                ["Crocodilo", "Alto", "Rios"],
                ["Escorpião Gigante", "Médio", "Deserto"],
                ["Aranha Caçadora", "Baixo", "Cavernas"],
                ["Hiena Matilheira", "Médio", "Savana"],
                ["Búfalo Bravo", "Médio", "Planícies"],
                ["Leão Selvagem", "Alto", "Savana"],
                ["Tigre Caçador", "Alto", "Selva"],
                ["Lobo Branco", "Médio", "Tundra"],
                ["Raposa Astuta", "Baixo", "Floresta"]
            ],
            descricoes: {
    "Lobo Selvagem":
        "Predador rápido que caça em matilhas coordenadas. Extremamente territorial.\n\n" +
        "🔻 Ataque: 1d8 perfurante (mordida).\n" +
        "🔻 Caça em grupo: +2 ataque quando há outro lobo próximo.\n" +
        "🔻 Percepção aguçada: vantagem para detectar jogadores.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Medo de fogo.\n" +
        "🔻 Desorganiza-se se o líder da matilha for abatido.",

    "Urso Pardo":
        "Criatura colossal com força esmagadora. Um dos confrontos mais perigosos da arena.\n\n" +
        "🔻 Ataque: 2d10 contundente (coice) ou 2d12 cortante (garras).\n" +
        "🔻 Pode derrubar árvores e destruir barricadas.\n" +
        "🔻 Resistência absurda a dano.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Lento para virar.\n" +
        "🔻 Irrita-se facilmente e pode ser atraído para armadilhas.",

    "Cobra Venenosa":
        "Réptil sorrateiro com veneno neurotóxico capaz de paralisar.\n\n" +
        "🔻 Ataque: 1d6 perfurante + veneno (CD 15).\n" +
        "🔻 Veneno paralisa parcialmente por 1d4 turnos.\n" +
        "🔻 Extremamente difícil de perceber (Furtividade alta).\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Corpo frágil.\n" +
        "🔻 Sensível a vibrações fortes no solo.",

    "Javali Feroz":
        "Animal agressivo, pesado e imprevisível, famoso por sua investida.\n\n" +
        "🔻 Ataque: 2d6 perfurante (presas).\n" +
        "🔻 Investida mortal: 3d6 dano se correr 6m ou mais.\n" +
        "🔻 Couro espesso reduz dano cortante.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Mudanças bruscas de direção dificultam sua movimentação.\n" +
        "🔻 Se errar a investida, cai no chão (CD 12).",

    "Águia Gigante":
        "Ave colossal que ataca de cima com garras poderosas.\n\n" +
        "🔻 Ataque: 1d10 cortante (garras).\n" +
        "🔻 Pegada aérea: pode levantar tributo pequeno (Força CD 14).\n" +
        "🔻 Visão de longo alcance.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Baixa defesa contra ataques à distância.\n" +
        "🔻 Se as asas forem feridas, cai imediatamente.",

    "Pantera Negra":
        "Felino letal, silencioso e extremamente preciso.\n\n" +
        "🔻 Ataque: 2d8 cortante.\n" +
        "🔻 Emboscada: primeiro ataque com vantagem.\n" +
        "🔻 Excelente escalador e nadador.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Fraca contra luz intensa.\n" +
        "🔻 Tende a recuar se ferida gravemente.",

    "Crocodilo":
        "Predador semiaquático com mordida esmagadora.\n\n" +
        "🔻 Ataque: 2d12 perfurante (mordida).\n" +
        "🔻 Giro da Morte: prende alvo e causa +2d6.\n" +
        "🔻 Couro funciona como armadura natural.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Extremamente lento em terra firme.\n" +
        "🔻 Visão ruim fora da água.",

    "Escorpião Gigante":
        "Inseto de carapaça rígida e ferrão venenoso.\n\n" +
        "🔻 Ataque: 1d8 perfurante + veneno (CD 14).\n" +
        "🔻 Carapaça reduz dano cortante e perfurante.\n" +
        "🔻 Capaz de escavar rapidamente.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Sensível a impacto contundente.\n" +
        "🔻 Enxergar mal no escuro completo.",

    "Aranha Caçadora":
        "Aranha veloz de mordida venenosa e comportamento predatório.\n\n" +
        "🔻 Ataque: 1d6 perfurante + veneno (CD 13).\n" +
        "🔻 Pode tecer armadilhas quase invisíveis.\n" +
        "🔻 Movimentação veloz e errática.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Corpo extremamente frágil.\n" +
        "🔻 Fogo causa pânico imediato.",

    "Hiena Matilheira":
        "Predador oportunista com risadas assustadoras e estratégia de grupo.\n\n" +
        "🔻 Ataque: 1d6 perfurante.\n" +
        "🔻 Em matilha: +2 dano e +1 ataque.\n" +
        "🔻 Resistente e teimosa.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Covardes sozinhas.\n" +
        "🔻 Medo de sons muito altos.",

    "Búfalo Bravo":
        "Herbívoro gigante com força bruta descomunal.\n\n" +
        "🔻 Ataque: 2d8 perfurante (chifres).\n" +
        "🔻 Investida em grupo: 3d8.\n" +
        "🔻 Resiste a empurrões e quedas.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Péssima visão periférica.\n" +
        "🔻 Precisa de espaço para manobrar.",

    "Leão Selvagem":
        "Predador dominante e extremamente forte.\n\n" +
        "🔻 Ataque: 2d8 cortante.\n" +
        "🔻 Rugido: Ameaça que causa medo (CD 13).\n" +
        "🔻 Caça em grupo de fêmeas.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Presumido: pode se expor demais.\n" +
        "🔻 Sensível a emboscadas.",

    "Tigre Caçador":
        "Felino solitário e brutal, mestre em emboscadas.\n\n" +
        "🔻 Ataque: 2d10 cortante.\n" +
        "🔻 Emboscada perfeita: dano dobrado.\n" +
        "🔻 Pulo longo (6–10 metros).\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Raiva o deixa previsível.\n" +
        "🔻 Pouquíssima resistência a armas perfurantes.",

    "Lobo Branco":
        "Lobo adaptado ao frio com camuflagem na neve e maior resistência.\n\n" +
        "🔻 Ataque: 1d8 perfurante.\n" +
        "🔻 Resistência natural a frio extremo.\n" +
        "🔻 Percepção elevada em nevasca.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Camuflagem inútil fora da neve.\n" +
        "🔻 Menor resistência ao calor.",

    "Raposa Astuta":
        "Predador pequeno, rápido e extremamente inteligente.\n\n" +
        "🔻 Ataque: 1d4 perfurante.\n" +
        "🔻 Pode enganar caçadores (teste de Furtividade CD 14).\n" +
        "🔻 Excelente para roubar comida.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Vida muito baixa.\n" +
        "🔻 Medo de combate direto."
}

        },

        bestantes: {
            tabela: [
                ["Criatura", "Perigo", "Habilidade"],
                ["Troll de Pedra", "Extremo", "Regeneração"],
                ["Górgona", "Crítico", "Petrificação"],
                ["Hidra", "Extremo", "Múltiplas Cabeças"],
                ["Mantícora", "Crítico", "Espinhos Venenosos"],
                ["Quimera", "Extremo", "Sopro de Fogo"],
                ["Ciclope", "Alto", "Força Colossal"],
                ["Basilisco", "Crítico", "Olhar Mortal"],
                ["Grifo", "Alto", "Voo + Garras"],
                ["Minotauro", "Extremo", "Fúria Berserk"],
                ["Harpia", "Médio", "Voo Rápido"],
                ["Esfinge", "Alto", "Enigmas Mortais"],
                ["Cerberus", "Extremo", "Três Cabeças"],
                ["Fênix", "Alto", "Renascimento"],
                ["Banshee", "Crítico", "Grito da Morte"],
                ["Wendigo", "Extremo", "Fome Infinita"]
            ],
            descricoes: {
    "Troll de Pedra":
        "Gigante de pele rochosa, lento porém praticamente imparável.\n\n" +
        "🔻 Ataque: 2d10 contundente.\n" +
        "🔻 Regeneração: recupera 10 HP por turno se não sofrer dano de fogo.\n" +
        "🔻 Corpo rochoso reduz dano físico.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Extremamente vulnerável a fogo.\n" +
        "🔻 Lento e fácil de prever.\n" +
        "🔻 Quebra facilmente se cair de grandes alturas.",

    "Górgona":
        "Criatura serpentina cujo olhar petrifica instantaneamente.\n\n" +
        "🔻 Ataque: 1d8 perfurante (mordidas das serpentes).\n" +
        "🔻 Olhar petrificante: CD 17 para não virar pedra.\n" +
        "🔻 Pode escalar e rastejar em silêncio absoluto.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Espelhos podem redirecionar seu olhar.\n" +
        "🔻 Pouca resistência física.\n" +
        "🔻 Barulho intenso desorienta suas serpentes.",

    "Hidra":
        "Monstro aquático colossal com múltiplas cabeças regenerativas.\n\n" +
        "🔻 Ataque: 1d10 cortante por cabeça.\n" +
        "🔻 Crescimento: ao cortar uma cabeça, nascem duas.\n" +
        "🔻 Sangue venenoso: 2d6 dano por contato.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Cortar e cauterizar impede regeneração.\n" +
        "🔻 Cabeça central é a verdadeira vital.\n" +
        "🔻 Muito dependente de água.",

    "Mantícora":
        "Predador híbrido cruel e estrategista.\n\n" +
        "🔻 Ataque: 2d6 cortante (garras) ou 1d12 perfurante (espinhos).\n" +
        "🔻 Cauda dispara espinhos venenosos (CD 15).\n" +
        "🔻 Voo rápido e silencioso.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Espinhos são limitados.\n" +
        "🔻 Ódio irracional por barulhos altos.\n" +
        "🔻 Se atingir as asas, cai imediatamente.",

    "Quimera":
        "Criatura tripla feroz e caótica.\n\n" +
        "🔻 Ataques múltiplos: leão (2d8), cabra (1d6), serpente (veneno CD 14).\n" +
        "🔻 Sopro de fogo: 3d10 em cone.\n" +
        "🔻 Territorial até a morte.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Cabeças discordam entre si.\n" +
        "🔻 Cauda de serpente é frágil.\n" +
        "🔻 Barro e lama reduzem fogo.",

    "Ciclope":
        "Gigante brutal com força devastadora e visão limitada.\n\n" +
        "🔻 Ataque: 3d8 contundente.\n" +
        "🔻 Arremessa rochas enormes (2d10).\n" +
        "🔻 Forte demais para ser empurrado.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Ponto cego enorme.\n" +
        "🔻 Fácil de enganar com sons.\n" +
        "🔻 Golpes no olho cegam totalmente.",

    "Basilisco":
        "Serpente mítica de veneno e olhar mortal.\n\n" +
        "🔻 Ataque: 1d10 perfurante + veneno letal (CD 18).\n" +
        "🔻 Olhar petrificante: CD 17.\n" +
        "🔻 Couro quase imune a armas simples.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Sensível a vibrações.\n" +
        "🔻 Foge de fogo.\n" +
        "🔻 Espelhos confundem sua visão.",

    "Grifo":
        "Guardião celestial, metade leão, metade águia.\n\n" +
        "🔻 Ataque: 2d8 cortante (garras) e 1d10 perfurante (bico).\n" +
        "🔻 Voo extremamente rápido.\n" +
        "🔻 Ótimo rastreador.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Territorial, mas previsível.\n" +
        "🔻 Abaixar asas reduz defesa.\n" +
        "🔻 Orgulhoso: responde a provocações.",

    "Minotauro":
        "Monstro humanoide com cabeça de touro e força colossAL.\n\n" +
        "🔻 Ataque: 2d10 contundente ou investida 3d10.\n" +
        "🔻 Pode derrubar paredes e portas.\n" +
        "🔻 Nunca se perde em labirintos.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Fúria o deixa previsível.\n" +
        "🔻 Pouquíssima agilidade.\n" +
        "🔻 Sons altos o enfurecem e atrapalham.",

    "Harpia":
        "Criatura volátil com corpo de ave e rosto feminino distorcido.\n\n" +
        "🔻 Ataque: 1d6 cortante.\n" +
        "🔻 Grito ensurdecedor: CD 15 para não ficar atordoado.\n" +
        "🔻 Voo rápido e errático.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Ossos frágeis.\n" +
        "🔻 Não voa bem com chuva.\n" +
        "🔻 Fome constante provoca distração.",

    "Esfinge":
        "Guardião sábio e brutal quando desafiado.\n\n" +
        "🔻 Ataque: 2d10 cortante.\n" +
        "🔻 Enigma mortal: falhar no teste de Inteligência CD 16 = morte instantânea.\n" +
        "🔻 Leitura psíquica básica.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Orgulho excessivo.\n" +
        "🔻 Pode ser enganada com respostas ambíguas.\n" +
        "🔻 Evita lutar sem motivo.",

    "Cerberus":
        "Cão infernal de três cabeças, guardião implacável.\n\n" +
        "🔻 Ataque triplo: 1d10 por cabeça.\n" +
        "🔻 Mordida envenenada (CD 14).\n" +
        "🔻 Cheiro sobrenatural detecta tudo.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Cabeças brigam entre si ao serem provocadas.\n" +
        "🔻 Lento ao virar o corpo.\n" +
        "🔻 Barulho causa latidos que revelam sua posição.",

    "Fênix":
        "Ave de fogo imortal e majestosa.\n\n" +
        "🔻 Ataque: 2d8 fogo.\n" +
        "🔻 Explosão ígnea ao morrer: 3d10.\n" +
        "🔻 Renasce das cinzas em 1d4 turnos.\n" +
        "🔻 Lágrimas curam 3d8.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Gelo e água reduzem quase todo poder.\n" +
        "🔻 Corpo frágil sem chama.\n" +
        "🔻 Lenta no chão.",

    "Banshee":
        "Espírito lamentador que anuncia morte.\n\n" +
        "🔻 Ataque: 2d6 psíquico.\n" +
        "🔻 Grito Mortal: CD 16 para não desmaiar.\n" +
        "🔻 Intangível: metade do dano físico é ignorado.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Luz forte dispersa sua forma.\n" +
        "🔻 Sons de sinos a afugentam.\n" +
        "🔻 Baixa resistência a ataques mágicos.",

    "Wendigo":
        "Criatura da fome eterna, veloz e aterrorizante.\n\n" +
        "🔻 Ataque: 2d8 cortante.\n" +
        "🔻 Frenesi: pode atacar duas vezes.\n" +
        "🔻 Velocidade sobrenatural.\n" +
        "🔻 Coração de gelo é sua única fraqueza real.\n\n" +
        "🔻 Fraquezas:\n" +
        "🔻 Corpo extremamente magro e frágil.\n" +
        "🔻 Fogo provoca medo.\n" +
        "🔻 Se o coração for destruído, morre instantaneamente."
        }
        }
    };

    // Variáveis do Modal
    const modal = document.getElementById("monsterModal");
    const modalNome = document.getElementById("modalNomeCriatura");
    const modalImgBox = document.getElementById("modalImgBox");
    const modalDesc = document.getElementById("modalDescricao");

    // Fecha o modal ao clicar no X
    function fecharModal() {
        modal.style.display = "none";
        document.querySelectorAll('#tabelaInfo tr').forEach(r => r.classList.remove('selected'));
    }

    // Fecha o modal ao clicar fora
    window.onclick = function(event) {
        if (event.target == modal) {
            fecharModal();
        }
    }

    // FUNÇÃO DE TROCA COM ANIMAÇÕES
    function mudarMonstruario(tipo) {
        const hero = document.getElementById("heroContainer");
        const main = document.getElementById("mainContainer");
        
        // Atualizar botões ativos
        document.querySelectorAll('.btn-area button').forEach(btn => {
            btn.classList.remove('active');
        });
        // O event.target é a única maneira de obter o elemento clicado aqui
        // eslint-disable-next-line no-undef
        event.target.classList.add('active');

        // Animação de saída
        hero.classList.remove("fade-in");
        main.classList.remove("fade-in");
        hero.classList.add("fade-out");
        main.classList.add("fade-out");

        setTimeout(() => {
            atualizarConteudo(tipo);

            // Animação de entrada
            hero.classList.remove("fade-out");
            main.classList.remove("fade-out");
            
            setTimeout(() => {
                hero.classList.add("fade-in");
            }, 50);
            
            setTimeout(() => {
                main.classList.add("fade-in");
            }, 150);
        }, 500);
    }

    // FUNÇÃO DE UPDATE (Preenche apenas a tabela)
    function atualizarConteudo(tipo) {
        const dados = monstruario[tipo];

        const titulos = {
            animais: {
                hero: "Monstruário - Animais",
                subtitulo: "Criaturas selvagens naturais",
                principal: "Animais Selvagens",
            },
            bestantes: {
                hero: "Monstruário - Bestantes",
                subtitulo: "Criaturas míticas e sobrenaturais",
                principal: "Bestantes",
            }
        };

        // Atualiza os títulos
        document.getElementById("tituloHero").innerText = titulos[tipo].hero;
        document.getElementById("subtituloHero").innerText = titulos[tipo].subtitulo;
        document.getElementById("tituloPrincipal").innerText = titulos[tipo].principal;
        document.getElementById("listaTitulo").innerText = "CLIQUE EM UMA CRIATURA PARA DETALHES";

        // Preenche tabela
        const tabela = document.getElementById("tabelaInfo");
        tabela.innerHTML = "";

        dados.tabela.forEach((linha, index) => {
            const tr = document.createElement("tr");

            linha.forEach(cel => {
                const td = document.createElement(index === 0 ? "th" : "td");
                td.innerText = cel;
                tr.appendChild(td);
            });

            // Adiciona evento de clique nas linhas (exceto cabeçalho)
            if (index > 0) {
                tr.style.cursor = 'pointer';
                tr.addEventListener('click', () => {
                    mostrarDetalhesNoModal(linha[0], tipo);
                    
                    // Remove seleção anterior e adiciona na linha clicada
                    document.querySelectorAll('#tabelaInfo tr').forEach(r => r.classList.remove('selected'));
                    tr.classList.add('selected');
                });
            }

            tabela.appendChild(tr);
        });
    }

    // FUNÇÃO PARA MOSTRAR DETALHES NO MODAL (Pop-up)
    function mostrarDetalhesNoModal(nomeCriatura, tipo) {
        const dados = monstruario[tipo];
        const descricao = dados.descricoes[nomeCriatura];
        
        if (!descricao) return;
        
        // OBTENDO A URL DA IMAGEM
        const imageUrl = imageMap[nomeCriatura];
        
        // 1. Preenche o Modal
        modalNome.innerText = nomeCriatura;
        modalDesc.innerText = descricao;
        
        // 2. INSERE A TAG <img> (SEM A CLASSE DESNECESSÁRIA)
        if (imageUrl) {
            // A classe 'modal-image' foi removida, pois o CSS já estiliza corretamente: .modal-image-box img
            modalImgBox.innerHTML = `<img src="${imageUrl}" alt="${nomeCriatura}">`;
        } else {
             // Se não houver imagem mapeada, insere um placeholder ou deixa vazio
            modalImgBox.innerHTML = `<p>Imagem não disponível para ${nomeCriatura}</p>`; 
        }

        // 3. Exibe o Modal
        modal.style.display = "flex";
    }
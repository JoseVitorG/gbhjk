var saida = document.querySelector("#listaRituais")
let ritualAdicionado = document.querySelector("#search-term")


const dados = [
    /*{nome:"", Custo:"", Execução:"", alcance:"", alvo:"", duracao:"", resistencia:"",
    normal:"", dicente:"", verdadeiro:""},*/



    {
        nome: "", Custo: "", Execução: "", alcance: "", alvo: "", duracao: "", resistencia: "", area: "",
        normal: "", dicente: "", verdadeiro: ""
    },

    {
        nome: "Amaldiçoar Arma de conhecimento",
        Custo: `Custo: 1PE `,
        Execução: " Execução: padrão",
        alcance: "Alcance: toque",
        alvo: "Alvo: 1 arma corpo a corpo ou pacote de munição",
        duracao: "Duração: cena",
        resistencia: "",
        area: "",
        normal: `Normal: Quando aprender este ritual, Você imbui a arma ou munições com o conhecimento, fazendo com que causem +1d6 de dano do tipo do conhecimento.`,
        dicente: `Discente (+2 PE): muda o bônus de dano para +2d6. Requer 2º círculo.`,
        verdadeiro: `Verdadeiro (+5 PE): muda o bônus de dano para +4d6. Requer 3º círculo e afinidade.`
    },


    {
        nome: "Amaldiçoar Arma de Energia",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: toque",
        alvo: "Alvo: 1 arma corpo a corpo ou pacote de munição",
        duracao: "Duração: cena",
        resistencia: "",
        area: "",
        normal: "Normal: Quando aprender este ritual, Você imbui a arma ou munições com a energia, fazendo com que causem +1d6 de dano do tipo do energia.",
        dicente: " Discente (+2 PE): muda o bônus de dano para +2d6.Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): muda o bônus de dano para+4d6. Requer 3º círculo e afinidade."
    },


    {
        nome: "Amaldiçoar Arma de Morte",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: toque",
        alvo: "Alvo: 1 arma corpo a corpo ou pacote de munição",
        duracao: "Duração: cena",
        resistencia: "",
        area: "",
        normal: "Normal: Quando aprender este ritual, Você imbui a arma ou munições com a morte, fazendo com que causem +1d6 de dano do tipo do morte.",
        dicente: " Discente (+2 PE): muda o bônus de dano para +2d6.Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): muda o bônus de dano para+4d6. Requer 3º círculo e afinidade."
    },


    {
        nome: "Amaldiçoar Arma de Sangue",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: toque",
        alvo: "Alvo: 1 arma corpo a corpo ou pacote de munição",
        duracao: "Duração: cena",
        resistencia: "",
        area: "",
        normal: "Normal: Quando aprender este ritual, Você imbui a arma ou munições com a sangue, fazendo com que causem +1d6 de dano do tipo do sangue.",
        dicente: " Discente (+2 PE): muda o bônus de dano para +2d6.Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): muda o bônus de dano para+4d6. Requer 3º círculo e afinidade."
    },


    {
        nome: "Compreensão paranornal",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: toque",
        alvo: "Alvo: 1 ser ou objeto",
        duracao: "Duração: cena",
        resistencia: "",
        area: "",
        normal: " O ritual confere a você compreensão sobrenatural da linguagem. Se tocar um objeto contendo informação (ou livro, um dispositivo com uma gravação...), você entende as palavras mesmo que não conheça seu idioma, contanto que se trate de um idioma humano (não funciona com símbolos ou sigilos paranormais). Se tocar uma pessoa, pode se comunicar com ela como se falassem um idioma em comum. Se tocar um ser não inteligente, como um animal, pode perceber seus sentimentos básicos, como medo ou felicidade. Um alvo involuntário tem direito a um teste de Vontade.",
        dicente: "Discente (+2 PE): muda o alcance para “curto” e o alvo para “alvos escolhidos”. Você pode entender todos os alvos afetados. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): muda o alcance para “pessoal” e o alvo para “você”. Em vez do normal, você pode falar, entender e escrever qualquer idioma humano. Requer 3º círculo."
    },


    {
        nome: "Enfeitiçar",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: curto",
        alvo: "Alvo: 1 pessoa",
        duracao: "Duração: cena",
        resistencia: "Resistência: Vontade anula",
        area: "",
        normal: "Normal: Este ritual torna o alvo prestativo (veja a página 45). Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe um bônus de +10 em testes de Diplomacia com ele. Um alvo hostil ou que esteja envolvido em combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, o efeito é dissipado e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).",
        dicente: "Discente (+2 PE): em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir que o alvo atire em seu companheiro, por exemplo, dissipa o efeito. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, o efeito termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que o policial prenda a próxima pessoa de casaco verde que ele encontrar. Requer 2º círculo.",
        verdadeiro: " Verdadeiro (+5 PE): afeta todos os alvos dentro do alcance. Requer 3º círculo."
    },


    {
        nome: "Perturbação",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: curto",
        alvo: "Alvo: 1 pessoa",
        duracao: "Duração: 1 rodada",
        resistencia: "Resistência: Vontade (anula)",
        area: "",
        normal: "Normal: Você dá uma ordem que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer à ordem em seu próprio turno da melhor maneira possível. Escolha um dos efeitos. Fuja: O alvo gasta seu turno tentando se afastar de você (usando todas as suas ações).  Largue: O alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegaraquilo que largou). Pare: O alvo fica pasmo (não pode realizar ações, só reações).  Sente-se: Com uma ação livre, o alvo se senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até  o início de seu próximo turno. Venha: O alvo gasta seu turno se aproximando de você (usando todas as suas ações).",
        dicente: " Discente (+2 PE): muda o alvo para “1 ser” e adiciona o seguinte comando: “Sofra. O alvo é acometido de dor aguda, sofrendo 3d8 pontos de dano de Conhecimento e ficando abalado por uma rodada”.",
        verdadeiro: "Verdadeiro (+5 PE): muda o alvo para “até 5 seres” ou adiciona o seguinte comando: “Ataque. O alvo deve fazer a ação agredir contra um outro alvo a sua escolha em alcance médio, com todas as suas capacidades”. Requer 3º círculo e afinidade."
    },


    {
        nome: "Ouvir os Sussurros",
        Custo: "Custo: 1PE",
        Execução: "Execução: completa",
        alcance: "Alcance: pessoal",
        alvo: "Alvo: você",
        duracao: "Duração: instantânea",
        resistencia: "",
        area: "",
        normal: "Normal: O ritual conecta você com os sussurros, memórias ecoadas pelo Outro Lado, que você pode consultar para receber conhecimento proibido em relação a uma ação que tomará em breve. Ao usar este ritual, faça uma pergunta sobre um evento que você está prestes a fazer (na mesma cena) que possa ser respondida com “sim” ou “não”. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, o ritual funciona e você recebe sua resposta, que pode ser “sim”, “não” ou “sim e não”. Com um resultado 1, o ritual falha e oferece o resultado “não”. Não há como saber se esse resultado foi dado porque o ritual falhou ou não. Lançar este ritual múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado. Por exemplo, você está prestes a entrar em um prédio que pode ser o esconderijo de um cultista. Se você perguntar para os sussurros se o cultista está mesmo nesse local, a resposta pode ser “sim” (ele está no prédio), “não” (ele não está no prédio) ou “sim e não” (ele está no prédio, mas usou um ritual para se esconder seu corpo f ísico em uma dimensão do Outro Lado...). Isso é útil para saber se você deve (ou não) gastar recursos para um possível combate.",
        dicente: "Discente (+2 PE): muda a execução para 1 minuto. Em vez do normal, você pode consultar os ecos fazendo uma pergunta sobre um evento que poderá acontecer até um dia no futuro. O mestre rola a chance de falha; com um resultado de 2 a 6, você recebe uma resposta, desde uma simples frase até uma profecia ou enigma. Em geral, este uso oferece pistas, indicando um caminho a tomar para descobrir a resposta que se procura. Numa falha você não recebe resposta alguma. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): muda a execução para 10 minutos e a duração para 5 rodadas. Em vez do normal, você consulta os ecos, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com “sim”, “não” ou “ninguém sabe”. O mestre rola a chance de falha para cada pergunta. Em caso de falha, a resposta também é “ninguém sabe”. Requer 3º círculo."
    },


    {
        nome: "Tecer Ilusão",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: médio",
        alvo: "Efeito: ilusão que se estende a até 4 cubos de 1,5m",
        duracao: "Duração: cena",
        resistencia: "Resistência: Vontade desacredita",
        area: "",
        normal: "Normal: Este ritual cria uma ilusão visual (uma pessoa, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). O ritual cria apenas imagens ou sons simples, com volume equivalente à voz de uma pessoa para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Seres e objetos atravessam uma ilusão sem sofrer dano, mas o ritual pode, por exemplo, esconder uma armadilha ou emboscada. A ilusão é dissipada se você sair do alcance.",
        dicente: "Discente (+2 PE): Ao utilizar este efeito, você pode criar ilusões de imagem e som combinados que afetam uma área de até 8 cubos de 1,5m. A duração desta ilusão é sustentada e você tem a habilidade de criar sons complexos, odores e sensações térmicas, bem como sensações táteis, como texturas. No entanto, objetos ainda podem atravessar a ilusão, enquanto seres não conseguem passar sem antes passar em um teste de Vontade. A cada rodada, você pode usar uma ação livre para mover a imagem ou alterar o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, desde que ainda esteja dentro dos limites do efeito. Por exemplo, você pode criar a ilusão de um fantasma caminhando pela sala e controlar seus movimentos. No entanto, a ilusão não pode causar ou sofrer danos. Quando você parar de sustentar o ritual, a imagem ou som ainda persistem por mais uma rodada antes de se dissiparem. Este efeito requer o uso do 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): Ao utilizar este ritual, você cria uma ilusão de perigo mortal. No momento em que é conjurado e no início de cada turno, qualquer alvo que interaja com a ilusão deve fazer um teste de Vontade. Se falhar no teste, o alvo acredita que a ilusão é real e sofre 6d6 pontos de dano de Conhecimento. Sempre que um alvo falha no teste, ele tenta racionalizar o efeito, como acreditar que o mesmo teto pode cair sobre ele várias vezes. No entanto, se um alvo passar em dois testes de Vontade seguidos, o efeito da ilusão é anulado para ele. Para utilizar este ritual, é necessário possuir habilidades mágicas no 3º círculo."
    },


    {
        nome: "Terceiro Olho",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: pessoal",
        alvo: "Alvo: você",
        duracao: "Duração: cena",
        resistencia: "",
        area: "",
        normal: "Normal: Ao utilizar este efeito, seus olhos são preenchidos por sigilos e você passa a enxergar auras paranormais em alcance longo. Rituais, itens amaldiçoados e criaturas emitem auras que você é capaz de identificar. Você também é capaz de saber o elemento da aura e seu poder aproximado - rituais de 1º círculo e criaturas com valor de desafio (VD) até 80 emitem uma aura fraca; rituais de 2º e 3º círculos e criaturas de VD entre 81 e 280 emitem uma aura moderada; e rituais de 4º círculo e criaturas de VD 281 ou maior emitem uma aura poderosa. Além disso, é possível gastar uma ação de movimento para descobrir se um ser em alcance médio possui poderes paranormais ou é capaz de conjurar rituais, bem como saber quais elementos são utilizados por ele.",
        dicente: " Discente (+2 PE): muda a duração para 1 dia.",
        verdadeiro: "Verdadeiro (+5 PE): seus olhos são capazes de enxergar objetos e seres que estão invisíveis aos olhos normais, revelando-os como formas translúcidas."
    },


    {
        nome: "Amaldiçoar Tecnologia",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: toque",
        alvo: "Alvo: 1 acessório ou arma de fogo",
        duracao: "Duração: cena",
        resistencia: "",
        area: "",
        normal: "Normal: Você infunde o alvo(acessório ou arma de fogo) com Energia, permitindo-o operar além de sua capacidade normal. O objeto recebe uma modificação à sua escolha.",
        dicente: "Discente (+2 PE): muda para duas modificações. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): permite realizar três modificações no objeto alvo. Requer o uso de um ritual de 3º círculo e a habilidade de afinidade."
    },


    {
        nome: "Coincidência Forçada",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: curto",
        alvo: "Alvos: 1 ser",
        duracao: "Duração: cena",
        resistencia: "",
        area: "",
        normal: "Normal: Você manipula os caminhos do caos para que o alvo tenha mais sorte. O alvo recebe +2 em testes de perícias.",
        dicente: "Discente (+2 PE): muda o alvo para aliados à sua escolha. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): permite mudar o alvo do ritual para aliados selecionados por você e aumenta o bônus para +5. Para utilizar este efeito, é necessário possuir afinidade e 3º círculo."
    },


    {
        nome: "Eletrocussão",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: curto",
        alvo: "Alvo: 1 ser ou objeto",
        duracao: "Duração: instantânea",
        resistencia: "Resistência: Fortitude parcial",
        area: "",
        normal: "Normal: Você manifesta e dispara uma corrente elétrica contra o alvo, causando 3d6 pontos de dano de eletricidade e o tornando vulnerável por uma rodada. Se o alvo passar em um teste de resistência, sofrerá apenas metade do dano e evitará a condição. Se usado contra objetos eletrônicos, este ritual causará o dobro do dano e ignorará resistência.",
        dicente: "Discente (+2 PE): muda o alvo para área linha de 30m. Você dispara um poderoso raio que causa 6d6 pontos de dano de Energia em todos os seres e objetos livres na área. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): muda a área para alvos escolhidos. Em vez do normal, você dispara vários relâmpagos, um para cada alvo escolhido, causando 8d6 pontos de dano de Energia em cada um. Requer 3º círculo."
    },


    {
        nome: "Embaralhar",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: pessoal",
        alvo: "Alvo: você",
        duracao: "Duração: cena",
        resistencia: "",
        area: "",
        normal: "Normal: Você cria três cópias ilusórias de si mesmo, como hologramas extremamente realistas. As cópias ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem é o verdadeiro. Você recebe um bônus de +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante sofre as penalidades normais por não enxergar).",
        dicente: "Discente (+2 PE): o número de cópias aumenta para 5 (e o bônus na Defesa para +10). Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE), o número de cópias aumenta para 8 (e o bônus na Defesa para +16). Além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. O ser que destruiu a cópia fica ofuscado por uma rodada. Requer 3º círculo."
    },


    {
        nome: "Luz",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: curto",
        alvo: "Alvo: 1 objeto",
        duracao: "Duração: cena",
        resistencia: "Resistência: Vontade anula",
        area: "",
        normal: "Normal: O ritual cria uma luz brilhante de cores alternadas em um alvo, que emite um brilho em uma área de 9m de raio. O objeto pode ser guardado para interromper a luz e pode ser revelado novamente para que a luz volte a funcionar. Se o alvo for um objeto em posse de uma pessoa involuntária, ela pode fazer um teste de Vontade para anular o efeito.",
        dicente: "Discente (+2 PE), o alcance aumenta para longo e o efeito muda para 4 esferas brilhantes. O ritual cria esferas de luz com 10cm de diâmetro que você pode posicionar dentro do alcance. Cada esfera ilumina uma área de 6m de raio e pode ser movida uma vez por rodada com uma ação livre. Se uma esfera ocupar o espaço de um ser, ele fica ofuscado e sua silhueta pode ser vista claramente.",
        verdadeiro: "Verdadeiro (+5 PE), a luz é cálida como a do sol. Seus aliados na área recebem +O em testes de Vontade e seus inimigos ficam ofuscados. O ritual requer o 3º círculo."
    },


    {
        nome: "Polarização Caótica",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: curto",
        alvo: "Alvo: você",
        duracao: "Duração: sustentada",
        resistencia: "Resistência: Vontade anula",
        area: "",
        normal: "Normal: Você gera uma aura magnética sobrenatural que pode ser usada para atrair ou repelir objetos. No efeito Atrair, você pode puxar um objeto metálico de espaço 2 ou menor para suas mãos ou pés. No efeito Repelir, objetos de espaço 2 ou menor são repelidos, dando-lhe resistência a balístico, corte, impacto e perfuração 5.",
        dicente: "Discente (+2 PE), a energia magnética é expelida de uma só vez, arremessando até 10 objetos ou um total de 10 espaços, o que for menor. Os objetos devem estar a até 3m de distância uns dos outros. Os objetos arremessados podem causar dano a seres em seu caminho, variando de 1 ponto de dano de impacto por espaço (objetos macios, sem pontas ou sem fio) a 1d6 pontos de dano por espaço (objetos duros, pontudos ou afiados). Seres atingidos têm direito a um teste de Reflexos para reduzir o dano à metade. Seres dentro da capacidade de carga do efeito podem ser arremessados, mas têm direito a um teste de Vontade para evitar o efeito (em si mesmos ou em objetos que estejam segurando). Se um ser for arremessado contra uma superfície sólida, ele sofrerá 1d6 pontos de dano de impacto para cada 3m que voou no deslocamento, incluindo outros seres, que também sofrerão dano.",
        verdadeiro: "Verdadeiro (+5 PE), o alcance é aumentado para médio. Você pode usar uma ação de movimento para levitar e mover um ser ou objeto de espaço 10 ou menor por até 9m em qualquer direção dentro do alcance, usando a força magnética. Um ser pode cancelar o efeito sobre si mesmo ou sobre um objeto que possua, passando em um teste de Vontade. Se o alvo sair do alcance ou o efeito terminar, ele cairá no chão."
    },


    {
        nome: "Cicatrização",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: toque",
        alvo: "Alvo: 1 ser",
        duracao: "Duração: instantânea",
        resistencia: "",
        area: "",
        normal: "Normal: Você acelera o tempo ao redor das feridas do alvo, que cicatrizam instantaneamente. O alvo recupera 3d8+3 PV, mas envelhece 1 ano automaticamente.",
        dicente: "Discente (+2 PE): aumenta a cura para 5d8+5 PV. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+9 PE): muda o alcance para “curto”, o alvo para “seres escolhidos” e aumenta a cura para 7d8+7 PV. Requer 4º círculo e afinidade com Morte."
    },


    {
        nome: "Consumir Manancial",
        Custo: "Custo: 1PE",
        Execução: "Execução: padrão",
        alcance: "Alcance: pessoal",
        alvo: "Alvo: você",
        duracao: "Duração: instantânea",
        resistencia: "",
        area: "",
        normal: "Normal: Você suga uma pequena porção do tempo de vida de plantas, insetos e até mesmo do solo ao redor, gerando lodo e recebendo 3d6 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.",
        dicente: "Discente (+2 PE): muda os PV temporários recebidos para 6d6. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): muda o alvo para “área: esfera com 6m de raio centrada em você” e a resistência para “Fortitude reduz à metade”. Em vez do normal, você suga energia de todos os seres vivos na área, causando 3d6 pontos de dano de Morte em cada um e recebendo PV temporários iguais ao dano total causado até o final da cena. Requer 3º círculo e afinidade."
    },


    {
        nome: "Definhar",
        Custo: "1PE",
        Execução: "padrão",
        alcance: "curto",
        alvo: "1 ser",
        duracao: "cena",
        resistencia: "Fortitude parcial",
        area: "",
        normal: " Você dispara uma lufada de cinzas que drena as forças do alvo. A alvo fica fatigado. Se passar no teste de resistência, em vez disso fica vulnerável.",
        dicente: "Discente (+2 PE): em vez do normal, o alvo fica exausto.Se passar na resistência, fica fatigado. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): como discente, mas muda o alvo para “até 5 seres”. Requer 3º círculo e afinidade com Morte."
    },

    {
        nome: "Decadência",
        Custo: "1PE",
        Execução: "padrão",
        alcance: "toque",
        alvo: "1 ser",
        duracao: "instantânea",
        resistencia: "Fortitude reduz à metade",
        area: "",
        normal: "O alvo sofre 2d8+2 pontos de dano de Morte.",
        dicente: "Discente (+2 PE): Muda a resistência para 'nenhuma' e o dano para 3d8+3. Como parte da execução do ritual, transfere as espirais para uma arma e faz um ataque corpo a corpo contra o alvo com esta arma. Se acertar, causa o dano da arma e do ritual, somados. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): Muda o alcance para 'pessoal', o alvo para 'área: explosão com 6m de raio' e o dano para 8d8+8. As espirais afetam todos os seres na área. Requer 3º círculo."
    },


    {
        nome: "Espirais da Perdição",
        Custo: "1PE", 
        Execução: "padrão",
        alcance: "curto", 
        alvo: "1 ser",
        duracao: "cena",
        resistencia: "",
        area: "",
        normal: "O alvo sofre -1d20 em testes de ataque.",
        dicente: "Discente (+2 PE): Muda a penalidade para -2d20. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): Muda a penalidade para -2d20 e o alvo para 'seres escolhidos'. Requer 3º círculo."
    },

    {
        nome: "Nuvem de Cinzas",
        Custo: "1PE",
        Execução: "padrão",
        alcance: "curto",
        Efeito: "nuvem com 6m de raio e 6m de altura",
        duracao: "cena",
        resistencia: "",
        area: "",
        normal: " Uma nuvem de fuligem espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — seres a até 1,5m têm camuflagem e seres a partir de 3m têm camuflagem total. Um vento forte dispersa a nuvem em 4 rodadas e um vendaval a dispersa em 1 rodada. A nuvem não funciona sob a água.",
        dicente: "Discente (+2 PE): você pode escolher seres no alcance ao conjurar o ritual; eles enxergam através do efeito. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): além do normal, a nuvem fica espessa, quase sólida. Qualquer ser dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre -2 em testes de ataque. Requer 3º círculo."
    },

    {
        nome: "Arma Atroz",
        Custo: "1PE",
        Execução: "padrão",
        alcance: "toque",
        alvo: "1 arma corpo a corpo",
        duracao: "sustentada",
        resistencia: "",
        area: "",
        normal: "A arma é recoberta por veias carmesim e passa a exalar uma aura de violência. Ela fornece +2 em testes de ataque e +1 na margem de ameaça.",
        dicente: "Discente (+2 PE): Muda o bônus para +5 em testes de ataque. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): Muda o bônus para +5 em testes de ataque e +2 na margem de ameaça e no multiplicador de crítico. Requer 3º círculo e afinidade."
    },


    {
        nome: "Armadura de Sangue",
        Custo: "1PE",
        Execução: "padrão",
        alcance: "pessoal",
        alvo: "você",
        duracao: "cena",
        resistencia: "",
        area: "",
        normal: "Seu sangue escorre para fora do corpo, cobrindo-o sob a forma de uma carapaça que fornece +5 em Defesa. Esse bônus é cumulativo com outros rituais, mas não com bônus fornecido por equipamento.",
        dicente: "Discente (+2 PE): Muda o efeito para 'fornece +10 na Defesa e resistência a balístico, corte, impacto e perfuração 5'. Requer 3º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): Muda o efeito para 'fornece +15 na Defesa e resistência a balístico, corte, impacto e perfuração 10'. Requer 4º círculo e afinidade.'"
    },

    {
        nome: "Corpo Adaptado",
        Custo: "1PE",
        Execução: "padrão",
        alcance: "toque",
        alvo: "1 pessoa ou animal",
        duracao: "cena",
        resistencia: "",
        area: "",
        normal: "Este ritual modifica a biologia do alvo para permitir a sobrevivência em ambientes hostis. O alvo fica imune a calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa.",
        dicente: "Discente (+2 PE): muda a duração para 1 dia.",
        verdadeiro: "Verdadeiro (+5 PE): muda o alcance para “curto” e o alvo para “pessoas ou animais escolhidos”."
    },

    {
        nome: "Distorcer Aparência",
        Custo: "1PE",
        Execução: "padrão",
        alcance: "pessoal",
        alvo: "você",
        duracao: "cena",
        resistencia: "Vontade desacredita",
        area: "",
        normal: "Você modifica sua aparência de modo a parecer outra pessoa. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz, impressão digital, córnea etc. Você recebe +10 em testes de Enganação para disfarce, mas não recebe habilidades da nova forma nem modifica suas demais estatísticas.",
        dicente: "Discente (+2 PE): muda o alcance para “curto” e o alvo para “1 ser”. Um alvo involuntário pode anular o efeito com um teste de Vontade.",
        verdadeiro: "Verdadeiro (+5 PE): como em Discente, mas muda o alvo para “seres escolhidos”. Requer 3º círculo."
    },

    {
        nome: "Fortalecimento Sensorial",
        Custo: "1PE",
        Execução: "padrão",
        alcance: "pessoal",
        alvo: "você",
        duracao: "cena",
        resistencia: "",
        area: "",
        normal: "Você potencializa seus sentidos, recebendo +1d20 em Investigação, Luta, Percepção e Pontaria.",
        dicente: "Discente (+2 PE): além do normal, seus inimigos sofrem -1d20 em testes de ataque contra você. Requer 2º círculo.",
        verdadeiro: "Verdadeiro (+5 PE): além do normal, você apura seus sentidos para perceber qualquer perigo. Você fica imune às condições surpreendido e desprevenido e recebe +10 em Defesa e Reflexo. Requer 4º círculo e afinidade."
    },

    {
        nome: "Ódio Incontrolável",
        Custo: "1PE",
        Execução: "padrão",
        alcance: "toque",
        alvo: "1 pessoa",
        duracao: "cena",
        resistencia: "",
        area: "",
        normal: "O alvo entra em um frenesi, aumentando sua agressividade e capacidade de luta. Ele recebe +2 em testes de ataque e rolagens de dano corpo a corpo e resistência a balístico, corte, impacto e perfuração 5. Enquanto o efeito durar, o alvo não pode fazer nenhuma ação que exige calma e concentração (como usar a perícia Furtividade ou conjurar rituais), e deve sempre atacar um alvo em sua rodada, mesmo que seja um aliado se ele for o único a seu alcance.",
        dicente: "Discente (+2 PE): além do normal, sempre que o alvo usar a ação agredir, pode fazer um ataque corpo a corpo adicional contra o mesmo alvo. Requer 2º círculo e afinidade.",
        verdadeiro: "Verdadeiro (+5 PE): muda o bônus de ataque e dano para +5 e o alvo passa a sofrer apenas metade do dano dos tipos balístico, corte, impacto e perfuração. Enquanto o efeito durar, o alvo não pode fazer nenhuma ação que exige calma e concentração (como usar a perícia Furtividade ou conjurar rituais), e deve sempre atacar um alvo em sua rodada, mesmo que seja um aliado se ele for o único a seu alcance. Requer 3º círculo e afinidade."
    },

    {
        nome: "Cinerária",
        Custo: "1 de sanidade permanente e dano mental igual ao custo em PE do ritual",
        Execução: "padrão",
        alcance: "curto",
        alvo:"",
        duracao: "cena",
        resistencia: "",
        area: "nuvem de 6m de raio",
        normal: "Você manifesta uma névoa carregada de essência paranormal. Rituais conjurados dentro da névoa têm sua DT aumentada em +5.",
        dicente: "Discente (+2 PE): além do normal, rituais conjurados dentro da névoa custam -2 PE.",
        verdadeiro: "Verdadeiro (+5 PE): além do normal, rituais conjurados dentro da névoa causam dano maximizado.",
    },





];

const origem = [
{
    origem:"policial"
},

{
    origem:"desgarrado"
},

{
    origem:"vitima"
},

{
    origem:"universitario"
},


];

// Função de pesquisa
function search(termo) {
    // Limpa a lista de resultados
    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = "";


    // Cria uma expressão regular a partir do termo de pesquisa
    const regex = new RegExp(termo, "i");


    // Filtra os dados para encontrar correspondências com o termo de pesquisa
    const resultados = dados.filter(objeto => {
        for (const chave in objeto) {
            if (regex.test(objeto[chave])) {
                return true;
            }
        }
        return false;
    });


    // Exibe os resultados na lista
    resultados.forEach(resultado => {
        saida.innerHTML = `${resultado.nome} <br> ${resultado.Custo} <br> ${resultado.Execução} <br> ${resultado.alcance} <br> ${resultado.alvo} <br> ${resultado.duracao} <br> ${resultado.resistencia}<br><br> ${resultado.area} <br><br> ${resultado.normal} <br><br> ${resultado.dicente} <br><br> ${resultado.verdadeiro}`;
    });



}


// Captura o formulário e adiciona um ouvinte de eventos para envio
const form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const termo = document.getElementById("search-term").value;
    search(termo);
});






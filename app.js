const STORAGE_KEY = "educamais-v1";
const subjects = [
  {name:"Matemática",group:"Matemática",icon:"∑",tone:"math",desc:"Números, operações, geometria e raciocínio lógico.",topics:["Frações e números decimais","Porcentagem no cotidiano","Regra de três simples","Equações do primeiro grau"],content:"A Matemática ajuda a interpretar situações e resolver problemas. Comece compreendendo as operações básicas, pratique com exemplos do cotidiano e confira cada etapa do raciocínio."},
  {name:"Português",group:"Linguagens",icon:"Aa",tone:"port",desc:"Leitura, interpretação, gramática e escrita.",topics:["Interpretação de texto","Classes de palavras","Pontuação","Gêneros textuais"],content:"A leitura atenta é essencial para compreender diferentes textos. Observe o tema, a intenção do autor, os argumentos e as informações explícitas e implícitas."},
  {name:"História",group:"Humanas",icon:"⌛",tone:"hist",desc:"Sociedades, acontecimentos e transformações históricas.",topics:["Brasil Colônia","Independência do Brasil","Abolição da escravidão","República brasileira"],content:"Estudar História é analisar mudanças e permanências ao longo do tempo. Relacione os acontecimentos às condições sociais, econômicas, políticas e culturais de cada época."},
  {name:"Geografia",group:"Humanas",icon:"◎",tone:"geo",desc:"Território, população, ambiente e espaço geográfico.",topics:["Cartografia básica","Urbanização brasileira","Clima e vegetação","Globalização"],content:"A Geografia investiga como a sociedade ocupa e transforma o espaço. Mapas, gráficos e dados populacionais ajudam a compreender essas relações."},
  {name:"Biologia",group:"Natureza",icon:"❋",tone:"bio",desc:"Vida, ecossistemas, corpo humano e saúde.",topics:["Células","Ecologia","Genética básica","Cadeias alimentares"],content:"A Biologia estuda os seres vivos e suas relações. Na Ecologia, por exemplo, produtores, consumidores e decompositores participam do fluxo de energia nos ecossistemas."},
  {name:"Física",group:"Natureza",icon:"ϟ",tone:"fis",desc:"Movimento, energia, forças e fenômenos naturais.",topics:["Velocidade média","Leis de Newton","Energia e trabalho","Eletricidade básica"],content:"A Física procura explicar fenômenos naturais por meio de modelos e medidas. A velocidade média, por exemplo, relaciona a distância percorrida ao intervalo de tempo."},
  {name:"Química",group:"Natureza",icon:"⚗",tone:"qui",desc:"Matéria, transformações e composição das substâncias.",topics:["Estados físicos","Misturas","Tabela periódica","Reações químicas"],content:"A Química estuda a matéria, suas propriedades e transformações. Uma mudança química forma substâncias com propriedades diferentes das substâncias iniciais."},
  {name:"Filosofia",group:"Humanas",icon:"◇",tone:"fil",desc:"Pensamento crítico, ética e conhecimento.",topics:["O que é filosofia?","Ética e moral","Filosofia política","Conhecimento e verdade"],content:"A Filosofia desenvolve o pensamento crítico por meio de perguntas, argumentos e reflexão. Uma boa análise considera razões, evidências e diferentes perspectivas."},
  {name:"Sociologia",group:"Humanas",icon:"♧",tone:"soc",desc:"Sociedade, cultura, direitos e desigualdades.",topics:["Cultura e identidade","Instituições sociais","Desigualdade social","Cidadania"],content:"A Sociologia analisa as relações sociais e as instituições. O estudo das desigualdades permite observar como renda, território e oportunidades influenciam a vida das pessoas."},
  {name:"Inglês",group:"Linguagens",icon:"文",tone:"eng",desc:"Vocabulário, leitura e comunicação em inglês.",topics:["Pronomes pessoais","Simple present","Vocabulário cotidiano","Leitura e contexto"],content:"Na leitura em inglês, procure primeiro identificar o assunto geral e as palavras-chave. Nem sempre é necessário traduzir cada palavra para compreender a mensagem."}
];
const questions = [
  {s:"Matemática",q:"Uma camiseta custa R$ 80 e recebeu desconto de 25%. Qual é o preço final?",a:["R$ 20","R$ 55","R$ 60","R$ 65"],c:2,e:"25% de R$ 80 é R$ 20. Subtraindo o desconto: 80 − 20 = R$ 60."},
  {s:"Português",q:"Em um texto, a ideia principal é:",a:["Um detalhe sem relação com o tema","A informação central desenvolvida pelo texto","Sempre a última frase","Uma opinião do leitor"],c:1,e:"A ideia principal resume o assunto ou argumento central que organiza o texto."},
  {s:"História",q:"A Lei Áurea, assinada em 1888, determinou:",a:["A proclamação da República","O fim legal da escravidão no Brasil","A independência do Brasil","O início da colonização"],c:1,e:"A Lei Áurea aboliu legalmente a escravidão no Brasil, em 13 de maio de 1888."},
  {s:"Geografia",q:"O processo de crescimento da população urbana em relação à rural é chamado de:",a:["Industrialização","Globalização","Urbanização","Êxodo sazonal"],c:2,e:"Urbanização é o aumento da proporção de pessoas vivendo em cidades e a expansão do espaço urbano."},
  {s:"Biologia",q:"Qual estrutura celular está relacionada à produção de energia pela respiração celular?",a:["Núcleo","Mitocôndria","Parede celular","Ribossomo"],c:1,e:"As mitocôndrias participam da respiração celular e da produção de ATP, utilizado pela célula."},
  {s:"Física",q:"Um veículo percorre 120 km em 2 horas. Sua velocidade média é:",a:["40 km/h","50 km/h","60 km/h","80 km/h"],c:2,e:"Velocidade média = distância ÷ tempo. Portanto, 120 ÷ 2 = 60 km/h."},
  {s:"Química",q:"A água, em condições ambientes, é geralmente encontrada no estado:",a:["Sólido","Líquido","Gasoso","Plasmático"],c:1,e:"Em condições ambientes, a água pura é líquida. Ela pode mudar de estado conforme temperatura e pressão."},
  {s:"Filosofia",q:"A atitude filosófica é caracterizada principalmente por:",a:["Aceitar tudo sem questionar","Investigar e questionar ideias e argumentos","Evitar o diálogo","Repetir opiniões sem reflexão"],c:1,e:"A Filosofia estimula o questionamento, a investigação racional e a análise crítica de argumentos."},
  {s:"Sociologia",q:"Cidadania envolve:",a:["Somente pagar impostos","Direitos, deveres e participação na vida social","Apenas votar","Não participar de decisões coletivas"],c:1,e:"Cidadania envolve o exercício de direitos e deveres e a participação na sociedade."},
  {s:"Inglês",q:"A expressão 'Good morning' significa:",a:["Boa noite","Boa tarde","Bom dia","Até amanhã"],c:2,e:"'Good morning' é uma saudação usada pela manhã e significa 'bom dia'."},
  {s:"Matemática",q:"Qual é o resultado de 3/4 de 20?",a:["5","10","15","18"],c:2,e:"Divida 20 por 4, obtendo 5, e multiplique por 3: o resultado é 15."},
  {s:"Matemática",q:"Se x + 7 = 15, então x vale:",a:["6","7","8","9"],c:2,e:"Subtraia 7 dos dois lados: x = 15 − 7 = 8."},
  {s:"Português",q:"Qual sinal geralmente indica uma pergunta direta?",a:["Ponto final","Vírgula","Ponto de interrogação","Dois-pontos"],c:2,e:"O ponto de interrogação (?) é utilizado ao final de perguntas diretas."},
  {s:"História",q:"A Independência do Brasil foi proclamada em:",a:["1500","1822","1889","1930"],c:1,e:"A Independência do Brasil foi proclamada em 7 de setembro de 1822."},
  {s:"Geografia",q:"A linha imaginária que divide a Terra em hemisférios Norte e Sul é:",a:["Meridiano de Greenwich","Trópico de Capricórnio","Linha do Equador","Círculo Polar Ártico"],c:2,e:"A Linha do Equador está na latitude 0° e divide o planeta em hemisférios Norte e Sul."},
  {s:"Biologia",q:"Os organismos que produzem seu próprio alimento por fotossíntese são chamados de:",a:["Consumidores","Decompositores","Produtores","Parasitas"],c:2,e:"Plantas e algas são exemplos de produtores, pois podem produzir matéria orgânica pela fotossíntese."},
  {s:"Física",q:"A unidade de força no Sistema Internacional é:",a:["Metro","Newton","Watt","Joule"],c:1,e:"A força é medida em newtons (N), em homenagem ao físico Isaac Newton."},
  {s:"Química",q:"O símbolo químico O representa qual elemento?",a:["Ouro","Ósmio","Oxigênio","Hidrogênio"],c:2,e:"O é o símbolo do elemento químico oxigênio. Ouro é representado por Au."},
  {s:"Filosofia",q:"A ética se relaciona principalmente à reflexão sobre:",a:["A composição das rochas","A ação humana e os valores","A velocidade dos corpos","A classificação das plantas"],c:1,e:"A ética investiga valores, princípios e questões relacionadas às ações humanas."},
  {s:"Sociologia",q:"A socialização é o processo pelo qual as pessoas:",a:["Aprendem normas e valores da sociedade","Deixam de conviver","Perdem sua cultura","Vivem sem interação"],c:0,e:"Na socialização, aprendemos linguagens, valores, normas e práticas por meio da convivência."},
  {s:"Inglês",q:"A palavra 'book' significa:",a:["Mesa","Livro","Janela","Caneta"],c:1,e:"'Book' significa livro em inglês."},
  {s:"Matemática",q:"Qual é a área de um retângulo de 5 cm por 3 cm?",a:["8 cm²","15 cm²","16 cm²","30 cm²"],c:1,e:"A área do retângulo é base × altura: 5 × 3 = 15 cm²."},
  {s:"Português",q:"Um sinônimo é uma palavra que apresenta:",a:["Sentido semelhante a outra","Sentido sempre contrário","Som idêntico","Nenhum significado"],c:0,e:"Sinônimos são palavras de significado igual ou semelhante, dependendo do contexto."},
  {s:"História",q:"A Proclamação da República no Brasil ocorreu em:",a:["1822","1888","1889","1932"],c:2,e:"A República foi proclamada em 15 de novembro de 1889."},
  {s:"Geografia",q:"Qual destes é um recurso natural renovável?",a:["Petróleo","Carvão mineral","Energia solar","Gás natural"],c:2,e:"A energia solar é renovável porque utiliza uma fonte que se repõe continuamente em escala humana."},
  {s:"Biologia",q:"Qual molécula guarda a maior parte das informações genéticas dos seres vivos?",a:["DNA","Água","Glicose","Amido"],c:0,e:"O DNA armazena as informações genéticas que orientam o desenvolvimento e funcionamento dos organismos."},
  {s:"Física",q:"A energia associada ao movimento de um corpo é chamada de:",a:["Potencial gravitacional","Cinética","Química","Nuclear"],c:1,e:"Energia cinética é a energia que um corpo possui devido ao seu movimento."},
  {s:"Química",q:"Uma substância com pH menor que 7 é classificada como:",a:["Básica","Neutra","Ácida","Metálica"],c:2,e:"Na escala usual de pH, valores menores que 7 indicam soluções ácidas."},
  {s:"Filosofia",q:"Um argumento é:",a:["Uma razão apresentada para sustentar uma ideia","Uma pergunta sem relação","Uma lista de palavras","Uma emoção isolada"],c:0,e:"Argumentos apresentam razões ou evidências para apoiar uma conclusão."},
  {s:"Sociologia",q:"Preconceito pode ser entendido como:",a:["Análise baseada sempre em pesquisa","Julgamento prévio, frequentemente estereotipado","Respeito às diferenças","Participação política"],c:1,e:"Preconceito é um julgamento antecipado sobre pessoas ou grupos, sem conhecimento adequado."}
];
const defaultState = {name:"Estudante",grade:"3º ano do Ensino Médio",goal:"Preparação para o ENEM",tasks:[],attempts:[],minutes:0,goalMinutes:30};
let state = loadState();
let activeQuestion = 0;
let selectedAnswer = null;
let answered = false;
let sessionCorrect = 0;
let deferredInstallPrompt = null;
let activeFilter = "Todas";

function loadState() {
  try { return {...defaultState,...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")}; }
  catch (error) { return {...defaultState}; }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateDashboard();
}
function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2600);
}
function updateName() {
  const name = state.name || "Estudante";
  document.getElementById("welcomeName").textContent = name.split(" ")[0];
  document.getElementById("topName").textContent = name;
  document.getElementById("topAvatar").textContent = name.charAt(0).toUpperCase();
  document.getElementById("profileAvatar").textContent = name.charAt(0).toUpperCase();
  document.getElementById("profileDisplayName").textContent = name;
  document.getElementById("profileName").value = name;
  document.getElementById("profileGrade").value = state.grade;
  document.getElementById("profileGoal").value = state.goal;
}
function navigate(page) {
  document.querySelectorAll(".page").forEach(el => el.classList.remove("active"));
  const target = document.getElementById(`page-${page}`);
  if (!target) return;
  target.classList.add("active");
  document.querySelectorAll(".nav-link[data-page]").forEach(el => el.classList.toggle("active", el.dataset.page === page));
  const labels = {inicio:"Início",aprender:"Aprender",exercicios:"Exercícios",enem:"Preparação ENEM",planejamento:"Planejamento",desempenho:"Meu desempenho",perfil:"Meu perfil"};
  document.getElementById("currentSection").textContent = labels[page] || "Início";
  document.getElementById("sidebar").classList.remove("open");
  if (page === "desempenho") renderPerformance();
  if (page === "planejamento") renderTasks();
  window.scrollTo({top:0,behavior:"smooth"});
}
function bindNavigation() {
  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-page]");
    if (trigger) { event.preventDefault(); navigate(trigger.dataset.page); }
  });
  document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
}
function subjectTile(subject) {
  return `<button class="subject-tile" data-subject="${subject.name}"><span class="tile-icon ${subject.tone}">${subject.icon}</span><strong>${subject.name}</strong><small>${subject.topics.length} tópicos iniciais</small></button>`;
}
function renderHomeSubjects() {
  document.getElementById("homeSubjects").innerHTML = subjects.slice(0,5).map(subjectTile).join("");
}
function renderLibrary() {
  const query = document.getElementById("contentSearch").value.trim().toLowerCase();
  const filtered = subjects.filter(item => (activeFilter === "Todas" || item.group === activeFilter) &&
    (item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query) || item.topics.some(t => t.toLowerCase().includes(query))));
  document.getElementById("contentCount").textContent = `${filtered.length} ${filtered.length === 1 ? "matéria" : "matérias"}`;
  document.getElementById("libraryGrid").innerHTML = filtered.length ? filtered.map(item => `
    <article class="library-card">
      <div class="library-card-top"><span class="tile-icon ${item.tone}">${item.icon}</span><span class="soft-badge">${item.group}</span></div>
      <h3>${item.name}</h3><p class="muted">${item.desc}</p>
      <div class="topic-list">${item.topics.slice(0,3).map(topic => `<span class="topic-tag">• ${topic}</span>`).join("<br>")}</div>
      <button class="text-button open-subject" data-subject="${item.name}">Explorar conteúdo →</button>
    </article>`).join("") : `<div class="empty-state">Nenhum conteúdo encontrado. Tente outra busca.</div>`;
}
function openSubject(name) {
  const item = subjects.find(subject => subject.name === name);
  if (!item) return;
  const detail = `${item.name}\n\n${item.content}\n\nTópicos para estudar:\n${item.topics.map((topic,i) => `${i+1}. ${topic}`).join("\n")}`;
  const blob = new Blob([detail], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = `educa-mais-${name.toLowerCase().replaceAll(" ","-")}.txt`;
  link.click(); URL.revokeObjectURL(url);
  toast(`Material introdutório de ${name} preparado para baixar.`);
}
function bindLibrary() {
  document.getElementById("contentSearch").addEventListener("input", renderLibrary);
  document.getElementById("subjectFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("selected", chip === button));
    renderLibrary();
  });
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-subject]");
    if (button) openSubject(button.dataset.subject);
  });
}
function renderQuestion() {
  const question = questions[activeQuestion % questions.length];
  selectedAnswer = null; answered = false;
  document.getElementById("quizSubject").textContent = question.s;
  document.getElementById("quizCounter").textContent = `Questão ${(activeQuestion % questions.length)+1} de ${questions.length}`;
  document.getElementById("questionText").textContent = question.q;
  document.getElementById("quizProgressBar").style.width = `${((activeQuestion % questions.length)+1)/questions.length*100}%`;
  document.getElementById("answerFeedback").hidden = true;
  document.getElementById("checkAnswer").hidden = false;
  document.getElementById("checkAnswer").disabled = true;
  document.getElementById("nextQuestion").hidden = true;
  document.getElementById("answerList").innerHTML = question.a.map((answer,index) => `
    <button class="answer-option" data-answer="${index}"><span class="option-letter">${String.fromCharCode(65+index)}</span><span>${answer}</span></button>`).join("");
}
function chooseAnswer(index) {
  if (answered) return;
  selectedAnswer = index;
  document.querySelectorAll(".answer-option").forEach((option,i) => option.classList.toggle("selected",i===index));
  document.getElementById("checkAnswer").disabled = false;
}
function checkAnswer() {
  if (selectedAnswer === null || answered) return;
  answered = true;
  const question = questions[activeQuestion % questions.length];
  const correct = selectedAnswer === question.c;
  state.attempts.push({subject:question.s,correct,date:new Date().toISOString()});
  if (correct) sessionCorrect++;
  document.getElementById("sessionCorrect").textContent = sessionCorrect;
  document.querySelectorAll(".answer-option").forEach((option,index) => {
    option.disabled = true;
    if (index === question.c) option.classList.add("correct");
    else if (index === selectedAnswer) option.classList.add("wrong");
  });
  const feedback = document.getElementById("answerFeedback");
  feedback.hidden = false;
  feedback.classList.toggle("incorrect",!correct);
  feedback.innerHTML = `<strong>${correct ? "Muito bem! Você acertou." : "Quase! Vamos aprender com essa."}</strong><br>${question.e}`;
  document.getElementById("checkAnswer").hidden = true;
  document.getElementById("nextQuestion").hidden = false;
  state.minutes += 2;
  saveState();
}
function bindQuiz() {
  document.getElementById("answerList").addEventListener("click", event => {
    const option = event.target.closest("[data-answer]");
    if (option) chooseAnswer(Number(option.dataset.answer));
  });
  document.getElementById("checkAnswer").addEventListener("click",checkAnswer);
  document.getElementById("nextQuestion").addEventListener("click",() => {activeQuestion++;renderQuestion();});
  document.getElementById("skipQuestion").addEventListener("click",() => {activeQuestion++;renderQuestion();});
  document.getElementById("questionBankCount").textContent = questions.length;
}
function renderTasks() {
  const list = document.getElementById("taskList");
  document.getElementById("taskCount").textContent = `${state.tasks.length} ${state.tasks.length === 1 ? "atividade" : "atividades"}`;
  if (!state.tasks.length) {
    list.innerHTML = `<div class="empty-state">Você ainda não adicionou atividades.<br>Crie uma tarefa para organizar seus estudos.</div>`;
    return;
  }
  list.innerHTML = state.tasks.map(task => `
    <div class="task-item ${task.done ? "done" : ""}">
      <input class="task-check" type="checkbox" data-task-check="${task.id}" ${task.done ? "checked" : ""} aria-label="Concluir ${escapeHTML(task.title)}">
      <div class="task-info"><strong>${escapeHTML(task.title)}</strong><small>${escapeHTML(task.subject)} · ${formatDate(task.date)} · ${task.duration} min</small></div>
      <button class="task-delete" data-task-delete="${task.id}" aria-label="Excluir tarefa">×</button>
    </div>`).join("");
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function formatDate(value) {
  if (!value) return "Sem data";
  const date = new Date(`${value}T12:00:00`);
  return date.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"});
}
function bindPlanner() {
  document.getElementById("taskDate").value = new Date().toISOString().slice(0,10);
  document.getElementById("taskForm").addEventListener("submit",event => {
    event.preventDefault();
    const title = document.getElementById("taskTitle").value.trim();
    if (!title) return;
    state.tasks.unshift({id:Date.now(),title,subject:document.getElementById("taskSubject").value,date:document.getElementById("taskDate").value,duration:Number(document.getElementById("taskDuration").value),done:false});
    event.target.reset();
    document.getElementById("taskDate").value = new Date().toISOString().slice(0,10);
    saveState(); renderTasks(); toast("Atividade adicionada ao seu planejamento!");
  });
  document.getElementById("taskList").addEventListener("change",event => {
    const id = Number(event.target.dataset.taskCheck);
    if (!id) return;
    const task = state.tasks.find(item => item.id === id);
    if (task) { task.done = event.target.checked; saveState(); renderTasks(); }
  });
  document.getElementById("taskList").addEventListener("click",event => {
    const id = Number(event.target.dataset.taskDelete);
    if (!id) return;
    state.tasks = state.tasks.filter(task => task.id !== id);
    saveState(); renderTasks(); toast("Atividade removida.");
  });
}
function updateDashboard() {
  const total = state.attempts.length;
  const correct = state.attempts.filter(item => item.correct).length;
  const accuracy = total ? Math.round(correct/total*100) : null;
  const completed = state.tasks.filter(task => task.done).length;
  document.getElementById("statQuestions").textContent = total;
  document.getElementById("statMinutes").textContent = state.minutes;
  document.getElementById("statAccuracy").textContent = accuracy === null ? "—" : `${accuracy}%`;
  document.getElementById("statTasks").textContent = completed;
  document.getElementById("goalProgressText").textContent = `${Math.min(state.minutes,state.goalMinutes)} de ${state.goalMinutes} min`;
  const percent = Math.min(100,Math.round(state.minutes/state.goalMinutes*100));
  document.getElementById("goalPercent").textContent = `${percent}%`;
  document.getElementById("goalProgressBar").style.width = `${percent}%`;
  document.getElementById("performanceQuestions").textContent = total;
  document.getElementById("performanceCorrect").textContent = correct;
  document.getElementById("performanceMinutes").textContent = `${state.minutes} min`;
}
function renderPerformance() {
  const total = state.attempts.length;
  const correct = state.attempts.filter(item => item.correct).length;
  const percent = total ? Math.round(correct/total*100) : 0;
  document.getElementById("donutValue").textContent = total ? `${percent}%` : "—";
  document.getElementById("accuracyDonut").style.background = `conic-gradient(var(--blue) ${percent}%,#edf0f6 0)`;
  const container = document.getElementById("subjectPerformance");
  container.innerHTML = subjects.map(subject => {
    const attempts = state.attempts.filter(item => item.subject === subject.name);
    const hits = attempts.filter(item => item.correct).length;
    const rate = attempts.length ? Math.round(hits/attempts.length*100) : 0;
    return `<div class="performance-row"><strong>${subject.name}</strong><div class="performance-bar"><span style="width:${rate}%"></span></div><span>${attempts.length ? `${rate}%` : "—"}</span></div>`;
  }).join("");
  updateDashboard();
}
function bindProfile() {
  document.getElementById("profileForm").addEventListener("submit",event => {
    event.preventDefault();
    state.name = document.getElementById("profileName").value.trim() || "Estudante";
    state.grade = document.getElementById("profileGrade").value;
    state.goal = document.getElementById("profileGoal").value;
    saveState(); updateName(); toast("Perfil atualizado com sucesso!");
  });
  document.getElementById("clearData").addEventListener("click",() => {
    if (!confirm("Tem certeza? Isso apagará seu perfil, tarefas e histórico salvos neste navegador.")) return;
    localStorage.removeItem(STORAGE_KEY);
    state = {...defaultState,tasks:[],attempts:[]};
    saveState(); updateName(); renderTasks(); renderPerformance(); toast("Seus dados locais foram apagados.");
  });
}
function updateConnection() {
  const status = document.getElementById("connectionStatus");
  const online = navigator.onLine;
  status.classList.toggle("offline",!online);
  status.innerHTML = `<i></i> ${online ? "Online" : "Offline"}`;
}
function bindInstall() {
  window.addEventListener("beforeinstallprompt",event => {
    event.preventDefault(); deferredInstallPrompt = event;
    document.getElementById("installButton").hidden = false;
  });
  document.getElementById("installButton").addEventListener("click",async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    document.getElementById("installButton").hidden = true;
  });
}
function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("service-worker.js").catch(error => console.warn("PWA indisponível:",error));
  }
}
function init() {
  bindNavigation(); bindLibrary(); bindQuiz(); bindPlanner(); bindProfile(); bindInstall();
  setupExtendedFeatures();
  renderHomeSubjects(); renderLibrary(); renderQuestion(); renderTasks();
  updateName(); updateDashboard(); updateConnection(); registerServiceWorker();
  window.addEventListener("online",updateConnection);
  window.addEventListener("offline",updateConnection);
}
document.addEventListener("DOMContentLoaded",init);

// Extensões EDUCA+: funções locais de demonstração (sem backend/API externa).
function setupExtendedFeatures() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('educamais-theme') || 'light';
  root.dataset.theme = savedTheme;
  const themeButton = document.getElementById('themeToggle');
  themeButton.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next; localStorage.setItem('educamais-theme', next);
    themeButton.textContent = next === 'dark' ? '☀️' : '🌙';
  });
  const names = ['Ana Clara','Lucas Miguel','Mariana Alves','Pedro Henrique','Julia Santos','Rafael Costa','Beatriz Lima','João Victor','Isabela Rocha','Gabriel Souza'];
  const points = [980,920,875,830,790,745,710,680,640,600];
  document.getElementById('rankingList').innerHTML = names.map((name,i)=>`<div class="ranking-item"><span class="ranking-position">${i<3?['🥇','🥈','🥉'][i]:i+1}</span><div><strong>${name}</strong><small>${i===0?'Destaque da semana':'Estudante EDUCA+'}</small></div><span class="ranking-points">${points[i]} pts</span></div>`).join('');
  const activities = JSON.parse(localStorage.getItem('educamais-teacher-activities') || '[]');
  const renderActivities = () => document.getElementById('teacherActivities').innerHTML = activities.length ? activities.map(a=>`<article class="task-item"><strong>${escapeHTML(a.title)}</strong><p class="muted small">${escapeHTML(a.subject)} · ${escapeHTML(a.due || 'Sem prazo')}</p><p class="muted small">${escapeHTML(a.description)}</p></article>`).join('') : '<p class="muted">Nenhuma atividade publicada.</p>';
  renderActivities();
  document.getElementById('teacherForm').addEventListener('submit',e=>{e.preventDefault();activities.unshift({title:document.getElementById('teacherTitle').value,subject:document.getElementById('teacherSubject').value,description:document.getElementById('teacherDescription').value,due:document.getElementById('teacherDue').value});localStorage.setItem('educamais-teacher-activities',JSON.stringify(activities));renderActivities();e.target.reset();toast('Atividade publicada nesta demonstração!');});
  const modal=document.getElementById('authModal');
  document.getElementById('authOpen').addEventListener('click',()=>{
    document.getElementById('authTitle').textContent='Acesse o EDUCA+';
    document.getElementById('authSubmit').textContent='Entrar';
    document.getElementById('authName').required=false;
    modal.hidden=false;
  });
  document.getElementById('authClose').addEventListener('click',()=>modal.hidden=true);
  document.getElementById('authRegister').addEventListener('click',()=>{document.getElementById('authTitle').textContent='Criar cadastro gratuito';document.getElementById('authSubmit').textContent='Cadastrar';document.getElementById('authName').required=true;});
  document.getElementById('forgotPassword').addEventListener('click',()=>{const email=document.getElementById('authEmail').value.trim();alert(email?'Nesta versão local não há envio de e-mail. Em produção, conecte um serviço seguro de recuperação.':'Digite seu e-mail primeiro. A recuperação real exige servidor e envio de e-mail.');});
  document.getElementById('authForm').addEventListener('submit',e=>{e.preventDefault();const email=document.getElementById('authEmail').value.trim().toLowerCase(), password=document.getElementById('authPassword').value, name=document.getElementById('authName').value.trim(), role=document.getElementById('authRole').value;let users=JSON.parse(localStorage.getItem('educamais-demo-users')||'{}');if(document.getElementById('authSubmit').textContent==='Cadastrar'){if(users[email]){toast('Este e-mail já está cadastrado neste navegador.');return;}users[email]={password,name:name||'Estudante',role};localStorage.setItem('educamais-demo-users',JSON.stringify(users));}else if(!users[email]||users[email].password!==password){toast('Conta não encontrada ou senha incorreta.');return;}const user=users[email]||{name,role};state.name=user.name||name||'Estudante';saveState();updateName();modal.hidden=true;toast(`Bem-vindo(a), ${state.name}!`);if(user.role==='teacher')navigate('professor');});
  document.getElementById('essayReview').addEventListener('click',()=>{const text=document.getElementById('essayText').value.trim();const result=document.getElementById('essayResult');if(text.length<120){toast('Escreva pelo menos 120 caracteres para receber uma análise.');return;}const words=text.split(/\s+/).length, paragraphs=text.split(/\n+/).filter(x=>x.trim()).length, hasConnectors=/portanto|além disso|contudo|porém|desse modo|assim/i.test(text), hasConclusion=/portanto|dessa forma|conclui-se|assim/i.test(text);const score=Math.min(1000,Math.round(350+Math.min(words,300)*1.2+(paragraphs>=3?100:0)+(hasConnectors?80:0)+(hasConclusion?70:0)));result.hidden=false;result.innerHTML=`<strong>Análise orientativa (não oficial)</strong><p>Extensão: ${words} palavras · Parágrafos: ${paragraphs}</p><h2>${score}/1000 pontos estimados</h2><p><b>Organização:</b> ${paragraphs>=3?'Há divisão em parágrafos. Verifique se cada um cumpre uma função.':'Tente separar introdução, desenvolvimento e conclusão.'}</p><p><b>Coesão:</b> ${hasConnectors?'Foram identificados conectivos.':'Inclua conectivos para relacionar as ideias.'}</p><p><b>Próximo passo:</b> revise a tese, aprofunde os argumentos e apresente uma proposta de intervenção detalhada, respeitando os direitos humanos.</p><small>Esta pontuação é apenas heurística, não representa correção por IA nem nota oficial do ENEM.</small>`;});
  document.getElementById('chatForm').addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('chatQuestion'),q=input.value.trim();if(!q)return;const box=document.getElementById('chatMessages');const user=document.createElement('p');user.className='chat-bubble user';user.textContent=q;box.append(user);const answer=document.createElement('p');answer.className='chat-bubble bot';const lower=q.toLowerCase();if(/porcentagem|por cento/.test(lower))answer.textContent='Porcentagem representa uma parte de 100. Para calcular 20% de 50, transforme 20% em 0,20 e multiplique: 0,20 × 50 = 10. Quer tentar outro exemplo?';else if(/redação|enem/.test(lower))answer.textContent='Na redação do ENEM, organize seu texto em introdução, desenvolvimento e conclusão. Defenda uma tese, use argumentos consistentes e apresente uma proposta de intervenção com agente, ação, meio, finalidade e detalhamento.';else if(/fotossíntese/.test(lower))answer.textContent='Fotossíntese é o processo em que plantas, algas e algumas bactérias usam energia luminosa para produzir matéria orgânica a partir de água e gás carbônico, liberando oxigênio em muitos casos.';else answer.textContent='Vamos por partes: identifique o conceito principal, procure um exemplo do cotidiano e tente explicar com suas próprias palavras. Nesta versão demonstrativa, ainda não estou conectado a uma IA em tempo real. Consulte a biblioteca de conteúdos ou envie uma pergunta mais específica.';box.append(answer);input.value='';box.scrollTop=box.scrollHeight;});
}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

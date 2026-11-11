import { useState, useRef, useEffect } from 'react'
import './biofit-screens.css'

const homeApps = [
  {
    key: 'photos', label: 'Photos', placement: 'grid col-1 row-1', bg: '#3dba7f', targetTab: 'treinos', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" fill="#fff" stroke="none" /><path d="M21 15l-5-5L5 21" /></svg>
    )
  },
  {
    key: 'calendar', label: 'Calendar', placement: 'grid col-2 row-1', bg: '#e0453a', targetTab: 'metas', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><rect x="8" y="14" width="2" height="2" rx="0.5" fill="#fff" stroke="none" /></svg>
    )
  },
  {
    key: 'map', label: 'Map', placement: 'grid col-3 row-1', bg: '#3a8de0', targetTab: 'treinos', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" /><path d="M9 3v15M15 6v15" /></svg>
    )
  },
  {
    key: 'mail', label: 'Mail', placement: 'grid col-4 row-1', bg: '#e89e30', targetTab: 'dashboard', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 4l10 9 10-9" /></svg>
    )
  },
  {
    key: 'notes', label: 'Notes', placement: 'grid col-1 row-2', bg: '#d4a017', targetTab: 'metas', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></svg>
    )
  },
  {
    key: 'music', label: 'Music', placement: 'grid col-2 row-2', bg: '#d4368c', targetTab: 'treinos', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
    )
  },
  {
    key: 'camera', label: 'Camera', placement: 'grid col-3 row-2', bg: '#5a6475', targetTab: 'tutorial', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
    )
  },
  {
    key: 'files', label: 'Files', placement: 'grid col-4 row-2', bg: '#20aacc', targetTab: 'treinos', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
    )
  },
  {
    key: 'settings', label: 'Settings', placement: 'grid col-1 row-3', bg: '#6e7683', targetTab: 'perfil', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
    )
  },
  { key: 'biofit', label: 'biofit', placement: 'grid col-2 row-3', bg: '#1c2430', targetTab: 'dashboard', icon: null },
  {
    key: 'home', label: 'Home', placement: 'grid col-3 row-3', bg: '#7c4de8', targetTab: 'dashboard', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    )
  },
  {
    key: 'wallet', label: 'Wallet', placement: 'grid col-4 row-3', bg: '#20b2a0', targetTab: 'metas', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" /></svg>
    )
  },
  {
    key: 'phone', label: 'Phone', placement: 'dock col-1', bg: '#3dba7f', targetTab: 'dashboard', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    )
  },
  {
    key: 'messages', label: 'Messages', placement: 'dock col-2', bg: '#3a8de0', targetTab: 'dashboard', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
    )
  },
  {
    key: 'browser', label: 'Browser', placement: 'dock col-3', bg: '#20aacc', targetTab: 'treinos', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
    )
  },
  {
    key: 'audio', label: 'Audio', placement: 'dock col-4', bg: '#d4368c', targetTab: 'treinos', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
    )
  },
]

const WORKOUT_CATEGORIES = [
  {
    id: 'perna',
    label: 'Perna',
    icon: '/thumbs/thumb-cat-perna.jpg',
    subtitle: 'Quadríceps, Glúteos & Posterior',
    count: '4 treinos',
    muscles: 'Quadríceps • Glúteo Máximo • Isquiotibiais',
  },
  {
    id: 'braco',
    label: 'Braço',
    icon: '/thumbs/thumb-anatomy-braco.jpg',
    subtitle: 'Bíceps, Tríceps & Ombros',
    count: '4 treinos',
    muscles: 'Bíceps Braquial • Tríceps • Deltoides',
  },
  {
    id: 'costas',
    label: 'Costas',
    icon: '/thumbs/thumb-cat-costas.jpg',
    subtitle: 'Dorsais, Lombar & Postura',
    count: '4 treinos',
    muscles: 'Grande Dorsal • Trapézio • Eretores da Espinha',
  },
]

const EXERCISES_DB = [
  // ── PERNA ──
  {
    id: 'squat-base',
    category: 'perna',
    categoryLabel: 'Treino de Perna',
    icon: '/thumbs/thumb-cat-perna.jpg',
    title: 'Base do Agachamento',
    shortDesc: 'Aprenda a alinhar o corpo antes de adicionar carga.',
    duration: '12 min',
    level: 'Iniciante',
    equipment: 'Sem equipamento',
    repsInfo: '4 séries • 8 reps • 180kg',
    kcal: 95,
    muscles: 'Quadríceps, Glúteos e Core',
    video: '/tutorial-agachamento.mp4',
    anatomyImg: '/anatomy-squat.jpg',
    steps: [
      { title: 'Alinhar', body: 'Pés afastados à largura dos ombros e joelhos alinhados na direção dos dedos.' },
      { title: 'Descer', body: 'Leve a anca para trás e para baixo como se fosse sentar, mantendo o peito aberto.' },
      { title: 'Subir', body: 'Empurre o chão pelos calcanhares contraindo glúteos e quadríceps até à posição inicial.' },
    ],
  },
  {
    id: 'leg-press-inclinado',
    category: 'perna',
    categoryLabel: 'Treino de Perna',
    icon: '/thumbs/thumb-leg-press.jpg',
    title: 'Leg Press Inclinado',
    shortDesc: '4 séries, 8 reps, 180kg. Ativação de quadríceps, glúteos e posterior no trenó a 45°.',
    duration: '15 min',
    level: 'Intermediário',
    equipment: '4 séries · 8 reps · 180kg',
    repsInfo: '4 séries • 8 reps • 180kg',
    kcal: 140,
    muscles: 'Quadríceps, Glúteos e Posterior',
    video: '/tutorial-leg-press.mp4',
    anatomyImg: '/anatomy-squat.jpg',
    steps: [
      { title: 'Posicionamento', body: 'Apoie os pés na plataforma na largura dos ombros e mantenha as costas firmes no encosto.' },
      { title: 'Descida Controlada', body: 'Destrave a segurança e flexione os joelhos a 90° controlando o peso sem elevar a bacia.' },
      { title: 'Empurre Forte', body: 'Empurre a plataforma pelos calcanhares até a extensão sem travar os joelhos no topo.' },
    ],
  },
  {
    id: 'cadeira-extensora',
    category: 'perna',
    categoryLabel: 'Treino de Perna',
    icon: '/thumbs/thumb-extensora.jpg',
    title: 'Cadeira Extensora',
    shortDesc: '4 séries, 8 reps, 180kg. Isolamento biomecânico e queima focal dos quadríceps.',
    duration: '12 min',
    level: 'Iniciante',
    equipment: '4 séries · 8 reps · 180kg',
    repsInfo: '4 séries • 8 reps • 180kg',
    kcal: 85,
    muscles: 'Quadríceps (Vasto Lateral, Medial e Reto Femoral)',
    video: '/tutorial-cadeira-extensora.mp4',
    anatomyImg: '/anatomy-squat.jpg',
    steps: [
      { title: 'Ajuste do Banco', body: 'Encoste a lombar totalmente no encosto e posicione o rolo almofadado logo acima dos tornozelos.' },
      { title: 'Extensão Completa', body: 'Estenda os joelhos elevando a carga e contraia o quadríceps no topo por 1 segundo.' },
      { title: 'Descida Lenta', body: 'Retorne controlando o movimento em 3 segundos sem bater os pesos nas anilhas.' },
    ],
  },
  {
    id: 'cadeira-flexora',
    category: 'perna',
    categoryLabel: 'Treino de Perna',
    icon: '/thumbs/thumb-flexora.jpg',
    title: 'Cadeira Flexora',
    shortDesc: '4 séries, 8 reps, 180kg. Isolamento profundo da cadeia posterior e isquiotibiais.',
    duration: '12 min',
    level: 'Iniciante',
    equipment: '4 séries · 8 reps · 180kg',
    repsInfo: '4 séries • 8 reps • 180kg',
    kcal: 85,
    muscles: 'Isquiotibiais (Posterior de Coxa)',
    video: '/tutorial-cadeira-flexora.mp4',
    anatomyImg: '/anatomy-squat.jpg',
    steps: [
      { title: 'Ajuste do Rolo', body: 'Ajuste o rolo atrás dos tornozelos e posicione a almofada sobre as coxas com firmeza.' },
      { title: 'Flexão Forte', body: 'Puxe os calcanhares para trás em direção aos glúteos contraindo fortemente os posteriores.' },
      { title: 'Retorno Excêntrico', body: 'Volte devagar estendendo as pernas até a posição inicial com controlo total da carga.' },
    ],
  },

  // ── BRAÇO ──
  {
    id: 'pushup-bio',
    category: 'braco',
    categoryLabel: 'Treino de Braço',
    icon: '/thumbs/thumb-pushup.jpg',
    title: 'Flexão de Braços (Push-up)',
    shortDesc: 'Domine o alinhamento de cotovelos para proteger os ombros.',
    duration: '12 min',
    level: 'Iniciante',
    equipment: 'Sem equipamento',
    repsInfo: '4 séries • 12 reps • Peso do corpo',
    kcal: 90,
    muscles: 'Tríceps, Deltoide Anterior e Peitoral',
    video: '/tutorial-pushup.mp4',
    anatomyImg: '/anatomy-braco.jpg',
    steps: [
      { title: 'Prancha Ativa', body: 'Mãos ligeiramente mais largas que os ombros, corpo alinhado e abdómen contraído.' },
      { title: 'Cotovelos a 45°', body: 'Desça o corpo mantendo os cotovelos a 45° do tronco, evitando abri-los excessivamente.' },
      { title: 'Empurrar', body: 'Estenda os braços com força mantendo o pescoço neutro até ao topo.' },
    ],
  },
  {
    id: 'bicep-curl',
    category: 'braco',
    categoryLabel: 'Treino de Braço',
    icon: '/thumbs/thumb-biceps.jpg',
    title: 'Rosca Bíceps Controlada',
    shortDesc: 'Foco na fase excêntrica sem balançar a coluna.',
    duration: '14 min',
    level: 'Iniciante',
    equipment: 'Halteres / Elástico',
    repsInfo: '4 séries • 10 reps • 16kg',
    kcal: 85,
    muscles: 'Bíceps Braquial e Antebraço',
    video: '/tutorial-biceps.mp4',
    anatomyImg: '/anatomy-braco.jpg',
    steps: [
      { title: 'Fixar Cotovelos', body: 'De pé, encoste os cotovelos ao lado das costelas e mantenha as palmas viradas para a frente.' },
      { title: 'Flexão', body: 'Suba a carga contraindo o bíceps sem mover os ombros para a frente.' },
      { title: 'Descida Lenta', body: 'Desça em 3 segundos controlando totalmente o peso até estender quase por completo.' },
    ],
  },
  {
    id: 'tricep-dip',
    category: 'braco',
    categoryLabel: 'Treino de Braço',
    icon: '/thumbs/thumb-tricep-dip.jpg',
    title: 'Tríceps Mergulho no Banco',
    shortDesc: 'Fortalecimento da parte posterior do braço usando o peso corporal.',
    duration: '10 min',
    level: 'Iniciante',
    equipment: 'Cadeira ou Banco',
    repsInfo: '3 séries • 12 reps • Peso do corpo',
    kcal: 75,
    muscles: 'Tríceps Braquial e Ombros',
    video: '/tutorial-tricep-dip.mp4',
    anatomyImg: '/anatomy-braco.jpg',
    steps: [
      { title: 'Apoio das Mãos', body: 'Apoie as mãos na borda de uma cadeira firme com os dedos voltados para a frente.' },
      { title: 'Descer Rente', body: 'Flexione os cotovelos para trás descendo as costas bem próximas ao banco.' },
      { title: 'Extensão de Tríceps', body: 'Empurre a cadeira até estender os cotovelos, mantendo os ombros longe das orelhas.' },
    ],
  },
  {
    id: 'shoulder-press',
    category: 'braco',
    categoryLabel: 'Treino de Braço',
    icon: '/thumbs/thumb-shoulder-press.jpg',
    title: 'Desenvolvimento de Ombros',
    shortDesc: 'Força e estabilidade escapular acima da cabeça.',
    duration: '15 min',
    level: 'Intermediário',
    equipment: 'Halteres',
    repsInfo: '4 séries • 10 reps • 22kg',
    kcal: 100,
    muscles: 'Deltoides e Tríceps',
    video: '/tutorial-shoulder-press.mp4',
    anatomyImg: '/anatomy-braco.jpg',
    steps: [
      { title: 'Posição Inicial', body: 'Segure os pesos na altura do queixo com os cotovelos ligeiramente avançados (plano escapular).' },
      { title: 'Elevar', body: 'Empurre os pesos verticalmente acima da cabeça sem arquear a zona lombar.' },
      { title: 'Retorno Controlado', body: 'Desça devagar até os cotovelos voltarem à linha dos ombros.' },
    ],
  },

  // ── COSTAS ──
  {
    id: 'bent-row',
    category: 'costas',
    categoryLabel: 'Treino de Costas',
    icon: '/thumbs/thumb-remada.jpg',
    title: 'Remada Curvada Biomecânica',
    shortDesc: 'Aprenda a puxar com as escápulas e não apenas com os braços.',
    duration: '15 min',
    level: 'Intermediário',
    equipment: 'Halteres / Elástico',
    repsInfo: '4 séries • 10 reps • 40kg',
    kcal: 115,
    muscles: 'Grande Dorsal, Romboides e Trapézio',
    video: '/tutorial-remada.mp4',
    anatomyImg: '/anatomy-costas.jpg',
    steps: [
      { title: 'Dobradiça da Anca', body: 'Incline o tronco a 45° mantendo a coluna neutra e os joelhos semifletidos.' },
      { title: 'Retrair e Puxar', body: 'Junte as escápulas e puxe os cotovelos em direção ao bolso de trás das calças.' },
      { title: 'Alongar com Controlo', body: 'Estenda os braços sentindo o alongamento das costas sem curvar a lombar.' },
    ],
  },
  {
    id: 'superman-back',
    category: 'costas',
    categoryLabel: 'Treino de Costas',
    icon: '/thumbs/thumb-superman.jpg',
    title: 'Extensão Lombar (Superman)',
    shortDesc: 'Fortaleça toda a cadeia posterior e melhore a sua postura.',
    duration: '10 min',
    level: 'Iniciante',
    equipment: 'Colchonete',
    repsInfo: '3 séries • 12 reps • Peso do corpo',
    kcal: 70,
    muscles: 'Eretores da Espinha, Lombar e Glúteos',
    video: '/tutorial-superman.mp4',
    anatomyImg: '/anatomy-costas.jpg',
    steps: [
      { title: 'Deitar de Bruços', body: 'Deite-se de barriga para baixo com braços estendidos à frente e olhar para o chão.' },
      { title: 'Elevação Simultânea', body: 'Eleve suavemente o peito e as pernas do chão ativando as costas e glúteos.' },
      { title: 'Pausa e Retorno', body: 'Mantenha 2 segundos no topo respirando normalmente e desça devagar.' },
    ],
  },
  {
    id: 'lat-pulldown-floor',
    category: 'costas',
    categoryLabel: 'Treino de Costas',
    icon: '/thumbs/thumb-cat-costas.jpg',
    title: 'Puxada Dorsal no Solo',
    shortDesc: 'Ativação do grande dorsal e retração escapular sem aparelhos.',
    duration: '12 min',
    level: 'Iniciante',
    equipment: 'Colchonete',
    repsInfo: '3 séries • 12 reps • Peso do corpo',
    kcal: 75,
    muscles: 'Grande Dorsal, Romboides e Trapézio',
    video: '/tutorial-remada.mp4',
    anatomyImg: '/anatomy-costas.jpg',
    steps: [
      { title: 'Deitar de Bruços', body: 'Deite-se no colchonete com braços estendidos à frente e peito ligeiramente elevado.' },
      { title: 'Puxada e Retração', body: 'Puxe os cotovelos para trás e para baixo em direção às costelas, aproximando as escápulas.' },
      { title: 'Extensão Controlada', body: 'Retorne os braços à frente mantendo a tensão na musculatura das costas.' },
    ],
  },
  {
    id: 'barra-fixa',
    category: 'costas',
    categoryLabel: 'Treino de Costas',
    icon: '/thumbs/thumb-barra-fixa.jpg',
    title: 'Puxada na Barra Fixa (Pull-up)',
    shortDesc: 'Construção de força máxima de tração e largura dorsal.',
    duration: '12 min',
    level: 'Intermediário',
    equipment: 'Barra Fixa',
    repsInfo: '4 séries • 8 reps • Peso do corpo',
    kcal: 110,
    muscles: 'Grande Dorsal, Trapézio, Romboides e Bíceps',
    video: '/tutorial-barra-fixa.mp4',
    anatomyImg: '/anatomy-costas.jpg',
    steps: [
      { title: 'Pegada Pronada', body: 'Segure a barra com pegada ligeiramente mais larga que os ombros e corpo suspenso estável.' },
      { title: 'Depressão Escapular e Tração', body: 'Puxe o peito em direção à barra encaixando as escápulas e levando os cotovelos para baixo.' },
      { title: 'Descida Controlada', body: 'Desça de forma lenta e controlada até estender os braços mantendo a ativação dorsal.' },
    ],
  },

  // ── RECOMENDADOS EXTRAS (Cardio & Core) ──
  {
    id: 'cardio-rapido',
    category: 'perna',
    categoryLabel: 'Cardio & Condicionamento',
    icon: '/thumbs/thumb-cardio.jpg',
    title: 'Cardio Rápido',
    shortDesc: 'Ativação cardiorrespiratória de baixo impacto.',
    duration: '15 min',
    level: 'Iniciante',
    equipment: 'Sem equipamento',
    kcal: 140,
    muscles: 'Corpo Inteiro e Sistema Cardiorrespiratório',
    video: '/tutorial-cardio.mp4',
    anatomyImg: '/anatomy-squat.jpg',
    steps: [
      { title: 'Aquecimento Dinâmico', body: 'Marcha estacionária elevando os joelhos ao ritmo da sua respiração durante 2 minutos.' },
      { title: 'Polichinelo Controlado', body: 'Afaste pés e eleve braços de forma fluida, aterrando sempre na ponta dos pés.' },
      { title: 'Agachamento com Ritmo', body: 'Combine agachamentos curtos e contínuos mantendo a postura alinhada.' },
    ],
  },
  {
    id: 'abs-core',
    category: 'costas',
    categoryLabel: 'Core & Estabilidade',
    icon: '/thumbs/thumb-abs-core.jpg',
    title: 'Abs & Core',
    shortDesc: 'Estabilização abdominal para proteger a coluna nos treinos.',
    duration: '20 min',
    level: 'Intermediário',
    equipment: 'Com colchonete',
    kcal: 120,
    muscles: 'Reto Abdominal, Oblíquos e Transverso',
    video: '/tutorial-abs-core.mp4',
    anatomyImg: '/anatomy-costas.jpg',
    steps: [
      { title: 'Bracing Abdominal', body: 'Deitado, pressione suavemente a lombar contra o colchonete ativando o abdómen profundo.' },
      { title: 'Dead Bug Biomecânico', body: 'Estenda braço e perna opostos devagar sem deixar a coluna descolar do chão.' },
      { title: 'Prancha Isométrica', body: 'Sustente o corpo apoiado nos antebraços mantendo glúteos e abdómen firmes.' },
    ],
  },
]

const BIOFIT_TIPS = [
  { title: 'Dica Biofit · Respiração', text: 'Inspire na descida (fase excêntrica) e expire ao fazer força para subir.' },
  { title: 'Dica de Perna · Joelhos', text: 'No agachamento e afundo, mantenha os joelhos alinhados com a ponta dos pés.' },
  { title: 'Dica de Braço · Cotovelos', text: 'Evite balançar o tronco na rosca bíceps; isole o movimento nos cotovelos.' },
  { title: 'Dica de Costas · Escápulas', text: 'Inicie todas as puxadas e remadas fechando as escápulas antes de dobrar os braços.' },
  { title: 'Dica Biofit · Consistência', text: 'Treinar com boa técnica e menos peso gera mais resultado e evita lesões.' },
  { title: 'Dica de Recuperação · Hidratação', text: 'Beber água antes e durante o treino melhora a contração muscular e reduz a fadiga.' },
]

const screenCopy = {
  photos: {
    eyebrow: 'Biblioteca Biofit',
    title: 'Movimentos',
    body: 'Aprenda cada exercício de Perna, Braço e Costas com referências visuais claras.',
    primary: 'Explorar exercícios',
    secondary: '14 movimentos disponíveis',
    steps: [
      'Veja vídeos e diagramas biomecânicos de Perna, Braço e Costas.',
      'Compare os ângulos articulares corretos de cada exercício.',
      'Inicie qualquer movimento diretamente no painel de treinos Biofit.',
    ],
  },
  calendar: {
    eyebrow: 'Plano Biofit',
    title: 'Calendário',
    body: 'Organize a sua divisão semanal: Seg (Perna), Qua (Braço) e Sex (Costas).',
    primary: 'Ver treino de hoje',
    secondary: 'Divisão Perna · Braço · Costas',
    steps: [
      'Segunda e Quinta: Foco em Membros Inferiores (Perna).',
      'Terça e Sexta: Foco em Membros Superiores (Braço).',
      'Quarta e Sábado: Foco em Dorsais e Postura (Costas).',
    ],
  },
  map: {
    eyebrow: 'Biofit em movimento',
    title: 'Treinar perto de si',
    body: 'Encontre uma rotina que combina com o seu espaço, em casa ou no ginásio.',
    primary: 'Alternar ambiente',
    secondary: 'Casa · Ginásio · Exterior',
    steps: [
      'Modo Casa: Exercícios sem equipamento ou com cadeira/colchonete.',
      'Modo Ginásio: Progressão de carga com halteres, bancos e polias.',
      'Modo Exterior: Treinos dinâmicos de peso corporal e cardio.',
    ],
  },
  mail: {
    eyebrow: 'Acompanhamento',
    title: 'Mensagens',
    body: 'Receba dicas curtas para treinar Perna, Braço e Costas com mais segurança.',
    primary: 'Ler recomendação',
    secondary: '3 mensagens do Coach',
    steps: [
      'Coach Biofit: "Excelente evolução na postura do agachamento esta semana!"',
      'Dica Técnica: "Experimente a nova categoria de Costas para melhorar a postura."',
      'Meta Semanal: "Falta apenas 1 sessão para bater a sua meta de consistência."',
    ],
  },
  notes: {
    eyebrow: 'Registo Biofit',
    title: 'Notas de treino',
    body: 'Guarde sensações, cargas e pequenas vitórias para perceber o seu corpo.',
    primary: 'Adicionar nota rápida',
    secondary: 'Registo diário ativo',
    steps: [
      'Nota Perna: Agachamento livre 3x12 com ótimo controlo de joelhos.',
      'Nota Braço: Flexão de braços 3x10 mantendo cotovelos a 45°.',
      'Nota Costas: Remada curvada 3x12 focando na retração escapular.',
    ],
  },
  music: {
    eyebrow: 'Ritmo Biofit',
    title: 'Foco & Cadência',
    body: 'Escolha um ritmo e mantenha a cadência biomecânica durante a sessão.',
    primary: 'Ativar metrónomo 3-1-2',
    secondary: 'Cadência controlada · 120 BPM',
    steps: [
      'Fase Excêntrica (Descida): 3 segundos de controlo muscular.',
      'Ponto de Inversão (Pausa): 1 segundo de estabilidade máxima.',
      'Fase Concêntrica (Subida): 2 segundos de aplicação de força.',
    ],
  },
  camera: {
    eyebrow: 'Análise Biofit',
    title: 'Ver o movimento',
    body: 'Use referências visuais para comparar postura, amplitude e controlo.',
    primary: 'Abrir tutorial visual',
    secondary: 'Modo educativo 3D',
    steps: [
      'Posicione o telemóvel lateralmente para observar o alinhamento da coluna.',
      'Verifique se os joelhos acompanham a linha dos pés.',
      'Compare com o vídeo guia em tempo real no Biofit.',
    ],
  },
  files: {
    eyebrow: 'Biblioteca Biofit',
    title: 'Os meus programas',
    body: 'Todos os seus planos de Perna, Braço e Costas organizados num só lugar.',
    primary: 'Abrir programas',
    secondary: '3 categorias completas',
    steps: [
      'Programa 01: Base de Perna & Estabilidade Articular (4 exercícios).',
      'Programa 02: Força de Braço & Ombros Saudáveis (4 exercícios).',
      'Programa 03: Costas Fortes & Alinhamento Postural (4 exercícios).',
    ],
  },
  settings: {
    eyebrow: 'Perfil Biofit',
    title: 'Definições',
    body: 'Personalize o seu objetivo, nível de experiência e dados biométricos.',
    primary: 'Editar perfil no Biofit',
    secondary: 'Configuração personalizada',
    steps: [
      'Ajuste o seu nível entre Iniciante, Intermediário e Avançado.',
      'Atualize peso, altura e idade para cálculo preciso de calorias.',
      'Personalize as suas metas diárias de água e energia.',
    ],
  },
  biofit: {
    eyebrow: 'Biofit',
    title: 'Aprenda o movimento',
    body: 'Biologia e biomecânica para começar a treinar com confiança.',
    primary: 'Começar sessão',
    secondary: 'Plano inicial · 20 min',
    steps: [],
  },
  home: {
    eyebrow: 'Painel Biofit',
    title: 'Olá, atleta',
    body: 'Continue a construir uma base forte em Perna, Braço e Costas.',
    primary: 'Ir para o Painel Biofit',
    secondary: 'Progresso de hoje ativo',
    steps: [
      'Veja o resumo da sua ofensiva (streak) de dias seguidos.',
      'Escolha rapidamente entre treino de Perna, Braço ou Costas.',
      'Registe a sua ingestão de água e calorias queimadas.',
    ],
  },
  wallet: {
    eyebrow: 'Plano Biofit',
    title: 'O seu percurso',
    body: 'Acompanhe o caminho entre o primeiro movimento e a sua próxima meta.',
    primary: 'Ver metas e conquistas',
    secondary: 'Metas diárias ativas',
    steps: [
      'Conquista desbloqueada: Primeiros movimentos biomecânicos concluídos.',
      'Hidratação e gasto calórico monitorizados em tempo real.',
      'Evolução constante nas 3 categorias musculares.',
    ],
  },
  phone: {
    eyebrow: 'Biofit Coach',
    title: 'Apoio ao treino',
    body: 'Tenha uma orientação rápida quando precisar de esclarecer um movimento.',
    primary: 'Receber dica do Coach',
    secondary: 'Suporte biomecânico',
    steps: [
      'Dúvida sobre Perna? Priorize a amplitude confortável sem dor articular.',
      'Dúvida sobre Braço? Mantenha os punhos firmes e alinhados com o antebraço.',
      'Dúvida sobre Costas? Mantenha o peito aberto e evite encolher os ombros.',
    ],
  },
  messages: {
    eyebrow: 'Comunidade Biofit',
    title: 'Conversas',
    body: 'Partilhe dúvidas e conquistas com quem também está a evoluir.',
    primary: 'Ver destaques do grupo',
    secondary: 'Comunidade ativa',
    steps: [
      'Ana M. concluiu o Treino de Perna (Base do Agachamento + Afundo).',
      'Pedro S. completou 7 dias seguidos na categoria Costas & Postura.',
      'Lucas R. atingiu a meta diária de 2.5L de água e 500 kcal!',
    ],
  },
  browser: {
    eyebrow: 'Biofit Learn',
    title: 'Aprender',
    body: 'Descubra conteúdos curtos sobre corpo, técnica e biomecânica.',
    primary: 'Explorar artigos',
    secondary: 'Guia de grupos musculares',
    steps: [
      'Artigo 1: Por que o treino de Perna acelera o metabolismo basal?',
      'Artigo 2: Como proteger os cotovelos e ombros no treino de Braço.',
      'Artigo 3: A relação entre treino de Costas e alívio de dores posturais.',
    ],
  },
  audio: {
    eyebrow: 'Biofit Audio',
    title: 'Respirar e focar',
    body: 'Sessões guiadas para preparar o corpo antes do treino.',
    primary: 'Iniciar respiração guiada',
    secondary: 'Aquecimento · 5 min',
    steps: [
      'Inspire profundamente pelo nariz durante 4 segundos.',
      'Sustente o ar ativando o core durante 2 segundos.',
      'Expire lentamente pela boca durante 4 segundos relaxando os ombros.',
    ],
  },
}

function BiomechanicsIllustration({ category, exerciseId, viewMode }) {
  if (viewMode === 'anatomy') {
    const anatomySrc =
      category === 'braco'
        ? '/anatomy-braco.jpg'
        : category === 'costas'
          ? '/anatomy-costas.jpg'
          : '/anatomy-squat.jpg'
    const anatomyLabel =
      category === 'braco'
        ? 'Foco: Bíceps Braquial, Tríceps & Deltoide'
        : category === 'costas'
          ? 'Foco: Grande Dorsal, Trapézio & Lombar'
          : 'Foco: Quadríceps & Glúteos'

    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0c111a' }}>
        <img
          src={anatomySrc}
          alt={`Anatomia muscular - ${category}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', top: 0, left: 0 }}
        />
        <span className="movement-label" style={{ background: 'rgba(0,0,0,0.68)', padding: '4px 10px', borderRadius: '999px', zIndex: 5, bottom: '10px' }}>
          {anatomyLabel}
        </span>
      </div>
    )
  }

  // Default biomechanical diagram for exercises without video
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '210px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="movement-orbit orbit-one" />
      <div className="movement-orbit orbit-two" />
      <svg viewBox="0 0 200 180" style={{ width: '150px', height: '150px', zIndex: 2 }}>
        <defs>
          <linearGradient id="bioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c6ff" />
            <stop offset="100%" stopColor="#7cfc00" />
          </linearGradient>
        </defs>
        {category === 'braco' ? (
          <g stroke="url(#bioGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <circle cx="100" cy="34" r="13" />
            <line x1="100" y1="48" x2="100" y2="112" />
            {/* Animated-style flexed arms */}
            <polyline points="100,60 66,78 54,48" />
            <polyline points="100,60 134,78 146,48" />
            <circle cx="54" cy="44" r="6" fill="#7cfc00" />
            <circle cx="146" cy="44" r="6" fill="#7cfc00" />
            <line x1="100" y1="112" x2="80" y2="160" />
            <line x1="100" y1="112" x2="120" y2="160" />
          </g>
        ) : (
          <g stroke="url(#bioGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Back hinge / row posture */}
            <circle cx="132" cy="46" r="12" />
            <line x1="124" y1="56" x2="78" y2="96" />
            <polyline points="108,70 88,88 112,106" />
            <polyline points="78,96 92,130 82,162" />
            <circle cx="112" cy="106" r="6" fill="#00c6ff" />
          </g>
        )}
      </svg>
      <span className="movement-label" style={{ background: 'rgba(0,0,0,0.55)', padding: '4px 10px', borderRadius: '999px' }}>
        {exerciseId ? 'cadência biomecânica 3-1-2' : 'movimento controlado'}
      </span>
    </div>
  )
}

function BiofitBottomNav({ currentView, setView, onClose }) {
  const [pressedTab, setPressedTab] = useState(null)

  const handleNavClick = (target) => {
    setPressedTab(target)
    setView(target)
    window.setTimeout(() => {
      setPressedTab((curr) => (curr === target ? null : curr))
    }, 420)
  }

  return (
    <>
      <div className="biofit-bottom-nav">
        <button
          type="button"
          className={`biofit-nav-btn nav-tab-inicio ${currentView === 'dashboard' ? 'is-active' : ''} ${pressedTab === 'dashboard' ? 'is-pressing' : ''}`}
          onClick={() => handleNavClick('dashboard')}
          aria-label="Início"
        >
          <span className="nav-glow-bg" />
          <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span>Início</span>
          {currentView === 'dashboard' && <span className="nav-active-bar" />}
        </button>

        <button
          type="button"
          className={`biofit-nav-btn nav-tab-treinos ${currentView === 'treinos' ? 'is-active' : ''} ${pressedTab === 'treinos' ? 'is-pressing' : ''}`}
          onClick={() => handleNavClick('treinos')}
          aria-label="Treinos"
        >
          <span className="nav-glow-bg" />
          <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6.5 6.5 11 11" />
            <path d="m21 21-1-1" />
            <path d="m3 3 1 1" />
            <path d="m18 22 4-4" />
            <path d="m2 6 4-4" />
            <path d="m3 10 7-7" />
            <path d="m14 21 7-7" />
          </svg>
          <span>Treinos</span>
          {currentView === 'treinos' && <span className="nav-active-bar" />}
        </button>

        <button
          type="button"
          className={`biofit-nav-btn nav-tab-metas ${currentView === 'metas' ? 'is-active' : ''} ${pressedTab === 'metas' ? 'is-pressing' : ''}`}
          onClick={() => handleNavClick('metas')}
          aria-label="Metas"
        >
          <span className="nav-glow-bg" />
          <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 14v-4" />
            <path d="M3.34 17a10 10 0 1 1 17.32 0" />
            <circle cx="12" cy="14" r="2" fill="currentColor" />
          </svg>
          <span>Metas</span>
          {currentView === 'metas' && <span className="nav-active-bar" />}
        </button>

        <button
          type="button"
          className={`biofit-nav-btn nav-tab-perfil ${currentView === 'perfil' ? 'is-active' : ''} ${pressedTab === 'perfil' ? 'is-pressing' : ''}`}
          onClick={() => handleNavClick('perfil')}
          aria-label="Perfil"
        >
          <span className="nav-glow-bg" />
          <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>Perfil</span>
          {currentView === 'perfil' && <span className="nav-active-bar" />}
        </button>
      </div>

      <div className="phone-home-indicator-wrap">
        <button
          type="button"
          className="phone-home-indicator"
          onClick={onClose}
          title="Voltar ao ecrã inicial do telefone"
          aria-label="Voltar ao ecrã inicial do telefone"
        />
      </div>
    </>
  )
}

function BiofitApp({ onClose, initialView = 'dashboard', initialCategory = 'perna' }) {
  // Se o utilizador quiser ver o registo, pode aceder pelo botão "Criar Conta / Registo", mas começamos ou permitimos navegação fluida
  const [view, setView] = useState(initialView) // 'register' | 'onboarding' | 'dashboard' | 'treinos' | 'metas' | 'perfil' | 'tutorial'
  const [step, setStep] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory) // 'todos' | 'perna' | 'braco' | 'costas'
  const [activeExercise, setActiveExercise] = useState(EXERCISES_DB[0])
  const [visualMode, setVisualMode] = useState('video') // 'video' | 'anatomy'

  const [user, setUser] = useState({ name: 'Atleta', email: 'atleta@biofit.pt', password: '', terms: true })
  const [avatarUrl, setAvatarUrl] = useState('/user-avatar.png')
  const avatarInputRef = useRef(null)
  const [onboarding, setOnboarding] = useState({ level: 'iniciante', age: '26', weight: '70', height: '175' })

  // Interactive states for Dashboard & Goals
  const [waterLiters, setWaterLiters] = useState(1.25)
  const [waterGoal] = useState(2.5)
  const [caloriesBurned, setCaloriesBurned] = useState(280)
  const [caloriesGoal] = useState(500)
  const [statsPeriod, setStatsPeriod] = useState('semana') // 'semana' | 'mes' | 'hoje'
  const [completedStats, setCompletedStats] = useState({ consistency: 64, movements: 8, sessions: 2, streak: 4 })
  const [streakDays, setStreakDays] = useState([true, true, true, true, false, false, false])
  const [showStreakModal, setShowStreakModal] = useState(false)
  const [tipIndex, setTipIndex] = useState(0)
  const [legalModal, setLegalModal] = useState(null) // 'terms' | 'privacy' | null
  const [toastMessage, setToastMessage] = useState(null)

  // Interactive Header States (BF Brand / Help Center, Avatar, Bell)
  const [showNotifications, setShowNotifications] = useState(false)
  const [hasUnreadNotif, setHasUnreadNotif] = useState(true)
  const [bellRinging, setBellRinging] = useState(false)
  const [brandPressed, setBrandPressed] = useState(false)
  const [avatarPressed, setAvatarPressed] = useState(false)
  const [showBrandMenu, setShowBrandMenu] = useState(false)
  const [helpIssueType, setHelpIssueType] = useState('app') // 'app' | 'treino' | 'video' | 'outro'
  const [helpMessage, setHelpMessage] = useState('')
  const [helpTickets, setHelpTickets] = useState([
    { id: 1, type: '📱 App', text: 'Sincronização verificada hoje', status: 'Resolvido ✓' },
  ])

  // Interactive workout timer inside tutorial
  const [timerSeconds, setTimerSeconds] = useState(45)
  const [timerRunning, setTimerRunning] = useState(false)

  const videoRef = useRef(null)

  useEffect(() => {
    if (!timerRunning) return undefined
    const interval = window.setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          setTimerRunning(false)
          showToast('Série concluída! Excelente controlo biomecânico 💪')
          return 45
        }
        return prev - 1
      })
    }, 1000)
    return () => window.clearInterval(interval)
  }, [timerRunning])

  const showToast = (msg) => {
    setToastMessage(msg)
    window.setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current))
    }, 2800)
  }

  const handleVideoTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 6) {
      videoRef.current.currentTime = 1
      videoRef.current.play().catch(() => { })
    }
  }

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1
    }
  }

  const openExerciseTutorial = (exercise) => {
    setActiveExercise(exercise)
    setStep(0)
    setVisualMode('video')
    setTimerRunning(false)
    setTimerSeconds(45)
    setView('tutorial')
  }

  const completeCurrentWorkout = () => {
    const addedKcal = activeExercise?.kcal || 85
    setCaloriesBurned((prev) => prev + addedKcal)
    setCompletedStats((prev) => ({
      ...prev,
      consistency: Math.min(100, prev.consistency + 6),
      movements: prev.movements + 1,
      sessions: prev.sessions + 1,
    }))
    setTimerRunning(false)
    showToast(`Treino "${activeExercise.title}" concluído! +${addedKcal} kcal 🔥`)
    setView('dashboard')
  }

  const filteredExercises = selectedCategory === 'todos'
    ? EXERCISES_DB.slice(0, 12)
    : EXERCISES_DB.filter((ex) => ex.category === selectedCategory && ex.id !== 'cardio-rapido' && ex.id !== 'abs-core')

  const handleBrandClick = () => {
    setBrandPressed(true)
    setShowNotifications(false)
    window.setTimeout(() => setBrandPressed(false), 500)
    setShowBrandMenu((s) => !s)
  }

  const handleSubmitHelpTicket = (e) => {
    e.preventDefault()
    const labels = {
      app: '📱 Problema com o App',
      treino: '🏋️ Dúvida no Exercício',
      video: '🎥 Erro no Vídeo',
      outro: '💬 Outro Problema',
    }
    const desc = helpMessage.trim() || `Solicitação de apoio (${labels[helpIssueType]}) no treino de ${activeExercise?.title || 'hoje'}`
    setHelpTickets((prev) => [
      { id: Date.now(), type: labels[helpIssueType], text: desc, status: 'Em atendimento ⚡' },
      ...prev.slice(0, 2),
    ])
    setHelpMessage('')
    showToast('✅ Chamado enviado! A equipa de suporte do app já foi notificada.')
  }

  const handleAvatarFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      if (typeof ev.target?.result === 'string') {
        setAvatarUrl(ev.target.result)
        showToast('📸 Foto de perfil atualizada com sucesso!')
      }
    }
    reader.readAsDataURL(file)
  }

  const handleAvatarClick = () => {
    setAvatarPressed(true)
    setShowNotifications(false)
    setShowBrandMenu(false)
    window.setTimeout(() => setAvatarPressed(false), 450)
    if (view === 'perfil') {
      setView('dashboard')
    } else {
      setView('perfil')
      showToast(`👤 Perfil de ${user.name || 'Atleta'} ativo`)
    }
  }

  const handleBellClick = () => {
    setBellRinging(true)
    setShowBrandMenu(false)
    setShowNotifications((s) => !s)
    window.setTimeout(() => setBellRinging(false), 600)
  }

  const renderBiofitHeader = (subtitle = 'O seu espaço de treino', title = 'Biofit') => (
    <>
      <div className="app-screen-header biofit-main-header">
        <button
          type="button"
          className={`biofit-brand-group biofit-brand-btn ${brandPressed ? 'is-pulsing' : ''} ${showBrandMenu ? 'is-menu-open' : ''}`}
          onClick={handleBrandClick}
          title="Central de Ajuda & Contato com Suporte Biofit"
        >
          <span className="bf-text-logo">B<span>F</span></span>
          <div className="biofit-brand-text">
            <span className="brand-eyebrow">{subtitle} · <em className="brand-help-pill">Ajuda ?</em></span>
            <h2 id="biofit-screen-title" className="brand-title">{title}</h2>
          </div>
        </button>

        <div className="header-actions">
          <button
            type="button"
            className={`header-avatar-btn ${view === 'perfil' ? 'is-active' : ''} ${avatarPressed ? 'is-pressing' : ''}`}
            onClick={handleAvatarClick}
            title="Perfil do Atleta"
            aria-label="Perfil do Atleta"
          >
            <img src={avatarUrl} alt="Perfil do Atleta" className="header-avatar-img" />
          </button>
          <button
            type="button"
            className={`header-bell-btn ${showNotifications ? 'is-active' : ''} ${bellRinging ? 'is-ringing' : ''}`}
            onClick={handleBellClick}
            title="Notificações"
            aria-label="Notificações"
          >
            <svg className="bell-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {hasUnreadNotif && <span className="bell-badge-dot" />}
          </button>
        </div>
      </div>

      {showBrandMenu && (
        <div className="biofit-dropdown-panel brand-quick-panel help-support-panel">
          <div className="dropdown-panel-header">
            <strong>🛟 Central de Ajuda & Suporte Biofit</strong>
            <button type="button" className="link-action-btn" onClick={() => setShowBrandMenu(false)}>Fechar ×</button>
          </div>

          <p className="help-panel-sub">
            Teve algum problema com o app, vídeo ou exercício? Fale connosco agora:
          </p>

          <div className="brand-quick-grid">
            <button
              type="button"
              className={`brand-quick-chip ${helpIssueType === 'app' ? 'is-active' : ''}`}
              onClick={() => setHelpIssueType('app')}
            >
              📱 Problema com o App
            </button>
            <button
              type="button"
              className={`brand-quick-chip ${helpIssueType === 'treino' ? 'is-active' : ''}`}
              onClick={() => setHelpIssueType('treino')}
            >
              🏋️ Dúvida no Exercício
            </button>
            <button
              type="button"
              className={`brand-quick-chip ${helpIssueType === 'video' ? 'is-active' : ''}`}
              onClick={() => setHelpIssueType('video')}
            >
              🎥 Erro no Vídeo
            </button>
            <button
              type="button"
              className={`brand-quick-chip ${helpIssueType === 'outro' ? 'is-active' : ''}`}
              onClick={() => setHelpIssueType('outro')}
            >
              💬 Outro Problema
            </button>
          </div>

          <form className="help-report-form" onSubmit={handleSubmitHelpTicket}>
            <input
              type="text"
              className="help-report-input"
              placeholder={
                helpIssueType === 'app'
                  ? 'Ex: O app travou ou alguma tela não abriu...'
                  : helpIssueType === 'treino'
                    ? 'Ex: Tenho dúvida sobre a postura do exercício...'
                    : 'Descreva o problema ou dúvida rapidamente...'
              }
              value={helpMessage}
              onChange={(e) => setHelpMessage(e.target.value)}
            />
            <button type="submit" className="help-report-submit">
              Enviar →
            </button>
          </form>

          <div className="help-direct-contacts">
            <button
              type="button"
              className="help-contact-btn is-whatsapp"
              onClick={() => {
                showToast('📱 WhatsApp Suporte (11) 99824-5100 iniciado!')
                setShowBrandMenu(false)
              }}
            >
              <span>📱 WhatsApp Plantão</span>
              <small>(11) 99824-5100</small>
            </button>
            <button
              type="button"
              className="help-contact-btn is-email"
              onClick={() => {
                showToast('✉️ E-mail copiado: suporte@biofit.app')
              }}
            >
              <span>✉️ E-mail Suporte</span>
              <small>suporte@biofit.app</small>
            </button>
          </div>
        </div>
      )}

      {showNotifications && (
        <div className="biofit-dropdown-panel notif-dropdown-panel">
          <div className="dropdown-panel-header">
            <strong>🔔 Central de Notificações</strong>
            <button
              type="button"
              className="link-action-btn"
              onClick={() => {
                setHasUnreadNotif(false)
                setShowNotifications(false)
                showToast('Notificações marcadas como lidas ✓')
              }}
            >
              Limpar alertas ✓
            </button>
          </div>
          <div className="notif-items-list">
            <button
              type="button"
              className="notif-item-btn"
              onClick={() => {
                setShowNotifications(false)
                openExerciseTutorial(EXERCISES_DB[0])
              }}
            >
              <span className="notif-item-icon">🔥</span>
              <div className="notif-item-body">
                <strong>Ofensiva de {completedStats.streak} dias seguidos!</strong>
                <span>Toque para começar a Base do Agachamento agora.</span>
              </div>
            </button>
            <button
              type="button"
              className="notif-item-btn"
              onClick={() => {
                setWaterLiters((w) => +(w + 0.25).toFixed(2))
                setShowNotifications(false)
                showToast('+250ml de água registados! 💧')
              }}
            >
              <span className="notif-item-icon">💧</span>
              <div className="notif-item-body">
                <strong>Meta de Água: {waterLiters.toFixed(2)}L / {waterGoal}L</strong>
                <span>Toque para adicionar +250ml rapidamente.</span>
              </div>
            </button>
            <button
              type="button"
              className="notif-item-btn"
              onClick={() => {
                setShowNotifications(false)
                openExerciseTutorial(EXERCISES_DB.find((e) => e.id === 'cardio-rapido'))
              }}
            >
              <span className="notif-item-icon">⚡</span>
              <div className="notif-item-body">
                <strong>Novo Treino: Cardio Rápido</strong>
                <span>Queime +140 kcal em 15 min com guia holográfico.</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  )

  // ── VIEW: REGISTER ──
  if (view === 'register') {
    return (
      <div className="biofit-app-root">
        <button className="btn-close-overlay" type="button" onClick={onClose} aria-label="Fechar Biofit">&times;</button>
        <div className="biofit-container">
          <div className="form-wrapper">
            <div className="bf-header">
              <h1>Biofit</h1>
              <p>Crie o seu perfil rapidamente e sem atrito.</p>
            </div>
            <form
              id="registerForm"
              onSubmit={(e) => {
                e.preventDefault()
                setStep(0)
                setView('onboarding')
              }}
            >
              <div className="bf-input-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="O seu nome"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="bf-input-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="O seu e-mail"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="bf-input-group">
                <label htmlFor="password">Palavra-passe</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="A sua palavra-passe"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  checked={user.terms}
                  onChange={(e) => setUser({ ...user, terms: e.target.checked })}
                />
                <label htmlFor="terms">
                  Aceito obrigatoriamente os{' '}
                  <button type="button" className="link-btn" onClick={() => setLegalModal('terms')}>
                    Termos de Uso
                  </button>{' '}
                  e a{' '}
                  <button type="button" className="link-btn" onClick={() => setLegalModal('privacy')}>
                    Política de Privacidade
                  </button>.
                </label>
              </div>
              <button type="submit" className="submit-btn">Criar Perfil</button>
              <button
                type="button"
                className="guest-btn"
                onClick={() => {
                  setView('dashboard')
                }}
              >
                Ir direto para os Treinos →
              </button>
            </form>
          </div>
        </div>

        {legalModal && (
          <div className="biofit-modal-backdrop" onClick={() => setLegalModal(null)}>
            <div className="biofit-modal-card" onClick={(e) => e.stopPropagation()}>
              <h3>{legalModal === 'terms' ? 'Termos de Uso Biofit' : 'Política de Privacidade'}</h3>
              <p>
                {legalModal === 'terms'
                  ? 'O Biofit fornece orientações educativas de biomecânica para treinos de Perna, Braço e Costas. Respeite sempre os limites articulares do seu corpo e execute cada movimento de forma controlada.'
                  : 'Os seus dados biométricos (idade, peso, altura e progresso de treino) são guardados localmente no seu dispositivo apenas para personalizar os seus treinos e metas calóricas.'}
              </p>
              <button
                type="button"
                className="submit-btn"
                style={{ padding: '10px', fontSize: '0.9rem' }}
                onClick={() => {
                  setUser({ ...user, terms: true })
                  setLegalModal(null)
                }}
              >
                Aceitar e Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ── VIEW: ONBOARDING ──
  if (view === 'onboarding') {
    const isStep1 = step === 0

    return (
      <div className="biofit-app-root">
        <button
          className="btn-back-overlay"
          type="button"
          onClick={() => (isStep1 ? setView('register') : setStep(0))}
          aria-label="Voltar"
        >
          ‹
        </button>
        <button className="btn-close-overlay" type="button" onClick={onClose} aria-label="Fechar">&times;</button>
        <div className="biofit-container">
          {isStep1 ? (
            <div className="step-card" id="step-experience">
              <div className="bf-header">
                <h2>Qual é o seu nível?</h2>
                <p>Personalizamos os treinos de Perna, Braço e Costas para si.</p>
              </div>
              <div className="options-grid">
                <div
                  className={`option-card ${onboarding.level === 'iniciante' ? 'active' : ''}`}
                  onClick={() => setOnboarding({ ...onboarding, level: 'iniciante' })}
                >
                  <div className="icon">🌱</div>
                  <div className="content">
                    <h3>Iniciante</h3>
                    <p>Pouca ou nenhuma experiência de treino.</p>
                  </div>
                </div>
                <div
                  className={`option-card ${onboarding.level === 'intermediario' ? 'active' : ''}`}
                  onClick={() => setOnboarding({ ...onboarding, level: 'intermediario' })}
                >
                  <div className="icon">💪</div>
                  <div className="content">
                    <h3>Intermediário</h3>
                    <p>Treino regular há alguns meses.</p>
                  </div>
                </div>
                <div
                  className={`option-card ${onboarding.level === 'avancado' ? 'active' : ''}`}
                  onClick={() => setOnboarding({ ...onboarding, level: 'avancado' })}
                >
                  <div className="icon">🔥</div>
                  <div className="content">
                    <h3>Avançado</h3>
                    <p>Treino intensivo e focado em resultados.</p>
                  </div>
                </div>
              </div>
              <button type="button" className="primary-btn" onClick={() => setStep(1)}>
                Continuar
              </button>
            </div>
          ) : (
            <div className="step-card" id="step-biometrics">
              <div className="bf-header">
                <h2>Dados Biométricos</h2>
                <p>Para um cálculo mais preciso das calorias queimadas.</p>
              </div>
              <form
                id="biometricsForm"
                onSubmit={(e) => {
                  e.preventDefault()
                  setStep(0)
                  setView('dashboard')
                  showToast('Perfil configurado com sucesso! 🎉')
                }}
              >
                <div className="bf-input-group">
                  <label htmlFor="age">Idade (anos)</label>
                  <input
                    type="number"
                    id="age"
                    min="10"
                    max="120"
                    placeholder="Ex: 25"
                    value={onboarding.age}
                    onChange={(e) => setOnboarding({ ...onboarding, age: e.target.value })}
                  />
                </div>
                <div className="bf-input-group">
                  <label htmlFor="weight">Peso (kg)</label>
                  <input
                    type="number"
                    id="weight"
                    step="0.1"
                    placeholder="Ex: 70.5"
                    value={onboarding.weight}
                    onChange={(e) => setOnboarding({ ...onboarding, weight: e.target.value })}
                  />
                </div>
                <div className="bf-input-group">
                  <label htmlFor="height">Altura (cm)</label>
                  <input
                    type="number"
                    id="height"
                    placeholder="Ex: 175"
                    value={onboarding.height}
                    onChange={(e) => setOnboarding({ ...onboarding, height: e.target.value })}
                  />
                </div>
                <div className="button-group">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => {
                      setStep(0)
                      setView('dashboard')
                    }}
                  >
                    Saltar por agora
                  </button>
                  <button type="submit" className="primary-btn" style={{ flex: 1 }}>
                    Finalizar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── VIEW: TUTORIAL / WORKOUT SESSION ──
  if (view === 'tutorial') {
    const tutorialSteps = activeExercise?.steps || EXERCISES_DB[0].steps
    const currentTutorial = tutorialSteps[step] || tutorialSteps[0]
    const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0')
    const secs = String(timerSeconds % 60).padStart(2, '0')

    return (
      <section className="app-screen app-screen-biofit" role="dialog" aria-modal="true" aria-labelledby="biofit-screen-title">
        <div className="app-screen-header">
          <button
            className="tutorial-back"
            type="button"
            onClick={() => {
              setTimerRunning(false)
              setView('dashboard')
            }}
            aria-label="Voltar ao painel Biofit"
          >
            ‹
          </button>
          <div className="app-screen-heading">
            <span>{activeExercise.categoryLabel} · Etapa {step + 1} de {tutorialSteps.length}</span>
            <h2 id="biofit-screen-title">{activeExercise.title}</h2>
          </div>
          <button className="close-app" type="button" onClick={onClose} aria-label="Voltar ao ecrã inicial">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="tutorial-progress" aria-label={`Etapa ${step + 1} de ${tutorialSteps.length}`}>
          {tutorialSteps.map((item, index) => (
            <span
              key={item.title}
              className={index <= step ? 'is-active' : ''}
              style={{ cursor: 'pointer', height: '5px' }}
              onClick={() => setStep(index)}
              title={`Ir para etapa ${index + 1}: ${item.title}`}
            />
          ))}
        </div>

        <div className="tutorial-mode-bar">
          <div className="tutorial-mode-badge">
            🎬 Movimento
          </div>
          <button
            type="button"
            className={`tutorial-timer-btn ${timerRunning ? 'is-running' : ''}`}
            onClick={() => setTimerRunning((r) => !r)}
            title={timerRunning ? 'Pausar cronômetro' : 'Iniciar série'}
          >
            <span className="timer-icon">{timerRunning ? '⏸' : '⏱'}</span>
            <span className="timer-label">{timerRunning ? 'PAUSAR' : 'SÉRIE'}</span>
            <span className="timer-digits">{mins}:{secs}</span>
          </button>
        </div>

        <div className="tutorial-visual" aria-label={`Demonstração de ${activeExercise.title}`}>
          {activeExercise.video ? (
            <>
              <video
                ref={videoRef}
                src={activeExercise.video}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', position: 'absolute', top: 0, left: 0, background: '#000' }}
              />
              <span className="movement-label" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', border: '1px solid rgba(0, 198, 255, 0.25)', padding: '3px 12px', borderRadius: '999px', zIndex: 5, bottom: '6px', fontSize: '11px', letterSpacing: '0.3px', color: '#e2e8f0' }}>
                {activeExercise.muscles}
              </span>
            </>
          ) : (
            <BiomechanicsIllustration
              category={activeExercise.category}
              exerciseId={activeExercise.id}
              viewMode={visualMode}
            />
          )}
        </div>

        <div className="tutorial-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="tutorial-step-label">Ponto-chave {step + 1}/{tutorialSteps.length}</span>
            <span style={{ fontSize: '10px', color: '#7cfc00', fontWeight: 700 }}>
              🔥 +{activeExercise.kcal} kcal · {activeExercise.duration}
            </span>
          </div>
          <h3>{currentTutorial.title}</h3>
          <p>{currentTutorial.body}</p>

          <div className="tutorial-steps-mini-list">
            {tutorialSteps.map((sItem, sIdx) => (
              <button
                key={sItem.title}
                type="button"
                className={`tutorial-step-mini-item ${sIdx === step ? 'is-current' : ''} ${sIdx < step ? 'is-done' : ''}`}
                onClick={() => setStep(sIdx)}
              >
                <span className="step-mini-num">{sIdx < step ? '✓' : sIdx + 1}</span>
                <div className="step-mini-text">
                  <strong>{sItem.title}</strong>
                  <span>{sItem.body}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="tutorial-meta-strip">
            <div className="tutorial-meta-pill">
              <span>🏋️ Série & Carga</span>
              <strong>{activeExercise.repsInfo || activeExercise.equipment}</strong>
            </div>
            <div className="tutorial-meta-pill">
              <span>🫁 Respiração</span>
              <strong>Inspire ao descer · Expire ao subir</strong>
            </div>
          </div>

          <div className="tutorial-actions">
            <button
              type="button"
              className="tutorial-skip"
              onClick={() => (step > 0 ? setStep(step - 1) : setView('dashboard'))}
            >
              {step > 0 ? '‹ Etapa anterior' : 'Voltar ao painel'}
            </button>
            <button
              type="button"
              className="tutorial-next"
              onClick={() => (step < tutorialSteps.length - 1 ? setStep(step + 1) : completeCurrentWorkout())}
            >
              {step < tutorialSteps.length - 1 ? 'Próximo' : 'Concluir Treino'} <span aria-hidden="true">{step < tutorialSteps.length - 1 ? '→' : '✓'}</span>
            </button>
          </div>
        </div>
      </section>
    )
  }

  // ── VIEW: TREINOS (Full Categories View: Perna, Braço, Costas) ──
  if (view === 'treinos') {
    return (
      <section className="app-screen app-screen-biofit" role="dialog" aria-modal="true" aria-labelledby="biofit-screen-title">
        {renderBiofitHeader('Biblioteca Biomecânica', 'Treinos')}

        {toastMessage && <div className="biofit-toast">{toastMessage}</div>}

        <div className="biofit-categories-tabs" style={{ marginTop: '14px' }}>
          <button
            type="button"
            className={`category-tab-btn ${selectedCategory === 'todos' ? 'is-active' : ''}`}
            onClick={() => setSelectedCategory('todos')}
          >
            <span className="cat-emoji">🔥</span>
            <span>Todos</span>
          </button>
          {WORKOUT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`category-tab-btn ${selectedCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="cat-emoji">
                {typeof cat.icon === 'string' && cat.icon.startsWith('/') ? (
                  <img src={cat.icon} alt={cat.label} className="category-tab-thumb" />
                ) : (
                  cat.icon
                )}
              </span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {selectedCategory !== 'todos' && (
          <div style={{ padding: '8px 12px', marginBottom: '10px', borderRadius: '12px', background: 'rgba(0,198,255,0.1)', border: '1px solid rgba(0,198,255,0.28)', fontSize: '11px', color: '#d9f7f4' }}>
            <strong style={{ color: '#00c6ff' }}>
              {WORKOUT_CATEGORIES.find((c) => c.id === selectedCategory)?.label}:
            </strong>{' '}
            {WORKOUT_CATEGORIES.find((c) => c.id === selectedCategory)?.muscles}
          </div>
        )}

        <div className="exercise-list">
          {filteredExercises.map((ex) => (
            <button
              key={ex.id}
              type="button"
              className="exercise-item-card"
              onClick={() => openExerciseTutorial(ex)}
            >
              <div className="exercise-item-left">
                <div className="exercise-item-badge">
                  {typeof ex.icon === 'string' && ex.icon.startsWith('/') ? (
                    <img src={ex.icon} alt={ex.title} className="machine-icon-img" />
                  ) : (
                    ex.icon
                  )}
                </div>
                <div className="exercise-item-info">
                  <strong>{ex.title}</strong>
                  <span>{ex.categoryLabel} • {ex.duration} • {ex.level}</span>
                  <span style={{ color: '#74dec3' }}>{ex.equipment} • {ex.kcal} kcal</span>
                </div>
              </div>
              <span className="exercise-item-action">Treinar →</span>
            </button>
          ))}
        </div>

        <BiofitBottomNav currentView={view} setView={setView} onClose={onClose} />
      </section>
    )
  }

  // ── VIEW: METAS DIÁRIAS & PROGRESSO ──
  if (view === 'metas') {
    const waterPercent = Math.min(100, Math.round((waterLiters / waterGoal) * 100))
    const calPercent = Math.min(100, Math.round((caloriesBurned / caloriesGoal) * 100))
    const weightNum = parseFloat(onboarding.weight) || 70
    const heightMeters = (parseFloat(onboarding.height) || 175) / 100
    const bmi = (weightNum / (heightMeters * heightMeters)).toFixed(1)

    return (
      <section className="app-screen app-screen-biofit" role="dialog" aria-modal="true" aria-labelledby="biofit-screen-title">
        {renderBiofitHeader('Acompanhamento Diário', 'Metas')}

        {toastMessage && <div className="biofit-toast">{toastMessage}</div>}

        <div className="biofit-section-title" style={{ marginTop: '14px' }}>
          <span>Hidratação e Energia</span>
          <span>Hoje</span>
        </div>

        <div className="biofit-goals" style={{ gridTemplateColumns: '1fr', gap: '10px' }}>
          <div className="goal-card">
            <div className="goal-header" style={{ marginBottom: '8px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="goal-icon" style={{ color: '#00c6ff' }}>💧</span>
                <strong>Meta de Água</strong>
              </div>
              <span style={{ fontSize: '12px', color: '#00c6ff', fontWeight: 700 }}>{waterPercent}%</span>
            </div>
            <div className="goal-progress-wrap">
              <div className="goal-progress">
                <span style={{ width: `${waterPercent}%`, background: 'linear-gradient(90deg, rgba(0,198,255,0.4), #00c6ff)' }} />
              </div>
            </div>
            <div className="goal-text" style={{ marginBottom: '6px' }}>
              <strong>{waterLiters.toFixed(2)}L</strong> / {waterGoal.toFixed(1)}L recomendados
            </div>
            <div className="goal-controls">
              <button
                type="button"
                className="goal-ctrl-btn"
                onClick={() => setWaterLiters((w) => Math.max(0, +(w - 0.25).toFixed(2)))}
              >
                − 250 ml
              </button>
              <button
                type="button"
                className="goal-ctrl-btn"
                onClick={() => {
                  setWaterLiters((w) => +(w + 0.25).toFixed(2))
                  showToast('+250ml de água registados! 💧')
                }}
              >
                + 250 ml
              </button>
              <button
                type="button"
                className="goal-ctrl-btn"
                onClick={() => {
                  setWaterLiters((w) => +(w + 0.5).toFixed(2))
                  showToast('+500ml de água registados! 💧')
                }}
              >
                + 500 ml
              </button>
            </div>
          </div>

          <div className="goal-card">
            <div className="goal-header" style={{ marginBottom: '8px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="goal-icon" style={{ color: '#7cfc00' }}>🔥</span>
                <strong>Calorias Queimadas</strong>
              </div>
              <span style={{ fontSize: '12px', color: '#7cfc00', fontWeight: 700 }}>{calPercent}%</span>
            </div>
            <div className="goal-progress-wrap">
              <div className="goal-progress">
                <span style={{ width: `${calPercent}%`, background: 'linear-gradient(90deg, rgba(124,252,0,0.4), #7cfc00)' }} />
              </div>
            </div>
            <div className="goal-text" style={{ marginBottom: '6px' }}>
              <strong>{caloriesBurned}</strong> / {caloriesGoal} kcal
            </div>
            <div className="goal-controls">
              <button
                type="button"
                className="goal-ctrl-btn"
                onClick={() => setCaloriesBurned((c) => Math.max(0, c - 50))}
              >
                − 50 kcal
              </button>
              <button
                type="button"
                className="goal-ctrl-btn"
                onClick={() => {
                  setCaloriesBurned((c) => c + 50)
                  showToast('+50 kcal adicionadas à meta diária! 🔥')
                }}
              >
                + 50 kcal
              </button>
              <button
                type="button"
                className="goal-ctrl-btn"
                onClick={() => setView('treinos')}
              >
                Treinar →
              </button>
            </div>
          </div>
        </div>

        <div className="biofit-section-title">
          <span>Resumo Biométrico</span>
          <button type="button" className="link-action-btn" onClick={() => setView('perfil')}>Editar dados ›</button>
        </div>
        <div className="biofit-stats" style={{ marginBottom: '14px' }}>
          <button type="button" className="biofit-stat-btn" onClick={() => setView('perfil')}>
            <strong>{onboarding.weight || '70'}kg</strong>
            <span>Peso atual</span>
          </button>
          <button type="button" className="biofit-stat-btn" onClick={() => setView('perfil')}>
            <strong>{onboarding.height || '175'}cm</strong>
            <span>Altura</span>
          </button>
          <button type="button" className="biofit-stat-btn" onClick={() => showToast(`IMC calculado: ${bmi} (Peso saudável)`)}>
            <strong>{bmi}</strong>
            <span>Índice IMC</span>
          </button>
        </div>

        <BiofitBottomNav currentView={view} setView={setView} onClose={onClose} />
      </section>
    )
  }

  // ── VIEW: PERFIL & DEFINIÇÕES ──
  if (view === 'perfil') {
    const presetAvatars = [
      { label: 'Atleta', url: '/user-avatar.png' },
      { label: 'Força', url: '/thumbs/thumb-cat-perna.jpg' },
      { label: 'Holograma', url: '/thumbs/thumb-anatomy-braco.jpg' },
      { label: 'Biofit', url: '/biofit-icon.jpg?v=2' },
    ]

    return (
      <section className="app-screen app-screen-biofit" role="dialog" aria-modal="true" aria-labelledby="biofit-screen-title">
        {renderBiofitHeader('Conta & Biometria', 'Perfil')}

        {toastMessage && <div className="biofit-toast">{toastMessage}</div>}

        <div className="profile-photo-card">
          <div className="profile-photo-main">
            <button
              type="button"
              className="profile-avatar-upload-circle"
              onClick={() => avatarInputRef.current?.click()}
              title="Clique para enviar uma foto do seu dispositivo"
            >
              <img src={avatarUrl} alt="Foto do Perfil" className="profile-avatar-large-img" />
              <span className="profile-camera-badge">📷</span>
            </button>
            <div className="profile-photo-actions">
              <strong>Foto do Perfil</strong>
              <span>Envie uma imagem do seu dispositivo ou escolha um avatar abaixo:</span>
              <div className="profile-photo-btns">
                <button
                  type="button"
                  className="profile-upload-btn"
                  onClick={() => avatarInputRef.current?.click()}
                >
                  📷 Alterar / Colocar Foto
                </button>
                <input
                  ref={avatarInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleAvatarFileChange}
                />
              </div>
            </div>
          </div>

          <div className="profile-preset-row">
            {presetAvatars.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`profile-preset-btn ${avatarUrl === item.url ? 'is-selected' : ''}`}
                onClick={() => {
                  setAvatarUrl(item.url)
                  showToast(`✨ Foto alterada para: ${item.label}`)
                }}
              >
                <img src={item.url} alt={item.label} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <form
          style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}
          onSubmit={(e) => {
            e.preventDefault()
            showToast('Dados do perfil atualizados! ✓')
          }}
        >
          <div className="bf-input-group" style={{ marginBottom: 0 }}>
            <label htmlFor="profile-name">Nome do Atleta</label>
            <input
              id="profile-name"
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>

          <div className="bf-input-group" style={{ marginBottom: 0 }}>
            <label>Nível de Treino</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
              {['iniciante', 'intermediario', 'avancado'].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  className={`category-tab-btn ${onboarding.level === lvl ? 'is-active' : ''}`}
                  onClick={() => setOnboarding({ ...onboarding, level: lvl })}
                >
                  <span>{lvl === 'iniciante' ? '🌱 Inic.' : lvl === 'intermediario' ? '💪 Inter.' : '🔥 Avanç.'}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            <div className="bf-input-group" style={{ marginBottom: 0 }}>
              <label htmlFor="prof-age">Idade</label>
              <input
                id="prof-age"
                type="number"
                value={onboarding.age}
                onChange={(e) => setOnboarding({ ...onboarding, age: e.target.value })}
              />
            </div>
            <div className="bf-input-group" style={{ marginBottom: 0 }}>
              <label htmlFor="prof-weight">Peso (kg)</label>
              <input
                id="prof-weight"
                type="number"
                step="0.1"
                value={onboarding.weight}
                onChange={(e) => setOnboarding({ ...onboarding, weight: e.target.value })}
              />
            </div>
            <div className="bf-input-group" style={{ marginBottom: 0 }}>
              <label htmlFor="prof-height">Altura (cm)</label>
              <input
                id="prof-height"
                type="number"
                value={onboarding.height}
                onChange={(e) => setOnboarding({ ...onboarding, height: e.target.value })}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn" style={{ padding: '12px', fontSize: '0.95rem', marginTop: '4px' }}>
            Guardar Alterações
          </button>

          <button
            type="button"
            className="guest-btn"
            style={{ marginTop: '2px', padding: '10px', fontSize: '0.82rem' }}
            onClick={() => setView('register')}
          >
            Ver Ecrã de Registo / Trocar Conta
          </button>
        </form>

        <BiofitBottomNav currentView={view} setView={setView} onClose={onClose} />
      </section>
    )
  }

  // ── VIEW: DASHBOARD (PRINCIPAL) ──
  const activeCatExercises = selectedCategory === 'todos'
    ? EXERCISES_DB.filter((e) => e.category === 'perna' && e.id !== 'cardio-rapido' && e.id !== 'abs-core')
    : EXERCISES_DB.filter((e) => e.category === selectedCategory && e.id !== 'cardio-rapido' && e.id !== 'abs-core')

  return (
    <section className="app-screen app-screen-biofit" role="dialog" aria-modal="true" aria-labelledby="biofit-screen-title">
      {/* ── HEADER BIOFIT (IMAGE 8 REFERENCE) ── */}
      {renderBiofitHeader('O seu espaço de treino', 'Biofit')}

      {toastMessage && <div className="biofit-toast" style={{ marginTop: '8px' }}>{toastMessage}</div>}

      {/* ── SAUDAÇÃO & STREAK ── */}
      <div className="biofit-greeting-row">
        <div className="greeting-text">
          <span>Bom dia, {user.name || 'Atleta'}.</span>
          <h3>Vamos treinar?</h3>
        </div>
        <button
          type="button"
          className="biofit-streak-card"
          onClick={() => setShowStreakModal((s) => !s)}
          title="Ver dias seguidos"
        >
          <div className="streak-card-top">
            <span className="streak-flame">🔥</span>
            <strong className="streak-number">{String(completedStats.streak).padStart(2, '0')}</strong>
          </div>
          <span className="streak-card-label">dias seguidos</span>
        </button>
      </div>

      {showStreakModal && (
        <div style={{ padding: '10px 12px', marginBottom: '12px', borderRadius: '14px', background: '#1a2230', border: '1px solid #7cfc00' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <strong style={{ fontSize: '11px', color: '#7cfc00' }}>🔥 Frequência Semanal (Toque para marcar)</strong>
            <button type="button" className="link-action-btn" onClick={() => setShowStreakModal(false)}>Fechar</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
            {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((d, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  const next = [...streakDays]
                  next[idx] = !next[idx]
                  setStreakDays(next)
                  setCompletedStats((s) => ({ ...s, streak: next.filter(Boolean).length }))
                }}
                style={{
                  padding: '6px 0',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: streakDays[idx] ? 'linear-gradient(135deg, #00c6ff, #7cfc00)' : 'rgba(255,255,255,0.06)',
                  color: streakDays[idx] ? '#121721' : '#fff',
                  fontWeight: 800,
                  fontSize: '10px',
                  cursor: 'pointer',
                }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── CARD HERO / PRÓXIMA SESSÃO COM GLOW ── */}
      <div className="biofit-feature-card">
        <div className="feature-card-top">
          <span className="feature-category-label">Próxima sessão · {activeExercise.categoryLabel}</span>
          <span className="feature-duration">⏱ {activeExercise.duration}</span>
        </div>
        <h3 className="feature-title">{activeExercise.title}</h3>
        <p className="feature-desc">{activeExercise.shortDesc}</p>
        <div className="feature-bottom">
          <div className="feature-tags">
            <span className="feature-tag">{onboarding.level ? onboarding.level.charAt(0).toUpperCase() + onboarding.level.slice(1) : activeExercise.level}</span>
            <span className="feature-tag">{activeExercise.equipment}</span>
          </div>
          <button
            type="button"
            className="feature-start-btn"
            onClick={() => openExerciseTutorial(activeExercise)}
          >
            Começar <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* ── CATEGORIAS DE TREINO: PERNA, BRAÇO, COSTAS ── */}
      <div className="biofit-section-header">
        <span className="section-title">Categorias de Treino</span>
        <button type="button" className="link-action-btn" onClick={() => setView('treinos')}>
          Ver todos (12) ›
        </button>
      </div>

      <div className="category-cards-grid">
        {WORKOUT_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id || (selectedCategory === 'todos' && cat.id === 'perna')
          return (
            <button
              key={cat.id}
              type="button"
              className={`category-pillar-card ${isSelected ? 'is-selected' : ''}`}
              onClick={() => {
                setSelectedCategory(cat.id)
                const firstEx = EXERCISES_DB.find((e) => e.category === cat.id)
                if (firstEx) setActiveExercise(firstEx)
              }}
            >
              <div className="category-pillar-icon">
                {typeof cat.icon === 'string' && cat.icon.startsWith('/') ? (
                  <img src={cat.icon} alt={cat.label} className="category-pillar-thumb" />
                ) : (
                  cat.icon
                )}
              </div>
              <strong className="category-pillar-title">{cat.label}</strong>
              <span className="category-pillar-sub">{cat.subtitle}</span>
            </button>
          )
        })}
      </div>

      {/* ── LISTA DE EXERCÍCIOS DA CATEGORIA SELECIONADA ── */}
      <div className="exercise-list">
        {activeCatExercises.map((ex) => (
          <button
            key={ex.id}
            type="button"
            className="exercise-item-card"
            onClick={() => openExerciseTutorial(ex)}
          >
            <div className="exercise-item-left">
              <div className="exercise-item-badge">
                {typeof ex.icon === 'string' && ex.icon.startsWith('/') ? (
                  <img src={ex.icon} alt={ex.title} className="machine-icon-img" />
                ) : (
                  ex.icon
                )}
              </div>
              <div className="exercise-item-info">
                <strong>{ex.title}</strong>
                <span>{ex.repsInfo || `${ex.categoryLabel} • ${ex.duration}`}</span>
              </div>
            </div>
            <span className="exercise-item-action">Treinar →</span>
          </button>
        ))}
      </div>

      {/* ── NAVEGAÇÃO INFERIOR & HOME INDICATOR ── */}
      <BiofitBottomNav currentView={view} setView={setView} onClose={onClose} />
    </section>
  )
}

function OpenAppScreen({ app, onClose, onOpenBiofit }) {
  const copy = screenCopy[app.key]
  const [activeShortcut, setActiveShortcut] = useState(0)
  const [actionCount, setActionCount] = useState(0)

  if (app.key === 'biofit') {
    return (
      <BiofitApp
        onClose={onClose}
        initialView={app.initialView || 'dashboard'}
        initialCategory={app.initialCategory || 'perna'}
      />
    )
  }

  const stepDescriptions = copy.steps && copy.steps.length === 3
    ? copy.steps
    : [
      'Prepare as articulações com mobilidade ativa antes de iniciar.',
      'Estude o alinhamento biomecânico de Perna, Braço e Costas.',
      'Execute as séries com controlo e registe a sua evolução.',
    ]

  const progressValues = [38, 72, 100]

  return (
    <section className={`app-screen app-screen-${app.accent || 'teal'}`} role="dialog" aria-modal="true" aria-labelledby="biofit-screen-title">
      <div className="app-screen-header">
        <div className="biofit-app-icon" aria-hidden="true">
          <span className="bf-text-logo">B<span>F</span></span>
        </div>
        <div className="app-screen-heading">
          <span>{copy.eyebrow}</span>
          <h2 id="biofit-screen-title">{copy.title}</h2>
        </div>
        <button className="close-app" type="button" onClick={onClose} aria-label="Voltar ao ecrã inicial">
          <span aria-hidden="true">‹</span>
        </button>
      </div>

      <div className="app-screen-content">
        <div className="app-welcome-card">
          <p>{actionCount > 0 ? stepDescriptions[activeShortcut] : copy.body}</p>
          <div className="app-progress-line" aria-hidden="true">
            <span style={{ width: `${progressValues[activeShortcut]}%`, transition: 'width 0.3s ease' }} />
          </div>
          <div className="app-card-footer">
            <span>{copy.secondary}</span>
            <button
              type="button"
              onClick={() => {
                setActionCount((c) => c + 1)
                setActiveShortcut((s) => (s + 1) % 3)
              }}
            >
              {actionCount > 0 ? 'Próxima dica ›' : copy.primary}
            </button>
          </div>
          <button
            type="button"
            onClick={() => onOpenBiofit(app.targetTab || 'dashboard')}
            style={{
              width: '100%',
              marginTop: '12px',
              padding: '10px 14px',
              borderRadius: '999px',
              border: '1px solid rgba(68, 224, 189, 0.5)',
              background: 'rgba(68, 224, 189, 0.14)',
              color: '#83f5dc',
              fontWeight: 700,
              fontSize: '12px',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Abrir no Biofit ({app.targetTab === 'treinos' ? 'Treinos Perna/Braço/Costas' : app.targetTab === 'metas' ? 'Metas' : app.targetTab === 'perfil' ? 'Perfil' : 'Painel'}) →
          </button>
        </div>

        <div className="app-mini-grid" aria-label="Atalhos Biofit">
          {[
            { num: '01', label: 'Preparar' },
            { num: '02', label: 'Aprender' },
            { num: '03', label: 'Treinar' },
          ].map((item, idx) => (
            <button
              key={item.num}
              type="button"
              className={`mini-grid-btn ${activeShortcut === idx ? 'is-active' : ''}`}
              onClick={() => {
                setActiveShortcut(idx)
                setActionCount((c) => c + 1)
              }}
            >
              <strong>{item.num}</strong>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Smartphone() {
  const [activeApp, setActiveApp] = useState(() => homeApps.find((a) => a.key === 'biofit'))
  const [isClosing, setIsClosing] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  const [volume, setVolume] = useState(70)
  const [hudText, setHudText] = useState(null)

  const showHud = (text) => {
    setHudText(text)
    window.setTimeout(() => {
      setHudText((curr) => (curr === text ? null : curr))
    }, 1800)
  }

  const closeApp = () => {
    setIsClosing(true)
    window.setTimeout(() => {
      setActiveApp(null)
      setIsClosing(false)
    }, 260)
  }

  const openBiofitAt = (targetView = 'dashboard', targetCategory = 'perna') => {
    const biofitAppObj = homeApps.find((a) => a.key === 'biofit')
    setActiveApp({ ...biofitAppObj, initialView: targetView, initialCategory: targetCategory })
  }

  return (
    <div data-layer="smartphone" data-node-id="2-4" className="Smartphone w-[800px] min-h-[1000px] py-[60px] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#F5F5F7_0%,_#D2D2D7_100%)] inline-flex flex-col justify-center items-center">
      <div data-layer="smartphone-device" data-node-id="2-5" className="SmartphoneDevice w-[426px] h-[898px] relative bg-[#0b0b0c] rounded-[50px] shadow-[0px_32px_64px_8px_rgba(0,0,0,0.30)] outline outline-[3px] outline-offset-[-3px] outline-[#2a2a2e] flex flex-col justify-center items-center">
        <button
          type="button"
          data-layer="power-button"
          data-node-id="2-6"
          aria-label="Botão de Energia"
          title="Bloquear / Desbloquear ecrã"
          onClick={() => setIsLocked((l) => !l)}
          className="PowerButton w-1 h-[75px] left-[425px] top-[220px] absolute bg-[#2a2a2e] rounded-tr-sm rounded-br-sm"
        />
        <button
          type="button"
          data-layer="volume-up"
          data-node-id="2-7"
          aria-label="Aumentar Volume"
          title="Aumentar Volume"
          onClick={() => {
            const next = Math.min(100, volume + 10)
            setVolume(next)
            showHud(`🔊 Volume: ${next}%`)
          }}
          className="VolumeUp w-1 h-10 left-[-5px] top-[180px] absolute bg-[#2a2a2e] rounded-tl-sm rounded-bl-sm"
        />
        <button
          type="button"
          data-layer="volume-down"
          data-node-id="2-8"
          aria-label="Diminuir Volume"
          title="Diminuir Volume"
          onClick={() => {
            const next = Math.max(0, volume - 10)
            setVolume(next)
            showHud(`🔉 Volume: ${next}%`)
          }}
          className="VolumeDown w-1 h-10 left-[-5px] top-[235px] absolute bg-[#2a2a2e] rounded-tl-sm rounded-bl-sm"
        />

        <div className="screen-shell">
          {hudText && <div className="phone-hud-pill">{hudText}</div>}

          {isLocked && (
            <div className="phone-lock-overlay" onClick={() => setIsLocked(false)}>
              <div style={{ fontSize: '42px', fontWeight: 700, letterSpacing: '-1px', marginBottom: '6px' }}>09:41</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginBottom: '28px' }}>Sexta-feira · Biofit Ativo</div>
              <div style={{ padding: '8px 18px', borderRadius: '999px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '12px', fontWeight: 600 }}>
                🔓 Toque para desbloquear
              </div>
            </div>
          )}

          <div className="screen-canvas">
            {homeApps.map((app) => (
              <button
                key={app.key}
                className={`app-hotspot ${app.placement}`}
                type="button"
                aria-label={`Abrir ${app.label}`}
                onClick={() => setActiveApp(app)}
              >
                <span className="app-icon-wrap" style={app.bg ? { background: app.bg } : {}}>
                  {app.key === 'biofit'
                    ? <img src="/biofit-icon.jpg?v=2" alt="biofit" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', display: 'block' }} />
                    : app.icon
                  }
                </span>
                <span className="app-label">{app.label}</span>
              </button>
            ))}
          </div>

          {activeApp && (
            <div className={isClosing ? 'screen-transition screen-transition-closing' : 'screen-transition'}>
              <OpenAppScreen
                app={activeApp}
                onClose={closeApp}
                onOpenBiofit={(targetTab) => openBiofitAt(targetTab)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

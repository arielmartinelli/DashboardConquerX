// Dashboard ConquerX - CRM de Gestión de Closers Logic

// --- DATA STRUCTURES & DEFAULT DATA ---
const DEFAULT_CLOSERS = {
    languages: [
        {
            id: "jazmin",
            name: "Jazmín Merlo",
            team: "languages",
            leadsContacted: 60,
            leadsClosed: 5,
            cashCollected: 5000,
            targetCash: 25000,
            commissionRate: 7,
            callsWeekly: 15,
            callsMonthly: 60,
            avatarUrl: "https://media-eze1-2.cdn.whatsapp.net/v/t61.24694-24/688439856_1688070622524540_6748855887472131216_n.jpg?ccb=11-4&oh=01_Q5Aa4wELq3r63qy5H3saKJtxeK37_S9xCKAR-kK_9huii7_Urw&oe=6A4A977E&_nc_sid=5e03e0&_nc_cat=106",
            driveUrl: "https://drive.google.com/drive/folders/1A_B_C_Languages_Jasmine_Dummy",
            nextMeeting: null,
            note: "Le entusiasma liderar reuniones de equipo y hacer roleplays de objeciones.",
            tasks: [
                { id: "t1", text: "Llamar a leads calientes de la base de datos", completed: true },
                { id: "t2", text: "Preparar reporte semanal de métricas grupales", completed: false },
                { id: "t3", text: "Hacer roleplay de objeciones de costo con Fabrizio", completed: false }
            ],
            tips: [
                { id: "tip1", text: "Mantén el control del marco conversacional. No dejes que el cliente guíe la llamada.", category: "negociacion" },
                { id: "tip2", text: "Establecer urgencia real basada en los cupos del curso de inglés.", category: "cierre" },
                { id: "tip_1782420269333", text: "no sea tan sucia", category: "general" }
            ],
            logs: [
                { id: "l1", author: "Tomás", text: "Excelente liderazgo en la sesión grupal de esta semana. Las llamadas de Jazmín muestran gran empatía.", date: "2026-06-20T10:30:00" },
                { id: "l2", author: "Jazmín", text: "He estado reforzando el pitch inicial y logré rescatar 2 ventas difíciles.", date: "2026-06-22T18:15:00" }
            ]
        },
        {
            id: "merlo",
            name: "Merlo",
            team: "languages",
            leadsContacted: 70,
            leadsClosed: 10,
            cashCollected: 15000,
            targetCash: 20000,
            commissionRate: 5,
            callsWeekly: 20,
            callsMonthly: 70,
            avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
            driveUrl: "https://drive.google.com/drive/folders/1B_Merlo_Recorded_Calls",
            nextMeeting: null,
            tasks: [
                { id: "t4", text: "Revisar llamadas grabadas del lunes con Jazmín", completed: true },
                { id: "t5", text: "Llamar a cliente indeciso de inglés de ayer", completed: false }
            ],
            tips: [
                { id: "tip3", text: "Presiona un poco más en la llamada de cierre cuando el dolor esté bien detectado.", category: "objeciones" }
            ],
            logs: [
                { id: "l3", author: "Jazmín", text: "Buen volumen de llamadas. Falta pulir el manejo de la objeción 'no tengo tiempo'.", date: "2026-06-21T14:20:00" }
            ]
        },
        {
            id: "ariel-martinelli",
            name: "Ariel Martinelli",
            team: "languages",
            leadsContacted: 90,
            leadsClosed: 14,
            cashCollected: 21000,
            targetCash: 20000,
            commissionRate: 5,
            callsWeekly: 28,
            callsMonthly: 90,
            avatarUrl: "https://media-eze1-2.cdn.whatsapp.net/v/t61.24694-24/678165232_2281853229010844_6127097492774794344_n.jpg?ccb=11-4&oh=01_Q5Aa4wH5W4JIuLTTfls5Pf-7M04vRfA7PQQIXZuuwHx5DKVkMA&oe=6A4A9538&_nc_sid=5e03e0&_nc_cat=107",
            driveUrl: "https://drive.google.com/drive/folders/1C_ArielM_Calls",
            nextMeeting: null,
            note: "Gran autoanálisis. Le gusta repasar llamadas grabadas.",
            tasks: [
                { id: "t6", text: "Seguimiento de ticket alto pendiente de pago", completed: false },
                { id: "t_1782416463575", text: "Pregunta como se sintio esta semana", completed: false },
                { id: "t_1782416641134", text: "Pregunta como se sintio esta semana", completed: false }
            ],
            tips: [
                { id: "tip4", text: "Excelente tono y ritmo en las llamadas. Sigue reforzando la urgencia al final.", category: "cierre" },
                { id: "tip_1782416665638", text: "hola", category: "general" }
            ],
            logs: [
                { id: "l4", author: "Jazmín", text: "Muestra métricas estables. Consistencia muy alta este mes.", date: "2026-06-23T11:05:00" },
                { id: "log_1782419238724", author: "Jazmín", text: "Hoy vimos tal cosa y veo tal otra", date: "2026-06-25T20:27:18.724Z" },
                { id: "log_1782419259100", author: "Tomás", text: "Hola coimo estas", date: "2026-06-25T20:27:39.100Z" }
            ]
        },
        {
            id: "agustina-soria",
            name: "Agostina Soria",
            team: "languages",
            leadsContacted: 60,
            leadsClosed: 8,
            cashCollected: 12000,
            targetCash: 15000,
            commissionRate: 5,
            callsWeekly: 16,
            callsMonthly: 60,
            avatarUrl: "https://media-eze1-2.cdn.whatsapp.net/v/t61.24694-24/588727318_4025474887585902_323612380752492272_n.jpg?ccb=11-4&oh=01_Q5Aa4wFRxGdkS2Bxo2emMm4VSHmt8a6ukfkYleWaGL4-uzFtDA&oe=6A4A8628&_nc_sid=5e03e0&_nc_cat=101",
            driveUrl: "",
            nextMeeting: null,
            note: "Prefiere explicaciones visuales de los pitches y guías breves.",
            tasks: [
                { id: "t8", text: "Ver tips sobre manejo de precio en la carpeta compartida", completed: true },
                { id: "t9", text: "Enviar email con propuesta a grupo VIP", completed: false }
            ],
            tips: [
                { id: "tip5", text: "Intenta conectar el dolor directamente con la transformación del programa.", category: "dolor" }
            ],
            logs: [
                { id: "l5", author: "Jazmín", text: "Agustina está mejorando su índice de cierre, pero necesita subir el volumen de llamadas diarias.", date: "2026-06-19T09:40:00" }
            ]
        },
        {
            id: "ariana",
            name: "Ariana",
            team: "languages",
            leadsContacted: 50,
            leadsClosed: 6,
            cashCollected: 9000,
            targetCash: 15000,
            commissionRate: 5,
            callsWeekly: 12,
            callsMonthly: 50,
            avatarUrl: "https://media-eze1-2.cdn.whatsapp.net/v/t61.24694-24/596521480_1289854622946035_6304448030381604272_n.jpg?ccb=11-4&oh=01_Q5Aa4wEJ6PWcWkpR87DOAU47wjlJyA55EX5Q7dnNcTjVwXtGFA&oe=6A4AB16A&_nc_sid=5e03e0&_nc_cat=105",
            driveUrl: "",
            nextMeeting: null,
            tasks: [
                { id: "t10", text: "Llamar a base de re-contacto de meses anteriores", completed: false }
            ],
            tips: [
                { id: "tip6", text: "No temas hacer preguntas incómodas sobre la situación financiera del prospecto.", category: "cualificacion" }
            ],
            logs: [
                { id: "l6", author: "Jazmín", text: "Se nota un poco de timidez en la etapa de indagación. Trabajando en su confianza.", date: "2026-06-24T16:00:00" }
            ]
        },
        {
            id: "fabrizio-fiamonti",
            name: "Fabrizio Fioramonti",
            team: "languages",
            leadsContacted: 75,
            leadsClosed: 11,
            cashCollected: 16500,
            targetCash: 20000,
            commissionRate: 5,
            callsWeekly: 22,
            callsMonthly: 75,
            avatarUrl: "",
            driveUrl: "",
            nextMeeting: null,
            tasks: [
                { id: "t11", text: "Roleplay individual sobre objeción 'tengo que consultarlo con mi socio/pareja'", completed: false }
            ],
            tips: [
                { id: "tip7", text: "Usa la técnica del silencio tras presentar el precio.", category: "cierre" }
            ],
            logs: [
                { id: "l7", author: "Jazmín", text: "Fabrizio cerró 3 ventas ayer con gran manejo de objeciones. Muy buen desempeño.", date: "2026-06-25T12:00:00" }
            ]
        },
        {
            id: "candela",
            name: "Candela",
            team: "languages",
            leadsContacted: 65,
            leadsClosed: 9,
            cashCollected: 13500,
            targetCash: 18000,
            commissionRate: 5,
            callsWeekly: 18,
            callsMonthly: 65,
            avatarUrl: "",
            driveUrl: "",
            nextMeeting: null,
            tasks: [
                { id: "t12", text: "Limpiar y etiquetar leads en el CRM común", completed: true }
            ],
            tips: [
                { id: "tip8", text: "Asegúrate de confirmar que el prospecto asista con su tomador de decisiones.", category: "cualificacion" }
            ],
            logs: [
                { id: "l8", author: "Jazmín", text: "Firme en su proceso. Mantiene un porcentaje de cierre cercano al 14%.", date: "2026-06-18T17:30:00" }
            ]
        }
    ],
    block: [
        {
            id: "tomas",
            name: "Tomás",
            team: "block",
            leadsContacted: 80,
            leadsClosed: 13,
            cashCollected: 20000,
            targetCash: 25000,
            commissionRate: 7,
            callsWeekly: 26,
            callsMonthly: 80,
            avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
            driveUrl: "https://drive.google.com/drive/folders/1D_Blogs_Tomas_Dummy_Key",
            nextMeeting: null,
            note: "No le gusta los role play, le gusta analizar llamadas.",
            tasks: [
                { id: "tb1", text: "Llamar a leads del nuevo bootcamp de backend", completed: true },
                { id: "tb2", text: "Planificar la sesión de feedback grupal de Block", completed: false }
            ],
            tips: [
                { id: "tip9", text: "Enfócate en la salida laboral inmediata al vender programación.", category: "cierre" }
            ],
            logs: [
                { id: "l9", author: "Jazmín", text: "Tomás lidera con el ejemplo, logrando €20,000 en cash collected.", date: "2026-06-22T11:45:00" }
            ]
        },
        {
            id: "cristian",
            name: "Cristian",
            team: "block",
            leadsContacted: 75,
            leadsClosed: 10,
            cashCollected: 15000,
            targetCash: 20000,
            commissionRate: 5,
            callsWeekly: 20,
            callsMonthly: 75,
            avatarUrl: "",
            driveUrl: "",
            nextMeeting: null,
            tasks: [
                { id: "tb3", text: "Seguimiento al grupo de alumnos del webinar de programación", completed: false }
            ],
            tips: [
                { id: "tip10", text: "Destaca la validez del portafolio que construyen en el curso.", category: "indagacion" }
            ],
            logs: [
                { id: "l10", author: "Tomás", text: "Cristian tiene un gran entendimiento técnico de los cursos, lo cual ayuda mucho a generar confianza.", date: "2026-06-24T15:20:00" }
            ]
        },
        {
            id: "lucas",
            name: "Lucas",
            team: "block",
            leadsContacted: 70,
            leadsClosed: 9,
            cashCollected: 13500,
            targetCash: 18000,
            commissionRate: 5,
            callsWeekly: 18,
            callsMonthly: 70,
            avatarUrl: "",
            driveUrl: "",
            nextMeeting: null,
            tasks: [
                { id: "tb4", text: "Revisar grabaciones de llamadas de venta perdidas", completed: true }
            ],
            tips: [
                { id: "tip11", text: "Usa más analogías sencillas al explicar conceptos de programación.", category: "comunicacion" }
            ],
            logs: [
                { id: "l11", author: "Tomás", text: "Buen porcentaje de cierre, debe mejorar el volumen de agendados.", date: "2026-06-21T10:15:00" }
            ]
        },
        {
            id: "nina",
            name: "Nina",
            team: "block",
            leadsContacted: 65,
            leadsClosed: 7,
            cashCollected: 10500,
            targetCash: 15000,
            commissionRate: 5,
            callsWeekly: 14,
            callsMonthly: 65,
            avatarUrl: "",
            driveUrl: "",
            nextMeeting: null,
            tasks: [
                { id: "tb5", text: "Enviar links de pago de reserva a leads calientes", completed: false }
            ],
            tips: [
                { id: "tip12", text: "Asegura el compromiso de llamada puntual en la llamada de precalificación.", category: "cierre" }
            ],
            logs: [
                { id: "l12", author: "Tomás", text: "Le falta un poco más de energía al iniciar la llamada. Trabajaremos en su estado interno.", date: "2026-06-23T16:40:00" }
            ]
        },
        {
            id: "julieta",
            name: "Julieta",
            team: "block",
            leadsContacted: 60,
            leadsClosed: 9,
            cashCollected: 13500,
            targetCash: 18000,
            commissionRate: 5,
            callsWeekly: 18,
            callsMonthly: 60,
            avatarUrl: "",
            driveUrl: "",
            nextMeeting: null,
            tasks: [
                { id: "tb6", text: "Llamar a lista de espera de programación avanzada", completed: true }
            ],
            tips: [
                { id: "tip13", text: "Refuerza la garantía del programa para disminuir la fricción al final.", category: "objeciones" }
            ],
            logs: [
                { id: "l13", author: "Tomás", text: "¡15% de tasa de cierre! Increíble trabajo de Julieta adaptándose a leads fríos.", date: "2026-06-25T11:10:00" }
            ]
        }
    ]
};

const DEFAULT_TEAM_LOGS = {
    languages: [
        { id: "g1", author: "Jazmín", text: "Esta semana nos enfocaremos en rebatir la objeción de falta de dinero con planes de pago alternativos. ¡Vamos por esos €100k como equipo!", date: "2026-06-23T09:00:00" },
        { id: "g2", author: "Tomás", text: "Veo al equipo de Languages muy activo. Buen trabajo compartiendo los audios de sus ventas en el grupo común.", date: "2026-06-24T12:00:00" }
    ],
    block: [
        { id: "g3", author: "Tomás", text: "El equipo de Block está fuerte en la venta consultiva de programación. Ajustemos el speech en la oferta de becas.", date: "2026-06-22T10:30:00" },
        { id: "g4", author: "Jazmín", text: "Felicidades a Julieta por sus últimos cierres. Demostró excelente manejo de leads escépticos.", date: "2026-06-24T18:00:00" }
    ]
};

// --- APPLICATION STATE ---
let state = {
    closers: {},
    teamLogs: {},
    generalTasks: { manuel: [], jazmin: [], tomas: [] },
    currentSubleader: "jazmin", // jazmin or tomas
    activeTab: "overview",
    selectedCloserId: "jazmin",
    rankingFilter: "all",
    loggedUser: null,
    
    // New Monthly Filtering & Ticket System State
    selectedMonth: "2026-06", 
    metricsHistory: {}, // stores a snapshot of closers and teamLogs by month
    tickets: [] // support ticket objects
};

// --- DOM ELEMENTS ---
const elements = {
    subleaderSelect: document.getElementById("subleader-select"),
    sidebarAvatar: document.getElementById("sidebar-avatar"),
    themeToggleBtn: document.getElementById("theme-toggle"),
    
    sidebarGeneralToggleBtn: document.getElementById("sidebar-general-toggle-btn"),
    sidebarGeneralArrow: document.getElementById("sidebar-general-arrow"),
    sidebarGeneralListPanel: document.getElementById("sidebar-general-list-panel"),
    sidebarGeneralList: document.getElementById("sidebar-general-list"),
    sidebarGeneralCount: document.getElementById("sidebar-general-count"),
    sidebarGeneralBell: document.getElementById("sidebar-general-bell"),
    sidebarGeneralAddForm: document.getElementById("sidebar-general-add-form"),
    sidebarGeneralInput: document.getElementById("sidebar-general-input"),
    btnOpenGeneralTaskModal: document.getElementById("btn-open-general-task-modal"),
    generalTaskModal: document.getElementById("general-task-modal"),
    btnCloseGeneralTaskModal: document.getElementById("btn-close-general-task-modal"),
    btnCancelGeneralTaskModal: document.getElementById("btn-cancel-general-task-modal"),
    
    // Tab buttons
    tabOverviewBtn: document.getElementById("btn-tab-overview"),
    tabLanguagesBtn: document.getElementById("btn-tab-languages"),
    tabBlockBtn: document.getElementById("btn-tab-block"),
    tabCloserBtn: document.getElementById("btn-tab-closer"),
    
    // Views
    viewOverview: document.getElementById("view-overview"),
    viewLanguages: document.getElementById("view-languages"),
    viewBlock: document.getElementById("view-block"),
    viewCloserProfile: document.getElementById("view-closer-profile"),
    
    // Header Titles
    currentViewTitle: document.getElementById("current-view-title"),
    currentViewSubtitle: document.getElementById("current-view-subtitle"),
    
    // Global KPIs
    totalCashValue: document.getElementById("total-cash-value"),
    cashProgressFill: document.getElementById("cash-progress-fill"),
    cashProgressPercent: document.getElementById("cash-progress-percent"),
    cashRemaining: document.getElementById("cash-remaining"),
    
    globalRateValue: document.getElementById("global-rate-value"),
    rateProgressFill: document.getElementById("rate-progress-fill"),
    rateStatusLabel: document.getElementById("rate-status-label"),
    rateDiffLabel: document.getElementById("rate-diff-label"),
    
    sumLanguagesCash: document.getElementById("sum-languages-cash"),
    sumBlockCash: document.getElementById("sum-block-cash"),
    
    // Ranking Table
    rankingTbody: document.getElementById("ranking-tbody"),
    
    // Languages Team View
    langStatCash: document.getElementById("lang-stat-cash"),
    langStatRate: document.getElementById("lang-stat-rate"),
    langStatClosers: document.getElementById("lang-stat-closers"),
    languagesClosersGrid: document.getElementById("languages-closers-grid"),
    languagesFollowupsList: document.getElementById("languages-followups-list"),
    languagesFollowupInput: document.getElementById("languages-followup-input"),
    btnAddLanguagesFollowup: document.getElementById("btn-add-languages-followup"),
    
    // Block Team View
    blockStatCash: document.getElementById("block-stat-cash"),
    blockStatRate: document.getElementById("block-stat-rate"),
    blockStatClosers: document.getElementById("block-stat-closers"),
    blockClosersGrid: document.getElementById("block-closers-grid"),
    blockFollowupsList: document.getElementById("block-followups-list"),
    blockFollowupInput: document.getElementById("block-followup-input"),
    btnAddBlockFollowup: document.getElementById("btn-add-block-followup"),
    
    // Closer Profile View
    closerProfileSelect: document.getElementById("closer-profile-select"),
    optgroupLanguages: document.getElementById("optgroup-languages"),
    optgroupBlock: document.getElementById("optgroup-block"),
    profileTeamBadge: document.getElementById("profile-team-badge"),
    profileAvatarChar: document.getElementById("profile-avatar-char"),
    profileName: document.getElementById("profile-name"),
    profileTeamLbl: document.getElementById("profile-team-lbl"),
    profileRateVal: document.getElementById("profile-rate-val"),
    profileCashVal: document.getElementById("profile-cash-val"),
    
    // Google Drive call links
    profileDriveBtn: document.getElementById("profile-drive-btn"),
    profileDriveEmpty: document.getElementById("profile-drive-empty"),
    
    // Target personal progress
    profileTargetFill: document.getElementById("profile-target-fill"),
    profileTargetCollected: document.getElementById("profile-target-collected"),
    bonusStatusMessage: document.getElementById("bonus-status-message"),
    profileInfoIcon: document.getElementById("profile-info-icon"),
    profileInfoNoteBox: document.getElementById("profile-info-note-box"),
    profileInfoNoteText: document.getElementById("profile-info-note-text"),
    
    // Closer Details Editor Form
    closerSettingsForm: document.getElementById("closer-settings-form"),
    editName: document.getElementById("edit-name"),
    editTeam: document.getElementById("edit-team"),
    editAvatar: document.getElementById("edit-avatar"),
    editDrive: document.getElementById("edit-drive"),
    editLeads: document.getElementById("edit-leads"),
    editSales: document.getElementById("edit-sales"),
    editCash: document.getElementById("edit-cash"),
    editNote: document.getElementById("edit-note"),
    rankingFilterContainer: document.getElementById("ranking-filter-container"),
    
    // Tasks
    tasksCountBadge: document.getElementById("tasks-count-badge"),
    addTaskForm: document.getElementById("add-task-form"),
    taskInput: document.getElementById("task-input"),
    closerTasksList: document.getElementById("closer-tasks-list"),
    
    // Tips
    tipsCountBadge: document.getElementById("tips-count-badge"),
    addTipForm: document.getElementById("add-tip-form"),
    tipInput: document.getElementById("tip-input"),
    closerTipsList: document.getElementById("closer-tips-list"),
    
    // Logs (Feedbacks)
    logsCountBadge: document.getElementById("logs-count-badge"),
    closerLogsList: document.getElementById("closer-logs-list"),
    closerLogInput: document.getElementById("closer-log-input"),
    closerLogLink: document.getElementById("closer-log-link"),
    btnAddCloserLog: document.getElementById("btn-add-closer-log"),
    
    // Sidebar Pending Tasks Panel
    sidebarTasksCount: document.getElementById("sidebar-tasks-count"),
    sidebarTasksList: document.getElementById("sidebar-tasks-list"),
    sidebarTasksToggleBtn: document.getElementById("sidebar-tasks-toggle-btn"),
    sidebarTasksArrow: document.getElementById("sidebar-tasks-arrow"),
    
    // Toast
    toast: document.getElementById("toast"),
    toastMessage: document.getElementById("toast-message"),
    
    // Calls & Projections Mappings
    langStatCalls: document.getElementById("lang-stat-calls"),
    blockStatCalls: document.getElementById("block-stat-calls"),
    profileCallsWeeklyText: document.getElementById("profile-calls-weekly-text"),
    profileCallsWeeklyFill: document.getElementById("profile-calls-weekly-fill"),
    profileCallsMonthlyText: document.getElementById("profile-calls-monthly-text"),
    profileCallsMonthlyFill: document.getElementById("profile-calls-monthly-fill"),
    profileProjectionWeekly: document.getElementById("profile-projection-weekly"),
    profileProjectionMonthly: document.getElementById("profile-projection-monthly"),
    globalCallsWeekly: document.getElementById("global-calls-weekly"),
    globalCallsMonthly: document.getElementById("global-calls-monthly"),
    globalProjectionWeeklyText: document.getElementById("global-projection-weekly-text"),
    globalProjectionMonthlyText: document.getElementById("global-projection-monthly-text"),
    langCallsWeekly: document.getElementById("lang-calls-weekly"),
    langCallsMonthly: document.getElementById("lang-calls-monthly"),
    langProjectionWeeklyText: document.getElementById("lang-projection-weekly-text"),
    langProjectionMonthlyText: document.getElementById("lang-projection-monthly-text"),
    blockCallsWeekly: document.getElementById("block-calls-weekly"),
    blockCallsMonthly: document.getElementById("block-calls-monthly"),
    blockProjectionWeeklyText: document.getElementById("block-projection-weekly-text"),
    blockProjectionMonthlyText: document.getElementById("block-projection-monthly-text"),
    editCallsWeekly: document.getElementById("edit-calls-weekly"),
    editCallsMonthly: document.getElementById("edit-calls-monthly"),
    
    // 4th KPI Calls Mappings
    kpiCallsGlobalMonthly: document.getElementById("kpi-calls-global-monthly"),
    kpiCallsLangMonthly: document.getElementById("kpi-calls-lang-monthly"),
    kpiCallsBlockMonthly: document.getElementById("kpi-calls-block-monthly"),
    kpiCallsIndivName: document.getElementById("kpi-calls-indiv-name"),
    kpiCallsIndivWeekly: document.getElementById("kpi-calls-indiv-weekly"),
    kpiCallsMissingWeekly: document.getElementById("kpi-calls-missing-weekly"),
    kpiCallsMissingMonthly: document.getElementById("kpi-calls-missing-monthly"),
    kpiCallsGlobalFill: document.getElementById("kpi-calls-global-fill"),
    kpiCallsLangFill: document.getElementById("kpi-calls-lang-fill"),
    kpiCallsBlockFill: document.getElementById("kpi-calls-block-fill"),
    kpiCallsIndivFill: document.getElementById("kpi-calls-indiv-fill"),
    
    // Mobile Navigation Controls
    mobileSidebarToggle: document.getElementById("mobile-sidebar-toggle"),
    mobileSidebarClose: document.getElementById("mobile-sidebar-close"),
    sidebarOverlay: document.getElementById("sidebar-overlay"),
    sidebarElement: document.querySelector(".sidebar"),

    // Login Screen Mappings
    loginScreen: document.getElementById("login-screen"),
    loginForm: document.getElementById("login-form"),
    loginUsername: document.getElementById("login-username"),
    loginPassword: document.getElementById("login-password"),
    loginError: document.getElementById("login-error"),
    loginErrorMsg: document.getElementById("login-error-msg"),
    btnLogout: document.getElementById("btn-logout"),
    closerSelectContainerWrapper: document.getElementById("closer-select-container-wrapper"),
    closerLoggedTitle: document.getElementById("closer-logged-title"),

    // Redesigned Overview & Tickets elements
    headerMonthSelect: document.getElementById("header-month-select"),
    tabTicketsBtn: document.getElementById("btn-tab-tickets"),
    viewTickets: document.getElementById("view-tickets"),
    newTicketForm: document.getElementById("new-ticket-form"),
    ticketTitle: document.getElementById("ticket-title"),
    ticketDesc: document.getElementById("ticket-desc"),
    ticketCategory: document.getElementById("ticket-category"),
    ticketFilterStatus: document.getElementById("ticket-filter-status"),
    ticketsListContainer: document.getElementById("tickets-list-container"),
    
    // KPI Cards Team splits
    sumLanguagesCashKPI: document.getElementById("sum-languages-cash-kpi"),
    sumBlockCashKPI: document.getElementById("sum-block-cash-kpi"),
    sumLanguagesRateKPI: document.getElementById("sum-languages-rate-kpi"),
    sumBlockRateKPI: document.getElementById("sum-block-rate-kpi"),
    
    // Inline Calls selector
    kpiCallsCloserSelect: document.getElementById("kpi-calls-closer-select")
};

// Chart instances
let cashChartInstance = null;
let rateChartInstance = null;

// --- USER DATABASE & AUTHENTICATION ---
const USERS = {
    ariel: { username: "ariel", name: "Ariel", role: "master", password: "1122" },
    manuel: { username: "manuel", name: "Manuel", role: "admin", password: "manuel123", subleaderId: "manuel" },
    jazmin: { username: "jazmin", name: "Jazmín Merlo", role: "subleader", password: "jazmin123", subleaderId: "jazmin" },
    tomas: { username: "tomas", name: "Tomás", role: "subleader", password: "tomas123", subleaderId: "tomas" }
};

function findCloserByUsername(username) {
    const cleanUsername = username.toLowerCase().trim();
    if (state.closers.languages) {
        const c = state.closers.languages.find(x => x.id === cleanUsername || x.name.toLowerCase().replace(/\s+/g, "") === cleanUsername);
        if (c) return c;
    }
    if (state.closers.block) {
        const c = state.closers.block.find(x => x.id === cleanUsername || x.name.toLowerCase().replace(/\s+/g, "") === cleanUsername);
        if (c) return c;
    }
    return null;
}

function authenticate(username, password) {
    const cleanUsername = username.toLowerCase().trim();
    
    // Check predefined users (Manuel, Jazmín, Tomás)
    if (USERS[cleanUsername] && USERS[cleanUsername].password === password) {
        return USERS[cleanUsername];
    }
    
    // Check closers
    const closer = findCloserByUsername(cleanUsername);
    if (closer && password === `${closer.id}123`) {
        return {
            username: closer.id,
            name: closer.name,
            role: "closer",
            closerId: closer.id
        };
    }
    
    return null;
}

function applyUserPermissions() {
    const user = state.loggedUser;
    if (!user) return;
    
    const overviewBtn = document.getElementById("btn-tab-overview");
    const languagesBtn = document.getElementById("btn-tab-languages");
    const blockBtn = document.getElementById("btn-tab-block");
    const closerBtn = document.getElementById("btn-tab-closer");
    
    const subleaderSelect = document.getElementById("subleader-select");
    const subleaderCard = document.querySelector(".sidebar-footer"); // Hide footer subleader select for closers
    
    // Show all by default
    if (overviewBtn) overviewBtn.style.display = "flex";
    if (languagesBtn) languagesBtn.style.display = "flex";
    if (blockBtn) blockBtn.style.display = "flex";
    if (closerBtn) closerBtn.style.display = "flex";
    if (subleaderCard) subleaderCard.style.display = "block";
    if (subleaderSelect) subleaderSelect.disabled = false;
    
    if (elements.closerProfileSelect) {
        elements.closerProfileSelect.disabled = false;
        elements.closerProfileSelect.style.display = "block";
    }
    if (elements.closerSelectContainerWrapper) {
        elements.closerSelectContainerWrapper.style.display = "flex";
    }
    if (elements.closerLoggedTitle) {
        elements.closerLoggedTitle.style.display = "none";
    }
    
    // Default show setting forms
    const accordion = document.querySelector(".edit-closer-details-accordion");
    if (accordion) accordion.style.display = "block";

    if (user.role === "master") {
        // Ariel has full master access
        state.currentSubleader = "manuel"; // default
        if (subleaderSelect) {
            subleaderSelect.value = state.currentSubleader;
            subleaderSelect.disabled = false; // master can switch subleader views
        }
    } else if (user.role === "admin" || user.role === "subleader") {
        // Both Admin and Subleader have access to all teams/tabs but are locked to their own account session
        state.currentSubleader = user.subleaderId || "manuel";
        saveState();
        updateSubleaderUI();
        if (subleaderSelect) {
            subleaderSelect.value = state.currentSubleader;
            subleaderSelect.disabled = true; // locked
        }
    } else if (user.role === "closer") {
        // Regular Closer
        // Hide other tabs
        if (overviewBtn) overviewBtn.style.display = "none";
        if (languagesBtn) languagesBtn.style.display = "none";
        if (blockBtn) blockBtn.style.display = "none";
        
        // Lock to their profile tab
        selectCloser(user.closerId);
        switchTab("closer-profile");
        
        // Hide selector and show "Mi Perfil Profesional" title
        if (elements.closerProfileSelect) {
            elements.closerProfileSelect.value = user.closerId;
            elements.closerProfileSelect.disabled = true;
            elements.closerProfileSelect.style.display = "none";
        }
        if (elements.closerSelectContainerWrapper) {
            elements.closerSelectContainerWrapper.style.display = "none";
        }
        if (elements.closerLoggedTitle) {
            elements.closerLoggedTitle.style.display = "block";
        }
        
        // Hide footer subleader select entirely
        if (subleaderCard) subleaderCard.style.display = "none";
        
        // Hide details editor accordion completely
        const accordion = document.querySelector(".edit-closer-details-accordion");
        if (accordion) accordion.style.display = "none";
    }

    // Toggle tickets/suggestions view layout depending on master/ariel role
    const ticketsGrid = document.getElementById("tickets-grid");
    const ticketsFormPanel = document.getElementById("tickets-form-panel");
    const ticketsListPanel = document.getElementById("tickets-list-panel");
    
    if (ticketsGrid && ticketsFormPanel && ticketsListPanel) {
        if (user.role === "master") {
            ticketsListPanel.style.display = "block";
            ticketsGrid.className = "grid-layout grid-2-columns";
            ticketsFormPanel.style.maxWidth = "none";
            ticketsFormPanel.style.margin = "0";
        } else {
            ticketsListPanel.style.display = "none";
            ticketsGrid.className = "grid-layout grid-1-column";
            ticketsFormPanel.style.maxWidth = "600px";
            ticketsFormPanel.style.margin = "0 auto";
            ticketsFormPanel.style.width = "100%";
        }
    }
}

function logout() {
    state.loggedUser = null;
    localStorage.removeItem("conquerx_logged_user");
    
    // Show login screen
    if (elements.loginScreen) {
        elements.loginScreen.style.display = "flex";
        elements.loginScreen.classList.remove("hidden");
    }
    
    // Reset login inputs
    if (elements.loginUsername) elements.loginUsername.value = "";
    if (elements.loginPassword) elements.loginPassword.value = "";
    if (elements.loginError) elements.loginError.style.display = "none";
    
    // Restore default displays
    const overviewBtn = document.getElementById("btn-tab-overview");
    const languagesBtn = document.getElementById("btn-tab-languages");
    const blockBtn = document.getElementById("btn-tab-block");
    const closerBtn = document.getElementById("btn-tab-closer");
    const subleaderCard = document.querySelector(".sidebar-footer");
    
    if (overviewBtn) overviewBtn.style.display = "flex";
    if (languagesBtn) languagesBtn.style.display = "flex";
    if (blockBtn) blockBtn.style.display = "flex";
    if (closerBtn) closerBtn.style.display = "flex";
    if (subleaderCard) subleaderCard.style.display = "block";
}

// --- CORE LOGIC & INITIALIZATION ---
function init() {
    // Initialize Theme
    const savedTheme = localStorage.getItem("conquerx_theme") || "dark";
    document.body.setAttribute("data-theme", savedTheme);
    updateThemeToggleIcon(savedTheme);

    // 0. Auto-Migration from jasmine to jazmin / Jazmín
    let savedSubleader = localStorage.getItem("conquerx_subleader");
    let savedSelectedCloser = localStorage.getItem("conquerx_selected_closer");
    
    if (savedSubleader === "jasmine") {
        savedSubleader = "jazmin";
        localStorage.setItem("conquerx_subleader", "jazmin");
    }
    if (savedSelectedCloser === "jasmine") {
        savedSelectedCloser = "jazmin";
        localStorage.setItem("conquerx_selected_closer", "jazmin");
    }

    let savedClosers = localStorage.getItem("conquerx_closers");
    if (savedClosers) {
        try {
            let parsed = JSON.parse(savedClosers);
            const migrateCloser = (c) => {
                if (c.id === "jasmine") {
                    c.id = "jazmin";
                    c.name = "Jazmín";
                }
                if (c.tasks) {
                    c.tasks.forEach(t => {
                        if (typeof t.text === "string") t.text = t.text.replace(/jasmine/gi, "Jazmín");
                    });
                }
                if (c.tips) {
                    c.tips.forEach(t => {
                        if (typeof t.text === "string") t.text = t.text.replace(/jasmine/gi, "Jazmín");
                    });
                }
                if (c.logs) {
                    c.logs.forEach(l => {
                        if (l.author === "Jasmine") l.author = "Jazmín";
                        if (typeof l.text === "string") l.text = l.text.replace(/jasmine/gi, "Jazmín");
                    });
                }
                if (c.nextMeeting) delete c.nextMeeting;
            };
            if (parsed.languages) parsed.languages.forEach(migrateCloser);
            if (parsed.block) parsed.block.forEach(migrateCloser);
            if (parsed.blogs) parsed.blogs.forEach(migrateCloser);
            
            // Migration logic if they have old team names
            if (parsed.blogs) {
                parsed.block = parsed.blogs;
                delete parsed.blogs;
                parsed.block.forEach(c => {
                    c.team = "block";
                });
            }
            
            // Ensure everyone has avatarUrl field
            const checkAndMigrate = (list) => {
                list.forEach(c => {
                    if (c.team === "blogs") c.team = "block";
                    if (c.avatarUrl === undefined) {
                        if (c.id === "jazmin") {
                            c.avatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150";
                        } else if (c.id === "tomas") {
                            c.avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150";
                        } else if (c.id === "merlo") {
                            c.avatarUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150";
                        } else {
                            c.avatarUrl = "";
                        }
                    }
                });
            };
            checkAndMigrate(parsed.languages);
            if (parsed.block) checkAndMigrate(parsed.block);
            
            state.closers = parsed;
            saveState();
        } catch (e) {
            console.error("Error migrating closers", e);
            state.closers = DEFAULT_CLOSERS;
            saveState();
        }
    } else {
        state.closers = DEFAULT_CLOSERS;
        saveState();
    }

    // Ensure all closers have calls fields initialized
    const ensureCallsField = (list) => {
        list.forEach(c => {
            if (c.callsWeekly === undefined || c.callsWeekly === null) {
                c.callsWeekly = c.leadsClosed ? Math.max(10, c.leadsClosed * 2) : 15;
            }
            if (c.callsMonthly === undefined || c.callsMonthly === null) {
                c.callsMonthly = c.leadsContacted || 60;
            }
        });
    };
    if (state.closers.languages) ensureCallsField(state.closers.languages);
    if (state.closers.block) ensureCallsField(state.closers.block);
    saveState();
    
    let savedTeamLogs = localStorage.getItem("conquerx_team_logs");
    if (savedTeamLogs) {
        try {
            let parsedLogs = JSON.parse(savedTeamLogs);
            const migrateTeamLog = (l) => {
                if (l.author === "Jasmine") l.author = "Jazmín";
                if (typeof l.text === "string") l.text = l.text.replace(/jasmine/gi, "Jazmín");
            };
            if (parsedLogs.languages) parsedLogs.languages.forEach(migrateTeamLog);
            if (parsedLogs.block) parsedLogs.block.forEach(migrateTeamLog);
            if (parsedLogs.blogs) parsedLogs.blogs.forEach(migrateTeamLog);
            
            if (parsedLogs.blogs) {
                parsedLogs.block = parsedLogs.blogs;
                delete parsedLogs.blogs;
            }
            state.teamLogs = parsedLogs;
            saveState();
        } catch (e) {
            console.error("Error migrating team logs", e);
            state.teamLogs = DEFAULT_TEAM_LOGS;
            saveState();
        }
    } else {
        state.teamLogs = DEFAULT_TEAM_LOGS;
        saveState();
    }
    
    if (savedSubleader) {
        state.currentSubleader = savedSubleader;
    } else {
        state.currentSubleader = "jazmin";
    }
    
    if (savedSelectedCloser) {
        state.selectedCloserId = savedSelectedCloser;
    } else {
        state.selectedCloserId = "jazmin";
    }

    function initDefaultGeneralTasks() {
        state.generalTasks = {
            manuel: [
                { id: "gt_m1", text: "Revisar KPI de ventas global", completed: false, assignedBy: "manuel", assignedTo: "manuel" },
                { id: "gt_m2", text: "Alinear metas de facturación mensual", completed: false, assignedBy: "manuel", assignedTo: "manuel" }
            ],
            jazmin: [
                { id: "gt_j1", text: "Revisar KPI de ventas de Languages", completed: false, assignedBy: "jazmin", assignedTo: "jazmin" },
                { id: "gt_j2", text: "Alinear con closers sobre nuevos leads", completed: false, assignedBy: "jazmin", assignedTo: "jazmin" },
                { id: "gt_j3", text: "Roleplay grupal de objeciones", completed: false, assignedBy: "jazmin", assignedTo: "jazmin" }
            ],
            tomas: [
                { id: "gt_t1", text: "Analizar llamadas grabadas de Block", completed: false, assignedBy: "tomas", assignedTo: "tomas" },
                { id: "gt_t2", text: "Revisión semanal de leads con Cristian", completed: false, assignedBy: "tomas", assignedTo: "tomas" }
            ]
        };
        saveState();
    }

    let savedGeneralTasks = localStorage.getItem("conquerx_general_tasks");
    if (savedGeneralTasks) {
        try {
            const parsed = JSON.parse(savedGeneralTasks);
            if (Array.isArray(parsed)) {
                // Migrate old array format to object format
                state.generalTasks = {
                    manuel: [],
                    jazmin: parsed,
                    tomas: []
                };
                saveState();
            } else {
                state.generalTasks = parsed;
                if (!state.generalTasks.manuel) state.generalTasks.manuel = [];
                if (!state.generalTasks.jazmin) state.generalTasks.jazmin = [];
                if (!state.generalTasks.tomas) state.generalTasks.tomas = [];
            }
        } catch (e) {
            console.error("Error loading general tasks", e);
            initDefaultGeneralTasks();
        }
    } else {
        initDefaultGeneralTasks();
    }

    verifySelection();

    // 0.6 Load Support Tickets
    let savedTickets = localStorage.getItem("conquerx_tickets");
    if (savedTickets) {
        try {
            state.tickets = JSON.parse(savedTickets);
        } catch (e) {
            console.error("Error loading tickets", e);
            state.tickets = [];
        }
    } else {
        // Initial dummy support tickets to look premium
        state.tickets = [
            { id: "t_d1", title: "Corregir centrado de avatares", description: "En algunas resoluciones móviles el avatar del closer se desfasa un poco hacia la izquierda.", category: "ui", status: "resolved", createdBy: "Jazmín", date: new Date(Date.now() - 86400000 * 3).toISOString() },
            { id: "t_d2", title: "Agregar cálculo automático de comisión", description: "Estaría genial que cuando se asigne un porcentaje de comisión se calcule el total ganado acumulado.", category: "feature", status: "progress", createdBy: "Tomás", date: new Date(Date.now() - 86400000 * 1).toISOString() }
        ];
        localStorage.setItem("conquerx_tickets", JSON.stringify(state.tickets));
    }

    // 0.7 Load Monthly Metrics History Snapshots
    let savedMetricsHistory = localStorage.getItem("conquerx_metrics_history");
    if (savedMetricsHistory) {
        try {
            state.metricsHistory = JSON.parse(savedMetricsHistory);
        } catch (e) {
            console.error("Error loading metrics history", e);
            state.metricsHistory = {};
        }
    }

    // Initialize month selector value from state
    if (elements.headerMonthSelect) {
        // Find if month selection is saved
        let savedMonth = localStorage.getItem("conquerx_selected_month");
        if (savedMonth) {
            state.selectedMonth = savedMonth;
            elements.headerMonthSelect.value = savedMonth;
        } else {
            state.selectedMonth = "2026-06";
            elements.headerMonthSelect.value = "2026-06";
        }
        
        // If switching to historical month, load that month's data. If current month (2026-06), load standard closer states.
        loadMetricsForSelectedMonth();
    }

    
    // Initialize UI Dropdowns and Selections
    elements.subleaderSelect.value = state.currentSubleader;
    updateSubleaderUI();
    
    buildCloserSelectDropdowns();
    elements.closerProfileSelect.value = state.selectedCloserId;
    
    if (elements.rankingFilterContainer) {
        elements.rankingFilterContainer.querySelectorAll("button").forEach(b => {
            if (b.dataset.filter === state.rankingFilter) {
                b.classList.add("active");
            } else {
                b.classList.remove("active");
            }
        });
    }
    
    // Set up tabs click handlers
    setupTabNavigation();
    
    // Event listeners for forms and buttons
    setupEventListeners();
    
    // Load Session / Authenticate
    const savedUser = localStorage.getItem("conquerx_logged_user");
    if (savedUser) {
        try {
            state.loggedUser = JSON.parse(savedUser);
            if (elements.loginScreen) {
                elements.loginScreen.style.display = "none";
                elements.loginScreen.classList.add("hidden");
            }
            applyUserPermissions();
        } catch (e) {
            console.error("Error reading saved user session", e);
        }
    } else {
        if (elements.loginScreen) {
            elements.loginScreen.style.display = "flex";
            elements.loginScreen.classList.remove("hidden");
        }
    }
    
    // Initial Render
    renderAll();
}

function updateThemeToggleIcon(theme) {
    const icon = elements.themeToggleBtn.querySelector("i");
    if (theme === "light") {
        icon.className = "fa-solid fa-sun";
        icon.style.color = "var(--color-warning)";
    } else {
        icon.className = "fa-solid fa-moon";
        icon.style.color = "var(--color-primary)";
    }
}

function saveState() {
    localStorage.setItem("conquerx_closers", JSON.stringify(state.closers));
    localStorage.setItem("conquerx_team_logs", JSON.stringify(state.teamLogs));
    localStorage.setItem("conquerx_general_tasks", JSON.stringify(state.generalTasks));
    localStorage.setItem("conquerx_subleader", state.currentSubleader);
    localStorage.setItem("conquerx_selected_closer", state.selectedCloserId);
    localStorage.setItem("conquerx_ranking_filter", state.rankingFilter);
    localStorage.setItem("conquerx_selected_month", state.selectedMonth);
    localStorage.setItem("conquerx_metrics_history", JSON.stringify(state.metricsHistory));
    localStorage.setItem("conquerx_tickets", JSON.stringify(state.tickets));
}

// --- UTILITY COMPUTATIONS ---
function getCloserById(id) {
    let result = state.closers.languages.find(c => c.id === id);
    if (!result) {
        result = state.closers.block.find(c => c.id === id);
    }
    return result;
}

function getTeamStats(teamName) {
    const list = state.closers[teamName] || [];
    let cash = 0;
    let leads = 0;
    let closed = 0;
    let callsWeekly = 0;
    let callsMonthly = 0;
    list.forEach(c => {
        cash += Number(c.cashCollected || 0);
        leads += Number(c.leadsContacted || 0);
        closed += Number(c.leadsClosed || 0);
        callsWeekly += Number(c.callsWeekly || 0);
        callsMonthly += Number(c.callsMonthly || 0);
    });
    
    const rate = leads > 0 ? (closed / leads) * 100 : 0;
    return { cash, leads, closed, rate, callsWeekly, callsMonthly, count: list.length };
}

function getCombinedStats() {
    const langStats = getTeamStats("languages");
    const blockStats = getTeamStats("block");
    
    const cash = langStats.cash + blockStats.cash;
    const leads = langStats.leads + blockStats.leads;
    const closed = langStats.closed + blockStats.closed;
    const rate = leads > 0 ? (closed / leads) * 100 : 0;
    const callsWeekly = langStats.callsWeekly + blockStats.callsWeekly;
    const callsMonthly = langStats.callsMonthly + blockStats.callsMonthly;
    
    return { cash, leads, closed, rate, callsWeekly, callsMonthly };
}

function getAllClosersSorted() {
    const all = [...state.closers.languages, ...state.closers.block];
    return all.map(c => {
        const rate = c.leadsContacted > 0 ? (c.leadsClosed / c.leadsContacted) * 100 : 0;
        return {
            ...c,
            rate: rate
        };
    }).sort((a, b) => b.cashCollected - a.cashCollected);
}

// --- UI UPDATERS & RENDERERS ---

function updateSubleaderUI() {
    const current = state.currentSubleader;
    const nameEl = document.getElementById("sidebar-subleader-name");
    const roleEl = document.getElementById("sidebar-subleader-role");
    
    if (current === "manuel") {
        if (elements.sidebarAvatar) {
            elements.sidebarAvatar.innerText = "M";
            elements.sidebarAvatar.style.backgroundImage = "none";
            elements.sidebarAvatar.style.background = "linear-gradient(135deg, #f59e0b, #ec4899)";
        }
        if (nameEl) nameEl.innerText = "Manuel";
        if (roleEl) roleEl.innerText = "Líder Supremo";
    } else if (current === "jazmin") {
        if (elements.sidebarAvatar) {
            elements.sidebarAvatar.innerText = "J";
            const jasCloser = getCloserById("jazmin");
            if (jasCloser && jasCloser.avatarUrl) {
                elements.sidebarAvatar.style.backgroundImage = `url('${jasCloser.avatarUrl}')`;
                elements.sidebarAvatar.style.backgroundSize = "cover";
                elements.sidebarAvatar.style.backgroundPosition = "center";
                elements.sidebarAvatar.innerText = "";
            } else {
                elements.sidebarAvatar.style.backgroundImage = "none";
                elements.sidebarAvatar.style.background = "linear-gradient(135deg, var(--color-accent), var(--color-primary))";
            }
        }
        if (nameEl) nameEl.innerText = "Jazmín Merlo";
        if (roleEl) roleEl.innerText = "Sublíder Languages";
    } else {
        if (elements.sidebarAvatar) {
            elements.sidebarAvatar.innerText = "T";
            const tomCloser = getCloserById("tomas");
            if (tomCloser && tomCloser.avatarUrl) {
                elements.sidebarAvatar.style.backgroundImage = `url('${tomCloser.avatarUrl}')`;
                elements.sidebarAvatar.style.backgroundSize = "cover";
                elements.sidebarAvatar.style.backgroundPosition = "center";
                elements.sidebarAvatar.innerText = "";
            } else {
                elements.sidebarAvatar.style.backgroundImage = "none";
                elements.sidebarAvatar.style.background = "linear-gradient(135deg, var(--color-secondary), var(--color-primary))";
            }
        }
        if (nameEl) nameEl.innerText = "Tomás";
        if (roleEl) roleEl.innerText = "Sublíder Block";
    }
}

function buildCloserSelectDropdowns() {
    elements.optgroupLanguages.innerHTML = "";
    elements.optgroupBlock.innerHTML = "";
    
    state.closers.languages.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.id;
        opt.innerText = c.name;
        elements.optgroupLanguages.appendChild(opt);
    });
    
    state.closers.block.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.id;
        opt.innerText = c.name;
        elements.optgroupBlock.appendChild(opt);
    });
}

function renderAll() {
    // 1. Render global KPIs
    renderGlobalKPIs();
    
    // 2. Render sidebar pending tasks
    renderSidebarPendingTasks();
    
    // 2.5. Render sidebar general tasks
    renderSidebarGeneralTasks();
    
    // 3. Render current tab
    if (state.activeTab === "overview") {
        renderOverviewTab();
    } else if (state.activeTab === "languages") {
        renderLanguagesTab();
    } else if (state.activeTab === "block") {
        renderBlockTab();
    } else if (state.activeTab === "closer-profile") {
        renderCloserProfileTab();
    } else if (state.activeTab === "tickets") {
        renderTickets();
    }
}

function renderSidebarPendingTasks() {
    const langList = state.closers.languages || [];
    const blockList = state.closers.block || [];
    const allClosers = [...langList, ...blockList];
    let pendingTasks = [];
    
    allClosers.forEach(closer => {
        if (Array.isArray(closer.tasks)) {
            closer.tasks.forEach(task => {
                if (!task.completed) {
                    pendingTasks.push({
                        closerName: closer.name,
                        closerId: closer.id,
                        taskText: task.text,
                        taskId: task.id,
                        createdBy: task.createdBy
                    });
                }
            });
        }
    });
    
    elements.sidebarTasksCount.innerText = pendingTasks.length;
    elements.sidebarTasksList.innerHTML = "";
    
    if (pendingTasks.length === 0) {
        elements.sidebarTasksList.innerHTML = `<p class="text-muted" style="font-size: 11px; margin: 0; padding: 4px 0;">No hay tareas pendientes.</p>`;
        return;
    }
    
    // Render all pending tasks
    pendingTasks.forEach(item => {
        const taskRow = document.createElement("div");
        taskRow.style.background = "var(--hover-bg)";
        taskRow.style.border = "1px solid var(--panel-border)";
        taskRow.style.padding = "8px";
        taskRow.style.borderRadius = "6px";
        taskRow.style.display = "flex";
        taskRow.style.flexDirection = "column";
        taskRow.style.gap = "2px";
        taskRow.style.cursor = "pointer";
        taskRow.style.transition = "background var(--transition-fast)";
        
        taskRow.addEventListener("mouseenter", () => {
            taskRow.style.background = "var(--hover-bg-strong)";
        });
        taskRow.addEventListener("mouseleave", () => {
            taskRow.style.background = "var(--hover-bg)";
        });
        
        const isLanguages = langList.some(c => c.id === item.closerId);
        const teamColor = isLanguages ? "var(--color-accent)" : "var(--color-secondary)";
        const creator = item.createdBy || (isLanguages ? "Jazmín" : "Tomás");
        const authorTag = `<span style="color: var(--text-muted); font-size: 9.5px;"> • Creado por ${creator}</span>`;
        
        taskRow.innerHTML = `
            <span style="color: var(--text-main); font-weight: 500; word-break: break-word; line-height: 1.2;">${item.taskText}</span>
            <div style="display: flex; align-items: center; gap: 6px; margin-top: 4px; flex-wrap: wrap;">
                <span style="width: 6px; height: 6px; border-radius: 50%; background: ${teamColor}; box-shadow: 0 0 6px ${teamColor};"></span>
                <span style="color: ${teamColor}; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px;">${item.closerName}</span>
                ${authorTag}
            </div>
        `;
        
        // Navigation on click
        taskRow.addEventListener("click", (e) => {
            e.stopPropagation();
            selectCloser(item.closerId);
            switchTab("closer-profile");
        });
        
        elements.sidebarTasksList.appendChild(taskRow);
    });
}

function renderSidebarGeneralTasks() {
    const activeLeader = state.currentSubleader || "manuel";
    if (!state.generalTasks[activeLeader]) {
        state.generalTasks[activeLeader] = [];
    }
    const leaderTasks = state.generalTasks[activeLeader];
    const pendingTasks = leaderTasks.filter(t => !t.completed);
    const count = pendingTasks.length;
    
    elements.sidebarGeneralCount.innerText = count;
    
    if (count > 3) {
        elements.sidebarGeneralBell.classList.add("bell-alert");
    } else {
        elements.sidebarGeneralBell.classList.remove("bell-alert");
    }
    
    // Toggle assignment dropdown for Manuel
    const assignContainer = document.getElementById("sidebar-assign-container");
    if (assignContainer) {
        if (state.currentSubleader === "manuel") {
            assignContainer.style.display = "flex";
        } else {
            assignContainer.style.display = "none";
        }
    }
    
    elements.sidebarGeneralList.innerHTML = "";
    
    if (leaderTasks.length === 0) {
        elements.sidebarGeneralList.innerHTML = `<p class="text-muted" style="font-size: 11px; margin: 0; padding: 4px 0;">No hay tareas generales.</p>`;
        return;
    }
    
    // Sort: pending first, completed last
    const sortedTasks = [...leaderTasks].sort((a, b) => a.completed - b.completed);
    
    sortedTasks.forEach(task => {
        const taskRow = document.createElement("div");
        taskRow.style.display = "flex";
        taskRow.style.alignItems = "center";
        taskRow.style.gap = "8px";
        taskRow.style.padding = "6px 8px";
        taskRow.style.background = "var(--hover-bg)";
        taskRow.style.border = "1px solid var(--panel-border)";
        taskRow.style.borderRadius = "4px";
        taskRow.style.fontSize = "11.5px";
        
        const checkedAttr = task.completed ? "checked" : "";
        const textDecoration = task.completed ? "line-through; color: var(--text-muted);" : "color: var(--text-main);";
        
        let assignLabel = "";
        if (task.assignedBy === "manuel" && task.assignedTo && task.assignedTo !== "manuel") {
            assignLabel = `<div style="font-size: 9px; color: #3b82f6; margin-top: 3px; font-weight: 600; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-user-shield"></i> Asignada por Manuel</div>`;
        } else {
            assignLabel = `<div style="font-size: 9px; color: var(--text-muted); margin-top: 3px; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-user-check"></i> Autoasignada</div>`;
        }
        
        taskRow.innerHTML = `
            <input type="checkbox" class="general-task-checkbox" ${checkedAttr} style="cursor: pointer; flex-shrink: 0; width: 14px; height: 14px;">
            <div style="flex-grow: 1; display: flex; flex-direction: column;">
                <span style="word-break: break-word; line-height: 1.25; ${textDecoration}">${task.text}</span>
                ${assignLabel}
            </div>
            <button class="btn-delete-task" style="padding: 2px; font-size: 11px; flex-shrink: 0;"><i class="fa-solid fa-trash-can"></i></button>
        `;
        
        taskRow.querySelector(".general-task-checkbox").addEventListener("change", () => {
            task.completed = !task.completed;
            saveState();
            renderSidebarGeneralTasks();
        });
        
        taskRow.querySelector(".btn-delete-task").addEventListener("click", () => {
            state.generalTasks[activeLeader] = state.generalTasks[activeLeader].filter(t => t.id !== task.id);
            saveState();
            renderSidebarGeneralTasks();
        });
        
        elements.sidebarGeneralList.appendChild(taskRow);
    });
}

function getTeamProjectionText(teamCloses, teamMonthlyCalls, teamCurrentCalls, targetCloses, label) {
    let rate = 0.15; // default 15%
    let hasSales = false;
    if (teamMonthlyCalls > 0 && teamCloses > 0) {
        rate = teamCloses / teamMonthlyCalls;
        hasSales = true;
    }
    
    const ratePercent = (rate * 100).toFixed(1);
    
    // Proyección con tasa del 15%
    const totalCallsNeeded15 = Math.ceil(targetCloses / 0.15);
    const remainingCalls15 = Math.max(0, totalCallsNeeded15 - teamCurrentCalls);
    
    if (!hasSales) {
        return `${label}: Sin ventas. Con tasa objetivo de 15.0%, se requieren <strong>${totalCallsNeeded15}</strong> llamadas (faltan <strong>${remainingCalls15}</strong>).`;
    }
    
    const totalCallsNeeded = Math.ceil(targetCloses / rate);
    const remainingCalls = Math.max(0, totalCallsNeeded - teamCurrentCalls);
    
    let text = `${label}: Con tasa de <strong>${ratePercent}%</strong>, se requieren <strong>${totalCallsNeeded}</strong> llamadas (faltan <strong>${remainingCalls}</strong>).`;
    if (ratePercent !== "15.0") {
        text += ` <span style="font-size:9.5px; opacity:0.85;">(Meta 15%: faltan ${remainingCalls15})</span>`;
    }
    return text;
}

function renderGlobalKPIs() {
    const combined = getCombinedStats();
    const langStats = getTeamStats("languages");
    const blockStats = getTeamStats("block");
    
    // Target 200,000 Cash Collected
    const targetCash = 200000;
    const cashPercent = Math.min((combined.cash / targetCash) * 100, 120);
    elements.totalCashValue.innerText = `€${combined.cash.toLocaleString("es-ES")}`;
    elements.cashProgressFill.style.width = `${cashPercent}%`;
    elements.cashProgressPercent.innerText = `${Math.round(cashPercent)}% completado`;
    
    const remaining = targetCash - combined.cash;
    if (remaining > 0) {
        elements.cashRemaining.innerText = `Faltan €${remaining.toLocaleString("es-ES")}`;
    } else {
        elements.cashRemaining.innerText = `¡Objetivo superado por €${Math.abs(remaining).toLocaleString("es-ES")}!`;
    }
    
    // Target 15% Closing Rate
    const targetRate = 15;
    elements.globalRateValue.innerText = `${combined.rate.toFixed(1)}%`;
    const ratePercent = Math.min((combined.rate / targetRate) * 100, 120);
    elements.rateProgressFill.style.width = `${ratePercent}%`;
    
    const diff = combined.rate - targetRate;
    if (diff >= 0) {
        elements.rateStatusLabel.innerText = "¡Objetivo superado!";
        elements.rateDiffLabel.innerText = `+${diff.toFixed(1)}% vs objetivo`;
        elements.rateDiffLabel.className = "text-success";
    } else {
        elements.rateStatusLabel.innerText = "Bajo el objetivo";
        elements.rateDiffLabel.innerText = `${diff.toFixed(1)}% vs objetivo`;
        elements.rateDiffLabel.className = "text-muted";
    }
    
    // Teams mini split (for backwards compatibility if elements exist)
    const totalCollected = combined.cash > 0 ? combined.cash : 1;
    const langPercent = Math.round((langStats.cash / totalCollected) * 100);
    const blockPercent = Math.round((blockStats.cash / totalCollected) * 100);
    
    if (elements.sumLanguagesCash) {
        elements.sumLanguagesCash.innerText = `€${langStats.cash.toLocaleString("es-ES")} (${langPercent}%)`;
    }
    if (elements.sumBlockCash) {
        elements.sumBlockCash.innerText = `€${blockStats.cash.toLocaleString("es-ES")} (${blockPercent}%)`;
    }

    // Redesigned UI element injections
    if (elements.sumLanguagesCashKPI) {
        elements.sumLanguagesCashKPI.innerText = `€${langStats.cash.toLocaleString("es-ES")} (${langPercent}%)`;
    }
    if (elements.sumBlockCashKPI) {
        elements.sumBlockCashKPI.innerText = `€${blockStats.cash.toLocaleString("es-ES")} (${blockPercent}%)`;
    }
    if (elements.sumLanguagesRateKPI) {
        elements.sumLanguagesRateKPI.innerText = `${langStats.rate.toFixed(1)}%`;
    }
    if (elements.sumBlockRateKPI) {
        elements.sumBlockRateKPI.innerText = `${blockStats.rate.toFixed(1)}%`;
    }

    // Render team calls in ribbons
    if (elements.langStatCalls) {
        elements.langStatCalls.innerText = `${langStats.callsWeekly} / ${langStats.callsMonthly}`;
    }
    if (elements.blockStatCalls) {
        elements.blockStatCalls.innerText = `${blockStats.callsWeekly} / ${blockStats.callsMonthly}`;
    }
    
    // Render Overview Projections
    // Global
    const totalClosers = langStats.count + blockStats.count;
    const weeklyTarget = 20 * totalClosers;
    const monthlyTarget = 80 * totalClosers;
    
    if (elements.globalCallsWeekly) {
        elements.globalCallsWeekly.innerText = `${combined.callsWeekly} / ${weeklyTarget}`;
        elements.globalCallsMonthly.innerText = `${combined.callsMonthly} / ${monthlyTarget}`;
        
        elements.globalProjectionWeeklyText.innerHTML = getTeamProjectionText(combined.closed, combined.callsMonthly, combined.callsWeekly, 3 * totalClosers, "Semanal");
        elements.globalProjectionMonthlyText.innerHTML = getTeamProjectionText(combined.closed, combined.callsMonthly, combined.callsMonthly, 12 * totalClosers, "Mensual");
    }

    // Update 4th KPI Card global and team metrics
    if (elements.kpiCallsGlobalMonthly) {
        elements.kpiCallsGlobalMonthly.innerText = `${combined.callsMonthly} / ${monthlyTarget}`;
        elements.kpiCallsLangMonthly.innerText = `${langStats.callsMonthly} / ${80 * langStats.count}`;
        elements.kpiCallsBlockMonthly.innerText = `${blockStats.callsMonthly} / ${80 * blockStats.count}`;
        
        if (elements.kpiCallsGlobalFill) {
            const globalPct = Math.min((combined.callsMonthly / (monthlyTarget || 1)) * 100, 100);
            elements.kpiCallsGlobalFill.style.width = `${globalPct}%`;
        }
        if (elements.kpiCallsLangFill) {
            const langPct = Math.min((langStats.callsMonthly / ((80 * langStats.count) || 1)) * 100, 100);
            elements.kpiCallsLangFill.style.width = `${langPct}%`;
        }
        if (elements.kpiCallsBlockFill) {
            const blockPct = Math.min((blockStats.callsMonthly / ((80 * blockStats.count) || 1)) * 100, 100);
            elements.kpiCallsBlockFill.style.width = `${blockPct}%`;
        }
    }

    // Populate and update interactive calls select on Overview card
    if (elements.kpiCallsCloserSelect) {
        // Build selection group if empty
        if (elements.kpiCallsCloserSelect.children.length === 0) {
            const langGroup = document.createElement("optgroup");
            langGroup.label = "Equipo Languages";
            state.closers.languages.forEach(c => {
                const opt = document.createElement("option");
                opt.value = c.id;
                opt.innerText = c.name;
                langGroup.appendChild(opt);
            });
            elements.kpiCallsCloserSelect.appendChild(langGroup);

            const blockGroup = document.createElement("optgroup");
            blockGroup.label = "Equipo Block";
            state.closers.block.forEach(c => {
                const opt = document.createElement("option");
                opt.value = c.id;
                opt.innerText = c.name;
                blockGroup.appendChild(opt);
            });
            elements.kpiCallsCloserSelect.appendChild(blockGroup);

            // Default to first language closer or selected closer
            elements.kpiCallsCloserSelect.value = state.selectedCloserId;
        }

        const selectedId = elements.kpiCallsCloserSelect.value;
        const selectedCloser = getCloserById(selectedId);
        if (selectedCloser) {
            if (elements.kpiCallsIndivName) {
                elements.kpiCallsIndivName.innerText = selectedCloser.name.split(" ")[0];
            }
            if (elements.kpiCallsIndivWeekly) {
                elements.kpiCallsIndivWeekly.innerText = `${selectedCloser.callsWeekly || 0} / 20`;
            }
            if (elements.kpiCallsIndivFill) {
                const indivPct = Math.min(((selectedCloser.callsWeekly || 0) / 20) * 100, 100);
                elements.kpiCallsIndivFill.style.width = `${indivPct}%`;
            }
            if (elements.kpiCallsMissingWeekly) {
                elements.kpiCallsMissingWeekly.innerHTML = getCallsProjectionText(selectedCloser, true);
            }
            if (elements.kpiCallsMissingMonthly) {
                elements.kpiCallsMissingMonthly.innerHTML = getCallsProjectionText(selectedCloser, false);
            }
        }
    }
    
    // Languages Team Projections
    if (elements.langCallsWeekly) {
        const weeklyTarget = 20 * langStats.count;
        const monthlyTarget = 80 * langStats.count;
        elements.langCallsWeekly.innerText = `${langStats.callsWeekly} / ${weeklyTarget}`;
        elements.langCallsMonthly.innerText = `${langStats.callsMonthly} / ${monthlyTarget}`;
        
        elements.langProjectionWeeklyText.innerHTML = getTeamProjectionText(langStats.closed, langStats.callsMonthly, langStats.callsWeekly, 3 * langStats.count, "Semanal");
        elements.langProjectionMonthlyText.innerHTML = getTeamProjectionText(langStats.closed, langStats.callsMonthly, langStats.callsMonthly, 12 * langStats.count, "Mensual");
    }
    
    // Block Team Projections
    if (elements.blockCallsWeekly) {
        const weeklyTarget = 20 * blockStats.count;
        const monthlyTarget = 80 * blockStats.count;
        elements.blockCallsWeekly.innerText = `${blockStats.callsWeekly} / ${weeklyTarget}`;
        elements.blockCallsMonthly.innerText = `${blockStats.callsMonthly} / ${monthlyTarget}`;
        
        elements.blockProjectionWeeklyText.innerHTML = getTeamProjectionText(blockStats.closed, blockStats.callsMonthly, blockStats.callsWeekly, 3 * blockStats.count, "Semanal");
        elements.blockProjectionMonthlyText.innerHTML = getTeamProjectionText(blockStats.closed, blockStats.callsMonthly, blockStats.callsMonthly, 12 * blockStats.count, "Mensual");
    }
}

function renderOverviewTab() {
    const sortedClosers = getAllClosersSorted();
    
    // Filter closers based on active segmented filter
    let filteredClosers = sortedClosers;
    if (state.rankingFilter && state.rankingFilter !== "all") {
        filteredClosers = sortedClosers.filter(c => c.team === state.rankingFilter);
    }
    
    // Render Table Ranking
    elements.rankingTbody.innerHTML = "";
    filteredClosers.forEach((c, index) => {
        const row = document.createElement("tr");
        
        const statusBadge = c.rate >= 15 ? 
            `<span class="badge badge-success">Óptimo (>=15%)</span>` : 
            (c.rate >= 10 ? `<span class="badge badge-warning">Mejorable (>=10%)</span>` : `<span class="badge badge-danger">Crítico (<10%)</span>`);
            
        const isLanguages = c.team === "languages";
        const teamBadge = isLanguages ? 
            `<span class="badge badge-accent">Languages</span>` : 
            `<span class="badge badge-secondary">Block</span>`;
            
        // Check for avatar photo
        const avatarStyle = c.avatarUrl ? 
            `style="background-image: url('${c.avatarUrl}'); background-size: cover; background-position: center; color: transparent; border: 1px solid var(--panel-border);"` : '';
            
        row.innerHTML = `
            <td><strong>#${index + 1}</strong></td>
            <td>
                <div class="table-closer-info">
                    <div class="table-closer-avatar" ${avatarStyle}>${c.avatarUrl ? '' : c.name.charAt(0)}</div>
                    <div>
                        <strong>${c.name}</strong>
                    </div>
                </div>
            </td>
            <td>${teamBadge}</td>
            <td class="text-right">${c.leadsClosed} / ${c.leadsContacted}</td>
            <td class="text-right"><strong>${c.rate.toFixed(1)}%</strong></td>
            <td class="text-right"><strong>€${c.cashCollected.toLocaleString("es-ES")}</strong></td>
            <td>${statusBadge}</td>
        `;
        
        row.style.cursor = "pointer";
        row.addEventListener("click", () => {
            selectCloser(c.id);
            switchTab("closer-profile");
        });
        
        elements.rankingTbody.appendChild(row);
    });
    
    // Render Charts
    renderCharts(filteredClosers);
}

function renderCharts(sortedClosers) {
    const names = sortedClosers.map(c => c.name);
    const cashValues = sortedClosers.map(c => c.cashCollected);
    const rateValues = sortedClosers.map(c => Number(c.rate.toFixed(1)));
    
    const accentColor = "#06b6d4";
    const secondaryColor = "#f97316";
    
    const isLight = document.body.getAttribute("data-theme") === "light";
    const gridColor = isLight ? "rgba(15, 23, 42, 0.06)" : "rgba(255, 255, 255, 0.05)";
    const labelColor = isLight ? "#475569" : "#94a3b8";
    const valueColor = isLight ? "#0f172a" : "#f1f5f9";
    
    const backgroundColors = sortedClosers.map(c => c.team === "languages" ? "rgba(6, 182, 212, 0.7)" : "rgba(249, 115, 22, 0.7)");
    const borderColors = sortedClosers.map(c => c.team === "languages" ? accentColor : secondaryColor);
    
    if (cashChartInstance) cashChartInstance.destroy();
    if (rateChartInstance) rateChartInstance.destroy();
    
    const ctxCash = document.getElementById("cashChart").getContext("2d");
    cashChartInstance = new Chart(ctxCash, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'Cash Collected (€)',
                data: cashValues,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1.5,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` Cash: €${context.raw.toLocaleString("es-ES")}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: gridColor },
                    ticks: { color: labelColor }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: valueColor, font: { weight: 'bold' } }
                }
            }
        }
    });
    
    const ctxRate = document.getElementById("rateChart").getContext("2d");
    rateChartInstance = new Chart(ctxRate, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [
                {
                    label: '% de Cierre',
                    data: rateValues,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1.5,
                    borderRadius: 4,
                    order: 2
                },
                {
                    label: 'Objetivo (15%)',
                    data: Array(names.length).fill(15),
                    type: 'line',
                    borderColor: '#f59e0b',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    pointStyle: 'none',
                    pointRadius: 0,
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: labelColor }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: valueColor, font: { weight: 'bold' } }
                },
                y: {
                    grid: { color: gridColor },
                    ticks: { 
                        color: labelColor,
                        callback: function(value) { return value + "%"; }
                    },
                    suggestedMax: 25
                }
            }
        }
    });
}

function renderLanguagesTab() {
    const stats = getTeamStats("languages");
    
    elements.langStatCash.innerText = `€${stats.cash.toLocaleString("es-ES")}`;
    elements.langStatRate.innerText = `${stats.rate.toFixed(1)}%`;
    elements.langStatClosers.innerText = stats.count;
    
    renderCloserGrid("languages", elements.languagesClosersGrid);
    renderTeamFollowups("languages", elements.languagesFollowupsList);
}

function renderBlockTab() {
    const stats = getTeamStats("block");
    
    elements.blockStatCash.innerText = `€${stats.cash.toLocaleString("es-ES")}`;
    elements.blockStatRate.innerText = `${stats.rate.toFixed(1)}%`;
    elements.blockStatClosers.innerText = stats.count;
    
    renderCloserGrid("block", elements.blockClosersGrid);
    renderTeamFollowups("block", elements.blockFollowupsList);
}

function renderCloserGrid(teamName, container) {
    container.innerHTML = "";
    const list = state.closers[teamName] || [];
    
    list.forEach(c => {
        const rate = c.leadsContacted > 0 ? (c.leadsClosed / c.leadsContacted) * 100 : 0;
        
        const card = document.createElement("div");
        card.className = `closer-card card-team-${teamName}`;
        
        const rateBadgeClass = rate >= 15 ? "badge-success" : (rate >= 10 ? "badge-warning" : "badge-danger");
        const pendingTasks = c.tasks ? c.tasks.filter(t => !t.completed).length : 0;
        
        const driveIndicator = c.driveUrl ? 
            `<i class="fa-brands fa-google-drive text-success" title="Carpeta de Drive vinculada" style="margin-left: 8px;"></i>` : '';
            
        // Check for avatar URL background style
        const avatarStyle = c.avatarUrl ? 
            `style="background-image: url('${c.avatarUrl}'); background-size: cover; background-position: center; color: transparent; border: 1px solid rgba(255,255,255,0.1);"` : '';
            
        card.innerHTML = `
            <div class="card-main-info">
                <div class="card-avatar avatar-${teamName}" ${avatarStyle}>${c.avatarUrl ? '' : c.name.charAt(0)}</div>
                <div class="card-names">
                    <h4 style="display:flex; align-items:center; gap: 4px;">${c.name} ${driveIndicator}</h4>
                    <span class="badge ${teamName === "languages" ? "badge-accent" : "badge-secondary"}">${teamName === "languages" ? "Languages" : "Block"}</span>
                </div>
            </div>
            
            <div class="card-metrics" style="grid-template-columns: repeat(3, 1fr);">
                <div class="card-metric-box">
                    <span class="val">€${c.cashCollected.toLocaleString("es-ES")}</span>
                    <span class="lbl">Cash</span>
                </div>
                <div class="card-metric-box">
                    <span class="val">${rate.toFixed(1)}%</span>
                    <span class="lbl">% Cierre</span>
                </div>
                <div class="card-metric-box">
                    <span class="val" style="font-size: 12.5px;">${c.callsWeekly || 0} / ${c.callsMonthly || 0}</span>
                    <span class="lbl">Llamadas (S|M)</span>
                </div>
            </div>
            
            <div class="card-tasks-status">
                <i class="fa-solid fa-clipboard-list"></i>
                <span>${pendingTasks} tareas pendientes</span>
            </div>
            
            <div class="card-footer-actions">
                <span class="badge ${rateBadgeClass}">${rate.toFixed(0)}% Tasa</span>
                <button class="btn btn-primary btn-icon-only btn-view-profile" data-id="${c.id}" style="width:30px; height:30px;">
                    <i class="fa-solid fa-chevron-right" style="font-size:11px;"></i>
                </button>
            </div>
        `;
        
        card.addEventListener("click", (e) => {
            selectCloser(c.id);
            switchTab("closer-profile");
        });
        
        container.appendChild(card);
    });
}

function renderTeamFollowups(teamName, listContainer) {
    listContainer.innerHTML = "";
    const logs = state.teamLogs[teamName] || [];
    
    if (logs.length === 0) {
        listContainer.innerHTML = `<p class="text-muted" style="padding: 10px 0;">No hay seguimientos registrados para este equipo.</p>`;
        return;
    }
    
    logs.forEach(log => {
        const item = document.createElement("div");
        item.className = "followup-item";
        
        const dateObj = new Date(log.date);
        const formattedDate = dateObj.toLocaleDateString("es-ES") + " " + dateObj.toLocaleTimeString("es-ES", {hour: '2-digit', minute:'2-digit'});
        
        const authorLower = log.author.toLowerCase();
        const isAuthorMe = authorLower === state.currentSubleader || 
            (authorLower === "jazmín" && state.currentSubleader === "jazmin") || 
            (authorLower === "jazmin" && state.currentSubleader === "jazmin") || 
            (authorLower === "jasmine" && state.currentSubleader === "jazmin");
        const deleteBtn = isAuthorMe ? 
            `<button class="btn-delete-task btn-delete-team-followup" data-team="${teamName}" data-id="${log.id}"><i class="fa-solid fa-trash-can"></i></button>` : '';
        
        let authorId = "tomas";
        if (authorLower === "jazmín" || authorLower === "jasmine" || authorLower === "jazmin") {
            authorId = "jazmin";
        } else if (authorLower === "manuel") {
            authorId = "manuel";
        }
        
        const authorCloser = getCloserById(authorId);
        const authorAvatarStyle = authorCloser && authorCloser.avatarUrl ? 
            `style="background-image: url('${authorCloser.avatarUrl}'); background-size: cover; background-position: center; color: transparent;"` : '';
        const authorAvatarHTML = authorId === "manuel" ?
            `<div class="table-closer-avatar" style="width: 24px; height: 24px; font-size: 10px; background: linear-gradient(135deg, #f59e0b, #ec4899); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;">M</div>` :
            (authorCloser && authorCloser.avatarUrl ?
                `<div class="table-closer-avatar" ${authorAvatarStyle} style="width: 24px; height: 24px; font-size: 10px;"></div>` :
                `<div class="table-closer-avatar" style="width: 24px; height: 24px; font-size: 10px; background: rgba(255,255,255,0.05);">${log.author.charAt(0)}</div>`
            );
            
        const badgeClass = authorId === "jazmin" ? "badge-accent" : (authorId === "manuel" ? "badge-primary" : "badge-secondary");
        const roleLabel = authorId === "manuel" ? "Líder" : "Sublíder";
        
        item.innerHTML = `
            <div class="followup-meta">
                <div class="followup-author" style="display: flex; align-items: center; gap: 8px;">
                    ${authorAvatarHTML}
                    <span class="badge ${badgeClass}">${log.author}</span>
                    <span class="text-muted">${roleLabel}</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <span class="followup-date">${formattedDate}</span>
                    ${deleteBtn}
                </div>
            </div>
            <div class="followup-text">${log.text}</div>
        `;
        
        if (isAuthorMe) {
            item.querySelector(".btn-delete-team-followup").addEventListener("click", (e) => {
                e.stopPropagation();
                deleteTeamFollowup(teamName, log.id);
            });
        }
        
        listContainer.appendChild(item);
    });
    
    listContainer.scrollTop = listContainer.scrollHeight;
}

function getCallsProjectionText(closer, isWeekly) {
    const targetCloses = isWeekly ? 3 : 12;
    const currentCalls = isWeekly ? (closer.callsWeekly || 0) : (closer.callsMonthly || 0);
    const targetCallsStandard = isWeekly ? 20 : 80;
    
    let rate = 0.15; // default 15%
    let hasSales = false;
    
    const totalMonthlyCalls = closer.callsMonthly || 0;
    if (totalMonthlyCalls > 0 && (closer.leadsClosed || 0) > 0) {
        rate = closer.leadsClosed / totalMonthlyCalls;
        hasSales = true;
    } else if (closer.leadsContacted > 0 && (closer.leadsClosed || 0) > 0) {
        rate = closer.leadsClosed / closer.leadsContacted;
        hasSales = true;
    }
    
    const ratePercent = (rate * 100).toFixed(1);
    
    // Proyección con tasa del 15%
    const totalCallsNeeded15 = targetCallsStandard;
    const remainingCalls15 = Math.max(0, totalCallsNeeded15 - currentCalls);
    
    const label = isWeekly ? "Semanal" : "Mensual";
    
    if (!hasSales) {
        return `<strong>${label}:</strong> Sin ventas este mes. Tasa objetivo del 15.0%: total de <strong>${totalCallsNeeded15}</strong> llamadas (faltan <strong class="text-warning">${remainingCalls15}</strong>).`;
    }
    
    const totalCallsNeeded = Math.ceil(targetCloses / rate);
    const remainingCalls = Math.max(0, totalCallsNeeded - currentCalls);
    
    let text = `<strong>${label}:</strong> Con tasa de cierre del <span class="badge-rate">${ratePercent}%</span>, requiere <strong>${totalCallsNeeded}</strong> llamadas en total (faltan <strong class="text-warning">${remainingCalls}</strong>).`;
    if (ratePercent !== "15.0") {
        text += ` <span style="font-size:9.5px; opacity:0.85;">(Faltarían ${remainingCalls15} con tasa estándar 15%)</span>`;
    }
    return text;
}

function renderCloserProfileTab() {
    const closer = getCloserById(state.selectedCloserId);
    if (!closer) return;
    
    // Style update based on team
    const isLang = closer.team === "languages";
    elements.profileTeamBadge.className = isLang ? "badge badge-accent" : "badge badge-secondary";
    elements.profileTeamBadge.innerText = isLang ? "EQUIPO LANGUAGES" : "EQUIPO BLOCK";
    
    // Closer profile picture rendering
    if (closer.avatarUrl) {
        elements.profileAvatarChar.style.backgroundImage = `url('${closer.avatarUrl}')`;
        elements.profileAvatarChar.style.backgroundSize = "cover";
        elements.profileAvatarChar.style.backgroundPosition = "center";
        elements.profileAvatarChar.innerText = "";
    } else {
        elements.profileAvatarChar.style.backgroundImage = "none";
        elements.profileAvatarChar.innerText = closer.name.charAt(0);
        elements.profileAvatarChar.style.background = isLang ? 
            "linear-gradient(135deg, var(--color-accent), var(--color-primary))" : 
            "linear-gradient(135deg, var(--color-secondary), var(--color-primary))";
    }
        
    elements.profileName.innerText = closer.name;
    elements.profileTeamLbl.innerText = isLang ? "Equipo: Languages (Inglés)" : "Equipo: Block (Programación)";
    
    // Calculate rate
    const rate = closer.leadsContacted > 0 ? (closer.leadsClosed / closer.leadsContacted) * 100 : 0;
    elements.profileRateVal.innerText = `${rate.toFixed(1)}%`;
    elements.profileCashVal.innerText = `€${closer.cashCollected.toLocaleString("es-ES")}`;
    
    // Google Drive Call folder
    if (closer.driveUrl) {
        elements.profileDriveBtn.href = closer.driveUrl;
        elements.profileDriveBtn.style.display = "inline-flex";
        elements.profileDriveEmpty.style.display = "none";
    } else {
        elements.profileDriveBtn.style.display = "none";
        elements.profileDriveEmpty.style.display = "block";
    }
    
    // Personal Target Progress (1st Bonus: 10k, 2nd Bonus: 25k)
    const personalTargetPercent = Math.min((closer.cashCollected / 25000) * 100, 100);
    elements.profileTargetFill.style.width = `${personalTargetPercent}%`;
    elements.profileTargetCollected.innerText = `€${closer.cashCollected.toLocaleString("es-ES")} / €25.000`;
    
    // Dynamically calculate and render bonus status message
    if (closer.cashCollected < 10000) {
        const missing = 10000 - closer.cashCollected;
        elements.bonusStatusMessage.innerText = `Faltan €${missing.toLocaleString("es-ES")} para el 1er Bonus`;
        elements.bonusStatusMessage.style.color = "var(--color-warning)";
    } else if (closer.cashCollected < 25000) {
        const missing = 25000 - closer.cashCollected;
        elements.bonusStatusMessage.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> ¡1er Bonus conseguido! Faltan €${missing.toLocaleString("es-ES")} para el 2do Bonus`;
        elements.bonusStatusMessage.style.color = "var(--color-primary)";
    } else {
        elements.bonusStatusMessage.innerHTML = `<i class="fa-solid fa-trophy text-warning"></i> ¡Todos los Bonus conseguidos! (€25k+)`;
        elements.bonusStatusMessage.style.color = "var(--color-success)";
    }

    // Render Calls & Projections
    if (elements.profileCallsWeeklyText) {
        elements.profileCallsWeeklyText.innerText = `${closer.callsWeekly || 0} / 20`;
        const weeklyPct = Math.min(((closer.callsWeekly || 0) / 20) * 100, 100);
        elements.profileCallsWeeklyFill.style.width = `${weeklyPct}%`;
    }
    if (elements.profileCallsMonthlyText) {
        elements.profileCallsMonthlyText.innerText = `${closer.callsMonthly || 0} / 80`;
        const monthlyPct = Math.min(((closer.callsMonthly || 0) / 80) * 100, 100);
        elements.profileCallsMonthlyFill.style.width = `${monthlyPct}%`;
    }
    if (elements.profileProjectionWeekly) {
        elements.profileProjectionWeekly.innerHTML = getCallsProjectionText(closer, true);
    }
    if (elements.profileProjectionMonthly) {
        elements.profileProjectionMonthly.innerHTML = getCallsProjectionText(closer, false);
    }
    
    // Update 4th KPI Card (Calls summary) individual details
    if (elements.kpiCallsIndivWeekly) {
        elements.kpiCallsIndivName.innerText = closer.name.split(" ")[0]; // just first name
        elements.kpiCallsIndivWeekly.innerText = `${closer.callsWeekly || 0} / 20`;
        if (elements.kpiCallsIndivFill) {
            const indivPct = Math.min(((closer.callsWeekly || 0) / 20) * 100, 100);
            elements.kpiCallsIndivFill.style.width = `${indivPct}%`;
        }
        elements.kpiCallsMissingWeekly.innerHTML = getCallsProjectionText(closer, true);
        elements.kpiCallsMissingMonthly.innerHTML = getCallsProjectionText(closer, false);
    }
    
    // Refill Form
    elements.editName.value = closer.name;
    elements.editTeam.value = closer.team;
    elements.editAvatar.value = closer.avatarUrl || "";
    elements.editDrive.value = closer.driveUrl || "";
    elements.editLeads.value = closer.leadsContacted;
    elements.editSales.value = closer.leadsClosed;
    elements.editCash.value = closer.cashCollected;
    elements.editCallsWeekly.value = closer.callsWeekly || 0;
    elements.editCallsMonthly.value = closer.callsMonthly || 0;
    elements.editNote.value = closer.note || "";
    
    // Render note info box
    const closerNote = closer.note || "Sin observaciones o notas registradas para este closer. Puedes agregar una nota editando sus datos abajo.";
    elements.profileInfoNoteText.innerText = closerNote;
    elements.profileInfoNoteBox.style.display = "none";
    elements.profileInfoIcon.className = "fa-solid fa-circle-info text-muted";
    
    // (Meeting Agenda Removed)
    
    // Render Tasks
    renderCloserTasks(closer);
    
    // Render Tips
    renderCloserTips(closer);
    
    // Render Logs (Individual feedbacks)
    renderCloserLogs(closer);
}

// (Meeting agenda functions removed)

function renderCloserTasks(closer) {
    elements.closerTasksList.innerHTML = "";
    const pending = Array.isArray(closer.tasks) ? closer.tasks.filter(t => !t.completed).length : 0;
    elements.tasksCountBadge.innerText = `${pending} pendientes`;
    
    if (!Array.isArray(closer.tasks) || closer.tasks.length === 0) {
        elements.closerTasksList.innerHTML = `<p class="text-muted" style="padding:10px 0;">No hay tareas asignadas para este closer.</p>`;
        return;
    }
    
    closer.tasks.forEach(task => {
        const item = document.createElement("li");
        item.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        const creator = task.createdBy || (closer.team === "languages" ? "Jazmín" : "Tomás");
        
        // Check permission: only the creator can complete/delete (or admin Manuel)
        const authorLower = creator.toLowerCase();
        const isAuthorMe = state.currentSubleader === "manuel" || 
            authorLower === state.currentSubleader || 
            (authorLower === "jazmín" && state.currentSubleader === "jazmin") || 
            (authorLower === "jazmin" && state.currentSubleader === "jazmin");
            
        const checkboxDisabledAttr = isAuthorMe ? "" : "disabled";
        const deleteButtonHTML = isAuthorMe ? 
            `<button class="btn-delete-task" title="Eliminar tarea"><i class="fa-solid fa-trash-can"></i></button>` : '';
        
        item.innerHTML = `
            <div class="task-checkbox-wrapper">
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} ${checkboxDisabledAttr}>
            </div>
            <div style="flex-grow: 1; display: flex; flex-direction: column; gap: 2px;">
                <span class="task-text">${task.text}</span>
                <small style="color: var(--text-muted); font-size: 10.5px; display: block; margin-top: 1px;">Creado por ${creator}</small>
            </div>
            ${deleteButtonHTML}
        `;
        
        if (isAuthorMe) {
            item.querySelector(".task-checkbox").addEventListener("change", () => {
                toggleTaskCompleted(closer.id, task.id);
            });
            
            const btnDelete = item.querySelector(".btn-delete-task");
            if (btnDelete) {
                btnDelete.addEventListener("click", () => {
                    deleteCloserTask(closer.id, task.id);
                });
            }
        }
        
        elements.closerTasksList.appendChild(item);
    });
}

function renderCloserTips(closer) {
    elements.closerTipsList.innerHTML = "";
    const tipsCount = Array.isArray(closer.tips) ? closer.tips.length : 0;
    elements.tipsCountBadge.innerText = `${tipsCount} tips`;
    elements.tipsCountBadge.className = tipsCount > 0 ? "badge badge-warning" : "badge badge-primary";
    
    if (!Array.isArray(closer.tips) || closer.tips.length === 0) {
        elements.closerTipsList.innerHTML = `<p class="text-muted" style="padding:10px 0;">No hay tips o áreas de mejora registradas aún.</p>`;
        return;
    }
    
    closer.tips.forEach(tip => {
        const item = document.createElement("li");
        item.className = "tip-item";
        
        const creator = tip.createdBy || (closer.team === "languages" ? "Jazmín" : "Tomás");
        
        // Check permission: only the creator can delete (or admin Manuel)
        const authorLower = creator.toLowerCase();
        const isAuthorMe = state.currentSubleader === "manuel" || 
            authorLower === state.currentSubleader || 
            (authorLower === "jazmín" && state.currentSubleader === "jazmin") || 
            (authorLower === "jazmin" && state.currentSubleader === "jazmin");
            
        const deleteButtonHTML = isAuthorMe ? 
            `<button class="btn-delete-tip" title="Eliminar tip"><i class="fa-solid fa-trash-can"></i></button>` : '';
            
        item.innerHTML = `
            <i class="fa-solid fa-lightbulb tip-icon"></i>
            <div style="flex-grow: 1; display: flex; flex-direction: column; gap: 2px;">
                <span class="tip-text">${tip.text}</span>
                <small style="color: var(--text-muted); font-size: 10.5px; display: block; margin-top: 1px;">Creado por ${creator}</small>
            </div>
            ${deleteButtonHTML}
        `;
        
        if (isAuthorMe) {
            const btnDelete = item.querySelector(".btn-delete-tip");
            if (btnDelete) {
                btnDelete.addEventListener("click", () => {
                    deleteCloserTip(closer.id, tip.id);
                });
            }
        }
        
        elements.closerTipsList.appendChild(item);
    });
}

function renderCloserLogs(closer) {
    elements.closerLogsList.innerHTML = "";
    const logsCount = closer.logs ? closer.logs.length : 0;
    elements.logsCountBadge.innerText = `${logsCount} notas`;
    
    if (!closer.logs || closer.logs.length === 0) {
        elements.closerLogsList.innerHTML = `<p class="text-muted" style="padding:10px 0;">No hay registros de seguimiento para este closer.</p>`;
        return;
    }
    
    closer.logs.forEach(log => {
        const item = document.createElement("div");
        item.className = "followup-item";
        
        const dateObj = new Date(log.date);
        const formattedDate = dateObj.toLocaleDateString("es-ES") + " " + dateObj.toLocaleTimeString("es-ES", {hour: '2-digit', minute:'2-digit'});
        
        const authorLower = log.author.toLowerCase();
        const isAuthorMe = authorLower === state.currentSubleader || 
            (authorLower === "jazmín" && state.currentSubleader === "jazmin") || 
            (authorLower === "jazmin" && state.currentSubleader === "jazmin") || 
            (authorLower === "jasmine" && state.currentSubleader === "jazmin");
        const deleteBtn = isAuthorMe ? 
            `<button class="btn-delete-task btn-delete-closer-log" data-id="${log.id}"><i class="fa-solid fa-trash-can"></i></button>` : '';
            
        let authorId = "tomas";
        if (authorLower === "jazmín" || authorLower === "jasmine" || authorLower === "jazmin") {
            authorId = "jazmin";
        } else if (authorLower === "manuel") {
            authorId = "manuel";
        }
        
        const authorCloser = getCloserById(authorId);
        const authorAvatarStyle = authorCloser && authorCloser.avatarUrl ? 
            `style="background-image: url('${authorCloser.avatarUrl}'); background-size: cover; background-position: center; color: transparent;"` : '';
        const authorAvatarHTML = authorId === "manuel" ?
            `<div class="table-closer-avatar" style="width: 24px; height: 24px; font-size: 10px; background: linear-gradient(135deg, #f59e0b, #ec4899); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;">M</div>` :
            (authorCloser && authorCloser.avatarUrl ?
                `<div class="table-closer-avatar" ${authorAvatarStyle} style="width: 24px; height: 24px; font-size: 10px;"></div>` :
                `<div class="table-closer-avatar" style="width: 24px; height: 24px; font-size: 10px; background: rgba(255,255,255,0.05);">${log.author.charAt(0)}</div>`
            );
            
        const badgeClass = authorId === "jazmin" ? "badge-accent" : (authorId === "manuel" ? "badge-primary" : "badge-secondary");
        const roleLabel = authorId === "manuel" ? "Líder" : "Sublíder";
        
        const linkHTML = log.link ? `
            <div style="margin-top: 8px;">
                <a href="${log.link}" target="_blank" class="btn btn-secondary" style="font-size: 11px; padding: 4px 8px; display: inline-flex; align-items: center; gap: 6px; text-decoration: none; border-radius: var(--radius-sm); border: 1px solid var(--panel-border); background: var(--hover-bg-strong); color: var(--text-main); transition: var(--transition-fast);">
                    <i class="fa-solid fa-headphones text-accent" style="color: var(--color-accent) !important; font-size: 12px;"></i>
                    <span>Audio / Transcripción del Análisis</span>
                </a>
            </div>
        ` : '';

        item.innerHTML = `
            <div class="followup-meta">
                <div class="followup-author" style="display: flex; align-items: center; gap: 8px;">
                    ${authorAvatarHTML}
                    <span class="badge ${badgeClass}">${log.author}</span>
                    <span class="text-muted">${roleLabel}</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <span class="followup-date">${formattedDate}</span>
                    ${deleteBtn}
                </div>
            </div>
            <div class="followup-text">${log.text}</div>
            ${linkHTML}
        `;
        
        if (isAuthorMe) {
            item.querySelector(".btn-delete-closer-log").addEventListener("click", (e) => {
                e.stopPropagation();
                deleteCloserLog(closer.id, log.id);
            });
        }
        
        elements.closerLogsList.appendChild(item);
    });
    
    elements.closerLogsList.scrollTop = elements.closerLogsList.scrollHeight;
}

// --- INTERACTIVE ACTIONS & STATE MUTATIONS ---

function selectCloser(closerId) {
    state.selectedCloserId = closerId;
    elements.closerProfileSelect.value = closerId;
    saveState();
}

function switchTab(tabName) {
    if (state.loggedUser && state.loggedUser.role === "closer" && tabName !== "closer-profile") {
        return;
    }
    state.activeTab = tabName;
    
    elements.tabOverviewBtn.classList.remove("active");
    elements.tabLanguagesBtn.classList.remove("active");
    elements.tabBlockBtn.classList.remove("active");
    elements.tabCloserBtn.classList.remove("active");
    if (elements.tabTicketsBtn) elements.tabTicketsBtn.classList.remove("active");
    
    if (tabName === "overview") elements.tabOverviewBtn.classList.add("active");
    else if (tabName === "languages") elements.tabLanguagesBtn.classList.add("active");
    else if (tabName === "block") elements.tabBlockBtn.classList.add("active");
    else if (tabName === "closer-profile") elements.tabCloserBtn.classList.add("active");
    else if (tabName === "tickets" && elements.tabTicketsBtn) elements.tabTicketsBtn.classList.add("active");
    
    elements.viewOverview.classList.remove("active");
    elements.viewLanguages.classList.remove("active");
    elements.viewBlock.classList.remove("active");
    elements.viewCloserProfile.classList.remove("active");
    if (elements.viewTickets) elements.viewTickets.classList.remove("active");
    
    if (tabName === "overview") {
        elements.viewOverview.classList.add("active");
        elements.currentViewTitle.innerText = "Vista General";
        elements.currentViewSubtitle.innerText = "Resumen consolidado de ventas y porcentajes de cierre";
    } else if (tabName === "languages") {
        elements.viewLanguages.classList.add("active");
        elements.currentViewTitle.innerText = "Equipo Languages";
        elements.currentViewSubtitle.innerText = "Supervisión grupal del equipo de ventas de Inglés";
    } else if (tabName === "block") {
        elements.viewBlock.classList.add("active");
        elements.currentViewTitle.innerText = "Equipo Block";
        elements.currentViewSubtitle.innerText = "Supervisión grupal del equipo de ventas de Programación";
    } else if (tabName === "closer-profile") {
        elements.viewCloserProfile.classList.add("active");
        elements.currentViewTitle.innerText = "Ficha de Closer";
        elements.currentViewSubtitle.innerText = "Análisis individual, tareas, tips y feedback particular";
    } else if (tabName === "tickets" && elements.viewTickets) {
        elements.viewTickets.classList.add("active");
        elements.currentViewTitle.innerText = "Sugerencias y Mejoras";
        elements.currentViewSubtitle.innerText = "Sistema interno de tickets para proponer y votar mejoras de la página";
        renderTickets();
    }
    
    renderAll();
}

function closeMobileSidebar() {
    if (elements.sidebarElement && elements.sidebarElement.classList.contains("open")) {
        elements.sidebarElement.classList.remove("open");
    }
    if (elements.sidebarOverlay && elements.sidebarOverlay.classList.contains("active")) {
        elements.sidebarOverlay.classList.remove("active");
    }
}

function setupTabNavigation() {
    elements.tabOverviewBtn.addEventListener("click", () => {
        switchTab("overview");
        closeMobileSidebar();
    });
    elements.tabLanguagesBtn.addEventListener("click", () => {
        switchTab("languages");
        closeMobileSidebar();
    });
    elements.tabBlockBtn.addEventListener("click", () => {
        switchTab("block");
        closeMobileSidebar();
    });
    elements.tabCloserBtn.addEventListener("click", () => {
        switchTab("closer-profile");
        closeMobileSidebar();
    });
    if (elements.tabTicketsBtn) {
        elements.tabTicketsBtn.addEventListener("click", () => {
            switchTab("tickets");
            closeMobileSidebar();
        });
    }
}

function setupEventListeners() {
    // Mobile navigation drawer toggle listeners
    if (elements.mobileSidebarToggle) {
        elements.mobileSidebarToggle.addEventListener("click", () => {
            elements.sidebarElement.classList.add("open");
            elements.sidebarOverlay.classList.add("active");
        });
    }
    
    if (elements.mobileSidebarClose) {
        elements.mobileSidebarClose.addEventListener("click", () => {
            closeMobileSidebar();
        });
    }
    
    if (elements.sidebarOverlay) {
        elements.sidebarOverlay.addEventListener("click", () => {
            closeMobileSidebar();
        });
    }

    elements.subleaderSelect.addEventListener("change", (e) => {
        state.currentSubleader = e.target.value;
        saveState();
        updateSubleaderUI();
        let name = "Manuel";
        if (e.target.value === 'jazmin') name = 'Jazmín';
        else if (e.target.value === 'tomas') name = 'Tomás';
        showToast(`Sesión cambiada a: ${name}`);
        renderAll();
    });
    
    elements.closerProfileSelect.addEventListener("change", (e) => {
        selectCloser(e.target.value);
        renderCloserProfileTab();
    });

    if (elements.headerMonthSelect) {
        elements.headerMonthSelect.addEventListener("change", (e) => {
            state.selectedMonth = e.target.value;
            localStorage.setItem("conquerx_selected_month", e.target.value);
            loadMetricsForSelectedMonth();
            showToast(`Mostrando datos de: ${elements.headerMonthSelect.options[elements.headerMonthSelect.selectedIndex].text}`);
            renderAll();
        });
    }

    if (elements.kpiCallsCloserSelect) {
        elements.kpiCallsCloserSelect.addEventListener("change", (e) => {
            // Re-render global KPIs which reads elements.kpiCallsCloserSelect.value
            renderGlobalKPIs();
        });
    }

    if (elements.newTicketForm) {
        elements.newTicketForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = elements.ticketTitle.value.trim();
            const desc = elements.ticketDesc.value.trim();
            const category = elements.ticketCategory.value;
            if (!title || !desc) return;
            
            const author = state.loggedUser ? state.loggedUser.name : "Sublíder";
            const newTicket = {
                id: "t_" + Date.now(),
                title: title,
                description: desc,
                category: category,
                status: "open",
                createdBy: author,
                date: new Date().toISOString()
            };
            
            state.tickets.push(newTicket);
            saveState();
            
            // reset form
            elements.ticketTitle.value = "";
            elements.ticketDesc.value = "";
            
            showToast("Sugerencia reportada correctamente. ¡Gracias!");
            renderTickets();
        });
    }

    if (elements.ticketFilterStatus) {
        elements.ticketFilterStatus.addEventListener("click", (e) => {
            const btn = e.target.closest("button");
            if (!btn) return;
            
            elements.ticketFilterStatus.querySelectorAll("button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            renderTickets();
        });
    }

    if (elements.profileInfoIcon) {
        elements.profileInfoIcon.addEventListener("click", () => {
            const box = elements.profileInfoNoteBox;
            const isVisible = box.style.display === "flex";
            if (isVisible) {
                box.style.display = "none";
                elements.profileInfoIcon.classList.remove("text-primary");
                elements.profileInfoIcon.classList.add("text-muted");
            } else {
                box.style.display = "flex";
                elements.profileInfoIcon.classList.remove("text-muted");
                elements.profileInfoIcon.classList.add("text-primary");
            }
        });
    }

    if (elements.rankingFilterContainer) {
        elements.rankingFilterContainer.addEventListener("click", (e) => {
            const btn = e.target.closest("button");
            if (!btn) return;
            
            elements.rankingFilterContainer.querySelectorAll("button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            state.rankingFilter = btn.dataset.filter;
            saveState();
            
            const teamName = btn.dataset.filter === "all" ? "Todos" : (btn.dataset.filter === "languages" ? "Languages" : "Block");
            showToast(`Filtrando ranking: ${teamName}`);
            renderOverviewTab();
        });
    }
    
    elements.themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
        document.body.setAttribute("data-theme", currentTheme);
        localStorage.setItem("conquerx_theme", currentTheme);
        updateThemeToggleIcon(currentTheme);
        showToast(`Tema cambiado a modo ${currentTheme === 'light' ? 'claro' : 'oscuro'}`);
        renderAll();
    });
    
    elements.sidebarGeneralToggleBtn.addEventListener("click", () => {
        const list = elements.sidebarGeneralListPanel;
        const panel = document.querySelector(".sidebar-general-tasks-panel");
        const isCollapsed = list.style.display === "none";
        
        if (isCollapsed) {
            list.style.display = "flex";
            panel.classList.add("expanded");
        } else {
            list.style.display = "none";
            panel.classList.remove("expanded");
        }
    });
    
    // General Task Modal Toggle Listeners
    if (elements.btnOpenGeneralTaskModal) {
        elements.btnOpenGeneralTaskModal.addEventListener("click", () => {
            if (elements.generalTaskModal) {
                elements.generalTaskModal.classList.add("active");
                setTimeout(() => {
                    if (elements.sidebarGeneralInput) {
                        elements.sidebarGeneralInput.focus();
                    }
                }, 100);
            }
        });
    }

    const closeGeneralTaskModal = () => {
        if (elements.generalTaskModal) {
            elements.generalTaskModal.classList.remove("active");
            if (elements.sidebarGeneralInput) {
                elements.sidebarGeneralInput.value = "";
            }
        }
    };

    if (elements.btnCloseGeneralTaskModal) {
        elements.btnCloseGeneralTaskModal.addEventListener("click", closeGeneralTaskModal);
    }

    if (elements.btnCancelGeneralTaskModal) {
        elements.btnCancelGeneralTaskModal.addEventListener("click", closeGeneralTaskModal);
    }

    if (elements.generalTaskModal) {
        elements.generalTaskModal.addEventListener("click", (e) => {
            if (e.target === elements.generalTaskModal) {
                closeGeneralTaskModal();
            }
        });
    }

    elements.sidebarGeneralAddForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const textVal = elements.sidebarGeneralInput.value.trim();
        if (!textVal) return;
        
        let assignTo = state.currentSubleader;
        const assignSelect = document.getElementById("sidebar-assign-select");
        if (state.currentSubleader === "manuel" && assignSelect) {
            assignTo = assignSelect.value;
        }
        
        const newTask = {
            id: "gt_" + Date.now(),
            text: textVal,
            completed: false,
            createdAt: new Date().toISOString(),
            assignedBy: state.currentSubleader,
            assignedTo: assignTo
        };
        
        if (!state.generalTasks[assignTo]) {
            state.generalTasks[assignTo] = [];
        }
        
        state.generalTasks[assignTo].push(newTask);
        elements.sidebarGeneralInput.value = "";
        saveState();
        
        let targetName = "tu lista";
        if (assignTo === "jazmin") targetName = "lista de Jazmín";
        else if (assignTo === "tomas") targetName = "lista de Tomás";
        else if (assignTo === "manuel" && state.currentSubleader !== "manuel") targetName = "lista de Manuel";
        
        showToast(`Tarea agregada a la ${targetName}`);
        renderSidebarGeneralTasks();
        closeGeneralTaskModal();
    });
    
    elements.closerSettingsForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const closer = getCloserById(state.selectedCloserId);
        if (!closer) return;
        
        const previousTeam = closer.team;
        const targetTeam = elements.editTeam.value;
        
        closer.name = elements.editName.value.trim();
        closer.avatarUrl = elements.editAvatar.value.trim();
        closer.driveUrl = elements.editDrive.value.trim();
        closer.leadsContacted = Number(elements.editLeads.value);
        closer.leadsClosed = Number(elements.editSales.value);
        closer.cashCollected = Number(elements.editCash.value);
        closer.callsWeekly = Number(elements.editCallsWeekly.value || 0);
        closer.callsMonthly = Number(elements.editCallsMonthly.value || 0);
        closer.note = elements.editNote.value.trim();
        
        if (previousTeam !== targetTeam) {
            closer.team = targetTeam;
            state.closers[previousTeam] = state.closers[previousTeam].filter(c => c.id !== closer.id);
            state.closers[targetTeam].push(closer);
        }
        
        saveState();
        buildCloserSelectDropdowns();
        elements.closerProfileSelect.value = closer.id;
        
        // Auto-close details accordion
        const accordion = document.querySelector(".edit-closer-details-accordion");
        if (accordion) {
            accordion.removeAttribute("open");
        }
        
        showToast(`Datos actualizados para ${closer.name}`);
        updateSubleaderUI(); // update sub-leader sidebar photo immediately if edited
        renderAll();
    });
    
    elements.addTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const closer = getCloserById(state.selectedCloserId);
        if (!closer) return;
        
        const textVal = elements.taskInput.value.trim();
        if (!textVal) return;
        
        const authorName = state.currentSubleader === "manuel" ? "Manuel" : (state.currentSubleader === "jazmin" ? "Jazmín" : "Tomás");
        
        const newTask = {
            id: "t_" + Date.now(),
            text: textVal,
            completed: false,
            createdBy: authorName
        };
        
        if (!Array.isArray(closer.tasks)) closer.tasks = [];
        closer.tasks.push(newTask);
        elements.taskInput.value = "";
        
        saveState();
        showToast("Tarea añadida");
        renderAll(); // Renders sidebar pending tasks too
    });
    
    elements.addTipForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const closer = getCloserById(state.selectedCloserId);
        if (!closer) return;
        
        const textVal = elements.tipInput.value.trim();
        if (!textVal) return;
        
        const authorName = state.currentSubleader === "manuel" ? "Manuel" : (state.currentSubleader === "jazmin" ? "Jazmín" : "Tomás");
        
        const newTip = {
            id: "tip_" + Date.now(),
            text: textVal,
            category: "general",
            createdBy: authorName
        };
        
        if (!Array.isArray(closer.tips)) closer.tips = [];
        closer.tips.push(newTip);
        elements.tipInput.value = "";
        
        saveState();
        showToast("Tip de mejora añadido");
        renderCloserProfileTab();
    });
    
    elements.btnAddCloserLog.addEventListener("click", () => {
        const text = elements.closerLogInput.value.trim();
        if (!text) return;
        
        let linkVal = elements.closerLogLink ? elements.closerLogLink.value.trim() : "";
        if (linkVal && !/^https?:\/\//i.test(linkVal)) {
            linkVal = "https://" + linkVal;
        }
        
        const closer = getCloserById(state.selectedCloserId);
        if (!closer) return;
        
        const authorName = state.currentSubleader === "manuel" ? "Manuel" : (state.currentSubleader === "jazmin" ? "Jazmín" : "Tomás");
        
        const newLog = {
            id: "log_" + Date.now(),
            author: authorName,
            text: text,
            link: linkVal,
            date: new Date().toISOString()
        };
        
        if (!Array.isArray(closer.logs)) closer.logs = [];
        closer.logs.push(newLog);
        elements.closerLogInput.value = "";
        if (elements.closerLogLink) elements.closerLogLink.value = "";
        
        saveState();
        showToast("Nota de seguimiento agregada");
        renderCloserProfileTab();
    });
    
    elements.btnAddLanguagesFollowup.addEventListener("click", () => {
        const text = elements.languagesFollowupInput.value.trim();
        if (!text) return;
        
        const authorName = state.currentSubleader === "manuel" ? "Manuel" : (state.currentSubleader === "jazmin" ? "Jazmín" : "Tomás");
        
        const newLog = {
            id: "glog_" + Date.now(),
            author: authorName,
            text: text,
            date: new Date().toISOString()
        };
        
        state.teamLogs.languages.push(newLog);
        elements.languagesFollowupInput.value = "";
        
        saveState();
        showToast("Seguimiento grupal guardado");
        renderLanguagesTab();
    });
    
    elements.btnAddBlockFollowup.addEventListener("click", () => {
        const text = elements.blockFollowupInput.value.trim();
        if (!text) return;
        
        const authorName = state.currentSubleader === "manuel" ? "Manuel" : (state.currentSubleader === "jazmin" ? "Jazmín" : "Tomás");
        
        const newLog = {
            id: "glog_" + Date.now(),
            author: authorName,
            text: text,
            date: new Date().toISOString()
        };
        
        state.teamLogs.block.push(newLog);
        elements.blockFollowupInput.value = "";
        
        saveState();
        showToast("Seguimiento grupal guardado");
        renderBlockTab();
    });

    // Toggle sidebar pending tasks breakdown
    elements.sidebarTasksToggleBtn.addEventListener("click", () => {
        const list = elements.sidebarTasksList;
        const panel = document.querySelector(".sidebar-pending-tasks-panel");
        const isCollapsed = list.style.display === "none";
        
        if (isCollapsed) {
            list.style.display = "flex";
            panel.classList.add("expanded");
        } else {
            list.style.display = "none";
            panel.classList.remove("expanded");
        }
    });

    // Login Form Submission Listener
    if (elements.loginForm) {
        elements.loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = elements.loginUsername.value;
            const password = elements.loginPassword.value;
            
            const authenticatedUser = authenticate(username, password);
            if (authenticatedUser) {
                state.loggedUser = authenticatedUser;
                localStorage.setItem("conquerx_logged_user", JSON.stringify(authenticatedUser));
                
                // Hide login screen
                if (elements.loginScreen) {
                    elements.loginScreen.style.display = "none";
                    elements.loginScreen.classList.add("hidden");
                }
                
                // Apply permissions and render
                applyUserPermissions();
                renderAll();
                showToast(`¡Bienvenido, ${authenticatedUser.name}!`);
            } else {
                if (elements.loginError) {
                    elements.loginError.style.display = "flex";
                    // Trigger shake animation again
                    elements.loginError.style.animation = "none";
                    elements.loginError.offsetHeight; // trigger reflow
                    elements.loginError.style.animation = null;
                }
            }
        });
    }

    // Logout Click Listener
    if (elements.btnLogout) {
        elements.btnLogout.addEventListener("click", () => {
            logout();
            showToast("Sesión cerrada");
        });
    }

    // Login Screen Cursor Glow Trail Effect (with LERP and Canvas Particles)
    if (elements.loginScreen) {
        const canvas = document.getElementById("login-canvas");
        let ctx = null;
        let particles = [];
        let lastX = 0;
        let lastY = 0;
        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let currentX = window.innerWidth / 2;
        let currentY = window.innerHeight / 2;
        let colorPhase = 0;
        let isLoopRunning = false;
        
        if (canvas) {
            ctx = canvas.getContext("2d");
            
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            
            window.addEventListener("resize", resizeCanvas);
            resizeCanvas();
        }
        
        // Particle classes for the trail
        class GasParticle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 0.8; // slower drift
                this.vy = (Math.random() - 0.5) * 0.8;
                this.size = Math.random() * 60 + 120; // very large (120px - 180px)
                this.color = color;
                this.alpha = 0.15; // lower opacity to prevent bright stacking hotspots
                this.decay = Math.random() * 0.005 + 0.005; // lives about 1.5 - 3 seconds
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= this.decay;
                // Keep size constant so it doesn't shrink into a tiny intense hotspot
            }
            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
                grad.addColorStop(0, this.color);
                grad.addColorStop(1, "rgba(0, 0, 0, 0)");
                ctx.fillStyle = grad;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }
        
        elements.loginScreen.addEventListener("mousemove", (e) => {
            const rect = elements.loginScreen.getBoundingClientRect();
            targetX = e.clientX - rect.left;
            targetY = e.clientY - rect.top;
            
            // Spawn particles based on distance moved
            const dx = targetX - lastX;
            const dy = targetY - lastY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist > 15) { // increased threshold to avoid too many overlapping particles
                colorPhase += 0.04;
                const ratio = (Math.sin(colorPhase) + 1) / 2;
                const r = Math.round(6 + (249 - 6) * ratio);
                const g = Math.round(182 + (115 - 182) * ratio);
                const b = Math.round(212 + (22 - 212) * ratio);
                const colorStr = `rgb(${r}, ${g}, ${b})`;
                
                // Spawn one aura particle
                particles.push(new GasParticle(targetX, targetY, colorStr));
                
                lastX = targetX;
                lastY = targetY;
            }
        });
        
        function animateGlow() {
            // Canvas updates
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw and filter particles
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
                particles = particles.filter(p => p.alpha > 0);
            }
            
            // Only continue loop if login screen is visible
            if (elements.loginScreen.style.display !== "none" && !elements.loginScreen.classList.contains("hidden")) {
                requestAnimationFrame(animateGlow);
            } else {
                isLoopRunning = false;
            }
        }
        
        // Start animation loop
        isLoopRunning = true;
        animateGlow();
        
        // Restart loop when logging out
        if (elements.btnLogout) {
            elements.btnLogout.addEventListener("click", () => {
                setTimeout(() => {
                    targetX = window.innerWidth / 2;
                    targetY = window.innerHeight / 2;
                    currentX = window.innerWidth / 2;
                    currentY = window.innerHeight / 2;
                    lastX = targetX;
                    lastY = targetY;
                    particles = [];
                    if (!isLoopRunning) {
                        isLoopRunning = true;
                        animateGlow();
                    }
                }, 100);
            });
        }
    }
}

function toggleTaskCompleted(closerId, taskId) {
    const closer = getCloserById(closerId);
    if (!closer) return;
    
    const task = closer.tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveState();
        renderAll(); // Update sidebar tasks list too
    }
}

function verifySelection() {
    const closer = getCloserById(state.selectedCloserId);
    if (!closer) {
        state.selectedCloserId = "jazmin";
        saveState();
    }
}

function deleteCloserTask(closerId, taskId) {
    const closer = getCloserById(closerId);
    if (!closer) return;
    
    closer.tasks = closer.tasks.filter(t => t.id !== taskId);
    saveState();
    showToast("Tarea eliminada");
    renderAll();
}

function deleteCloserTip(closerId, tipId) {
    const closer = getCloserById(closerId);
    if (!closer) return;
    
    closer.tips = closer.tips.filter(t => t.id !== tipId);
    saveState();
    showToast("Tip de mejora eliminado");
    renderCloserProfileTab();
}

function deleteCloserLog(closerId, logId) {
    const closer = getCloserById(closerId);
    if (!closer) return;
    
    closer.logs = closer.logs.filter(l => l.id !== logId);
    saveState();
    showToast("Nota de seguimiento eliminada");
    renderCloserProfileTab();
}

function deleteTeamFollowup(teamName, logId) {
    state.teamLogs[teamName] = state.teamLogs[teamName].filter(l => l.id !== logId);
    saveState();
    showToast("Seguimiento grupal eliminado");
    if (teamName === "languages") renderLanguagesTab();
    else if (teamName === "block") renderBlockTab();
}

// --- NEW FUNCTIONALITIES: MONTHLY HISTORICAL METRICS & TICKETS SYSTEM ---

function loadMetricsForSelectedMonth() {
    const selectedMonth = state.selectedMonth;
    
    // If it's the current month (June 2026), we use standard active states. Otherwise, we load historical snapshot.
    if (selectedMonth === "2026-06") {
        let currentClosers = localStorage.getItem("conquerx_closers");
        if (currentClosers) {
            try {
                state.closers = JSON.parse(currentClosers);
            } catch (e) {
                console.error("Error reloading current closers", e);
            }
        }
        let currentTeamLogs = localStorage.getItem("conquerx_team_logs");
        if (currentTeamLogs) {
            try {
                state.teamLogs = JSON.parse(currentTeamLogs);
            } catch (e) {
                console.error("Error reloading current team logs", e);
            }
        }
    } else {
        // Look up snapshot in history
        const snapshot = state.metricsHistory[selectedMonth];
        if (snapshot) {
            state.closers = JSON.parse(JSON.stringify(snapshot.closers));
            state.teamLogs = JSON.parse(JSON.stringify(snapshot.teamLogs));
        } else {
            // No history exists for that month yet. We seed it by making a copy of current closers (with simulated lower numbers for realism)
            const seedClosers = JSON.parse(localStorage.getItem("conquerx_closers") || JSON.stringify(DEFAULT_CLOSERS));
            const seedTeamLogs = JSON.parse(localStorage.getItem("conquerx_team_logs") || JSON.stringify(DEFAULT_TEAM_LOGS));
            
            // Apply scale factor depending on how far back the month is
            const scale = selectedMonth === "2026-05" ? 0.85 : (selectedMonth === "2026-04" ? 0.70 : 0.55);
            const scaleData = (list) => {
                list.forEach(c => {
                    c.cashCollected = Math.round(c.cashCollected * scale);
                    c.leadsContacted = Math.round(c.leadsContacted * scale);
                    c.leadsClosed = Math.max(0, Math.round(c.leadsClosed * scale));
                    c.callsWeekly = Math.max(0, Math.round(c.callsWeekly * scale));
                    c.callsMonthly = Math.max(0, Math.round(c.callsMonthly * scale));
                });
            };
            scaleData(seedClosers.languages);
            scaleData(seedClosers.block);

            state.metricsHistory[selectedMonth] = {
                closers: seedClosers,
                teamLogs: seedTeamLogs
            };
            state.closers = seedClosers;
            state.teamLogs = seedTeamLogs;
            saveState();
        }
    }
}

function renderTickets() {
    if (!elements.ticketsListContainer) return;
    
    // Read active status filter
    const activeBtn = elements.ticketFilterStatus.querySelector("button.active");
    const filterStatus = activeBtn ? activeBtn.dataset.status : "all";
    
    elements.ticketsListContainer.innerHTML = "";
    
    // Sort tickets: newest first
    const sorted = [...state.tickets].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const filtered = sorted.filter(t => {
        if (filterStatus === "all") return true;
        return t.status === filterStatus;
    });
    
    if (filtered.length === 0) {
        elements.ticketsListContainer.innerHTML = `<p class="text-muted text-center" style="padding: 24px 0;"><i class="fa-solid fa-folder-open" style="font-size: 24px; display: block; margin-bottom: 8px;"></i>No hay sugerencias en esta categoría.</p>`;
        return;
    }
    
    filtered.forEach(ticket => {
        const item = document.createElement("div");
        item.className = "ticket-card";
        
        let statusBadgeClass = "badge-secondary";
        let statusLabel = "Abierto";
        if (ticket.status === "progress") {
            statusBadgeClass = "badge-warning";
            statusLabel = "En Proceso";
        } else if (ticket.status === "resolved") {
            statusBadgeClass = "badge-success";
            statusLabel = "Resuelto";
        }
        
        let categoryLabel = "General";
        if (ticket.category === "ui") categoryLabel = "Interfaz (UI)";
        else if (ticket.category === "ux") categoryLabel = "Experiencia (UX)";
        else if (ticket.category === "math") categoryLabel = "Cálculos/Proyecciones";
        else if (ticket.category === "feature") categoryLabel = "Nueva Funcionalidad";
        else if (ticket.category === "bug") categoryLabel = "Error / Bug";
        
        const dateObj = new Date(ticket.date);
        const formattedDate = dateObj.toLocaleDateString("es-ES") + " " + dateObj.toLocaleTimeString("es-ES", {hour: '2-digit', minute:'2-digit'});
        
        // Show status update buttons ONLY if user is Ariel (role === "master")
        const isAriel = state.loggedUser && state.loggedUser.role === "master";
        
        let actionButtons = "";
        if (isAriel) {
            actionButtons = `
                <div class="ticket-actions">
                    ${ticket.status !== "progress" && ticket.status !== "resolved" ? `<button class="ticket-action-btn btn-progress" data-id="${ticket.id}"><i class="fa-solid fa-spinner"></i> En Proceso</button>` : ''}
                    ${ticket.status !== "resolved" ? `<button class="ticket-action-btn btn-resolve" data-id="${ticket.id}"><i class="fa-solid fa-check"></i> Listo</button>` : ''}
                    ${ticket.status === "resolved" ? `<button class="ticket-action-btn btn-reopen" data-id="${ticket.id}"><i class="fa-solid fa-rotate-left"></i> No Listo (Reabrir)</button>` : ''}
                    <button class="ticket-action-btn btn-delete" data-id="${ticket.id}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;
        }
        
        item.innerHTML = `
            <div class="ticket-header-area">
                <span class="ticket-title">${ticket.title}</span>
                <span class="badge ${statusBadgeClass}">${statusLabel}</span>
            </div>
            <p class="ticket-desc">${ticket.description}</p>
            <div class="ticket-meta" style="font-size: 10.5px; color: var(--text-muted);">
                <span>Categoría: <strong>${categoryLabel}</strong></span>
                <span>Reportado por: <strong>${ticket.createdBy}</strong></span>
                <span>${formattedDate}</span>
            </div>
            ${actionButtons}
        `;
        
        // Bind action buttons click handlers
        if (isAriel) {
            const btnProg = item.querySelector(".btn-progress");
            if (btnProg) {
                btnProg.addEventListener("click", () => updateTicketStatus(ticket.id, "progress"));
            }
            const btnRes = item.querySelector(".btn-resolve");
            if (btnRes) {
                btnRes.addEventListener("click", () => updateTicketStatus(ticket.id, "resolved"));
            }
            const btnReopen = item.querySelector(".btn-reopen");
            if (btnReopen) {
                btnReopen.addEventListener("click", () => updateTicketStatus(ticket.id, "open"));
            }
            const btnDel = item.querySelector(".btn-delete");
            if (btnDel) {
                btnDel.addEventListener("click", () => deleteTicket(ticket.id));
            }
        }
        
        elements.ticketsListContainer.appendChild(item);
    });
}

function updateTicketStatus(ticketId, newStatus) {
    if (!state.loggedUser || state.loggedUser.role !== "master") {
        showToast("Acción no permitida: Solo Ariel puede gestionar tickets.");
        return;
    }
    const ticket = state.tickets.find(t => t.id === ticketId);
    if (ticket) {
        ticket.status = newStatus;
        saveState();
        let statusText = "Abierto";
        if (newStatus === "progress") statusText = "En Proceso";
        else if (newStatus === "resolved") statusText = "Listo / Resuelto";
        showToast(`Ticket estado actualizado a: ${statusText}`);
        renderTickets();
    }
}

function deleteTicket(ticketId) {
    if (!state.loggedUser || state.loggedUser.role !== "master") {
        showToast("Acción no permitida: Solo Ariel puede gestionar tickets.");
        return;
    }
    state.tickets = state.tickets.filter(t => t.id !== ticketId);
    saveState();
    showToast("Ticket eliminado");
    renderTickets();
}

let toastTimeout = null;
function showToast(message) {
    elements.toastMessage.innerText = message;
    elements.toast.classList.remove("hidden");
    
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toastTimeout = setTimeout(() => {
        elements.toast.classList.add("hidden");
    }, 3000);
}

window.addEventListener("DOMContentLoaded", () => {
    init();
    verifySelection();
});


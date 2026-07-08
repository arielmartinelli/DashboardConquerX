-- =========================================================================
-- DashboardConquerX - Supabase Database Schema & Initial Seed Data
-- =========================================================================

-- 1. Limpieza previa (Drop tables if they exist)
DROP TABLE IF EXISTS team_logs CASCADE;
DROP TABLE IF EXISTS closer_logs CASCADE;
DROP TABLE IF EXISTS tips CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS general_tasks CASCADE;
DROP TABLE IF EXISTS tickets CASCADE;
DROP TABLE IF EXISTS closers CASCADE;

-- 2. Tabla para Closers
CREATE TABLE closers (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    team VARCHAR(50) NOT NULL CHECK (team IN ('languages', 'block')),
    leads_contacted INTEGER DEFAULT 0,
    leads_closed INTEGER DEFAULT 0,
    cash_collected INTEGER DEFAULT 0,
    target_cash INTEGER DEFAULT 25000,
    commission_rate INTEGER DEFAULT 5,
    avatar_url TEXT DEFAULT '',
    drive_url TEXT DEFAULT '',
    note TEXT DEFAULT '',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabla para Tareas Individuales de Closers
CREATE TABLE tasks (
    id VARCHAR(100) PRIMARY KEY,
    closer_id VARCHAR(100) REFERENCES closers(id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Tabla para Tips / Áreas de Mejora
CREATE TABLE tips (
    id VARCHAR(100) PRIMARY KEY,
    closer_id VARCHAR(100) REFERENCES closers(id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    category VARCHAR(100) DEFAULT 'general',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Tabla para Notas de Seguimiento Individual (Feedback e Hitos)
CREATE TABLE closer_logs (
    id VARCHAR(100) PRIMARY KEY,
    closer_id VARCHAR(100) REFERENCES closers(id) ON DELETE CASCADE,
    author VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    link TEXT DEFAULT '',
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Tabla para Mensajes / Seguimiento Grupal (Team followups)
CREATE TABLE team_logs (
    id VARCHAR(100) PRIMARY KEY,
    team VARCHAR(50) NOT NULL CHECK (team IN ('languages', 'block')),
    author VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Tabla para Tareas Generales de Sublíderes (Alerta de campanita)
CREATE TABLE general_tasks (
    id VARCHAR(100) PRIMARY KEY,
    text TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    assigned_by VARCHAR(100) DEFAULT 'jazmin',
    assigned_to VARCHAR(100) DEFAULT 'jazmin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 8. Tabla para Tickets / Sugerencias
CREATE TABLE tickets (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'open' CHECK (status IN ('open', 'progress', 'resolved')),
    created_by VARCHAR(100) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================================
-- DATOS DE INICIO (SEED DATA)
-- =========================================================================

-- Inserción de los 11 Closers Fijos (Con sus avatares reales)
INSERT INTO closers (id, name, team, leads_contacted, leads_closed, cash_collected, target_cash, commission_rate, avatar_url, drive_url, note) VALUES
('ariel-martinelli', 'Ariel Martinelli', 'languages', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/678165232_2281853229010844_6127097492774794344_n.jpg?ccb=11-4&oh=01_Q5Aa4wFRM0abSv0u8g3_LlZEdK9ac4wPch6QI_b3PesVeSa4jg&oe=6A535F38&_nc_sid=5e03e0&_nc_cat=107', '', 'Gran autoanálisis. Le gusta repasar llamadas grabadas.'),
('jazmin', 'Jazmín Merlo', 'languages', 0, 0, 0, 0, 5, 'https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/688439856_1688070622524540_6748855887472131216_n.jpg?ccb=11-4&oh=01_Q5Aa4wH90DUucBjqtGrrugrEfKXAXFqyZ7hnJB2pxAgP8ILScA&oe=6A53617E&_nc_sid=5e03e0&_nc_cat=106', '', 'Le entusiasma liderar reuniones de equipo y hacer roleplays de objeciones.'),
('agustina-soria', 'Agostina Soria', 'languages', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/588727318_4025474887585902_323612380752492272_n.jpg?ccb=11-4&oh=01_Q5Aa4wG9ElMJnHn8ls-wEFDG_WV0rdck2w0HXeaoHYYQd-arHQ&oe=6A538868&_nc_sid=5e03e0&_nc_cat=101', '', 'Prefiere explicaciones visuales de los pitches y guías breves.'),
('ariana', 'Ariana Almeyra', 'languages', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/596521480_1289854622946035_6304448030381604272_n.jpg?ccb=11-4&oh=01_Q5Aa4wGCD8UL3xmPLj0H0Cw3nUETR80Pwfq8hZ5x6FmwJGgwTA&oe=6A537B6A&_nc_sid=5e03e0&_nc_cat=105', '', 'Mejora con dinámicas tranquilas de roleplay de baja presión.'),
('fabrizio-fiamonti', 'Fabrizio Fioramonti', 'languages', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/533589079_1644620103394784_3694749836841144839_n.jpg?ccb=11-4&oh=01_Q5Aa4wEh-rEqga5SPXUpMp5kzzYvvBjI_Qq5oOhMssE-3b2rWQ&oe=6A537730&_nc_sid=5e03e0&_nc_cat=104', '', 'Muy receptivo al feedback de audio directo.'),
('candela', 'Candela Muñoz', 'languages', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/627732846_3963656823933658_4335757637615183192_n.jpg?ccb=11-4&oh=01_Q5Aa4wEPF0aOUYQN9as4k4lGqb3mmbw99v1PrN8WzBXaMBZbVw&oe=6A537B2B&_nc_sid=5e03e0&_nc_cat=101', '', 'Prefiere scripts estructurados y claros.'),
('jazmin-mercado', 'Jazmín Mercado', 'block', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/677720879_2138825050019683_2846522142277840500_n.jpg?ccb=11-4&oh=01_Q5Aa4wFg5YKrxV3vGYV0STF7skHRH5_z-70dUk0BfHlezOWikA&oe=6A5383DA&_nc_sid=5e03e0&_nc_cat=109', '', 'Receptiva a tips motivacionales de mentalidad antes de llamadas.'),
('tomas', 'Tomás Berta', 'block', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/534426233_1900704521333251_2130894660263538296_n.jpg?ccb=11-4&oh=01_Q5Aa4wHr0QcX2BHanWR2weiKFu-_YA5-YqCCHRZc0vpBF7QrcA&oe=6A537CA5&_nc_sid=5e03e0&_nc_cat=108', '', 'No le gusta los role play, le gusta analizar llamadas.'),
('lucas', 'Lucas Maurin', 'block', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/592525901_1782075785827760_4327018385295605418_n.jpg?ccb=11-4&oh=01_Q5Aa4wHmrFYczWvOxSD5BunfnDX4BvFk4NGGCUWIzLxI3dUK0Q&oe=6A538883&_nc_sid=5e03e0&_nc_cat=100', '', 'Prefiere roleplay de rebatido rápido uno a uno.'),
('julieta', 'Julieta Lavigne', 'block', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/556617719_850899184171510_2924287409895262791_n.jpg?ccb=11-4&oh=01_Q5Aa4wHIEIjegIbTEDhxN_gtmaj9YS4S-mO_Tv1Yq251SCh1Dw&oe=6A5375ED&_nc_sid=5e03e0&_nc_cat=108', '', 'Le gusta analizar llamadas ejemplares de otros closers.'),
('cristian', 'Cristian Prados', 'block', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/611645532_1503634584490957_4454895580024374210_n.jpg?ccb=11-4&oh=01_Q5Aa4wELH0rLfXjD43qar9IF-oE5X57DE6HOd1W23lD9s6VLqw&oe=6A53713F&_nc_sid=5e03e0&_nc_cat=105', '', 'Le gusta profundizar en aspectos técnicos de los bootcamps.');

-- Inserción de Tareas
INSERT INTO tasks (id, closer_id, text, completed) VALUES
('t1', 'jazmin', 'Llamar a leads calientes de la base de datos', TRUE),
('t2', 'jazmin', 'Preparar reporte semanal de métricas grupales', FALSE),
('t3', 'jazmin', 'Hacer roleplay de objeciones de costo con Fabrizio', FALSE),
('t4', 'candela', 'Revisar llamadas grabadas del lunes con Jazmín', TRUE),
('t5', 'candela', 'Llamar a cliente indeciso de inglés de ayer', FALSE),
('t6', 'ariel-martinelli', 'Seguimiento de ticket alto pendiente de pago', FALSE),
('t7', 'ariel-martinelli', 'Optimizar el script de rebatido para fin de mes', TRUE),
('t8', 'agustina-soria', 'Ver tips sobre manejo de precio en la carpeta compartida', TRUE),
('t9', 'agustina-soria', 'Enviar email con propuesta a grupo VIP', FALSE),
('t10', 'ariana', 'Llamar a base de re-contacto de meses anteriores', FALSE),
('t11', 'fabrizio-fiamonti', 'Roleplay individual sobre objeción ''tengo que consultarlo con mi socio/pareja''', FALSE),
('t12', 'candela', 'Limpiar y etiquetar leads en el CRM común', TRUE),
('tb1', 'tomas', 'Llamar a leads del nuevo bootcamp de backend', TRUE),
('tb2', 'tomas', 'Planificar la sesión de feedback grupal de Block', FALSE),
('tb3', 'cristian', 'Seguimiento al grupo de alumnos del webinar de programación', FALSE),
('tb4', 'lucas', 'Revisar grabaciones de llamadas de venta perdidas', TRUE),
('tb5', 'jazmin-mercado', 'Enviar links de pago de reserva a leads calientes', FALSE),
('tb6', 'julieta', 'Llamar a lista de espera de programación avanzada', TRUE);

-- Inserción de Tips
INSERT INTO tips (id, closer_id, text, category) VALUES
('tip1', 'jazmin', 'Mantén el control del marco conversacional. No dejes que el cliente guíe la llamada.', 'negociacion'),
('tip2', 'jazmin', 'Establecer urgencia real basada en los cupos del curso de inglés.', 'cierre'),
('tip3', 'candela', 'Presiona un poco más en la llamada de cierre cuando el dolor esté bien detectado.', 'objeciones'),
('tip4', 'ariel-martinelli', 'Excelente tono y ritmo en las llamadas. Sigue reforzando la urgencia al final.', 'cierre'),
('tip5', 'agustina-soria', 'Intenta conectar el dolor directamente con la transformación del programa.', 'dolor'),
('tip6', 'ariana', 'No temas hacer preguntas incómodas sobre la situación financiera del prospecto.', 'cualificacion'),
('tip7', 'fabrizio-fiamonti', 'Usa la técnica del silencio tras presentar el precio.', 'cierre'),
('tip8', 'candela', 'Asegúrate de confirmar que el prospecto asista con su tomador de decisiones.', 'cualificacion'),
('tip9', 'tomas', 'Enfócate en la salida laboral inmediata al vender programación.', 'cierre'),
('tip10', 'cristian', 'Destaca la validez del portafolio que construyen en el curso.', 'indagacion'),
('tip11', 'lucas', 'Usa más analogías sencillas al explicar conceptos de programación.', 'comunicacion'),
('tip12', 'jazmin-mercado', 'Asegura el compromiso de llamada puntual en la llamada de precalificación.', 'cierre'),
('tip13', 'julieta', 'Refuerza la garantía del programa para disminuir la fricción al final.', 'objeciones');

-- Inserción de Comentarios/Logs
INSERT INTO closer_logs (id, closer_id, author, text, date) VALUES
('l1', 'jazmin', 'Tomás', 'Excelente liderazgo en la sesión grupal de esta semana. Las llamadas de Jazmín muestran gran empatía.', '2026-06-20 10:30:00'),
('l2', 'jazmin', 'Jazmín', 'He estado reforzando el pitch inicial y logré rescatar 2 ventas difíciles.', '2026-06-22 18:15:00'),
('l3', 'candela', 'Jazmín', 'Buen volumen de llamadas. Falta pulir el manejo de la objeción ''no tengo tiempo''.', '2026-06-21 14:20:00'),
('l4', 'ariel-martinelli', 'Jazmín', 'Muestra métricas estables. Consistencia muy alta este mes.', '2026-06-23 11:05:00'),
('l5', 'agustina-soria', 'Jazmín', 'Agustina está mejorando su índice de cierre, pero necesita subir el volumen de llamadas diarias.', '2026-06-19 09:40:00'),
('l6', 'ariana', 'Jazmín', 'Se nota un poco de timidez en la etapa de indagación. Trabajando en su confianza.', '2026-06-24 16:00:00'),
('l7', 'fabrizio-fiamonti', 'Jazmín', 'Fabrizio cerró 3 ventas ayer con gran manejo de objeciones. Muy buen desempeño.', '2026-06-25 12:00:00'),
('l8', 'candela', 'Jazmín', 'Firme en su proceso. Mantiene un porcentaje de cierre cercano al 14%.', '2026-06-18 17:30:00'),
('l9', 'tomas', 'Jazmín', 'Tomás lidera con el ejemplo, logrando €20,000 en cash collected.', '2026-06-22 11:45:00'),
('l10', 'cristian', 'Tomás', 'Cristian tiene un gran entendimiento técnico de los cursos, lo cual ayuda mucho a generar confianza.', '2026-06-24 15:20:00'),
('l11', 'lucas', 'Tomás', 'Buen porcentaje de cierre, debe mejorar el volumen de agendados.', '2026-06-21 10:15:00'),
('l12', 'jazmin-mercado', 'Tomás', 'Le falta un poco más de energía al iniciar la llamada. Trabajaremos en su estado interno.', '2026-06-23 16:40:00'),
('l13', 'julieta', 'Tomás', '¡15% de tasa de cierre! Increíble trabajo de Julieta adaptándose a leads fríos.', '2026-06-25 11:10:00');

-- Inserción de Comentarios de Equipos
INSERT INTO team_logs (id, team, author, text, date) VALUES
('g1', 'languages', 'Jazmín', 'Esta semana nos enfocaremos en rebatir la objeción de falta de dinero con planes de pago alternativos. ¡Vamos por esos €100k como equipo!', '2026-06-23 09:00:00'),
('g2', 'languages', 'Tomás', 'Veo al equipo de Languages muy activo. Buen trabajo compartiendo los audios de sus ventas en el grupo común.', '2026-06-24 12:00:00'),
('g3', 'block', 'Tomás', 'El equipo de Block está fuerte en la venta consultiva de programación. Ajustemos el speech en la oferta de becas.', '2026-06-22 10:30:00'),
('g4', 'block', 'Jazmín', 'Felicidades a Julieta por sus últimos cierres. Demostró excelente manejo de leads escépticos.', '2026-06-24 18:00:00');

-- Inserción de Tareas Generales
INSERT INTO general_tasks (id, text, completed, assigned_by, assigned_to) VALUES
('gt_m1', 'Revisar KPI de ventas global', FALSE, 'manuel', 'manuel'),
('gt_m2', 'Alinear metas de facturación mensual', FALSE, 'manuel', 'manuel'),
('gt_j1', 'Revisar KPI de ventas de Languages', FALSE, 'jazmin', 'jazmin'),
('gt_j2', 'Alinear con closers sobre nuevos leads', FALSE, 'jazmin', 'jazmin'),
('gt_j3', 'Roleplay grupal de objeciones', FALSE, 'jazmin', 'jazmin'),
('gt_t1', 'Analizar llamadas grabadas de Block', FALSE, 'tomas', 'tomas'),
('gt_t2', 'Revisión semanal de leads con Cristian', FALSE, 'tomas', 'tomas');

-- Inserción de Tickets / Sugerencias
INSERT INTO tickets (id, title, description, category, status, created_by, date) VALUES
('t_d1', 'Corregir centrado de avatares', 'En algunas resoluciones móviles el avatar del closer se desfasa un poco hacia la izquierda.', 'ui', 'resolved', 'Jazmín', NOW() - INTERVAL '3 days'),
('t_d2', 'Agregar cálculo automático de comisión', 'Estaría genial que cuando se asigne un porcentaje de comisión se calcule el total ganado acumulado.', 'feature', 'progress', 'Tomás', NOW() - INTERVAL '1 day');

-- =========================================================================
-- DESACTIVACIÓN DE ROW LEVEL SECURITY (RLS)
-- =========================================================================
ALTER TABLE closers DISABLE ROW LEVEL SECURITY;
ALTER TABLE tasks DISABLE ROW LEVEL SECURITY;
ALTER TABLE tips DISABLE ROW LEVEL SECURITY;
ALTER TABLE closer_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE team_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE general_tasks DISABLE ROW LEVEL SECURITY;
ALTER TABLE tickets DISABLE ROW LEVEL SECURITY;

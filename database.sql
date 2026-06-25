-- =========================================================================
-- DashboardConquerX - Vercel Postgres Database Schema
-- =========================================================================

-- Drop tables if they exist (Clean start)
DROP TABLE IF EXISTS team_logs CASCADE;
DROP TABLE IF EXISTS closer_logs CASCADE;
DROP TABLE IF EXISTS tips CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS general_tasks CASCADE;
DROP TABLE IF EXISTS closers CASCADE;

-- 1. Table for Closers
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

-- 2. Table for Closer Individual Tasks
CREATE TABLE tasks (
    id VARCHAR(100) PRIMARY KEY,
    closer_id VARCHAR(100) REFERENCES closers(id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Table for Tips/Areas of Improvement
CREATE TABLE tips (
    id VARCHAR(100) PRIMARY KEY,
    closer_id VARCHAR(100) REFERENCES closers(id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    category VARCHAR(100) DEFAULT 'general',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Table for Individual Follow-up Logs (Feedbacks)
CREATE TABLE closer_logs (
    id VARCHAR(100) PRIMARY KEY,
    closer_id VARCHAR(100) REFERENCES closers(id) ON DELETE CASCADE,
    author VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    link TEXT DEFAULT '',
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Table for Team Follow-up Logs (Group logs)
CREATE TABLE team_logs (
    id VARCHAR(100) PRIMARY KEY,
    team VARCHAR(50) NOT NULL CHECK (team IN ('languages', 'block')),
    author VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Table for General Subleader Tasks
CREATE TABLE general_tasks (
    id VARCHAR(100) PRIMARY KEY,
    text TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================================
-- INITIAL SEED DATA
-- =========================================================================

-- Insert Closers (Languages)
INSERT INTO closers (id, name, team, leads_contacted, leads_closed, cash_collected, target_cash, commission_rate, avatar_url, drive_url, note) VALUES
('jazmin', 'Jazmín', 'languages', 85, 13, 19500, 25000, 7, 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150', 'https://drive.google.com/drive/folders/1A_B_C_Languages_Jasmine_Dummy', 'Le entusiasma liderar reuniones de equipo y hacer roleplays de objeciones.'),
('merlo', 'Merlo', 'languages', 70, 10, 15000, 20000, 5, 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', 'https://drive.google.com/drive/folders/1B_Merlo_Recorded_Calls', 'Prefiere llamadas individuales de feedback y análisis métrico.'),
('ariel-martinelli', 'Ariel Martinelli', 'languages', 90, 14, 21000, 20000, 5, '', 'https://drive.google.com/drive/folders/1C_ArielM_Calls', 'Gran autoanálisis. Le gusta repasar llamadas grabadas.'),
('agustina-soria', 'Agustina Soria', 'languages', 60, 8, 12000, 15000, 5, '', '', 'Prefiere explicaciones visuales de los pitches y guías breves.'),
('ariana', 'Ariana', 'languages', 50, 6, 9000, 15000, 5, '', '', 'Mejora con dinámicas tranquilas de roleplay de baja presión.'),
('fabrizio-fiamonti', 'Fabrizio Fiamonti', 'languages', 75, 11, 16500, 20000, 5, '', '', 'Muy receptivo al feedback de audio directo.'),
('candela', 'Candela', 'languages', 65, 9, 13500, 18000, 5, '', '', 'Prefiere scripts estructurados y claros.');

-- Insert Closers (Block)
INSERT INTO closers (id, name, team, leads_contacted, leads_closed, cash_collected, target_cash, commission_rate, avatar_url, drive_url, note) VALUES
('tomas', 'Tomás', 'block', 80, 13, 20000, 25000, 7, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150', 'https://drive.google.com/drive/folders/1D_Blogs_Tomas_Dummy_Key', 'No le gusta los role play, le gusta analizar llamadas.'),
('cristian', 'Cristian', 'block', 75, 10, 15000, 20000, 5, '', '', 'Le gusta profundizar en aspectos técnicos de los bootcamps.'),
('lucas', 'Lucas', 'block', 70, 9, 13500, 18000, 5, '', '', 'Prefiere roleplay de rebatido rápido uno a uno.'),
('nina', 'Nina', 'block', 65, 7, 10500, 15000, 5, '', '', 'Receptiva a tips motivacionales de mentalidad antes de llamadas.'),
('julieta', 'Julieta', 'block', 60, 9, 13500, 18000, 5, '', '', 'Le gusta analizar llamadas ejemplares de otros closers.');

-- Insert Tasks
INSERT INTO tasks (id, closer_id, text, completed) VALUES
('t1', 'jazmin', 'Llamar a leads calientes de la base de datos', TRUE),
('t2', 'jazmin', 'Preparar reporte semanal de métricas grupales', FALSE),
('t3', 'jazmin', 'Hacer roleplay de objeciones de costo con Fabrizio', FALSE),
('t4', 'merlo', 'Revisar llamadas grabadas del lunes con Jazmín', TRUE),
('t5', 'merlo', 'Llamar a cliente indeciso de inglés de ayer', FALSE),
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
('tb5', 'nina', 'Enviar links de pago de reserva a leads calientes', FALSE),
('tb6', 'julieta', 'Llamar a lista de espera de programación avanzada', TRUE);

-- Insert Tips
INSERT INTO tips (id, closer_id, text, category) VALUES
('tip1', 'jazmin', 'Mantén el control del marco conversacional. No dejes que el cliente guíe la llamada.', 'negociacion'),
('tip2', 'jazmin', 'Establecer urgencia real basada en los cupos del curso de inglés.', 'cierre'),
('tip3', 'merlo', 'Presiona un poco más en la llamada de cierre cuando el dolor esté bien detectado.', 'objeciones'),
('tip4', 'ariel-martinelli', 'Excelente tono y ritmo en las llamadas. Sigue reforzando la urgencia al final.', 'cierre'),
('tip5', 'agustina-soria', 'Intenta conectar el dolor directamente con la transformación del programa.', 'dolor'),
('tip6', 'ariana', 'No temas hacer preguntas incómodas sobre la situación financiera del prospecto.', 'cualificacion'),
('tip7', 'fabrizio-fiamonti', 'Usa la técnica del silencio tras presentar el precio.', 'cierre'),
('tip8', 'candela', 'Asegúrate de confirmar que el prospecto asista con su tomador de decisiones.', 'cualificacion'),
('tip9', 'tomas', 'Enfócate en la salida laboral inmediata al vender programación.', 'cierre'),
('tip10', 'cristian', 'Destaca la validez del portafolio que construyen en el curso.', 'indagacion'),
('tip11', 'lucas', 'Usa más analogías sencillas al explicar conceptos de programación.', 'comunicacion'),
('tip12', 'nina', 'Asegura el compromiso de llamada puntual en la llamada de precalificación.', 'cierre'),
('tip13', 'julieta', 'Refuerza la garantía del programa para disminuir la fricción al final.', 'objeciones');

-- Insert Closer Logs (Feedbacks)
INSERT INTO closer_logs (id, closer_id, author, text, date) VALUES
('l1', 'jazmin', 'Tomás', 'Excelente liderazgo en la sesión grupal de esta semana. Las llamadas de Jazmín muestran gran empatía.', '2026-06-20 10:30:00'),
('l2', 'jazmin', 'Jazmín', 'He estado reforzando el pitch inicial y logré rescatar 2 ventas difíciles.', '2026-06-22 18:15:00'),
('l3', 'merlo', 'Jazmín', 'Buen volumen de llamadas. Falta pulir el manejo de la objeción ''no tengo tiempo''.', '2026-06-21 14:20:00'),
('l4', 'ariel-martinelli', 'Jazmín', 'Muestra métricas estables. Consistencia muy alta este mes.', '2026-06-23 11:05:00'),
('l5', 'agustina-soria', 'Jazmín', 'Agustina está mejorando su índice de cierre, pero necesita subir el volumen de llamadas diarias.', '2026-06-19 09:40:00'),
('l6', 'ariana', 'Jazmín', 'Se nota un poco de timidez en la etapa de indagación. Trabajando en su confianza.', '2026-06-24 16:00:00'),
('l7', 'fabrizio-fiamonti', 'Jazmín', 'Fabrizio cerró 3 ventas ayer con gran manejo de objeciones. Muy buen desempeño.', '2026-06-25 12:00:00'),
('l8', 'candela', 'Jazmín', 'Firme en su proceso. Mantiene un porcentaje de cierre cercano al 14%.', '2026-06-18 17:30:00'),
('l9', 'tomas', 'Jazmín', 'Tomás lidera con el ejemplo, logrando €20,000 en cash collected.', '2026-06-22 11:45:00'),
('l10', 'cristian', 'Tomás', 'Cristian tiene un gran entendimiento técnico de los cursos, lo cual ayuda mucho a generar confianza.', '2026-06-24 15:20:00'),
('l11', 'lucas', 'Tomás', 'Buen porcentaje de cierre, debe mejorar el volumen de agendados.', '2026-06-21 10:15:00'),
('l12', 'nina', 'Tomás', 'Le falta un poco más de energía al iniciar la llamada. Trabajaremos en su estado interno.', '2026-06-23 16:40:00'),
('l13', 'julieta', 'Tomás', '¡15% de tasa de cierre! Increíble trabajo de Julieta adaptándose a leads fríos.', '2026-06-25 11:10:00');

-- Insert Team Logs
INSERT INTO team_logs (id, team, author, text, date) VALUES
('g1', 'languages', 'Jazmín', 'Esta semana nos enfocaremos en rebatir la objeción de falta de dinero con planes de pago alternativos. ¡Vamos por esos €100k como equipo!', '2026-06-23 09:00:00'),
('g2', 'languages', 'Tomás', 'Veo al equipo de Languages muy activo. Buen trabajo compartiendo los audios de sus ventas en el grupo común.', '2026-06-24 12:00:00'),
('g3', 'block', 'Tomás', 'El equipo de Block está fuerte en la venta consultiva de programación. Ajustemos el speech en la oferta de becas.', '2026-06-22 10:30:00'),
('g4', 'block', 'Jazmín', 'Felicidades a Julieta por sus últimos cierres. Demostró excelente manejo de leads escépticos.', '2026-06-24 18:00:00');

-- Insert General Tasks
INSERT INTO general_tasks (id, text, completed) VALUES
('gt1', 'Revisar KPI de ventas semanal', FALSE),
('gt2', 'Alinear con closers sobre nuevos leads', FALSE),
('gt3', 'Roleplay grupal de objeciones', FALSE);

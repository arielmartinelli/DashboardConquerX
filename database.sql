-- =========================================================================
-- DashboardConquerX - Supabase Database Schema & Empty Initial State
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
    created_by VARCHAR(100) DEFAULT 'Sublíder',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Tabla para Tips / Áreas de Mejora
CREATE TABLE tips (
    id VARCHAR(100) PRIMARY KEY,
    closer_id VARCHAR(100) REFERENCES closers(id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    category VARCHAR(100) DEFAULT 'general',
    created_by VARCHAR(100) DEFAULT 'Sublíder',
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
-- DATOS DE INICIO (SOLO LOS 11 CLOSERS EN 0)
-- =========================================================================

-- Inserción de los 11 Closers Fijos (Métricas inicializadas en 0)
INSERT INTO closers (id, name, team, leads_contacted, leads_closed, cash_collected, target_cash, commission_rate, avatar_url, drive_url, note) VALUES
('ariel-martinelli', 'Ariel Martinelli', 'languages', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/678165232_2281853229010844_6127097492774794344_n.jpg?ccb=11-4&oh=01_Q5Aa4wFRM0abSv0u8g3_LlZEdK9ac4wPch6QI_b3PesVeSa4jg&oe=6A535F38&_nc_sid=5e03e0&_nc_cat=107', '', ''),
('jazmin', 'Jazmín Merlo', 'languages', 0, 0, 0, 0, 5, 'https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/688439856_1688070622524540_6748855887472131216_n.jpg?ccb=11-4&oh=01_Q5Aa4wH90DUucBjqtGrrugrEfKXAXFqyZ7hnJB2pxAgP8ILScA&oe=6A53617E&_nc_sid=5e03e0&_nc_cat=106', '', ''),
('agustina-soria', 'Agostina Soria', 'languages', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/588727318_4025474887585902_323612380752492272_n.jpg?ccb=11-4&oh=01_Q5Aa4wG9ElMJnHn8ls-wEFDG_WV0rdck2w0HXeaoHYYQd-arHQ&oe=6A538868&_nc_sid=5e03e0&_nc_cat=101', '', ''),
('ariana', 'Ariana Almeyra', 'languages', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/596521480_1289854622946035_6304448030381604272_n.jpg?ccb=11-4&oh=01_Q5Aa4wGCD8UL3xmPLj0H0Cw3nUETR80Pwfq8hZ5x6FmwJGgwTA&oe=6A537B6A&_nc_sid=5e03e0&_nc_cat=105', '', ''),
('fabrizio-fiamonti', 'Fabrizio Fioramonti', 'languages', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/533589079_1644620103394784_3694749836841144839_n.jpg?ccb=11-4&oh=01_Q5Aa4wEh-rEqga5SPXUpMp5kzzYvvBjI_Qq5oOhMssE-3b2rWQ&oe=6A537730&_nc_sid=5e03e0&_nc_cat=104', '', ''),
('candela', 'Candela Muñoz', 'languages', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/627732846_3963656823933658_4335757637615183192_n.jpg?ccb=11-4&oh=01_Q5Aa4wEPF0aOUYQN9as4k4lGqb3mmbw99v1PrN8WzBXaMBZbVw&oe=6A537B2B&_nc_sid=5e03e0&_nc_cat=101', '', ''),
('jazmin-mercado', 'Jazmín Mercado', 'block', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/677720879_2138825050019683_2846522142277840500_n.jpg?ccb=11-4&oh=01_Q5Aa4wFg5YKrxV3vGYV0STF7skHRH5_z-70dUk0BfHlezOWikA&oe=6A5383DA&_nc_sid=5e03e0&_nc_cat=109', '', ''),
('tomas', 'Tomás Berta', 'block', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/534426233_1900704521333251_2130894660263538296_n.jpg?ccb=11-4&oh=01_Q5Aa4wHr0QcX2BHanWR2weiKFu-_YA5-YqCCHRZc0vpBF7QrcA&oe=6A537CA5&_nc_sid=5e03e0&_nc_cat=108', '', ''),
('lucas', 'Lucas Maurin', 'block', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/592525901_1782075785827760_4327018385295605418_n.jpg?ccb=11-4&oh=01_Q5Aa4wHmrFYczWvOxSD5BunfnDX4BvFk4NGGCUWIzLxI3dUK0Q&oe=6A538883&_nc_sid=5e03e0&_nc_cat=100', '', ''),
('julieta', 'Julieta Lavigne', 'block', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/556617719_850899184171510_2924287409895262791_n.jpg?ccb=11-4&oh=01_Q5Aa4wHIEIjegIbTEDhxN_gtmaj9YS4S-mO_Tv1Yq251SCh1Dw&oe=6A5375ED&_nc_sid=5e03e0&_nc_cat=108', '', ''),
('cristian', 'Cristian Prados', 'block', 0, 0, 0, 0, 5, 'https://media-scl3-1.cdn.whatsapp.net/v/t61.24694-24/611645532_1503634584490957_4454895580024374210_n.jpg?ccb=11-4&oh=01_Q5Aa4wELH0rLfXjD43qar9IF-oE5X57DE6HOd1W23lD9s6VLqw&oe=6A53713F&_nc_sid=5e03e0&_nc_cat=105', '', '');

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

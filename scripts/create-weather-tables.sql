-- Tabela para armazenar dados de cidades
CREATE TABLE IF NOT EXISTS cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  country VARCHAR(50) NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para armazenar dados meteorológicos atuais
CREATE TABLE IF NOT EXISTS current_weather (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES cities(id),
  temperature DECIMAL(5, 2) NOT NULL,
  condition VARCHAR(50) NOT NULL,
  feels_like DECIMAL(5, 2),
  humidity INTEGER,
  wind_speed DECIMAL(5, 2),
  recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para previsões
CREATE TABLE IF NOT EXISTS weather_forecast (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES cities(id),
  forecast_date DATE NOT NULL,
  high_temp DECIMAL(5, 2) NOT NULL,
  low_temp DECIMAL(5, 2) NOT NULL,
  condition VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir algumas cidades brasileiras
INSERT INTO cities (name, country, latitude, longitude) VALUES
('São Paulo', 'Brasil', -23.5505, -46.6333),
('Rio de Janeiro', 'Brasil', -22.9068, -43.1729),
('Brasília', 'Brasil', -15.7942, -47.8822),
('Salvador', 'Brasil', -12.9714, -38.5014),
('Fortaleza', 'Brasil', -3.7319, -38.5267);

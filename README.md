# Weather App - Teste Técnico Frontend

Aplicativo de previsão do tempo desenvolvido com React, Next.js e Ant Design.

## 🚀 Funcionalidades

### Obrigatórias ✅
- ✅ Componentização e reutilização de componentes
- ✅ Uso de biblioteca de ícones (@ant-design/icons)
- ✅ Organização de código (hooks, utils, types)
- ✅ Cobertura de testes unitários

### Opcionais ✨
- ✅ Tradução e troca de unidades de medida (°C/°F)
- ✅ Responsividade
- ✅ Dark/Light mode
- ✅ Geolocalização atual
- ✅ Seleção de diferentes cidades

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **Next.js 14** - Framework React
- **Ant Design** - Biblioteca de componentes UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Jest** - Testes unitários
- **React Testing Library** - Testes de componentes

## 📦 Instalação

\`\`\`bash
# Clone o repositório
git clone https://github.com/seu-usuario/weather-app-react-antd.git

# Entre no diretório
cd weather-app-react-antd

# Instale as dependências
npm install

# Execute o projeto
npm run dev
\`\`\`

## 🧪 Testes

\`\`\`bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch
\`\`\`

## 📱 Funcionalidades

### Interface Principal
- Exibição do clima atual com temperatura e condição
- Previsão de 7 dias
- Seletor de cidades brasileiras
- Toggle entre modo claro/escuro
- Conversão de unidades (°C/°F)

### Recursos Avançados
- Geolocalização para obter clima local
- Interface responsiva para mobile e desktop
- Animações suaves
- Tratamento de erros
- Loading states

## 🏗️ Estrutura do Projeto

\`\`\`
src/
├── app/                 # Páginas Next.js
├── components/          # Componentes React
├── hooks/              # Custom hooks
├── types/              # Definições TypeScript
├── utils/              # Funções utilitárias
├── __tests__/          # Testes unitários
└── scripts/            # Scripts SQL
\`\`\`

## 🎨 Design System

O projeto utiliza Ant Design como base, com customizações para:
- Cores do tema
- Bordas arredondadas
- Efeitos de glassmorphism
- Gradientes personalizados

## 📊 API de Dados

Atualmente utiliza dados mockados, mas está preparado para integração com APIs reais como:
- OpenWeatherMap
- WeatherAPI
- AccuWeather

## 🚀 Deploy

O projeto está configurado para deploy automático no Vercel:

\`\`\`bash
npm run build
\`\`\`

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

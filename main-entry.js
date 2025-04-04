// Versão minimalista e autossuficiente para Vercel
import React from 'react';
import ReactDOM from 'react-dom/client';

// Componente App minimalista inline
const App = () => {
  return React.createElement('div', { style: { 
    fontFamily: 'Inter, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center'
  }}, [
    React.createElement('h1', { style: { fontSize: '2rem', marginBottom: '1rem' } }, 'Ane Garcia - Criação de Sites'),
    React.createElement('p', { style: { fontSize: '1.25rem', marginBottom: '2rem' } }, 
      'Bem-vindo! Este é um site temporário. O app completo estará disponível em breve.'
    ),
    React.createElement('div', null, [
      React.createElement('a', { 
        href: 'mailto:contato@anegarcia.com', 
        style: { 
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#4F46E5',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.375rem',
          fontWeight: 'bold'
        } 
      }, 'Entre em contato')
    ])
  ]);
};

// Função de renderização
function renderApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Elemento root não encontrado!');
    return;
  }

  // Inicializar a aplicação
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      React.createElement(
        React.StrictMode,
        null,
        React.createElement(App, null)
      )
    );
  } catch (err) {
    console.error('Erro ao renderizar a aplicação:', err);
    // Fallback para renderização simples
    rootElement.innerHTML = `
      <div style="font-family: sans-serif; text-align: center; padding: 2rem;">
        <h1>Ane Garcia - Criação de Sites</h1>
        <p>Bem-vindo! Este é um site temporário. O app completo estará disponível em breve.</p>
        <div>
          <a href="mailto:contato@anegarcia.com" 
             style="display: inline-block; padding: 0.75rem 1.5rem; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 0.375rem; font-weight: bold;">
            Entre em contato
          </a>
        </div>
      </div>
    `;
  }
}

// Iniciar a renderização
document.addEventListener('DOMContentLoaded', renderApp);
renderApp(); 
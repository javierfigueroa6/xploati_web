import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          setIsVisible(prev => ({
            ...prev,
            [section]: rect.top <= window.innerHeight * 0.75
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">XPLORATI</div>
        <ul className="navbar-links">
          <li><a href="#section1">Inicio</a></li>
          <li><a href="#section2">Qué Hacemos</a></li>
          <li><a href="#section3">Servicios</a></li>
          <li><a href="#section4">Nuestra Propuesta</a></li>
          <li><a href="#section5">Cotiza con Nosotros</a></li>
          <li><a href="/quienes-somos">Quiénes Somos</a></li>
        </ul>
      </nav>

      <section id="section1" className={`hero ${isVisible.section1 ? 'visible' : ''}`}>
        <div className="dynamic-background">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="data-particle" style={{backgroundColor: 'var(--silver)'}}></div>
          ))}
        </div>
        <div className="hero-content">
          <h1 className="animate-on-enter main-title">Descubre el Potencial de tus Datos</h1>
          <p className="animate-on-enter subtitle">con XPLORATI</p>
          <div className="key-ideas">
            <div className="key-idea animate-on-enter">
              <h3>Análisis Avanzado</h3>
              <p>Descubre patrones ocultos en tus datos</p>
            </div>
            <div className="key-idea animate-on-enter">
              <h3>Inteligencia Artificial</h3>
              <p>Automatiza y optimiza tus procesos</p>
            </div>
            <div className="key-idea animate-on-enter">
              <h3>Visualización de Datos</h3>
              <p>Toma decisiones informadas con claridad</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section2" className={`what-we-do ${isVisible.section2 ? 'visible' : ''}`}>
        <h2 className="animate-on-enter">Qué Hacemos</h2>
        <p className="animate-on-enter">Transformamos datos en conocimientos accionables para impulsar el crecimiento de tu negocio.</p>
      </section>

      <section id="section3" className={`specifications ${isVisible.section3 ? 'visible' : ''}`}>
        <h2 className="animate-on-enter">Nuestros Servicios</h2>
        <ul>
          <li className="animate-on-enter">Análisis de Big Data</li>
          <li className="animate-on-enter">Inteligencia Artificial y Aprendizaje Automático</li>
          <li className="animate-on-enter">Visualización de Datos</li>
          <li className="animate-on-enter">Consultoría en Ciencia de Datos</li>
        </ul>
      </section>

      <section id="section4" className={`our-proposal ${isVisible.section4 ? 'visible' : ''}`}>
        <h2 className="animate-on-enter">Nuestra Propuesta</h2>
        <p className="animate-on-enter">En XPLORATI, ofrecemos soluciones de datos personalizadas que se adaptan a las necesidades únicas de tu empresa. Nuestra propuesta se basa en:</p>
        <ul>
          <li className="animate-on-enter">Innovación constante en tecnologías de datos</li>
          <li className="animate-on-enter">Enfoque centrado en el cliente y resultados medibles</li>
          <li className="animate-on-enter">Equipo de expertos en ciencia de datos y análisis avanzado</li>
          <li className="animate-on-enter">Soluciones escalables que crecen con tu negocio</li>
        </ul>
      </section>

      <section id="section5" className={`quote ${isVisible.section5 ? 'visible' : ''}`}>
        <h2 className="animate-on-enter">Cotiza con Nosotros</h2>
        <form className="animate-on-enter">
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Empresa" required />
          <input type="tel" placeholder="Teléfono" required />
          <input type="email" placeholder="Email" required />
          <select required>
            <option value="">Tamaño de la empresa</option>
            <option value="1-10">1-10 colaboradores</option>
            <option value="11-50">11-50 colaboradores</option>
            <option value="51-200">51-200 colaboradores</option>
            <option value="201-500">201-500 colaboradores</option>
            <option value="501+">Más de 500 colaboradores</option>
          </select>
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar Cotización</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 XPLORATI. Todos los derechos reservados.</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


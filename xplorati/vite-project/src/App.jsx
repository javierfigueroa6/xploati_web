import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </div>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false
  });

  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'];
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

      // Animate timeline items
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          item.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">XPLORATI</div>
        <ul className="navbar-links">
          <li><a href="#section1">Inicio</a></li>
          <li><a href="#section2">Qué Hacemos</a></li>
          <li><a href="#section3">Servicios</a></li>
          <li><a href="#section4">Nuestra Propuesta</a></li>
          <li><a href="#section5">Casos de Éxito</a></li>
          <li><a href="#section6">Últimas Noticias</a></li>
          <li><a href="#section7">Cotiza con Nosotros</a></li>
          <li><a href="/quienes-somos">Quiénes Somos</a></li>
        </ul>
      </nav>

      <section id="section1" className={`hero ${isVisible.section1 ? 'visible' : ''}`}>
        <div className="dynamic-background">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="data-particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 5}s`
            }}></div>
          ))}
        </div>
        <div className="hero-content">
          <h1 className="animate-on-enter main-title">Descubre el Potencial de tus Datos</h1>
          <p className="animate-on-enter subtitle">con XPLORATI</p>
          <div className="carousel-container animate-on-enter">
            <Slider {...carouselSettings}>
              <div className="carousel-item">
                <h3>Análisis Avanzado</h3>
                <p>Descubre patrones ocultos en tus datos</p>
              </div>
              <div className="carousel-item">
                <h3>Inteligencia Artificial</h3>
                <p>Automatiza y optimiza tus procesos</p>
              </div>
              <div className="carousel-item">
                <h3>Visualización de Datos</h3>
                <p>Toma decisiones informadas con claridad</p>
              </div>
              <div className="carousel-item">
                <h3>Machine Learning</h3>
                <p>Predice tendencias y comportamientos</p>
              </div>
              <div className="carousel-item">
                <h3>Big Data</h3>
                <p>Procesa y analiza grandes volúmenes de datos</p>
              </div>
            </Slider>
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
        <p className="animate-on-enter">En XPLORATI, ofrecemos un enfoque integral para transformar tus datos en valor. Nuestra propuesta se basa en un proceso estructurado:</p>
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Digitalización</h3>
              <p>Convertimos tus datos analógicos en formatos digitales accesibles y analizables.</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Modelamiento de BBDD</h3>
              <p>Diseñamos y optimizamos estructuras de bases de datos para un acceso y análisis eficiente.</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Análisis Descriptivo</h3>
              <p>Proporcionamos una visión clara de tus datos actuales e históricos.</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Análisis Predictivo</h3>
              <p>Utilizamos modelos avanzados para prever tendencias y comportamientos futuros.</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Inteligencia Artificial</h3>
              <p>Implementamos soluciones de IA para automatizar procesos y obtener insights profundos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section5" className={`case-studies ${isVisible.section5 ? 'visible' : ''}`}>
        <h2 className="animate-on-enter">Casos de Éxito</h2>
        <div className="case-studies-grid">
          <div className="case-study animate-on-enter">
            <h3>Empresa de Retail</h3>
            <p>Implementamos un sistema de predicción de demanda que aumentó las ventas en un 15%.</p>
          </div>
          <div className="case-study animate-on-enter">
            <h3>Institución Financiera</h3>
            <p>Desarrollamos un modelo de detección de fraude que redujo las pérdidas en un 30%.</p>
          </div>
          <div className="case-study animate-on-enter">
            <h3>Empresa de Logística</h3>
            <p>Optimizamos las rutas de entrega, reduciendo los costos operativos en un 20%.</p>
          </div>
        </div>
      </section>

      <section id="section6" className={`latest-news ${isVisible.section6 ? 'visible' : ''}`}>
        <h2 className="animate-on-enter">Últimas Noticias</h2>
        <div className="news-grid">
          <div className="news-item animate-on-enter">
            <h3>XPLORATI lanza nueva plataforma de IA</h3>
            <p>Nuestra última innovación promete revolucionar el análisis de datos empresariales.</p>
            <a href="#" className="read-more">Leer más</a>
          </div>
          <div className="news-item animate-on-enter">
            <h3>Webinar: El futuro del Big Data</h3>
            <p>Únete a nuestros expertos para explorar las tendencias emergentes en el análisis de datos.</p>
            <a href="#" className="read-more">Leer más</a>
          </div>
          <div className="news-item animate-on-enter">
            <h3>XPLORATI reconocida como líder en innovación</h3>
            <p>Nuestro compromiso con la excelencia nos posiciona a la vanguardia de la industria.</p>
            <a href="#" className="read-more">Leer más</a>
          </div>
        </div>
      </section>

      <section id="section7" className={`quote ${isVisible.section7 ? 'visible' : ''}`}>
        <h2 className="animate-on-enter">Cotiza con Nosotros</h2>
        <form className="animate-on-enter">
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Empresa" required />
          <input type="tel" placeholder="Teléfono" required />
          <input type="email" placeholder="Email" required />
          <select required>
            <option value="" disabled selected>Tamaño de la empresa</option>
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.2c0-3.3 4-3.3 4 0V16z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <div className="floating-cta">
        <button onClick={() => alert('¡Gracias por tu interés! Te contactaremos pronto para programar una demo.')}>
          Programa una Demo
        </button>
      </div>
    </div>
  );
}

export default App;


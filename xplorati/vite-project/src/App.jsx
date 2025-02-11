import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, Database, BarChart2,TrendingUp } from 'lucide-react';
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
    datosEnOrden: false,
    decideConDatos: false,
    quePasaManana: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
  
  });

  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['section1', 'section2', 'section3', 'datosEnOrden', 'decideConDatos',
      'quePasaManana', 'section4', 'section5', 'section6', 'section7'];
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
    dots: false,
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
        <div className="navbar-logo">VIEWER</div>
        <ul className="navbar-links">
          <li><a href="#section1">Inicio</a></li>
          <li><a href="#section2">Qué Hacemos</a></li>
          <li><a href="#section3">Servicios</a></li>
          <li><a href="#section4">Nuestra Propuesta</a></li>
          <li><a href="#section7">Contáctanos</a></li>
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
          <p className="animate-on-enter subtitle">con Viewer Analytics</p>
          <div className="carousel-container animate-on-enter">
            <Slider {...carouselSettings}>
              <div className="carousel-item">
                <h3>Modelamiento de Bases de Datos</h3>
                <p>Crea o mejora tu base de datos actual para optimizar tus procesos</p>
              </div>
              <div className="carousel-item">
                <h3>Base de Datos en la nube</h3>
                <p>Te ayudamos a migrar tu bases de datos a la nube para optar a mejores tecnologías y potenciar el valor de tus datos</p>
              </div>
              <div className="carousel-item">
                <h3>Reportes Automatizados</h3>
                <p>Creamos reportes periódicos que ayuden a tomar decisiones informadas</p>
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
        <div className="animated-background"></div>
        <h2 className="animate-on-enter">Nuestros Servicios</h2>
        <div className="services-container">
          <div className="service-card" style={{backgroundColor: 'var(--light-purple)'}}>
            <h3>Datos en Orden</h3>
            <ul>
              <li>Organización de datos</li>
              <li>Limpieza de información</li>
              <li>Estructuración de bases de datos</li>
              <li>Integración de fuentes diversas</li>
            </ul>
            <div className="service-icon">
              <Database size={48} />
            </div>
          </div>
          <div className="service-card" style={{backgroundColor: 'var(--medium-purple)'}}>
            <h3>Decide con Datos</h3>
            <ul>
              <li>Análisis predictivo</li>
              <li>Visualización de datos</li>
              <li>Informes personalizados</li>
              <li>Dashboards interactivos</li>
            </ul>
            <div className="service-icon">
              <BarChart2 size={48} />
            </div>
          </div>
          <div className="service-card" style={{backgroundColor: 'var(--dark-purple)'}}>
            <h3>Qué Pasa Mañana</h3>
            <ul>
              <li>Pronósticos de tendencias</li>
              <li>Modelado de escenarios</li>
              <li>Planificación estratégica</li>
              <li>Detección de oportunidades</li>
            </ul>
            <div className="service-icon">
              <TrendingUp size={48} />
            </div>
          </div>
        </div>
      </section>

      <section id="datosEnOrden" className={`service-detail light-purple ${isVisible.datosEnOrden ? 'visible' : ''}`}>
        <div className="service-detail-content">
          <div className="service-detail-image">
            <img src={'./public/fondo2.webp'} alt="Imagen 1" />
          </div>
          <div className="service-detail-text">
            <h2>Datos en Orden</h2>
            <p>En XPLORATI, entendemos que la base de cualquier análisis efectivo son datos bien organizados y estructurados. Nuestro servicio "Datos en Orden" se enfoca en:</p>
            <ul>
              <li>Organización meticulosa de tus datos para facilitar su análisis y uso.</li>
              <li>Limpieza exhaustiva de información para eliminar errores e inconsistencias.</li>
              <li>Estructuración eficiente de bases de datos para optimizar el rendimiento y la accesibilidad.</li>
              <li>Integración seamless de fuentes diversas para una visión holística de tu negocio.</li>
            </ul>
            <p>Con tus datos en orden, estarás listo para descubrir insights valiosos y tomar decisiones informadas que impulsarán tu negocio hacia adelante.</p>
          </div>
        </div>
      </section>

      <section id="decideConDatos" className={`service-detail medium-purple ${isVisible.decideConDatos ? 'visible' : ''}`}>
        <div className="service-detail-content">
          <div className="service-detail-text">
            <h2>Decide con Datos</h2>
            <p>En la era de la información, las decisiones basadas en datos son la clave del éxito empresarial. Nuestro servicio "Decide con Datos" te proporciona las herramientas y conocimientos para:</p>
            <ul>
              <li>Realizar análisis predictivos que te permitan anticiparte a las tendencias del mercado.</li>
              <li>Crear visualizaciones de datos impactantes que comuniquen información compleja de manera clara y concisa.</li>
              <li>Generar informes personalizados que se adapten a las necesidades específicas de tu negocio y tus stakeholders.</li>
              <li>Implementar dashboards interactivos que ofrezcan una visión en tiempo real del rendimiento de tu empresa.</li>
            </ul>
            <p>Con estos recursos a tu disposición, estarás equipado para tomar decisiones estratégicas que impulsen el crecimiento y la eficiencia de tu organización.</p>
          </div>
          <div className="service-detail-image">
            
          </div>
        </div>
      </section>

      <section id="quePasaManana" className={`service-detail dark-purple ${isVisible.quePasaManana ? 'visible' : ''}`}>
        <div className="service-detail-content">
          <div className="service-detail-image">
            
          </div>
          <div className="service-detail-text">
            <h2>Qué Pasa Mañana</h2>
            <p>En un mundo empresarial en constante cambio, la capacidad de anticiparse al futuro es invaluable. Nuestro servicio "Qué Pasa Mañana" utiliza técnicas avanzadas de análisis de datos para:</p>
            <ul>
              <li>Generar pronósticos precisos de tendencias que te ayudarán a planificar con antelación.</li>
              <li>Crear modelos de escenarios que te permitan evaluar diferentes estrategias y sus posibles resultados.</li>
              <li>Desarrollar planes estratégicos basados en datos que maximicen tus oportunidades de éxito.</li>
              <li>Identificar oportunidades emergentes en tu mercado antes que tus competidores.</li>
            </ul>
            <p>Con "Qué Pasa Mañana", no solo estarás preparado para el futuro, sino que estarás en posición de moldearlo a tu favor.</p>
          </div>
        </div>
      </section>




      <section id="section4" className={`our-proposal ${isVisible.section4 ? 'visible' : ''}`}>
        <h2 className="animate-on-enter">Nuestra Propuesta</h2>
        <p className="animate-on-enter">En Viewer Analytics, ofrecemos un enfoque integral para transformar tus datos en valor. Nuestra propuesta se basa en un proceso estructurado:</p>
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Datos en Orden</h3>
              <p>Convertimos tus datos analógicos en formatos digitales, accesibles y analizables.</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Decide con Datos</h3>
              <p>Toma decisiones informadas con tus datos, a través de análisis descriptivo y dashboards dinámicos.</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Qué pasa mañana</h3>
              <p>Implementa modelos avanzados de Machine Learning e IA para predecir tendencias, segmentar clientes, entre otros análisis.</p>
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

          

      <section id="section7" className={`quote ${isVisible.section7 ? 'visible' : ''}`}>
        <h2 className="animate-on-enter">CONVIERTETE EN UN VIEWER</h2>
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
          <p>&copy; 2025 VIEWER ANALYTICS. Todos los derechos reservados.</p>
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
          MES DE PRUEBA GRATIS
        </button>
      </div>
    </div>
  );
}

export default App;


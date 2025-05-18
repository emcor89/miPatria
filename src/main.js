import './styles.css';
import './input.css';


const app = document.getElementById('app');

const loadComponent = async (path) => {
  const res = await fetch(path);
  return await res.text();
};

const render = async () => {
  const header = await loadComponent('/src/components/Header.html');
  const hero = await loadComponent('/src/components/Hero.html');
  const servicios = await loadComponent('/src/components/Servicios.html');
  const mejores = await loadComponent('/src/components/Mejores.html');
  const nosotros = await loadComponent('/src/components/Nosotros.html');
  const contacto = await loadComponent('/src/components/Contacto.html');
  const footer = await loadComponent('/src/components/Footer.html');

  app.innerHTML = header + hero + servicios + mejores + nosotros + contacto + footer;
};

render();

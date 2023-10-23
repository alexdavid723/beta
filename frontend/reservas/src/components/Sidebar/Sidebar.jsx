import './sidebar.css'
const Home = () => {
    return (
        <div className="container">
        <div className="sidebar">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="content">
          {/* Contenido principal de la página */}
        </div>
      </div>
    );
}

export default Home;
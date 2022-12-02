
import me from "../assets/me.png"

function About() {
    return (
      <>
      <div className="aboutclass">
            <img width="300" src={me} alt=""/>
            <div>
                <h4 className="tituloAbout">Angel Ariel Piguave Bermello</h4>
                <p className="descriptionAbout">Ingeniero en sistemas con 4 años de experiencia en gestión de proyectos. Conocimientos de arquitectura, diseño e infraestructura de sistemas. Gracias a mi implementación de procesos de trabajo, he logrado reducir los tiempos de entrega de proyectos en un 10%. Busco utilizar mis conocimientos para optimizar los procesos de Serf Corp.</p>
            </div>
        </div>
      </>
    );
  }
  
  export default About;
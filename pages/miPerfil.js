import Layout from './components/Layout.js'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import {motion} from 'framer-motion'

export default function MiPerfil() {
    return (
      <Layout>
      <br/>
      <motion.div   initial= "hidden" animate="visible" variants={{
        hidden:{
          scale: 1.2,
          opacity: 0
        },
        visible:{
          scale: 1,
          opacity:1,
          transition:{
            delay: .7
          }
        }
      }} >
          <h1 className={styles.title}>Mi Perfil</h1>
        </motion.div>
      
        <div className="card border-light my-5 row g-0">
          <div className="row g-0">           
              <Image 
                src="/MitaPerfil.png"
                className="mx-4"
                alt="foto"
                width={300}
                height={320}
              />          
            <div className="col-md-9">
              <div className="card-body mx-4">
                <h3 className="card-title">Mariana Noemi Cervantes</h3>
                <br/>
                <h4 className="card-title">Técnica Universitaria en Programación</h4>
                <br/>
                <p className="card-text">
                  ¡Bienvenido a mi perfil! Me complace que hayas dedicado tiempo para conocerme. Mi enfoque se centra en la organización
                  y una sólida fuerza de voluntad. Mi meta es crecer profesionalmente y evolucionar en esta industria en constante cambio,
                  que siempre te desafía a aprender algo nuevo cada día. Busco oportunidades que me permitan alcanzar mis metas de desarrollo
                  en armonía con los objetivos de la empresa. ¡Explora mi portfolio para descubrir más sobre mi trayectoria y logros!
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </Layout>
    );
}
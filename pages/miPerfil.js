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
                src="/Mita.jpg"
                className="mx-4"
                alt="foto"
                width={250}
                height={320}
              />
          
            <div className="col-md-9">
              <div className="card-body mx-4">
                <h3 className="card-title">Mariana Noemi Cervantes</h3>
                <br/>
                <h4 className="card-title">Desarrollador Web</h4>
                <br/>
                <p className="card-text">
                  Es un gusto para mi que puedas estar viendo mi perfil. Como persona organizada y de gran fuerza de voluntad,
                  mi objetivo es poder crecer profesionalmente y evolucionar en esta industria que día a día te reta a saber algo nuevo, 
                  de tal manera es que busco oportunidades que me permitan lograrlo conjuntamente con los objetivos de la empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </Layout>
    );
}
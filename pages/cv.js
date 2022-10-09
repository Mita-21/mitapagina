import Layout from './components/Layout.js'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CV() {
    return (
      <Layout>
        <br />
        <motion.div   initial= "hidden" animate="visible" variants={{
        hidden:{
          scale: 1.2,
          opacity: 0
        },
        visible:{
          scale: 1,
          opacity:1,
          transition:{
            delay: .8
          }
        }
      }} >
          <h1 className={styles.title}>Curriculum Vitae</h1>
        </motion.div>
        <div className="container card border-light">
          <div className="row justify-content-md-center my-3">
            <Image
              src="/Curriculum.png"
              className=""
              alt="foto"
              width={550}
              height={640}
            />
           </div>
            <a
              className={styles.zoom}
              href="/Curriculum_MarianaCervantes.pdf"
              download="CurriculumMarianaCervantes"
            >
              <button
                type="button"
                className="btn btn-secondary container"
              >
              <h3 className={styles.zoom}> Descargar CV</h3>
               
              </button>
            </a>
          </div>
      
      </Layout>
    );
};

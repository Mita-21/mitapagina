import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <br />
        <header>
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
          <h1 className={styles.title}>Bienvenido a mi página</h1>
          </motion.div>
        </header>

        <main className={styles.main}>
          <div className={styles.grid}>
            <a href="./" className={styles.card}>
              <h2>Nextjs &rarr;</h2>
              <p>Te encuentras navegando en una página realizada con Nextjs</p>
            </a>

            <a href="https://github.com/Mita-21/React-Redux"  target={"new"} className={styles.card}>
              <h2>React Redux &rarr;</h2>
              <p>Implementación de React Redux en un proyecto simple pero conciso</p>
            </a>

            <a
              href="https://github.com/Mita-21/React-Context"  target={"new"} className={styles.card}
            >
              <h2>React Context &rarr;</h2>
              <p>Beneficios y claras diferencias de utilizar o no utilizar Context</p>
            </a>

            <a
              href="https://github.com/Mita-21/Testing-"  target={"new"} className={styles.card}
            >
              <h2>Testing &rarr;</h2>
              <p>
                Testeo de proyecto con la implementación de Jest y React Testing Library
              </p>
            </a>
          </div>
        </main>
      </div>
    </Layout>
  );
}

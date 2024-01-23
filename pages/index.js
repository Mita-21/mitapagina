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
          <h2 className={styles.title}>Mis Proyectos</h2>
          </motion.div>
        </header>

        <main className={styles.main}>
          <div className={styles.grid}>
            <a href="https://restocode.netlify.app/" target={"new"} className={styles.card}>
              <h2>Resto Code &rarr;</h2>
              <p>Esta página web constituye un sistema integral 
                para la gestión de un restaurante, desarrollado 
                mediante el stack MERN.</p>
            </a>

            <a href="https://rollingmerch.netlify.app"  target={"new"} className={styles.card}>
              <h2>Rolling Merch &rarr;</h2>
              <p>ECommerce diseñado para la compra de 
                merchandising de Rolling, desarrollado 
                con HTML, CSS, JavaScript y Bootstrap. </p>
            </a>

            <a
              href="https://fitwear-rolling.netlify.app/"  target={"new"} className={styles.card}
            >
              <h2>FitWear &rarr;</h2>
              <p>Sitio desarrollado para la venta de ropa deportiva, 
                utilizando HTML, CSS y Bootstrap para cumplir con los
                requisitos iniciales de diseño.</p>
            </a>

            <a
              href="https://app-de-cine.vercel.app/"  target={"new"} className={styles.card}
            >
              <h2>App de Cine &rarr;</h2>
              <p>
              Desarrollo de un desafío utilizando la tecnología React
              y la integración de datos provenientes de la API 
              de The Movie Database (TMDB).
              </p>
            </a>
          </div>
        </main>
      </div>
    </Layout>
  );
}

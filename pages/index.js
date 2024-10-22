import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from './components/Layout';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <br />
        <header>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1.2,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.7
                }
              }
            }}
          >
            <h2 className={styles.title}>Mis Proyectos</h2>
          </motion.div>
        </header>

        <main className={styles.main}>
          <div className={styles.grid}>
            {/* Fila 1 */}
            <div className={styles.row}>
              <a href="https://rollinghealth.netlify.app" target="new" className={styles.card}>
                <h2>Rolling Health &rarr;</h2>
                <p className="pb-2">
                  Web diseñada para la gestión de citas de pacientes, la organización de agendas para médicos y personal administrativo,
                  desarrollada con React y Zustand.
                </p>
                <Image src="/health.png" alt="Captura de pantalla de Rolling Health" width={500} height={300} />
              </a>

              <a href="https://restocode.netlify.app/" target={"new"} className={styles.card}>
                <h2>Resto Code &rarr;</h2>
                <p className="pb-2">Esta página web constituye un sistema integral 
                  para la gestión de un restaurante, desarrollado 
                  mediante el stack MERN.</p>
                  <br></br>
                <Image src="/restocode.png" alt="Captura de pantalla de Resto Code" width={500} height={300} />
              </a>

              <a href="https://rollingmerch.netlify.app" target={"new"} className={styles.card}>
                <h2>Rolling Merch &rarr;</h2>
                <p className="pb-2">ECommerce diseñado para la compra de 
                  merchandising de Rolling, desarrollado 
                  con HTML, CSS, JavaScript y Bootstrap.</p>
                  <br></br>
                <Image src="/merch.png" alt="Captura de pantalla de Rolling Merch" width={500} height={300} />
              </a>
            </div>

            {/* Fila 2 */}
            <div className={styles.row}>
              <a href="https://fitwear-rolling.netlify.app/" target={"new"} className={styles.card}>
                <h2>FitWear &rarr;</h2>
                <p className="pb-2">Sitio desarrollado para la venta de ropa deportiva, 
                  utilizando HTML, CSS y Bootstrap para cumplir con los
                  requisitos iniciales de diseño.</p>
                <Image src="/fitwear.png" alt="Captura de pantalla de FitWear" width={500} height={300} />
              </a>

              <a href="https://app-de-cine.vercel.app/" target={"new"} className={styles.card}>
                <h2>App de Cine &rarr;</h2>
                <p className="pb-2">
                  Desarrollo de un desafío utilizando la tecnología React
                  y la integración de datos provenientes de la API 
                  de The Movie Database (TMDB).
                </p>
                <Image src="/appcine.png" alt="Captura de pantalla de App de Cine" width={500} height={300} />
              </a>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

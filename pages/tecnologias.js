/* eslint-disable @next/next/no-img-element */
import Layout from './components/Layout.js'
import styles from '../styles/Home.module.css'
import Image from 'next';
import { motion } from "framer-motion"


export default function Tecnologías() {
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
     <h1 className={styles.title}>Tecnologías</h1>
      </motion.div>
      
      <div className={styles.main}>
        <div className={styles.gridTecnos}>
        
        <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/html.png' alt='h5'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/css.png' alt='c3'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/javascript.png' alt='js'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/bootstrap.png' alt='bt'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/react.png' alt='rct'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/nextjs.png' alt='njs'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/node.png' alt='nd'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/express.png' alt='xp'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/jest.png' alt='jt'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/mysql.png' alt='mql'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/github.png' alt='gh'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/git.png' alt='gt'/>
    </motion.div>
                     
          </div>
         </div>

   
    </Layout>
    );
}

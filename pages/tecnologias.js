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
    ><img src='/html.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/css.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/javascript.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/bootstrap.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/react.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/nextjs.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/node.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/express.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/jest.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/mysql.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/github.png'/>
    </motion.div>
    <motion.div className={styles.tecnos}
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><img src='/git.png'/>
    </motion.div>
                     
          </div>
         </div>

   
    </Layout>
    );
}

/* eslint-disable @next/next/no-img-element */
import Layout from "./components/Layout.js";
import styles from "../styles/Home.module.css";
import Image from "next";
import { motion } from "framer-motion";

export default function Tecnologías() {

 const tecnos = ["/html.png","/css.png", "/javascript.png","/bootstrap.png","/react.png", "/nextjs.png", "/node.png","/express.png", "/jest.png", "/mysql.png", "/github.png", "/git.png"];

  return (
    <Layout>
      <br />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 1.2,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.7,
            },
          },
        }}
      >
        <h1 className={styles.title}>Tecnologías</h1>
      </motion.div>

      <div className={styles.main}>
        <div className={styles.gridTecnos}>
        {tecnos.map ((foto, i) => (
          <motion.div
            className={styles.tecnos}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          >
            <img src={foto} alt="tecnologías" />
          </motion.div>))}     
         
        </div>
      </div>
    </Layout>
  );
}

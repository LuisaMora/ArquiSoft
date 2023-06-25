
import styles from '@/styles/Login.module.css'
import Link from 'next/link'
import axios from 'axios'
import { useEffect } from 'react'

import { Layout } from '@/shared/components/Layout'

import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  const handleSubmit=()=>{
    let data={
        idUsuario: 0,
        nombre: document.querySelector('#nombre').value,
        correo:document.querySelector('#correo').value,
        contraseña: document.querySelector('#contraseña').value
     }
   axios.post("/api/usuarios/usuarios",data).then((response)=>{
    console.log(response);
    
   }).catch((error)=>{
    console.log(error);
   })
 }

  return (
    <div className={styles.container}>
      <div className={styles.imagen}>
      <img src="images/dinosaur.jpg"/>
      </div>
            <div className={styles.form}>
            <h1 className={styles.titulo}>BIENVENIDO</h1>
            <form className={styles.formulario} action="/send-data-here" method="post">       

                <label className={styles.labels}>Correo electronico</label><br></br>
                <input className={styles.captura} type="text" /><br></br>

                <label className={styles.labels}>Contraseña</label><br></br>
                <input className={styles.captura}type="password"/><br></br>

                <div className={styles.forgotContainer}>
                    <a href='#' className={styles.forgot}>¿Has olvidado tu contraseña?</a><br></br>
                </div>
                
                <div className={styles.posicionBoton}>
                    <button className={styles.botonLI} type="submit">INGRESAR</button><br></br>
                    <button className={styles.botonSI} type="submit" >REGISTRAR</button><br></br>
                </div>
            </form>
            </div>
        </div>
  )
}
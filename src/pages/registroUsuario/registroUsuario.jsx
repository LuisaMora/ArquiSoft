import styles from '@/styles/RegistroUsuario.module.css'
import Link from 'next/link'
import axios from 'axios'

export default function registroUsuario() {



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
            <div className={styles.form}>
            <h1 className={styles.titulo}>REGISTRO USUARIO</h1>
            <form className={styles.formulario} method="post">       
                
                <label className={styles.labels}>Nombre completo</label><br></br>
                <input className={styles.captura} id = "nombre" required type="text" /><br></br>

                <label className={styles.labels}>Correo electronico</label><br></br>
                <input className={styles.captura} id='correo' required type="text" /><br></br>

                <label className={styles.labels}>Contraseña</label><br></br>
                <input className={styles.captura} id='contraseña' required type="password"/><br></br>
                
                <div className={styles.posicionBoton}>
                    <button className={styles.botonRegistrar} type="submit" onClick={handleSubmit} >REGISTRAR</button><br></br>
                </div>
            </form>
            </div>
        </div>
    )
  }
  
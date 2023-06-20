import styles from '@/styles/RegistroUsuario.module.css'
export default function UpdateCategoriesPage() {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
            <h1 className={styles.titulo}>REGISTRO USUARIO</h1>
            <form className={styles.formulario} action="/send-data-here" method="post">       
                
                <label className={styles.labels}>Nombre completo</label><br></br>
                <input className={styles.captura} type="text" /><br></br>

                <label className={styles.labels}>Correo electronico</label><br></br>
                <input className={styles.captura} type="text" /><br></br>

                <label className={styles.labels}>Contraseña</label><br></br>
                <input className={styles.captura}type="password"/><br></br>
                
                <div className={styles.posicionBoton}>
                    <button className={styles.botonRegistrar} type="submit">REGISTRAR</button><br></br>
                </div>
            </form>
            </div>
        </div>
    )
  }
  
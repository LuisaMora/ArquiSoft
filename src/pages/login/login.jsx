import styles from '@/styles/Login.module.css'
export default function UpdateCategoriesPage() {
    return (
        <div className={styles.container}>
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
  
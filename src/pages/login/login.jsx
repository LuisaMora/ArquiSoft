import styles from '@/styles/Login.module.css'
export default function UpdateCategoriesPage() {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
            <h1 className={styles.titulo}>LOGIN</h1>
            <form className={styles.formulario} action="/send-data-here" method="post">       

                <label className={styles.labels}>Email</label><br></br>
                <input className={styles.captura} type="text" /><br></br>

                <label className={styles.labels}>Password</label><br></br>
                <input className={styles.captura}type="password"/><br></br>

                <div className={styles.forgotContainer}>
                    <a href='#' className={styles.forgot}>Has olvidado tu contrasena?</a><br></br>
                </div>
                
                <div className={styles.posicionBoton}>
                    <button className={styles.botonLI} type="submit">LOG IN</button><br></br>
                    <button className={styles.botonSI} type="submit">SIGN IN</button><br></br>
                </div>
            </form>
            </div>
        </div>
    )
  }
  
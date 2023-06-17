import styles from '@/styles/Egreso.module.css'
export default function UpdateCategoriesPage() {
    return (
      <div className={styles.titulo}>
        <div className={styles.form}>
         <h1>Registro Movimiento</h1>       
          <form className={styles.formu} action="/send-data-here" method="post">
            <label className={styles.labels}>Descripcion</label><br></br>
            <input className={styles.mo} type="text" /><br></br>
            <label className={styles.labels}>Monto</label><br></br>
            <input className={styles.mo}type="text"/><br></br>
            <label>Fecha</label><br></br>
            <input className={styles.mo} type="text" /><br></br>
            <label>Descuento</label><br></br>
            <input className={styles.mo} type="text" /><br></br>
            <input type="checkbox" id="cbox2" value="second_checkbox"></input>
            <label>Ingreso</label>
            <input type="checkbox" id="cbox2" value="second_checkbox"></input>
            <label>Gasto</label><br></br>
            <button  className={styles.botonCancelar} type="submit">Cancelar</button><br></br>
            <button className={styles.botonAceptar} type="submit">Registrar</button><br></br>
          </form>
        </div>
      </div>
    )
  }
  
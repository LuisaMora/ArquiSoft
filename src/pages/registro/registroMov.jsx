import styles from '@/styles/Egreso.module.css'
import axios from 'axios'
export default function UpdateCategoriesPage() {

  const handleSubmit=()=>{

    let data={
        idMovimiento: 0,
        descripcion: document.querySelector('#descripcion').value,
        monto:document.querySelector('#monto').value,
        fecha: document.querySelector('#fecha').value,
        descuento: document.querySelector('#descuento').value,
        tipo: "tipox",
        idUsuario: 1,
     }
   axios.post("/api/movimientos/movimientos",data).then((response)=>{
    console.log(response);
    
   }).catch((error)=>{
    console.log(error);
   })
 }

    return (
      
        <div className={styles.form}>
          <h1 className={styles.titulo}>Registro Movimiento</h1>
          <form className={styles.formu} method="post">       

            <label className={styles.labels}>Descripcion</label><br></br>
            <input className={styles.mo} id='descripcion' type="text" /><br></br>

            <label className={styles.labels}>Monto</label><br></br>
            <input className={styles.mo} id='monto' type="int"/><br></br>

            <label>Fecha</label><br></br>
            <input className={styles.mo} id='fecha' type="date" /><br></br>

            <label>Descuento</label><br></br>
            <input className={styles.mo} id='descuento' type="text" /><br></br>

          <div className={styles.checks}>
            <input type="checkbox" id="cbox2" value="second_checkbox"></input>
            <label>Ingreso</label>
            <input className={styles.cajas} type="checkbox" id="cbox2" value="second_checkbox"></input>
            <label>Gasto</label>
          </div>
            
            <div className={styles.posicionBoton}>
            <button className={styles.boton} type="submit" >Cancelar</button><br></br>
            <button className={styles.boton} type="submit"onClick={handleSubmit}>Registrar</button><br></br>
            </div>
          </form>
        </div>
    )
  }
  
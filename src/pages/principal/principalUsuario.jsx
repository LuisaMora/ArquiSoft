import styles from '@/styles/Principal.module.css'
import Image from 'next/image'
import logo from '../../image/logo-02.png'
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function UpdateCategoriesPage() {
    const [dat,setDat]=useState([[]])

    
    useEffect(()=>{
      const id=1
      axios.get('/api/movimientos/movimientosget',id)
              .then(function (response) {
                setDat(response.data.result)
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
              .finally(function () {
                // always executed
                
              });  
    },[])
   
   

    const [nombre,setnombre]=("")
    return (
            <div>
                <h2 className={styles.tituloInicio}>Reporte total</h2>
                <div className={styles.listaInEg}>
                    <ul className={styles.ul}>
                {
                    
                    dat.map((da) =>( 

                        <li className={styles.li}><p>{da.descripcion}</p> <p className={styles.monto}>{da.monto} Bs</p> <p className={styles.fecha}>{da.fecha}</p></li>
                    ))
                }
                    </ul>
                </div>
                <div className={styles.ladoDerecho}>
                    <div className={styles.usuarioInfoCont}>
                        
                        <div className={styles.usuarioInfo}>
                        <Image className={styles.imagen}
                        src={logo}
                        width={250}
                        height={250}>   
                        </Image>
                        <p className={styles.info}>{nombre}</p>
                        <p className={styles.info}>Usuariocorreo@gmail.com</p>
                        </div>
                    </div>

                    <div className={styles.saldoBoton}>
                        <p className={styles.saldo}>Saldo: 450 Bs</p>
                        <a href="/registro/registroMov"> <button className={styles.registrarMovimiento}  >Registrar movimiento</button></a>
                    </div>
                </div>
            </div>
        )
    }
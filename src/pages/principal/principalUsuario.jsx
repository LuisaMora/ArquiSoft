import styles from '@/styles/Principal.module.css'
import Image from 'next/image'
import logo from '../../image/logo-02.png'
export default function UpdateCategoriesPage() {
    return (
            <div>
                <h2 className={styles.tituloInicio}>Reporte total</h2>
                <div className={styles.listaInEg}>
                    <ul className={styles.ul}>
                    <li className={styles.li}><p>Gasto</p> <p className={styles.monto}>35 Bs</p> <p className={styles.fecha}>12/06/2023</p></li>
                    <li className={styles.li}><p>Ingreso</p> <p className={styles.monto}>15 Bs</p> <p className={styles.fecha}>01/06/2023</p></li>
                    <li className={styles.li}><p>Gasto</p> <p className={styles.monto}>20 Bs</p> <p className={styles.fecha}>25/05/2023</p></li>
                    <li className={styles.li}><p>Gasto</p> <p className={styles.monto}>55 Bs</p> <p className={styles.fecha}>22/05/2023</p></li>
                    <li className={styles.li}><p>Ingreso</p> <p className={styles.monto}>350 Bs</p> <p className={styles.fecha}>05/05/2023</p></li>
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
                        <p className={styles.info}>Nombre usuario</p>
                        <p className={styles.info}>Usuariocorreo@gmail.com</p>
                        </div>
                    </div>

                    <div className={styles.saldoBoton}>
                        <p className={styles.saldo}>Saldo: 450 Bs</p>
                        <button className={styles.registrarMovimiento}>Registrar movimiento</button>
                    </div>
                </div>
            </div>
        )
    }
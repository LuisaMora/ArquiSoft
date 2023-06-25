
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
    <h1>Web</h1>
  )
}
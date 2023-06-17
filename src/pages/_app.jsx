

import { useEffect } from 'react'

import { Layout } from '@/shared/components/Layout'

import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
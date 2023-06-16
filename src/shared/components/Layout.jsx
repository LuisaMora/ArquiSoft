import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container pt-2">{children}</main>
    </>
  )
}

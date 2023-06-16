import Image from 'next/image'

import marketImg from '../assets/images/market.jpg'

export default function HomePage() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Tienda Online</h3>
      <Image
        className="mt-2"
        src={marketImg}
        width={640}
        height={480}
        alt="Pasillo de micromercado"
      />
    </div>
  )
}

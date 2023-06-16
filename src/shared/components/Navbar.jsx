import Link from 'next/link'

import { Route } from '../models/Route'

const routes = [
  new Route({ title: 'Inicio', path: '/' }),
  new Route({
    title: 'Categorias',
    path: '/categories',
    subRoutes: [
      new Route({ title: 'Actualizar', path: '/update' }),
      new Route({ title: 'Lista de categorias', path: '/list' })
    ]
  }),
  new Route({
    title: 'Productos',
    path: '/products',
    subRoutes: [
      new Route({ title: 'Actualizar', path: '/update' })
    ]
  })
]

const NavbarItem = ({ route = new Route({ title: 'Inicio', path: '/' }) }) => (
  <li className="nav-item">
    <Link className="nav-link" href={route.path}>
      {route.title}
    </Link>
  </li>
)

const NavbarItemDropdown = ({ route = new Route({ title: '' }) }) => (
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false">
      {route.title}
    </a>
    <ul className="dropdown-menu">
      {route.subRoutes.map((subRoute, index) => (
        <li key={`sub-route-${subRoute.path}`}>
          <Link
            className="dropdown-item"
            href={`${route.path}${subRoute.path}`}>
            {subRoute.title}
          </Link>
        </li>
      ))}
    </ul>
  </li>
)

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Tienda Online
        </Link>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {routes.map((route) =>
            route.subRoutes.length > 0 ? (
              <NavbarItemDropdown key={`route-${route.path}`} route={route} />
            ) : (
              <NavbarItem key={`route-${route.path}`} route={route} />
            )
          )}
        </ul>
      </div>
    </nav>
  )
}

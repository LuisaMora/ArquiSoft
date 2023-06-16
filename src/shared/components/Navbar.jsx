import Link from 'next/link'

import { Route } from '../models/Route'

const routes = [
  new Route({
    title: 'Reporte Gastos',
    path: '/reporte',
    subRoutes: [
      new Route({ title: 'Reporte Ingreso', path: '/repIngreso' }),
      new Route({ title: 'Reporte Egresos', path: '/repEgreso' })
    ]
  }),
  new Route({
    title: 'Registro',
    path: '/registro',
    subRoutes: [
      new Route({ title: 'Ingreso', path: '/ingreso' }),
      new Route({ title: 'Egreso', path: '/egreso' }),
    ]
  }),
  new Route({ title: 'Log Out', path: '/' }),
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
        <h1>RG </h1>

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

export class Route {
    constructor({ title, path = '', subRoutes = [] }) {
      this.title = title
      this.path = path
      this.subRoutes = subRoutes
    }
  }
  
// router.js
class Router {
  constructor() {
    this.routes = {};
  }

  get(path, handler) {
    this._registerRoute('GET', path, handler);
  }

  post(path, handler) {
    this._registerRoute('POST', path, handler);
  }

  _registerRoute(method, path, handler) {
    if (!this.routes[path]) {
      this.routes[path] = {};
    }
    this.routes[path][method] = handler;
  }

  findRoute(req) {
    const method = req.method;
    const url = req.url.split('?')[0];
    const route = this.routes[url] && this.routes[url][method];
    return route;
  }
}

module.exports = Router;


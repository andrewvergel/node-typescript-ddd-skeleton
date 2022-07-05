import { Router } from 'express';
import glob from 'glob';

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

export function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + '/**/*.route.*');
  routes.map((route) => register(route, router));
}

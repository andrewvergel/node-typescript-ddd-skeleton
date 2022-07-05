import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import RootController from '../controllers/RootGetController';

export const register = (router: Router) => {
  const controllerRoot: RootController = container.get(
    'Apps.mooc.controllers.RootGetController'
  );
  router.get('/', (req: Request, res: Response) =>
    controllerRoot.run(req, res)
  );
};

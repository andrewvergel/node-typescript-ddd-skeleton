import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import StatusController from '../controllers/StatusGetController';

export const register = (router: Router) => {
  const controllerStatus: StatusController = container.get(
    'Apps.mooc.controllers.StatusGetController'
  );
  router.get('/status', (req: Request, res: Response) =>
    controllerStatus.run(req, res)
  );
};

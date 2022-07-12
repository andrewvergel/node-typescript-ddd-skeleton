import { Router } from 'express';
import StatusControllerRepository from '../controllers/StatusControllerRepository';
import { container, injectable } from 'tsyringe';
@injectable()
export default class StatusRoute {
  register(router: Router) {
    router.get('/status', (req, res) => container.resolve(StatusControllerRepository).run(req, res));
  }
}

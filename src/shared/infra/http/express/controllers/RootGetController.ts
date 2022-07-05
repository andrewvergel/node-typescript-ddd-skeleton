import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

export default class RootGetController implements Controller {
  async run(req: Request, res: Response) {
    res.status(httpStatus.OK).json({ a: '' });
  }
}

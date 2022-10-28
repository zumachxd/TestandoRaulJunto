import { Request, Response } from 'express';
import TeamsService from '../services/Teams.service';

export default class TeamsControl {
  constructor(private service = new TeamsService()) {}

  public getAll = async (req: Request, res: Response) => {
    const result = await this.service.getAll();
    return res.status(200).json(result);
  };
}

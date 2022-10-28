import Teams from '../database/models/Teams';

export default class TeamsService {
  private model;
  constructor() {
    this.model = Teams;
  }

  public async getAll() {
    const teamsDB = await this.model.findAll();
    return teamsDB;
  }
}

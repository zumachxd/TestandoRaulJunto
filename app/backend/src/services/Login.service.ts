import * as cript from 'bcryptjs';
import loginType from '../interface/user.interface';
import Users from '../database/models/Users';
import tokenGenerator from '../Utils/JWT';
import Ires from '../interface/Ires.interface';

export default class LoginService {
  private model;

  constructor() {
    this.model = Users;
  }

  public async login(newLogin: loginType): Promise<Ires> {
    const { email, password } = newLogin;

    if (!email || !password) return { type: 'NOT_FOUND', message: 'All fields must be filled' };

    const dbUser = await this.model.findOne({ where: { email } });

    if (dbUser && cript.compareSync(password, dbUser.password)) {
      const token = tokenGenerator.tokenGenerator(email, dbUser.role);

      return { type: 'SUCCESS', message: token };
    }

    return { type: 'NOT_FOUND', message: 'Incorrect email or password' };
  }
}

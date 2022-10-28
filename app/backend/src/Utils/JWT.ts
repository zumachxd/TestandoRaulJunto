import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const secret: string = process.env.JWT_SECRET || 'jwt_secret';

const tokenGenerator = (email:string, role:string) => {
  const payload = { email, role };
  try {
    const token = jwt.sign(payload, secret);
    return token;
  } catch (err) {
    console.log(err);
  }
};

const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const decode = jwt.verify(req.headers.authorization as string, secret);
    req.body.decode = decode;
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

export default { tokenGenerator, tokenValidation };

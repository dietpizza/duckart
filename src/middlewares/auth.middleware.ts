import { Request, Response } from 'express';
import jwt from 'express-jwt';
import { env } from '../config/env';

export function authorize(roles: Array<String>) {
  return [
    jwt({ secret: env().JWT_SECRET, algorithms: ['HS256'] }),
    (req: Request, res: Response, next: Function) => {
      if (roles.length && roles.includes(req.user['role'])) {
        next();
      } else {
        next(new Error('Unauthorized!'));
      }
    },
  ];
}

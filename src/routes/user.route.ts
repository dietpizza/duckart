import { Router, Request, Response } from 'express';

import { getHash, getToken, getPlainObject } from '../utils';
import { createUser, findByEmail } from '../services/user.service';
import { Role } from '../config/roles';
import { User } from '../models/user.model';

export const userRouter = Router();

userRouter.post(
  '/login',
  async (req: Request, res: Response): Promise<void> => {
    if (req.body.email && req.body.password) {
      const customer = await findByEmail(req.body.email);

      if (customer) {
        const payload = getPlainObject(customer);
        const token =
          getHash(req.body.password) === customer.password
            ? getToken(payload)
            : null;
        res.json({
          ok: token !== null,
          token,
        });
      } else {
        res.json({
          ok: false,
          message: 'Invaild Credentials',
        });
      }
    } else {
      res.json({
        ok: false,
        message: 'No creds, no login',
      });
    }
  }
);

userRouter.post(
  '/create/:role',
  async (req: Request, res: Response): Promise<void> => {
    const { name, email, address, password } = req.body;
    let role: string;
    if (req.params.role === 'admin') {
      role = Role.Admin;
    } else if (req.params.role === 'customer') {
      role = Role.Customer;
    } else {
      res.json({
        ok: false,
        message: 'Invaild role.',
      });
      return;
    }
    if (name && email && password) {
      const doc = await createUser(name, email, role, password, address);
      res.json({
        ok: doc !== null,
        message: doc
          ? 'Successfully created user.'
          : 'Oops... Email is already taken.',
      });
    } else {
      res.json({
        ok: false,
        message: 'No details, No account.',
      });
    }
  }
);

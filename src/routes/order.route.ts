import { Router, Request, Response } from 'express';

import { Role } from '../config/roles';
import { authorize } from '../middlewares/auth.middleware';
import { createOrder, getOrders } from '../services/order.service';

export const orderRouter = Router();

orderRouter.get(
  '/',
  authorize([Role.Admin, Role.Customer]),
  async (req: Request, res: Response): Promise<void> => {
    const data = await getOrders(
      req.user['role'] === Role.Customer ? req.user['_id'] : undefined
    );
    res.json({
      ok: data.length > 0,
      data,
    });
  }
);

orderRouter.post(
  '/add',
  authorize([Role.Customer]),
  async (req: Request, res: Response): Promise<void> => {
    if (req.body.product_id) {
      const data = await createOrder(req.user['_id'], req.body.product_id);
      console.log(data);
      res.json({
        ok: data !== null,
      });
    } else {
      res.json({
        ok: false,
        message: 'No product, No order.',
      });
    }
  }
);

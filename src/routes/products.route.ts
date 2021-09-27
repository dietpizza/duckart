import { Router, Request, Response } from 'express';

import { Role } from '../config/roles';
import { authorize } from '../middlewares/auth.middleware';
import { addProduct, getAllProducts } from '../services/products.service';

export const productsRouter = Router();

productsRouter.get(
  '/',
  authorize([Role.Customer, Role.Admin]),
  async (req: Request, res: Response) => {
    const data = await getAllProducts();
    res.json({
      ok: data.length > 0,
      data,
    });
  }
);

productsRouter.post(
  '/add',
  authorize([Role.Admin]),
  async (req: Request, res: Response) => {
    const { name, description, price } = req.body;

    if (name && description && price) {
      const data = await addProduct({
        name,
        description,
        price,
      });
      if (data) {
        res.json({
          ok: true,
          data,
        });
      } else {
        res.json({
          ok: false,
        });
      }
    } else {
      res.json({
        ok: false,
        message: 'No details, No product',
      });
    }
  }
);

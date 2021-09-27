import express, { Application, json } from 'express';

import { errorHandler } from '../middlewares/error.middleware';
import { userRouter, productsRouter, orderRouter } from '../routes';

export const app: Application = express();

// Body-parser alternative?
app.use(json());

// Add routers here
app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use('/order', orderRouter);

// Global error handler middleware
app.use(errorHandler);

import { Request, Response } from 'express';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: Function
) {
  if (typeof err === 'string') {
    return res.status(400).json({ ok: false, message: err });
  }

  return res.status(500).json({ ok: false, message: err.message });
}

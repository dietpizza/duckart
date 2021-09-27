import { sign } from 'jsonwebtoken';
import { env } from '../config/env';

export function getToken(payload: any) {
  return sign(payload, env().JWT_SECRET);
}

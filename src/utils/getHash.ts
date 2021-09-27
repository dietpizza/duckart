import { createHash } from 'crypto';

export function getHash(str: string) {
  return createHash('md5').update(str).digest('hex');
}

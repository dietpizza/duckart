import { createHash } from 'crypto';
import { nanoid } from 'nanoid';

import { User, UserType } from '../models/user.model';

export async function findByEmail(email: string): Promise<UserType> {
  return User.findOne({ email });
}

export async function isEmailAvailable(email: string): Promise<boolean> {
  const doc = await User.findOne({ email });
  return doc === null;
}

export async function createUser(
  name: string,
  email: string,
  role: string,
  password: string,
  address?: string
): Promise<UserType> {
  if (await isEmailAvailable(email)) {
    const customer: UserType = {
      _id: nanoid(),
      role,
      name,
      email,
      address: address ? address : 'Empty',
      password: createHash('md5').update(password).digest('hex'),
    };
    return User.create(customer);
  } else {
    return null;
  }
}

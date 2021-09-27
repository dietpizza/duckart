import { Schema, model } from 'mongoose';

export type UserType = {
  _id: string;
  role: String;
  name: string;
  email: string;
  address?: String;
  password: string;
};

const UserSchema = new Schema({
  _id: { type: String, required: true },
  role: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: false },
  password: { type: String, required: true },
});

export const User = model<UserType>('user', UserSchema);

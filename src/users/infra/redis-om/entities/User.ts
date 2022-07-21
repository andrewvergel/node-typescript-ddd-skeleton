import { Entity, Schema } from 'redis-om';

export class User extends Entity {}

export const UserSchema: Schema<User> = new Schema(User, {
  id: { type: 'string' },
  username: { type: 'string' },
  password: { type: 'string' }
});

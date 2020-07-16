import {Role} from './role';
export class User {
  id: number;
  username = '';
  password = '';
  name = '';
  subscriptionStart: Date;
  subscriptionEnd: Date;
  role: Role;
  token = '';
}


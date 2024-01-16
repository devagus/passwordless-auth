import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'applaudo',
      email: 'applaudo@demo.com',
    },
    {
      id: 2,
      name: 'applaudito',
      email: 'applaudito@demo.com',
    },
  ];

  findOneByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}

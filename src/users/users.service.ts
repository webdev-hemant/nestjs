import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'chetan',
      username: 'chantan',
      password: 'sosecure',
    },
    {
      id: 2,
      name: 'pappu',
      username: 'hemant',
      password: 'pappu.hj',
    },
  ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

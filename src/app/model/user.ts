export class user
{
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    name: string,
    email: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

}

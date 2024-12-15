import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  mobileNumber!: string;

  @Column()
  password!: string;
}

//Property 'id' has no initializer and is not definitely assigned in the constructor.ts(2564)

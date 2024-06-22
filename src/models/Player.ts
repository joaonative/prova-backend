import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("players")
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  position: string;

  @Column({ type: "text" })
  imageUrl: string;

  @Column({ type: "int" })
  age: number;
}

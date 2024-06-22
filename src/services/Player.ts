import { DataSource, Repository } from "typeorm";
import { Player } from "../models/Player";

interface IPlayerService {
  all(): Promise<Player[]>;
  insertOne(p: Player): Promise<void>;
}

export class PlayerService implements IPlayerService {
  private repo: Repository<Player>;

  constructor(d: DataSource) {
    this.repo = d.getRepository(Player);
  }

  async all(): Promise<Player[]> {
    const pls = await this.repo.find();
    return pls;
  }

  async insertOne(p: Player): Promise<void> {
    const pl = this.repo.create(p);
    await this.repo.save(p);
  }
}

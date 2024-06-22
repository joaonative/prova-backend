import { Request, Response } from "express";
import { Player } from "../models/Player";
import { PlayerService } from "../services/Player";

export class PlayerController {
  private service: PlayerService;

  constructor(s: PlayerService) {
    this.service = s;
  }

  get = async (req: Request, res: Response) => {
    const p = await this.service.all();
    return res.status(200).json(p);
  };

  post = async (req: Request, res: Response) => {
    const { name, imageUrl, position, age } = req.body;
    const newP = new Player();
    newP.name = name;
    newP.age = age;
    newP.imageUrl = imageUrl;
    newP.position = position;
    await this.service.insertOne(newP);

    return res.status(201).send({ message: "created successfully" });
  };
}

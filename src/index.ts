import express, { json } from "express";
import { DataSource } from "typeorm";
import cors from "cors";
import { Player } from "./models/Player";
import { PlayerService } from "./services/Player";
import { PlayerController } from "./controllers/Player";

export const ds = new DataSource({
  username: "root",
  password: "1234",
  database: "pv",
  port: 3306,
  synchronize: true,
  host: "localhost",
  entities: [Player],
  type: "mysql",
});

ds.initialize()
  .then(() => {
    const s = express();
    s.use(json());
    s.use(cors());

    const service = new PlayerService(ds);
    const controller = new PlayerController(service);

    s.get("/players", controller.get.bind(controller));
    s.post("/players", controller.post.bind(controller));

    s.listen(38000, () => {
      console.log("server running on 8000");
    });
  })
  .catch((e: any) => {
    console.error("mysql/typeorm error", e);
  });

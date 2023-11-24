import "reflect-metadata"
import { DataSource } from "typeorm"
import { League } from "./entity/League"
import { Login } from "./entity/Login"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "chunee.db.elephantsql.com",
    port: 5432,
    username: "zuyhoeio",
    password: "4j5zogsN6iWtmVpeqeU-4dwPVaZ46aXK",
    database: "zuyhoeio",
    synchronize: true,
    logging: false,
    entities: [League, Login],
    migrations: [],
    subscribers: [],
})

import { Router } from "express";
import { getUsers, addUser, deleteUser } from "./controls/controls.js";

const routes = Router();

routes.get("/users", getUsers);
routes.post("/users", addUser);
routes.delete("/users/:_id", deleteUser)

export default routes;
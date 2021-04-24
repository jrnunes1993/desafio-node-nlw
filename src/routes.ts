import { request, response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsControllers } from "./controllers/SettingsController";
import { UsersControllers } from "./controllers/UsersController";

const routes = Router();

const settingsControllers = new SettingsControllers();
const usersControllers = new UsersControllers();
const messagesControllers = new MessagesController();

routes.post('/settings', settingsControllers.create);
routes.post('/users', usersControllers.create);
routes.post('/messages', messagesControllers.create);
routes.get("/messages/:id", messagesControllers.showByUser);
routes.get("/settings/:username", settingsControllers.findByUserName);
routes.put("/settings/:username", settingsControllers.update);

export { routes };
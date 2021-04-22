import { request, response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsControllers } from "./controllers/SettingsController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

const settingsControllers = new SettingsControllers();

routes.post('/settings', settingsControllers.create)

export { routes };
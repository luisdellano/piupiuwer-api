import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";
import { CreatePiuController } from "./modules/pius/useCases/CreatePiu/CreatePiuController";
import { FindPiusController } from "./modules/pius/useCases/FindPius/FindPiusController";
import { CreateUserController } from "./modules/users/useCase/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createPiuController = new CreatePiuController();
const findPiusController = new FindPiusController();

routes.post("/users/register", createUserController.handle);
routes.post("/sessions/login", authenticateUserController.handle);
routes.post("/pius", ensureAuthenticateUser, createPiuController.handle);
routes.get("/pius", ensureAuthenticateUser, findPiusController.handle);

export { routes };

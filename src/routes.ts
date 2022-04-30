import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";
import { CreatePiuController } from "./modules/pius/useCases/CreatePiu/CreatePiuController";
import { FavoritePiuController } from "./modules/pius/useCases/FavoritePiu/FavoritePiuController";
import { FindPiusController } from "./modules/pius/useCases/FindPius/FindPiusController";
import { LikePiuController } from "./modules/pius/useCases/LikePiu/LikePiuController";
import { UnlikePiuController } from "./modules/pius/useCases/UnlikePiu/UnlikePiuController";
import { CreateUserController } from "./modules/users/useCase/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createPiuController = new CreatePiuController();
const findPiusController = new FindPiusController();
const likePiuController = new LikePiuController();
const favoritePiuController = new FavoritePiuController();
const unlikePiuController = new UnlikePiuController();

routes.post("/users/register", createUserController.handle);
routes.post("/sessions/login", authenticateUserController.handle);

routes.post("/pius", ensureAuthenticateUser, createPiuController.handle);
routes.get("/pius", ensureAuthenticateUser, findPiusController.handle);
routes.post("/pius/like", ensureAuthenticateUser, likePiuController.handle);
routes.post(
    "/pius/favorite",
    ensureAuthenticateUser,
    favoritePiuController.handle
);
routes.post("/pius/unlike", ensureAuthenticateUser, unlikePiuController.handle);

export { routes };

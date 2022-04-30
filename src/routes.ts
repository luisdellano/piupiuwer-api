import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";
import { CreatePiuController } from "./modules/pius/useCases/CreatePiu/CreatePiuController";
import { DeletePiuController } from "./modules/pius/useCases/DeletePiu/DeletePiuController";
import { FavoritePiuController } from "./modules/pius/useCases/FavoritePiu/FavoritePiuController";
import { FindPiusController } from "./modules/pius/useCases/FindPius/FindPiusController";
import { LikePiuController } from "./modules/pius/useCases/LikePiu/LikePiuController";
import { UnfavoritePiuController } from "./modules/pius/useCases/UnfavoritePiu/UnfavoritePiuController";
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
const unfavoritePiuController = new UnfavoritePiuController();
const deletePiuController = new DeletePiuController();

routes.post("/users/register", createUserController.handle);
routes.post("/sessions/login", authenticateUserController.handle);

routes.get("/pius", findPiusController.handle);

routes.post("/pius", ensureAuthenticateUser, createPiuController.handle);
routes.post("/pius/like", ensureAuthenticateUser, likePiuController.handle);
routes.post(
    "/pius/favorite",
    ensureAuthenticateUser,
    favoritePiuController.handle
);
routes.post("/pius/unlike", ensureAuthenticateUser, unlikePiuController.handle);
routes.post(
    "/pius/unfavorite",
    ensureAuthenticateUser,
    unfavoritePiuController.handle
);

routes.delete("/pius", ensureAuthenticateUser, deletePiuController.handle);

export { routes };

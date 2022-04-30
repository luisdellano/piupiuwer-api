import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";
import { CreatePiuController } from "./modules/pius/useCases/CreatePiu/CreatePiuController";
import { DeletePiuController } from "./modules/pius/useCases/DeletePiu/DeletePiuController";
import { FavoritePiuController } from "./modules/pius/useCases/FavoritePiu/FavoritePiuController";
import { FindFavoritedPiusController } from "./modules/pius/useCases/FindFavoritedPius/FindFavoritedPiusController";
import { FindLikedPiusController } from "./modules/pius/useCases/FindLikedPius/FindLikedPiusController";
import { FindPiusController } from "./modules/pius/useCases/FindPius/FindPiusController";
import { LikePiuController } from "./modules/pius/useCases/LikePiu/LikePiuController";
import { UnfavoritePiuController } from "./modules/pius/useCases/UnfavoritePiu/UnfavoritePiuController";
import { UnlikePiuController } from "./modules/pius/useCases/UnlikePiu/UnlikePiuController";
import { CreateUserController } from "./modules/users/useCase/createUser/CreateUserController";
import { DeleteUserController } from "./modules/users/useCase/DeleteUser/DeleteUserController";
import { FindFollowersController } from "./modules/users/useCase/FindFollowers/FindFollowersController";
import { FindFollowingController } from "./modules/users/useCase/FindFollowing/FindFollowingController";
import { FindUsersController } from "./modules/users/useCase/FindUsers/FindUsersController";
import { FollowUserController } from "./modules/users/useCase/FollowUser/FollowUserController";
import { UnfollowUserController } from "./modules/users/useCase/UnfollowUser/UnfollowUserController";

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
const findLikedPiusController = new FindLikedPiusController();
const findFavoritedPiusController = new FindFavoritedPiusController();
const followUserController = new FollowUserController();
const findUsersController = new FindUsersController();
const unfollowUserController = new UnfollowUserController();
const deleteUserController = new DeleteUserController();
const findFollowingController = new FindFollowingController();
const findFollowersController = new FindFollowersController();

routes.post(
    "/users/follow",
    ensureAuthenticateUser,
    followUserController.handle
);
routes.post(
    "/users/unfollow",
    ensureAuthenticateUser,
    unfollowUserController.handle
);
routes.delete(
    "/users/delete",
    ensureAuthenticateUser,
    deleteUserController.handle
);

routes.get("/users/:userId/following", findFollowingController.handle);
routes.get("/users/:userId/followers", findFollowersController.handle);
routes.get("/users/:userInfo", findUsersController.handle);
routes.get("/users", findUsersController.handle);
routes.post("/users/register", createUserController.handle);
routes.post("/sessions/login", authenticateUserController.handle);

routes.get("/pius", findPiusController.handle);
routes.get("/pius/liked", findLikedPiusController.handle);
routes.get("/pius/favorited", findFavoritedPiusController.handle);

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

routes.delete(
    "/pius/delete",
    ensureAuthenticateUser,
    deletePiuController.handle
);

export { routes };

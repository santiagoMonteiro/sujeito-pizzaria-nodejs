import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";


export const router = Router();

// USER ROUTES =========================================
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/userinfo", isAuthenticated, new DetailUserController().handle);

// CATEGORY ROUTES =====================================
router.post("/category", isAuthenticated, new CreateCategoryController().handle);


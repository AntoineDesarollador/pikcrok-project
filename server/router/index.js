



import { Router } from "express";
import crok_routes from "./routes/crok.routes.js";
import drink_routes from "./routes/drink.routes.js";
import dessert_routes from "./routes/dessert.routes.js";

import admin_routes from "./routes/admin.routes.js";



const router = Router();


router.use("/", crok_routes);
router.use("/", drink_routes);
router.use("/", dessert_routes)


router.use("/admin", admin_routes)



export default router
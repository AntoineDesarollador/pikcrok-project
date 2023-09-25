

import { Router } from 'express';

import {all, one, update, removeCrok, createCrok} from '../../controller/Items/crok.js'
import {auth} from "../../middleware/auth.js";

 const router = Router();

// set auth middleware here if needed
router.use((req, res, next) => {
 auth(req, res, next);
});

router.get("/", all);
router.get("/:id", one);

router.post("/upload", createCrok)

router.put("/:id", update);
router.delete("/:id", removeCrok);


export default router
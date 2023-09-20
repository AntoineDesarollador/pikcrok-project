

import { Router } from 'express';

import {all, one, update, removeCrok, createCrok} from '../../controller/Items/crok.js'

 const router = Router();



router.get("/", all);
router.get("/:id", one);

router.post("/add", createCrok)

router.put("/:id", update);
router.delete("/:id", removeCrok);


export default router
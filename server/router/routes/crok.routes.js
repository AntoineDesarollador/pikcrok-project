

import { Router } from 'express';

import {all, one, update, removeCrok, createCrok} from '../../controller/Items/crok.js'

 const router = Router();



router.get("/crok", all);
router.get("/crok/:id", one);

router.post("/crok/add", createCrok)

router.put("/crok/:id", update);
router.delete("/crok/:id", removeCrok);


export default router
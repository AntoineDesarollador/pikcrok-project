

import { Router } from 'express';

import {allDessert, one, update, removeDessert, createDessert} from '../../controller/Items/dessert.js'

 const router = Router();



router.get("/dessert", allDessert);
router.get("/dessert/:id", one);

router.post("/add", createDessert)

router.put("/dessert/:id", update);
router.delete("/dessert/:id", removeDessert);


export default router
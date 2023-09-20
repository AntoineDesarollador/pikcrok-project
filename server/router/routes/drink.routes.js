

import { Router } from 'express';

import {allDrink, one, update, removeDrink, createDrink} from '../../controller/Items/boisson.js'

 const router = Router();



router.get("/drink", allDrink);
router.get("/drink/:id", one);

router.post("/drink/add", createDrink)

router.put("/drink/:id", update);
router.delete("/drink/:id", removeDrink);


export default router
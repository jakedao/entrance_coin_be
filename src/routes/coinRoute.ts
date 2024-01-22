import { Router } from 'express';

import { createCoin, deleteCoin, getCoinList } from '../controllers/coinController';

const router = Router();

router.route("/").get(getCoinList).post(createCoin);
router.route("/:id").delete(deleteCoin);

export default router;

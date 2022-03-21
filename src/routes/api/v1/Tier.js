/** @format */

import express from "express";
import { TierController } from "../../../controllers/api/v1";

const router = express.Router();

router.get("/", TierController.list);
router.get("/:id", TierController.info);



export default router;
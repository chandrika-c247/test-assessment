/** @format */

import express from "express";
import { ServiceController } from "../../../controllers/api/v1";

const router = express.Router();

router.get("/", ServiceController.list);
router.get("/:slug", ServiceController.info);



export default router;
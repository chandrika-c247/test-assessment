/** @format */

import express from "express";
import { CheckoutController } from "../../../controllers/api/v1";
import { validatePostBody } from '../../../util';
const { Checkout } = require('../../../validators');

const router = express.Router();

router.post("/", validatePostBody(Checkout.schema), CheckoutController.checkout);



export default router;
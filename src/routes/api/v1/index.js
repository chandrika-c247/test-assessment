/** @format */
import express from 'express';
import ServiceRouter from './Service';
import TierRouter from './Tier';
import CheckoutRouter from './Checkout';

const router = express.Router();

router.use('/service', ServiceRouter);
router.use('/tier', TierRouter);
router.use('/Checkout', CheckoutRouter);

export default router;

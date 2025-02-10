import { Router } from "express";
import authorize from "../middleware/auth.middleware";
import { createSubscription, getUserSubscription } from "../controllers/Subscription.controller.js";

const subscriptionRouter =  Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'Get all subscription'}));
subscriptionRouter.get('/:id', (req, res) => res.send({title: 'Get subscription details'}));
subscriptionRouter.post('/', authorize, createSubscription);
subscriptionRouter.put('/:id', (req, res) => res.send({title: 'Update subscription'}));
subscriptionRouter.delete('/:id', (req, res) => res.send({title: 'Delete subscription'}));
subscriptionRouter.get('/user/:id', authorize, getUserSubscription);
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'Cancel subscription'}));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'Get upcming renewals'}));

export default subscriptionRouter;

import { Router } from "express";

const subscriptionRouter =  Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'Get all subscription'}));
subscriptionRouter.get('/:id', (req, res) => res.send({title: 'Get subscription details'}));
subscriptionRouter.post('/', (req, res) => res.send({title: 'Create subscription'}));
subscriptionRouter.put('/:id', (req, res) => res.send({title: 'Update subscription'}));
subscriptionRouter.delete('/:id', (req, res) => res.send({title: 'Delete subscription'}));
subscriptionRouter.get('/user/:id', (req, res) => res.send({title: 'Get all user subscription'}));
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'Cancel subscription'}));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'Get upcming renewals'}));

export default subscriptionRouter;

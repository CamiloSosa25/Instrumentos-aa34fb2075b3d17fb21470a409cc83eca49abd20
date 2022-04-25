import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post(
    '/', isAuth, expressAsyncHandler(async (req, res) => {
        const newOrder = new Order({
            orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: 0,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
        });

        const order = await newOrder.save()
        res.status(201).send({ message: 'Se ha creado el pedido', order })
    })
)
orderRouter.get(
    '/mine',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const orders = await Order.find({ user: req.user._id });
        res.send(orders);
    })
);
orderRouter.get(
    '/:id', isAuth, expressAsyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id)
        if (order) {
            res.send(order)
        } else {
            res.status(404).send({ message: 'No se ha encontrado el pedido' })
        }
    })
)

orderRouter.put(
    '/:id/pay', isAuth, expressAsyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id)
        if (order) {
            order.isPaid = true
            order.paidAt = Date.now()

            const updateOrder = await order.save()
            res.send({ message: 'El pedido se ha pagado', order: updateOrder })
        } else {
            res.status(404).send({ message: 'No se ha encontrado el pedido' })
        }
    })
)



export default orderRouter;
const express = require('express')
const router = express.Router()

const order = require('../controller/ordersController') //appel controller
/*CRUD*****************************************/
router.post('/add',order.addOrder)   //user. nom fonction dan controller(getAll)
router.get('/get',order.getOrder)
router.delete('/:id/delete',order.deleteOrder)
router.put('/:id/update',order.updateOrder)
/*CRUD*****************************************/
module.exports = router
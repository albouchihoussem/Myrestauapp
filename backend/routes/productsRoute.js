const express = require('express')
const router = express.Router()

const product = require('../controller/productsController') //appel controller
/*CRUD*****************************************/
router.post('/add',product.addProduct)   //user. nom fonction dan controller(getAll)
router.get('/get',product.getProduct)
router.delete('/:id/delete',product.deleteProduct)
router.put('/:id/update',product.updateProduct)
/*CRUD*****************************************/

module.exports = router
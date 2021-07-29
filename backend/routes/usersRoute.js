const express = require('express')
const router = express.Router()

const user = require('../controller/usersController') //appel controller

/*CRUD*****************************************/
router.post('/add',user.addUser)   //user. nom fonction dan controller(getAll)
router.get('/get',user.getUser)
router.delete('/:id/delete',user.deleteUser)
router.put('/:id/update',user.updateUser)
/*CRUD*****************************************/

module.exports = router
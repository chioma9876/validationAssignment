const express = require('express')
const { userValidator } = require('../middleware/validation')
const { createUser, getOne, getAll, updateUser, deleteUser } = require('../controllers/userController')
const router = express.Router();

router.post('/users',userValidator, createUser)
router.get('/getUser/:id', getOne)
router.get('/getUsers', getAll)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

module.exports = router;
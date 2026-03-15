const express = require('express')
const { updateValidator } = require('../middleware/supermarketValidation')
const { createSupermarket, getOne, getAll, updateSupermarket, deleteSupermarket } = require('../controllers/supermarketController')
const router = express.Router();

router.post('/supermarkets', createSupermarket),
router.get('/getSupermarket/:id', getOne),
router.get('/allSupermarket', getAll),
router.put('/updateSupermarket/:id', updateSupermarket),
router.delete('/deleteSupermarket/:id', deleteSupermarket),
router.put('/supermarketValidation/:id', updateValidator);

module.exports = router;
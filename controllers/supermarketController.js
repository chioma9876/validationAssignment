// import models
const { log } = require('console');
const supermarketModel = require('../models/supermarket');

exports.createSupermarket = async(req, res) => {
    try {
        //Extract required fields from the request body
        const {userID, shopName, shopEmail, shopAddress, shopNumber} = req.body;
        //create the user data in the database
        console.log('created');
        
        const supermarket = await supermarketModel.
        create({
            userID,
            shopName,
           shopAddress,
            shopNumber,
            shopEmail: shopEmail.toLowerCase(),
        })
        //send a success response
        return res.status(201).json({
            message: 'supermarket created successfully',
            data: supermarket
    })
    
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getOne = async(req, res)=> {
    try {
         const { id } = req.params;
         console.log("searching for supermarket with id:" ,id);
         
    const supermarket = await supermarketModel.findByPk(id)
 console.log("result from database:", supermarket);
 
    if (!supermarket) {
        return res.status(400).json({
            message: 'supermarket not found'
        })
        
    }

    res.status(200).json({
        message: 'supermarket found',
        data: supermarket
    })

    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}

exports.getAll = async(req, res) =>{
    try {
        const supermarkets = await supermarketModel.findAll()

        if (!supermarkets) {
            res.status(400).json({
                message: 'supermarkets not found'
            })
        }
        res.status(200).json({
            message: 'supermarkets found', 
            data: supermarkets
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateSupermarket = async(req, res) => {
    try {
        const {id} = req.params
        
        const updateSupermarket = await supermarketModel.update({
            shopName: req.body.shopName,
            shopAddress: req.body.shopAddress,
            shopEmail: req.body.shopEmail,
            shopNumber: req.body.shopNumber
        }, {
            where: {id}
        })

        if (!updateSupermarket) {
            res.status(400).json({
                message: "supermarket with id not found"
            })
        }
        res.status(200).json({
            message: "supermarket with id successfully updated",
            data: updateSupermarket
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteSupermarket = async(req, res) => {
    try {
        const {id} = req.params

        const deleteSupermarket = await supermarketModel.destroy({where: {id}})

        if (!deleteSupermarket) {
            res.status(400).json({
                message: "supermarket not deleted"
            })
        }
        res.status(200).json({
            message: "supermarket deleted successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
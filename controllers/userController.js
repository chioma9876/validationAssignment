// import models
const userModel = require('../models/user')

exports.createUser = async(req, res) => {
    try {
        //Extract required fields from the request body
        const {lastName, email, password, firstName, phoneNumber} = req.body;
        //create the user data in the database
        const user = await userModel.
        create({
            firstName,
            password,
            phoneNumber,
            email: email.toLowerCase(),
            lastName
        })
        //send a success response
        res.status(201).json({
            message: 'user created successfully',
            data: user
    })
    
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

exports.getOne = async(req, res) => {
    const { id } = req.params;

    const user = await userModel.findByPk(id)

    if (!user) {
        return res.status(400).json({
            message: 'User not found'
        })
        
    }

    res.status(200).json({
        message: 'User found',
        data: user
    })
}

exports.getAll = async(req, res) => {
    const users = await userModel.findAll()

    if (!users) {
        return res.status(400).json({
            message: 'users not found'
        })
    }
    res.status(200).json({
        message: 'users found',
        data: users
    })
}

exports.updateUser = async(req, res) => {
    const {id} = req.params

    const updateUser = await userModel.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password
    }, {
        where: {id}
    })

    if (!updateUser) {
        return res.status(400).json({
            message: `user with id ${id} not found`
        })
    }
    res.status(200).json({
        message: `user with id ${id} successfully updated`
    })
}

exports.deleteUser = async(req,res) => {
    const {id} = req.params

    const deleteUser = await userModel.destroy({where: {id}})

    if (!deleteUser) {
        return res.status(400).json({
            message: `user with id ${id} not found and cannot be deleted`
        })
    }
    return res.status(200).json({
        message: `user with id ${id} deleted successfully`
    })
}


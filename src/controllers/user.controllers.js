const User = require("../models/User.models")
const { paginate } = require('../../helper/paginate')

exports.getUsers = async (req, res) => {
    try{
        // const users = await User.find()
        const data = await paginate(req,User)
        return res.status(200).json({data})
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
}


exports.createUser = async (req, res) => {
    try{
        const user = await User.create(req.body)
       return res.status(201).json({user})
    } catch (error) {
       return res.status(400).json({message: error.message})
    }
}


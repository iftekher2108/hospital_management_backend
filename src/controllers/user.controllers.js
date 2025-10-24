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
        userData = {...req.body};
        if(req.files['picture']) {
            userData.picture = req.files['picture'][0].filename;
        }
        const user = await User.create(userData)
       return res.status(201).json({user})
    } catch (error) {
       return res.status(400).json({message: error.message})
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if(!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ user })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ user })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const User = require("../../models/User.models");
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRE } = require('../../../config/app')

exports.register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        // Validation
        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already registered' });

        // Hash Password in Controller
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save user
        const user = await User.create({ name, email, password: hashedPassword });

        const token = jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        }, JWT_SECRET, { expiresIn: JWT_EXPIRE });

        res.status(200).json({
            message: 'Login successful',
            user: { id: user.id, name: user.name, email: user.email },
            token,
        });

    } catch (error) {
        console.error('Register Error:', error.message);
        res.status(500).json({ message: "Server error" + error.message })
    }
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) return res.status(400).json({ message: 'All fields are required' });

        // Find user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        // Compare password in controller
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

        //  Generate Token
        const token = jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        }, JWT_SECRET, { expiresIn: JWT_EXPIRE });

        res.status(200).json({
            message: 'Login successful',
            user: { id: user.id, username: username, name: user.name, email: user.email },
            token,
        });
    } catch (error) {
        console.error('Login Error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
}
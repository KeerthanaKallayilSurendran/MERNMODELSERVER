const users = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// user registration
exports.registerController = async (req, res) => {
    console.log('Inside register Controller');
    console.log(req.body);
    const { username, email, password } = req.body
    console.log(username, email, password);
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("You are already registered!!!")
        } else {
            const hashPassword = await bcrypt.hash(password, 10)
            // console.log(hashPassword);
            const newUser = new users({
                username, email, password: hashPassword
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        console.log(error);
    }
}

// user Login
exports.loginController = async (req, res) => {
    console.log("inside login Controller");
    const { email, password } = req.body
    // console.log(eMail, password);
    try {
        existingUser = await users.findOne({ email })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWTPASSWORD)
            console.log(token);
            // console.log(password);
            // console.log(existingUser.password);
            const isMatch = await bcrypt.compareSync(password, existingUser.password)
            // console.log(isMatch);
            if (isMatch) {
                res.status(200).json({
                    user: existingUser, token
                })
            } else {
                res.status(404).json("Incorrect Password")
            }
        } else {
            res.status(404).json("Incorrect Email/Password!!!")
        }
    } catch (error) {
        console.log(error);
    }
}

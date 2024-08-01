const User = require("../../models/user");

async function signinHandler(req, res){
    try{
        const {email, password} = req.body;
        const token = await User.matchPasswordAndGenerateToken(email, password);
        // console.log(token)
        return res.cookie("token", token).status(201).json({ success: true, message: 'User logged in successfully' });
    }
    catch (error){
        return res.status(500).json({ error });
    }
}

module.exports = { signinHandler };
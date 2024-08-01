const User = require("../../models/user");

async function signupHandler(req, res){
    try{
        const {fullName, email, password} = req.body;
        console.log(req.body);
        await User.create({
            fullName,
            email,
            password
        })
        return res.status(201).json({ success: true, message: 'User created successfully' });
    }
    catch (error){
        // res.json(error)
        return res.status(500).json({error});
    }
}

module.exports = { signupHandler };
const User = require("../../models/user");

async function signinHandler(req, res){
    // try{
    //     const {email, password} = req.body;
    //     const token = await User.matchPasswordAndGenerateToken(email, password);
    //     // console.log(token)
    //     return res.cookie("token", token).status(201).json({ success: true, message: 'User logged in successfully' });
    // }
    // catch (error){
    //     return res.status(500).json({ error });
    // }
    const { email, password } = req.body;

    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        const user = await User.findOne({ email });

        if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, token, fullName: user.fullName }); // Send fullName with the token
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { signinHandler };
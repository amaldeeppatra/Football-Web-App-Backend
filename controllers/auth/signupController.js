const User = require("../../models/user");

async function signupHandler(req, res){
    // try{
    //     const {fullName, email, password} = req.body;
    //     console.log(req.body);
    //     await User.create({
    //         fullName,
    //         email,
    //         password
    //     })
    //     return res.status(201).json({ success: true, message: 'User created successfully' });
    // }
    // catch (error){
    //     // res.json(error)
    //     return res.status(500).json({error});
    // }
    const { fullName, email, password } = req.body;

    try {
        // Create a new user instance
        const newUser = new User({ fullName, email, password });
        await newUser.save();

        // Send back the user's full name to the client
        res.status(201).json({ success: true, fullName: newUser.fullName });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { signupHandler };
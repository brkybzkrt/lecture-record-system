const { cryptedPassword, createAccessToken, createRefleshToken } = require('../helpers');
const {register,login, getMe} =require('../services/Admin')


module.exports.addAdmin = async(req,res) => {

    
    await register(req.body).then((result) => {

        res.status(201).send(result);

    }).catch((err) => {
        res.status(500).send(err.message);
    })
}

module.exports.logoutAdmin = async(req, res) => {

    try {
        const { refresh_token } = req.body;
		if (!refresh_token) {
			res.status(400).send("There is not token");
		}

        res.status(200).send("success");
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports.loginAdmin= async(req,res) => {

    req.body.password=cryptedPassword(req.body.password);
    
    const input =req.body;
    

    try {
        const user= await login({email:input.email});

        if(!user){return res.status(404).send("The email address was not found.")}

        const isMatched= await user.password===input.password;

        if(!isMatched){return res.status(401).send('Email or password not correct')}

        const currentUser =user.toObject()
        delete currentUser.password;
        admin={...currentUser,token:{access_token:createAccessToken(user),reflesh_token:createRefleshToken(user)}}

        res.status(200).send(admin)

    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports.me = async (req, res, next) => {
	const { _doc} = req.user;

	try {
		const user = await getMe(_doc._id);

		res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};
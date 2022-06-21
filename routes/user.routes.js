const router = require('express').Router();
const User = require('../models/User');

router.get('/users', async (req, res)=>{
    
try{

    const users = await User.find();

    return res.status(200).json({

        success: true,
        message: 'todos los Usuarios',
        data: users 
    });
}catch(error){
    return res.status(500).json(

        { 
        success: false,
        message: 'error al mostrar Usuarios',
        error: error.message

    })
}
});


module.exports = router;
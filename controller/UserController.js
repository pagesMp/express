const userController = {};
const User = require('../models/User');

userController.getAll = async (req, res)=>{
    try{
    
        const user = await User.find();
    
        return res.status(200).json({    
            success: true,
            message: 'todos los Usuarios',
            data: user 
        });
    }catch(error){
        return res.status(500).json(
           { 
            success: false,
            message: 'error al mostrar Usuarios',
            error: error.message    
        })
    }
};

userController.getCreate= async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        // if(password > 6 ){
    
        //     return ('error ')
        // } 
            // const name = req.body.name;
            // const email = req.body.email;
            // const password = req.body.password;
    
            const newUser ={
                name,
                email,
                password
            } 
           await User.create(newUser);
    
        return res.status(200).json({
            success: true,
            message: 'todos los Usuarios'
        });
    
    }catch(error){
        return res.status(500).json(
            { 
            success: false,
            message: 'error al mostrar Usuarios',
            error: error?.message|| error
        })
    }    
    
};

userController.getById = async(req,res)=>{
    try{
        
        const {id} = req.params;
        const user = await User.findById(id);
    
        return res.status(200).json({    
            success: true,
            message: 'Id de los usuarios ',
            data : user
           
        });
    }catch(error){
        return res.status(500).json(
           { 
            success: false,
            message: 'error al mostrar la ID de los usuarios ',
        })
    }

}

userController.delete = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.deleteOne({_id:id});

        return res.status(200).json({    
            success: true,
            message: 'eliminsate el usuario ',
            data : user
        });

    }catch(error){
        return res.status(500).json(
           { 
            success: false,
            message: `no se puede eliminar usuario ${error}`,
        })
    }
};



module.exports = userController;
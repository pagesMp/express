const express = require('express');
require('dotenv').config();
const db = require('./config/database');
const User = require('./models/User');


const app =express();
const port = process.env.PORT || 4000

    //devolver usuarios 

app.get('/users', async (req, res)=>{
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
})


app.get('/', (req, res)=>{

return res.send('Bienvenidos a mi aplicación de tareas');

});

app.get('*', (req,res)=>{

    return res.status(404).send('404 route not found');
});

db().then(()=>{
    app.listen(port, ()=>{

        console.log('El server esta corriendo '+ port);
    });

})
.catch((error)=>{

    console.log('no puedes entrar al servidor '+ error);
    
});


const express = require('express');
require('dotenv').config();
const db = require('./config/database');


const app =express();
const port = process.env.PORT || 4000

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


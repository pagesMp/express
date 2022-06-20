const express = require('express');
const mongoose = require('mongoose');


const app =express();

app.get('/', (req, res)=>{

return res.send('Bienvenidos a mi aplicación de tareas');

});

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>{
    console.log('coneccion establecida');
})
.catch((error)=>{
    console.log('conection filled',error);
});

app.listen(5000, ()=>{

    console.log('El server esta corriendo');
});
const express = require('express');

const app =express();

app.get('/', (req, res)=>{

return res.send('Bienvenidos a mi aplicación de tareas');

});

app.listen(3000, ()=>{

    console.log('El server esta corriendo');
});
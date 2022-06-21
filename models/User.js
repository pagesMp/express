const mongooose = require ('mongoose');

const UserSchema = new mongooose.Schema({

        //creamos el usurario con sus campos requeridos

    name: {
        type: String,
        required: true,             
    },
    email: {
        type: String,
        required: true,             
        unique: true
    },
    password: {
        type: String,
        required: true,
        // minLength: 6,
        // maxLength: 10      
    },
  
    role: {
        type: String,
        enum:['user', 'admin','super_admin'],
        default: 'user'  
    }

});

const User = mongooose.model('User', UserSchema)

model.exports = User;


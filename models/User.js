import {Schema, model} from 'mongoose'

const UserSchema = new Schema({
    cuit:{
        type: String,
        require: true,
        
    },
})

var mongoose = require('../configs/mongo')
let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/img

let useSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 50,
        require: true,
        default: ''
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: (value)=>{
                return emailRegex.test(value)
            },
            message: 'Dinh dang phai la email va phai la duy nhat'
        }
    },
    password: {
        type: String,
        require: true
    }
})

let UserModel = mongoose.model('User', useSchema)

module.exports = UserModel
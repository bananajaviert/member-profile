import mongoose from 'mongoose'

const Schema = mongoose.Schema

const members_schema = new Schema({
    
    full_name: {
        type: String,
        required: true,
        trim: true,
    },
    stage_name: {
        type: String,
        required: true,
        trim: true
    },
    group_name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    }

}, {

    timestamps: true

})

const Members = mongoose.model('members', members_schema)

export default Members
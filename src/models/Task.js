import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const taskModel = model('Task', taskSchema)

export { taskModel  }


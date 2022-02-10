import mongoose from 'mongoose';

const { Schema, Model } = mongoose;

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

const taskModel = Model('Task', taskSchema)

export { taskModel  }

